import { Animation, EasingFunction, Engine, QuarticEase, SceneLoader } from 'babylonjs';

document.addEventListener( 'DOMContentLoaded', function() {
    const canvas = document.getElementById( 'renderCanvas' ); // Get the canvas element

    const engine = new Engine( canvas, true ); // Generate the BABYLON 3D engine

    SceneLoader.Load( '/assets/', 'EyeBall.babylon', engine, function( newScene ) {

        // Wait for textures and shaders to be ready
        newScene.executeWhenReady( function() {
            const rightEye = newScene.getMeshByName( 'Eye.R' );
            const leftEye = newScene.getMeshByName( 'Eye.L' );

            console.log( rightEye.rotation );

            const startX = 0;

            const lookDownAnimation = new Animation( 'lookDown', 'rotation.x', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
            const keys = [];
            keys.push( { frame: 0, value: startX } );
            keys.push( { frame: 25, value: startX + -1 } );
            keys.push( { frame: 50, value: startX } );
            lookDownAnimation.setKeys( keys );

            const easingFunction = new QuarticEase();
            easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
            lookDownAnimation.setEasingFunction( easingFunction );

            rightEye.animations = [];
            rightEye.animations.push( lookDownAnimation );

            leftEye.animations = [];
            leftEye.animations.push( lookDownAnimation );

            newScene.beginAnimation( rightEye, 0, 50, true );
            newScene.beginAnimation( leftEye, 0, 50, true );

            // Attach camera to canvas inputs
            newScene.activeCamera.attachControl( canvas );

            newScene.autoClear = true;
            newScene.clearColor = hexToColor4( '#252524' );

            // Once the scene is loaded, just register a render loop to render it
            engine.runRenderLoop( function() {
                //console.log(rightEye.rotation);

                newScene.render();
            } );
        } );
    } );

    window.addEventListener( 'resize', function() { // Watch for browser/canvas resize events
        engine.resize();
    } );
} );

const hexToColor4 = ( hex ) => BABYLON.Color4.FromHexString( `${hex}ff` );