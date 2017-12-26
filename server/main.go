package main

import (
	"github.com/sirupsen/logrus"
	"escape-room-eyes/server/api"
)

func main() {
	log := logrus.WithField("component", "main")

	log.Info("Creating Server...")

	server := api.Create()

	if err := server.SetUp(); err != nil {
		log.Fatalf("Failed to setup server: %v", err)
	}

	if err := server.Start(); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
