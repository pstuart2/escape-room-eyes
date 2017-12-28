import { Color4, Engine, SceneLoader } from 'babylonjs';
import {
    lookDown, lookLeft, lookRight, lookUp, returnFromDown, returnFromLeft, returnFromRight, returnFromUp, rollEyes,
    setUpAnimations
} from './animations';


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
                            state++;
                            lookRight( newScene );
                            break;
                        case 1:
                            state++;
                            returnFromRight( newScene );
                            break;
                        case 2:
                            state++;
                            lookLeft( newScene );
                            break;
                        case 3:
                            state++;
                            returnFromLeft( newScene );
                            break;
                        case 4:
                            state++;
                            lookUp( newScene );
                            break;
                        case 5:
                            state++;
                            returnFromUp( newScene );
                            break;
                        case 6:
                            state++;
                            lookDown( newScene );
                            break;
                        case 7:
                            state++;
                            returnFromDown( newScene );
                            break;
                        default:
                            state = 0;
                            rollEyes( newScene );
                            break;
                    }
                },
                2000
            );

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