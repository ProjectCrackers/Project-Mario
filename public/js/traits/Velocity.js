import { Trait } from "../Trait.js";

export class Velocity extends Trait{
    constructor() {
        super();
    }

    update(entity, {deltaTime}, _level) {
        entity.pos.x += entity.vel.x * deltaTime;
        entity.pos.y += entity.vel.y * deltaTime;
    }
}

export default {Velocity}