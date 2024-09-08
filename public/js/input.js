import { Keyboard } from './KeyboardState.js';
import { InputRouter } from './inputRouter.js';
import { Go } from './traits/Go.js';
import { Jump } from './traits/Jump.js';

export var KeyInput = ['Space', 'KeyZ', 'ArrowRight', 'ArrowLeft', 'KeyI', 'KeyD', 'KeyA', 'KeyP', 'KeyM', 'KeyC'];
export var SpawnAI = 0;
export function setupKeyboard(window){
    const input = new Keyboard();
    const router = new InputRouter();

    input.listenTo(window);

    // Space bar
    input.addMapping(KeyInput[0], keyState => {
        if (!levelLoaded) {return;}
        if (keyState) {
            router.route(entity => entity.traits.get(Jump).start());
        } else {
            router.route(entity => entity.traits.get(Jump).cancel());
        }
    });

    // Z key
    input.addMapping(KeyInput[1], keyState => {
        if (!levelLoaded) {return;}
        router.route(entity => entity.turbo(keyState));
    });

    // Right Arrow
    input.addMapping(KeyInput[2], keyState => {
        if (!levelLoaded) {return;}
        if (rightLock) {return;}
        if (keyState) {
            router.route(entity => entity.traits.get(Go).dir += 1);
        } else {
            router.route(entity => entity.traits.get(Go).dir += -1);
        }
        //router.route(entity => entity.traits.get(Go).dir += keyState ? 1 : -1);
    });

    // Left Arrow
    input.addMapping(KeyInput[3], keyState => {
        if (!levelLoaded) {return;}
        if (leftLock){return;}
        if (keyState) {
            router.route(entity => entity.traits.get(Go).dir += -1);
        } else {
            router.route(entity => entity.traits.get(Go).dir += 1);
        }
        //router.route(entity => entity.traits.get(Go).dir += keyState ? -1 : 1);
    });

    // I key
    input.addMapping(KeyInput[4], keyState => {
        if (!levelLoaded) {return;}
        SpawnAI = keyState;
    });

    // D key
    /*
    input.addMapping(KeyInput[5], keyState => {
        if (!levelLoaded) {return;}
        if (rightLock) {return;}
        if (keyState) {
            router.route(entity => entity.traits.get(Go).dir += 1);
        } else {
            router.route(entity => entity.traits.get(Go).dir += -1);
        }
        //router.route(entity => entity.traits.get(Go).dir += keyState ? 1 : -1);
    });

    // A key
    input.addMapping(KeyInput[6], keyState => {
        if (!levelLoaded) {return;}
        if (leftLock){return;}
        if (keyState) {
            router.route(entity => entity.traits.get(Go).dir += -1);
        } else {
            router.route(entity => entity.traits.get(Go).dir += 1);
        }
        //router.route(entity => entity.traits.get(Go).dir += keyState ? -1 : 1);
    });

    // P key
    input.addMapping(KeyInput[7], keyState => {
        if (!levelLoaded) {return;}
        try{
            if (keyState) {
                router.route(entity => entity.traits.get(Jump).start());
            } else {
                router.route(entity => entity.traits.get(Jump).cancel());
            }
        }catch{
            // ignore
        }
    });*/

    // M key
    /*
    input.addMapping(KeyInput[8], keyState => {
        if (!levelLoaded) {return;}
        router.route(entity => entity.turbo(keyState));
    });
    */

    // C key
    /*
    input.addMapping(KeyInput[9], keyState => {
        if (!levelLoaded) {return;}
        try {
            if (keyState === 0) {
                if (!allowCRTFilter) {
                    crtOn = false;
                }
                if (crtOn){
                    crtOn = false;
                }else{
                    crtOn = true;
                }
            }
        }catch (e){
            console.error(`
Error: Cannot change filter due to error in \"C\" button.
Message: ${e.message}
Go to https://breakout-x.github.io/SEB/ to learn more
            `);
        }  
    });*/

    return router;
}