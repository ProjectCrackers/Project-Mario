import { Sides } from "../Entity.js";
import { Trait } from "../Trait.js";

export class PendulumMove extends Trait{
    constructor() {
        super();
        this.enabled = true;
        this.speed = -30;
        this.dir = -1;
    }

    obstruct(_entity, side) {
        if (side === Sides.LEFT || side === Sides.RIGHT)  {
            this.speed = -this.speed;
            this.dir = -this.dir;
        }
    }

    update(entity){
        if (this.enabled) {
            entity.vel.x = this.speed; 
        }
    }
}

export default {PendulumMove}