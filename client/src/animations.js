import { Animation, EasingFunction, QuarticEase } from 'babylonjs';

let rightEye,
    leftEye,
    rightBrow,
    leftBrow;

const animationFrames = {
    lookDown: [0, 25],
    returnFromDown: [25, 50]
};

export function setUpAnimations(scene) {
    rightEye = scene.getMeshByName( 'Eye.R' );
    leftEye = scene.getMeshByName( 'Eye.L' );
    rightBrow = scene.getMeshByName( 'Brow.R' );
    leftBrow = scene.getMeshByName( 'Brow.L' );

    createLookDown();
}

function createLookDown() {
    const lookDownAnimation = new Animation( 'lookDown', 'rotation.x', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const keys = [];
    keys.push( { frame: animationFrames.lookDown[0], value: 0 } );
    keys.push( { frame: animationFrames.lookDown[1], value: -1 } );
    keys.push( { frame: animationFrames.returnFromDown[1], value: 0 } );
    lookDownAnimation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    lookDownAnimation.setEasingFunction( easingFunction );

    rightEye.animations = [];
    rightEye.animations.push( lookDownAnimation );

    leftEye.animations = [];
    leftEye.animations.push( lookDownAnimation );
}

export function lookDown(scene, onEnd) {
    scene.beginAnimation( rightEye, animationFrames.lookDown[0], animationFrames.lookDown[1], false, 1, onEnd );
    scene.beginAnimation( leftEye, animationFrames.lookDown[0], animationFrames.lookDown[1], false, 1, onEnd );
}

export function returnFromDown(scene, onEnd) {
    scene.beginAnimation( rightEye, animationFrames.returnFromDown[0], animationFrames.returnFromDown[1], false, 1, onEnd );
    scene.beginAnimation( leftEye, animationFrames.returnFromDown[0], animationFrames.returnFromDown[1], false, 1, onEnd );
}