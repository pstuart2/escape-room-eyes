import {
    createLookDown, createLookLeft, createLookRight, createLookUp, createReturnFromDown, createReturnFromLeft,
    createReturnFromRight, createReturnFromUp
} from './lookAnimations';

export let rightEye,
    leftEye,
    rightBrow,
    leftBrow;

const
    EYES_DOWN = 0,
    EYES_R_DOWN = 1,
    EYES_UP = 2,
    EYES_R_UP = 3,
    EYES_RIGHT = 4,
    EYES_R_RIGHT = 5,
    EYES_LEFT = 6,
    EYES_R_LEFT = 7;

const animations = [];

export function setUpAnimations( scene ) {
    rightEye = scene.getMeshByName( 'Eye.R' );
    leftEye = scene.getMeshByName( 'Eye.L' );
    rightBrow = scene.getMeshByName( 'Brow.R' );
    leftBrow = scene.getMeshByName( 'Brow.L' );

    animations[ EYES_DOWN ] = createLookDown();
    animations[ EYES_R_DOWN ] = createReturnFromDown();
    animations[ EYES_UP ] = createLookUp();
    animations[ EYES_R_UP ] = createReturnFromUp();
    animations[ EYES_RIGHT ] = createLookRight();
    animations[ EYES_R_RIGHT ] = createReturnFromRight();
    animations[ EYES_LEFT ] = createLookLeft();
    animations[ EYES_R_LEFT ] = createReturnFromLeft();
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

export function lookRight( scene ) {
    animate( scene, rightEye, animations[ EYES_RIGHT ] );
    animate( scene, leftEye, animations[ EYES_RIGHT ] );
}

export function returnFromRight( scene ) {
    animate( scene, rightEye, animations[ EYES_R_RIGHT ] );
    animate( scene, leftEye, animations[ EYES_R_RIGHT ] );
}

export function lookLeft( scene ) {
    animate( scene, rightEye, animations[ EYES_LEFT ] );
    animate( scene, leftEye, animations[ EYES_LEFT ] );
}

export function returnFromLeft( scene ) {
    animate( scene, rightEye, animations[ EYES_R_LEFT ] );
    animate( scene, leftEye, animations[ EYES_R_LEFT ] );
}

function animate( scene, target, animation ) {
    scene.beginDirectAnimation( target, [ animation.animation ], animation.start, animation.end, false );
}