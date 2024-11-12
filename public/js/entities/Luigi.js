import { Entity } from "../Entity.js";
import { Go } from "../traits/Go.js";
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
const FAST_DRAG = 1/5000;

export async function loadLuigi(audioContext) {
    /* 
    loadAudioBoard('luigi', audioContext)
    .then(audioBoard => {
        console.log(audioBoard);
    });
    const sprite = await loadSpriteSheet('luigi');
    return createLuigiFactory(sprite);
    */

    return Promise.all([
        loadSpriteSheet('luigi'),
        loadAudioBoard('luigi', audioContext),
    ])
    .then(([sprite, audio]) => {
        return createLuigiFactory(sprite, audio);
    })
}
//createAnim(['run-1', 'run-2', 'run-3'], 8);

function createLuigiFactory(sprite, audio) {
    //console.log('AudioBoard in factory', audio);
    //console.log("Luigi {JS/JSON}:", sprite);

    const runAnim = sprite.animation.get('run');

    function routeFrame(luigi_1) {
        if (luigi_1.traits.get(Jump).falling) {
            return 'jump';
        }

        if (luigi_1.traits.get(Go).distance > 0) {
            if ((luigi_1.vel.x > 0 && luigi_1.traits.get(Go).dir < 0) || (luigi_1.vel.x < 0 && luigi_1.traits.get(Go).dir > 0)) {
                return 'break';
            }

            return runAnim(luigi_1.traits.get(Go).distance);
        }

        return 'idle';
    }

    function setTurboState(turboOn) {
        this.traits.get(Go).dragFactor = turboOn ? FAST_DRAG : SLOW_DRAG;
    };

    function drawLuigi(context) {
        sprite.draw(routeFrame(this), context, 0, 0, this.traits.get(Go).heading < 0);
    };

    return function createLuigi() {
        const luigi = new Entity();
        luigi.name = "JONES";
        luigi.anim = "";
        luigi.audio = audio;
        luigi.size.set(14, 16);
        luigi.offset.set(0, 2);
        luigi.addTrait(new Physics());
        luigi.addTrait(new Solid());
        luigi.addTrait(new Go());
        luigi.addTrait(new Jump());
        luigi.addTrait(new Stomper());
        luigi.addTrait(new Killable());
        luigi.addTrait(new Animation());
        //luigi.addTrait(new Clone());
        //mario.addTrait(new Velocity());
        luigi.traits.get(Killable).removeAfter = 0;
        luigi.traits.get(Go).dir = 0;
        
        luigi.turbo = setTurboState;
        luigi.draw = drawLuigi;
        //luigi.bounds = new BoundingBox(luigi.pos, luigi.size, luigi.offset);

        luigi.turbo(false);
        
        return luigi;
    };
}