package api

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/sirupsen/logrus"
	"time"
	"net/http"
	"strings"
	"github.com/pborman/uuid"
)

const (
	loggerKey = "app.logger"
)

type Server struct {
	Echo *echo.Echo
}

func Create() *Server {
	return &Server{
		Echo: echo.New(),
	}
}

func (s *Server) Start() error {
	return s.Echo.Start(":3030")
}

func (s *Server) SetUp() error {
	s.Echo.Use(getSetupRequestHandler(s))
	s.Echo.Use(middleware.Static("../client"))

	return nil
}

func isAssetRequest(r *http.Request) bool {
	return strings.Index(r.URL.Path, "/assets/") == 0
}

func getSetupRequestHandler(s *Server) func(f echo.HandlerFunc) echo.HandlerFunc {
	return func(f echo.HandlerFunc) echo.HandlerFunc {
		return func(ctx echo.Context) error {
			req := ctx.Request()

			if isAssetRequest(req) {
				return f(ctx)
			}
			requestID := uuid.NewRandom().String()

			logger := logrus.WithFields(logrus.Fields{
				"method":     req.Method,
				"path":       req.URL.Path,
				"request_id": requestID,
			})
			ctx.Set(loggerKey, logger)

			startTime := time.Now()
			defer func() {
				rsp := ctx.Response()
				logger.WithFields(logrus.Fields{
					"status_code":  rsp.Status,
					"runtime_nano": time.Since(startTime).Nanoseconds(),
				}).Info("Finished request")
			}()

			logger.WithFields(logrus.Fields{
				"user_agent":     req.UserAgent(),
				"content_length": req.ContentLength,
			}).Info("Starting request")

			// we have to do this b/c if not the final error handler will not
			// in the chain of middleware. It will be called after meaning that the
			// response won't be set properly.
			err := f(ctx)
			if err != nil {
				ctx.Error(err)
			}
			return err
		}
	}
}
