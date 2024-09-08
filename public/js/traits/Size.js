import { Trait } from "../Trait.js";

export class Size extends Trait{
    constructor() {
        super();

        this.state = 1;
        this.maxstates = 3;
        this.cooldown = 0
    }

    grow() {
        this.state += 1;
        if (this.state > this.maxstates) {
            this.state = this.maxstates;
        }
    }

    shrink() {
        if (this.cooldown > 1) {
            return;
        }
        if (this.state < 1) {
            this.state = 0;
        }
        this.state -= 1;
    }

    setState(state) {
        this.state = state;
    }

    update() {
        this.cooldown -= 1;
        if (this.cooldown < 1) {
            this.cooldown = 0;
        }
        if (this.state < 1) {
            this.state = 0;
        }
    }
}

export default {Size}