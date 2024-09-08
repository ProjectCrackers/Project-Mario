import { Compositor } from "./Compositor.js";
import { EventEmitter } from "./EventEmitter.js";

export class Scene {
    static EVENT_COMPLETE = Symbol('scene complete')

    constructor() {
        this.events = new EventEmitter();
        this.comp = new Compositor();
    }

    draw(gameContext) {
        this.comp.draw(gameContext.videoContext);
    }

    update(_gameContext) {
        //empty
    }

    pause() {
        //console.log("Pause", this);
    }
}

//---- as default
export default {Scene}