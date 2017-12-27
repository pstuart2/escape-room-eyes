import { Animation, EasingFunction, QuarticEase } from 'babylonjs';

export function createLookDown() {
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

    return { animation, start, end };
}

export function createReturnFromDown() {
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

    return { animation, start, end };
}

export function createLookUp() {
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

    return { animation, start, end };
}

export function createReturnFromUp() {
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

    return { animation, start, end };
}

export function createLookRight() {
    const animation = new Animation( 'lookRight', 'rotation.y', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: 0 } );
    keys.push( { frame: end, value: 0.75 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}

export function createReturnFromRight() {
    const animation = new Animation( 'returnFromRight', 'rotation.y', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: 0.75 } );
    keys.push( { frame: end, value: 0 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}

export function createLookLeft() {
    const animation = new Animation( 'lookLeft', 'rotation.y', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: 0 } );
    keys.push( { frame: end, value: -0.75 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}

export function createReturnFromLeft() {
    const animation = new Animation( 'returnFromLeft', 'rotation.y', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 25;

    const keys = [];
    keys.push( { frame: start, value: -0.75 } );
    keys.push( { frame: end, value: 0 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}
