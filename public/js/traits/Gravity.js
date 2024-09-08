import { Trait } from "../Trait.js";

export class Gravity extends Trait{
    update(entity, {deltaTime}, level) {
        entity.vel.y += level.gravity * deltaTime;
    }
}

export default {Gravity}