import { Color4, Engine, SceneLoader } from 'babylonjs';
import { lookDown, lookUp, returnFromDown, returnFromUp, setUpAnimations } from './animations';


document.addEventListener( 'DOMContentLoaded', function() {
    const canvas = document.getElementById( 'renderCanvas' ); // Get the canvas element

    const engine = new Engine( canvas, true ); // Generate the BABYLON 3D engine

    SceneLoader.Load( '/assets/', 'EyeBall.babylon', engine, function( newScene ) {

        // Wait for textures and shaders to be ready
        newScene.executeWhenReady( function() {
            setUpAnimations( newScene );

            // Attach camera to canvas inputs
            newScene.activeCamera.attachControl( canvas );

            newScene.autoClear = true;
            newScene.clearColor = hexToColor4( '#252524' );

            let state = 0;

            setInterval( () => {
                switch ( state ) {
                    case 0:
                        state = 1;
                        lookDown( newScene );
                        break;
                    case 1:
                        state = 2;
                        returnFromDown( newScene );
                        break;
                    case 2:
                        state = 3;
                        lookUp( newScene );
                        break;
                    case 3:
                        state = 0;
                        returnFromUp( newScene );
                        break;
                }
            }, 2000 );

            // Once the scene is loaded, just register a render loop to render it
            engine.runRenderLoop( function() {
                newScene.render();
            } );
        } );
    } );

    window.addEventListener( 'resize', function() { // Watch for browser/canvas resize events
        engine.resize();
    } );
} );

const hexToColor4 = ( hex ) => Color4.FromHexString( `${hex}ff` );