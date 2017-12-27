import {
    createLookDown, createLookLeft, createLookRight, createLookUp, createRaiseLowerBrows, createReturnFromDown,
    createReturnFromLeft, createReturnFromRight, createReturnFromUp, createRollEyes, createRotateZLeft,
    createRotateZRight
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
    EYES_R_LEFT = 7,
    EYES_ROLL = 8,
    BROWS_RAISE_LOWER = 9,
    ROTATE_Z_RIGHT = 10,
    ROTATE_Z_LEFT = 11;

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
    animations[ EYES_ROLL ] = createRollEyes();
    animations[ BROWS_RAISE_LOWER ] = createRaiseLowerBrows( rightBrow.position );
    animations[ ROTATE_Z_RIGHT ] = createRotateZRight();
    animations[ ROTATE_Z_LEFT ] = createRotateZLeft();
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
    animate( scene, rightBrow, animations[ ROTATE_Z_RIGHT ] );
}

export function returnFromRight( scene ) {
    animate( scene, rightEye, animations[ EYES_R_RIGHT ] );
    animate( scene, leftEye, animations[ EYES_R_RIGHT ] );

}

export function lookLeft( scene ) {
    animate( scene, rightEye, animations[ EYES_LEFT ] );
    animate( scene, leftEye, animations[ EYES_LEFT ] );
    animate( scene, leftBrow, animations[ ROTATE_Z_LEFT ] );
}

export function returnFromLeft( scene ) {
    animate( scene, rightEye, animations[ EYES_R_LEFT ] );
    animate( scene, leftEye, animations[ EYES_R_LEFT ] );
}

export function rollEyes( scene ) {
    animate( scene, rightEye, animations[ EYES_ROLL ] );
    animate( scene, leftEye, animations[ EYES_ROLL ] );

    animate( scene, rightBrow, animations[ BROWS_RAISE_LOWER ] );
    animate( scene, leftBrow, animations[ BROWS_RAISE_LOWER ] );

    animate( scene, rightBrow, animations[ ROTATE_Z_RIGHT ] );
    animate( scene, leftBrow, animations[ ROTATE_Z_LEFT ] );
}

function animate( scene, target, animation ) {
    scene.beginDirectAnimation( target, [ animation.animation ], animation.start, animation.end, false );
}