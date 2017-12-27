import { Animation, QuarticEase, EasingFunction } from 'babylonjs';

export function createLookDown( rightEye, leftEye ) {
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

    return { animation, start, end };
}

export function createReturnFromDown( rightEye, leftEye ) {
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

    return { animation, start, end };
}

export function createLookUp( rightEye, leftEye ) {
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

    return { animation, start, end };
}

export function createReturnFromUp( rightEye, leftEye ) {
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

    return { animation, start, end };
}
