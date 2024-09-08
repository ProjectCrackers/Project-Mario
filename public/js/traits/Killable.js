import { Trait } from "../Trait.js";

export class Killable extends Trait{
    constructor() {
        super();
        this.dead = false;
        this.deadTime = 0;
        this.removeAfter = 2;
    }

    kill() {
        this.queue(() => this.dead = true);
        //this.dead = true
    }

    revive() {
        this.dead = false;
        this.deadTime = 0;
    }

    update(entity, {deltaTime}, level) {
        if (this.dead) {
            this.deadTime += deltaTime;
            if (this.deadTime > this.removeAfter) {
                this.queue(()=> {
                    level.entities.delete(entity);
                });
                //level.entities.delete(entity);
            }
        }
    }
}

export default { Killable }