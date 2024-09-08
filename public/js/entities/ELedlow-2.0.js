import { Entity } from "../Entity.js";
import { Go } from "../traits/Go.js";
import { Size } from "../traits/Size.js";
import { Jump } from "../traits/Jump.js";
import { Killable } from "../traits/Killable.js";
import { Physics } from "../traits/Physics.js";
import { Solid } from "../traits/Solid.js";
import { Stomper } from "../traits/Stomper.js";
import { loadAudioBoard } from "../loaders/audio.js";
import { loadSpriteSheet } from "../loaders/sprite.js";
import { AudioBoard } from "../AudioBoard.js";
import { Animation } from "../traits/Animation.js";
//import { Clone } from "../traits/clone.js";
//import { createAnim } from "../anim.js";
//import { Velocity } from "../../private/Velocity.js";

const SLOW_DRAG = 1/1000;
const FAST_DRAG = 1/7500;

export async function loadELedlow(audioContext) {
    /* 
    loadAudioBoard('eledlow', audioContext)
    .then(audioBoard => {
        console.log(audioBoard);
    });
    const sprite = await loadSpriteSheet('eledlow');
    return createELedlowFactory(sprite);
    */

    return Promise.all([
        loadSpriteSheet('eledlow'),
        loadAudioBoard('eledlow', audioContext),
    ])
    .then(([sprite, audio]) => {
        return createELedlowFactory(sprite, audio);
    })
}
//createAnim(['run-1', 'run-2', 'run-3'], 8);

function createELedlowFactory(sprite, audio) {
    //console.log('AudioBoard in factory', audio);
    //console.log("ELedlow {JS/JSON}:", sprite);
    function routeFrame(eledlow_1) {
        //--- Update size if damage taken
        if (eledlow_1.traits.get(Size).state === 0) {
            eledlow_1.size.set(14, 16);
            eledlow_1.offset.set(0, 2);
        } else if (eledlow_1.traits.get(Size).state === 1) {
            eledlow_1.size.set(18, 32);
            eledlow_1.offset.set(0, 6);
        } else {
            eledlow_1.size.set(14, 16);
            eledlow_1.offset.set(0, 2);
        }


        let runAnim; 

        if (eledlow_1.traits.get(Size).state === 0) {
            runAnim = sprite.animation.get('run');
        } else if (eledlow_1.traits.get(Size).state === 1) {
            runAnim = sprite.animation.get('big-run'); 
        } else {
            runAnim = sprite.animation.get('run');
        }

        if (eledlow_1.traits.get(Jump).falling) {
            let val;

            if (eledlow_1.traits.get(Size).state === 0) {
                val = 'jump';
            } else if (eledlow_1.traits.get(Size).state === 1) {
                val = 'big-jump';
            } else {
                val = 'jump';
            }

            return val;
        }

        if (eledlow_1.traits.get(Go).distance > 0) {
            if ((eledlow_1.vel.x > 0 && eledlow_1.traits.get(Go).dir < 0) || (eledlow_1.vel.x < 0 && eledlow_1.traits.get(Go).dir > 0)) {
                let val;

                if (eledlow_1.traits.get(Size).state === 0) {
                    val = 'break';
                } else if (eledlow_1.traits.get(Size).state === 1) {
                    val = 'big-break';
                } else {
                    val = 'break';
                }

                return val;
            }

            return runAnim(eledlow_1.traits.get(Go).distance);
        }

        let val; 

        if (eledlow_1.traits.get(Size).state === 0) {
            val = 'idle';
        } else if (eledlow_1.traits.get(Size).state === 1) {
            val = 'big-idle';
        } else {
            val = 'idle';
        }

        return val;
    }

    function setTurboState(turboOn) {
        this.traits.get(Go).dragFactor = turboOn ? FAST_DRAG : SLOW_DRAG;
    };

    function drawELedlow(context) {
        sprite.draw(routeFrame(this), context, 0, 0, this.traits.get(Go).heading < 0);
    };

    return function createELedlow() {
        const eledlow = new Entity();
        eledlow.name = "ELedlow The Fox";
        eledlow.audio = audio;
        eledlow.addTrait(new Physics());
        eledlow.addTrait(new Size());
        eledlow.addTrait(new Solid());
        eledlow.addTrait(new Go());
        eledlow.addTrait(new Jump());
        eledlow.addTrait(new Stomper());
        eledlow.addTrait(new Killable());
        eledlow.addTrait(new Animation());
        //eledlow.addTrait(new Clone());
        //eledlow.addTrait(new Velocity());
        eledlow.traits.get(Killable).removeAfter = 0;
        eledlow.traits.get(Go).dir = 0;
        eledlow.traits.get(Size).state = 1;

        eledlow.turbo = setTurboState;
        eledlow.draw = drawELedlow;
        //eledlow.bounds = new BoundingBox(eledlow.pos, eledlow.size, eledlow.offset);

        eledlow.turbo(false);
        
        return eledlow;
    };
}