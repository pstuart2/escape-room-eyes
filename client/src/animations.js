import { createLookDown, createLookUp, createReturnFromDown, createReturnFromUp } from './lookAnimations';

export let rightEye,
    leftEye,
    rightBrow,
    leftBrow;

const
    EYES_DOWN = 0,
    EYES_R_DOWN = 1,
    EYES_UP = 2,
    EYES_R_UP = 3;

const animations = [];

export function setUpAnimations( scene ) {
    rightEye = scene.getMeshByName( 'Eye.R' );
    leftEye = scene.getMeshByName( 'Eye.L' );
    rightBrow = scene.getMeshByName( 'Brow.R' );
    leftBrow = scene.getMeshByName( 'Brow.L' );

    animations[ EYES_DOWN ] = createLookDown( rightEye, leftEye );
    animations[ EYES_R_DOWN ] = createReturnFromDown( rightEye, leftEye );
    animations[ EYES_UP ] = createLookUp( rightEye, leftEye );
    animations[ EYES_R_UP ] = createReturnFromUp( rightEye, leftEye );
}

export function lookDown( scene ) {
    animate( scene, rightEye, animations[ EYES_DOWN ] );
    animate( scene, leftEye, animations[ EYES_DOWN ] );
}

export function returnFromDown( scene ) {
    animate( scene, rightEye, animations[ EYES_R_DOWN ] );
    animate( scene, leftEye, animations[ EYES_R_DOWN ] );
}

export function lookUp( scene ) {
    animate( scene, rightEye, animations[ EYES_UP ] );
    animate( scene, leftEye, animations[ EYES_UP ] );
}

export function returnFromUp( scene ) {
    animate( scene, rightEye, animations[ EYES_R_UP ] );
    animate( scene, leftEye, animations[ EYES_R_UP ] );
}

function animate( scene, target, animation ) {
    scene.beginDirectAnimation( target, [ animation.animation ], animation.start, animation.end, false );
}