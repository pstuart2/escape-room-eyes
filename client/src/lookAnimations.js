import { Animation, EasingFunction, QuarticEase, ExponentialEase, Vector3 } from 'babylonjs';

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

export function createRollEyes() {
    const animation = new Animation( 'rollEyes', 'rotation', 70, Animation.ANIMATIONTYPE_VECTOR3, Animation.ANIMATIONLOOPMODE_RELATIVE );
    const start = 0;
    let end = start;

    const keys = [];
    keys.push( { frame: start, value: new Vector3( 0, 0, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( 0.25, 0.5, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( 1, 0.75, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( 1, 0, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( 1, -0.5, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( 0.25, -0.75, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( 0, -0.75, 0 ) } );
    keys.push( { frame: end += 5, value: new Vector3( -0.25, -0.75, 0 ) } );
    keys.push( { frame: end += 10, value: new Vector3( 0, 0, 0 ) } );
    animation.setKeys( keys );

    const easingFunction = new ExponentialEase(0.25);
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}

export function createRaiseLowerBrows(startPos) {
    const animation = new Animation( 'raiseLowerBrows', 'position.y', 60, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_RELATIVE );
    const start = 0;
    const end = 30;

    const keys = [];
    keys.push( { frame: start, value: startPos.y } );
    keys.push( { frame: end / 2, value: startPos.y + 0.25 } );
    keys.push( { frame: end, value: startPos.y } );
    animation.setKeys( keys );

    return { animation, start, end };
}

export function createRotateZRight() {
    const animation = new Animation( 'rotateZRight', 'rotation.z', 60, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 30;

    const keys = [];
    keys.push( { frame: start, value: 0 } );
    keys.push( { frame: end / 2, value: 0.1 } );
    keys.push( { frame: end, value: 0 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}

export function createRotateZLeft() {
    const animation = new Animation( 'rotateZLeft', 'rotation.z', 60, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE );
    const start = 0;
    const end = 30;

    const keys = [];
    keys.push( { frame: start, value: 0 } );
    keys.push( { frame: end / 2, value: -0.1 } );
    keys.push( { frame: end, value: 0 } );
    animation.setKeys( keys );

    const easingFunction = new QuarticEase();
    easingFunction.setEasingMode( EasingFunction.EASINGMODE_EASEINOUT );
    animation.setEasingFunction( easingFunction );

    return { animation, start, end };
}