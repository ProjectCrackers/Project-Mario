import { Trait } from "../Trait.js";
import { Killable } from "./Killable.js";

export class Stomper extends Trait{
    static EVENT_STOMP = Symbol('stomp');

    constructor() {
        super();
        this.bounceSpeed = 400;
    }

    bounce(us, them) {
        them.bounds.bottom = us.bounds.top;
        them.vel.y = -this.bounceSpeed;
    }

    collides(us, them) {
        if (!them.traits.has(Killable) || them.traits.get(Killable).dead) {
            return;
        }
            
        if (them.vel.y > us.vel.y){
            this.queue(() => this.bounce(us, them));
            them.sounds.add('stomp');
            them.events.emit(Stomper.EVENT_STOMP, us, them);
        }
    }
}

export default {Stomper}