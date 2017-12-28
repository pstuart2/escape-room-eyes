import {
    createLookDown, createLookLeft, createLookRight, createLookUp, createReturnFromDown, createReturnFromLeft,
    createReturnFromRight, createReturnFromUp, createRollEyes
} from './animationCreators';

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
    EYES_ROLL = 8;

const animations = [];

export function setUpAnimations( scene ) {
    rightEye = scene.getMeshByName( 'Eye.R' );
    leftEye = scene.getMeshByName( 'Eye.L' );
    rightBrow = scene.getMeshByName( 'Brow.R' );
    leftBrow = scene.getMeshByName( 'Brow.L' );

    animations[ EYES_DOWN ] = createLookDown(rightEye, leftEye, rightBrow, leftBrow);
    animations[ EYES_R_DOWN ] = createReturnFromDown(rightEye, leftEye, rightBrow, leftBrow);
    animations[ EYES_UP ] = createLookUp(rightEye, leftEye, rightBrow, leftBrow);
    animations[ EYES_R_UP ] = createReturnFromUp(rightEye, leftEye, rightBrow, leftBrow);
    animations[ EYES_RIGHT ] = createLookRight( rightEye, leftEye, rightBrow, leftBrow );
    animations[ EYES_R_RIGHT ] = createReturnFromRight( rightEye, leftEye, rightBrow, leftBrow );
    animations[ EYES_LEFT ] = createLookLeft(rightEye, leftEye, rightBrow, leftBrow);
    animations[ EYES_R_LEFT ] = createReturnFromLeft(rightEye, leftEye, rightBrow, leftBrow);
    animations[ EYES_ROLL ] = createRollEyes( rightEye, leftEye, rightBrow, leftBrow );
}

export function lookDown( scene ) {
    animate( scene, EYES_DOWN);
}

export function returnFromDown( scene ) {
    animate( scene, EYES_R_DOWN);
}

export function lookUp( scene ) {
    animate( scene, EYES_UP);
}

export function returnFromUp( scene ) {
    animate( scene, EYES_R_UP);
}

export function lookRight( scene ) {
    animate( scene, EYES_RIGHT);
}

export function returnFromRight( scene ) {
    animate( scene, EYES_R_RIGHT);
}

export function lookLeft( scene ) {
    animate( scene, EYES_LEFT);
}

export function returnFromLeft( scene ) {
    animate( scene, EYES_R_LEFT);
}

export function rollEyes( scene ) {
    animate( scene, EYES_ROLL);
}

function animate( scene, animation ) {
    for ( let i = 0; i < animations[ animation ].length; i++ ) {
        const a = animations[animation][i];
        scene.beginDirectAnimation( a.target, [ a.animation ], a.start, a.end, false );
    }
}