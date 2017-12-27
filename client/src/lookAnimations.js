import { Animation, EasingFunction, QuarticEase } from 'babylonjs';

let rightEye,
    leftEye,
    rightBrow,
    leftBrow;

const animations = [];

export function setUpAnimations( scene ) {
    rightEye = scene.getMeshByName( 'Eye.R' );
    leftEye = scene.getMeshByName( 'Eye.L' );
    rightBrow = scene.getMeshByName( 'Brow.R' );
    leftBrow = scene.getMeshByName( 'Brow.L' );

    createLookDown();
    createReturnFromDown();
    createLookUp();
    createReturnFromUp();
}

export function lookDown( scene ) {
    const animation = animations[ 0 ];

    animate( scene, rightEye, animation );
    animate( scene, leftEye, animation );
}

export function returnFromDown( scene ) {
    const animation = animations[ 1 ];

    animate( scene, rightEye, animation );
    animate( scene, leftEye, animation );
}

export function lookUp( scene ) {
    const animation = animations[ 2 ];

    animate( scene, rightEye, animation );
    animate( scene, leftEye, animation );
}

export function returnFromUp( scene ) {
    const animation = animations[ 3 ];

    animate( scene, rightEye, animation );
    animate( scene, leftEye, animation );
}

function createLookDown() {
    const animation = new Animation( 'lookDown', 'rotation.x', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: 0 } );
    keys.push( { frame: end, value: -1 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    rightEye.animations = [];
    rightEye.animations.push( animation );

    leftEye.animations = [];
    leftEye.animations.push( animation );

    animations.push( { animation, start, end } );
}

function createReturnFromDown() {
    const animation = new Animation( 'returnFromDown', 'rotation.x', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: -1 } );
    keys.push( { frame: end, value: 0 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    rightEye.animations = [];
    rightEye.animations.push( animation );

    leftEye.animations = [];
    leftEye.animations.push( animation );

    animations.push( { animation, start, end } );
}

function createLookUp() {
    const animation = new Animation( 'lookUp', 'rotation.x', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: 0 } );
    keys.push( { frame: end, value: 1 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    rightEye.animations = [];
    rightEye.animations.push( animation );

    leftEye.animations = [];
    leftEye.animations.push( animation );

    animations.push( { animation, start, end } );
}

function createReturnFromUp() {
    const animation = new Animation( 'returnFromUp', 'rotation.x', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: 1 } );
    keys.push( { frame: end, value: 0 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    rightEye.animations = [];
    rightEye.animations.push( animation );

    leftEye.animations = [];
    leftEye.animations.push( animation );

    animations.push( { animation, start, end } );
}

function animate( scene, target, animation ) {
    scene.beginDirectAnimation( target, [ animation.animation ], animation.start, animation.end, false );
}