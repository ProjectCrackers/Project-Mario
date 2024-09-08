import { Trait } from "../Trait.js";
import { Go } from "./Go.js";
import { disableLevelScroll } from "../loaders/level.js";

export class Animation extends Trait{
    constructor() {
        super();
    }

    play(entity, animation, level) {
        if (!animation) {
            return console.log('failed to play anim.');
        }
        if (animation === "Next") {
            setTimeout(() => {
                disableLevelScroll(level);    
            }, 1000);
            setInterval(() => {
                entity.traits.get(Go).dir = 1;
                //entity.anim = "Test";
            }, 0);
        }
    }
}

export default {Animation}