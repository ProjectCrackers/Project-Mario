import { Sides } from "../Entity.js";
import { Trait } from "../Trait.js";

export class Jump extends Trait{
    constructor() {
        super();

        this.ready = 0;
        this.duration = 0.3;
        this.engageTime = 0;
        this.requestTime = 0;
        this.gracePeriod = 0.1;
        this.speedBoost = 0.3;
        this.velocity = 200;
    }

    get falling() {
        return this.ready < 0;
    }

    start() {
        this.requestTime = this.gracePeriod;
    }

    cancel() {
        this.engageTime = 0;
        this.requestTime = 0;
    }

    obstruct(_entity, side) {
        if (side === Sides.BOTTOM){
            this.ready = 1;
        } else if (side === Sides.TOP) {
            this.cancel()
        }
    }

    update(entity, {deltaTime, audioContext}, _level) {
        if (this.requestTime > 0) {
            if (this.ready > 0) {
                entity.sounds.add('jump');
                entity.audio.playAudio('jump', audioContext);
                this.engageTime = this.duration;
                this.requestTime = 0;
            }

            this.requestTime -= deltaTime;
        }
        if (this.engageTime > 0) {
            entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
            this.engageTime -= deltaTime;
        }

        this.ready--;
    }
}

export default {Jump}