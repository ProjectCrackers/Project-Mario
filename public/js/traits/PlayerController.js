import { Trait } from "../Trait.js";
import { Vec2 } from "../math.js";
import { Killable } from "./Killable.js";

export class PlayerController extends Trait{
    constructor() {
        super(); 
        this.checkpoint = new Vec2(97, 273);//273 = ground top :)
        this.player = null;
    }

    setPlayer(entity) {
        this.player = entity;
    }

    update(_entity, {deltaTime}, level) {
        if (!level.entities.has(this.player)) {
            this.player.traits.get(Killable).revive();
            this.player.pos.set(this.checkpoint.x, this.checkpoint.y);
            level.entities.add(this.player);
        }
    }
}

export default { PlayerController }