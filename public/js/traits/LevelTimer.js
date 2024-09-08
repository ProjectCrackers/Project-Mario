import { Trait } from "../Trait.js";

export class LevelTimer extends Trait{
    static EVENT_TIMER_HURRY = Symbol('timer hurry');
    static EVENT_TIMER_OK = Symbol('timer ok');
    static EVENT_TIMER_DEATH = Symbol('timer death');

    constructor(maxtime) {
        super();
        this.totalTime = maxtime;
        this.currentTime = this.totalTime;
        this.hurryTime = 100;
        this.hurryEmitted = null;
        this.deathTime = 0;
        this.timeDeathEmitted = null;
    }

    update(_entity, {deltaTime}, level) {
        this.currentTime -= deltaTime * 2;
        if (!this.hurryEmitted && this.currentTime < this.hurryTime) {
            //makes music fast
            level.events.emit(LevelTimer.EVENT_TIMER_HURRY);
            this.hurryEmitted = true;
        } if (this.hurryEmitted == null && this.currentTime > this.hurryTime) {
            //normal music
            level.events.emit(LevelTimer.EVENT_TIMER_OK);
            this.hurryEmitted = false;
        }if (this.timeDeathEmitted == false && this.currentTime < this.deathTime) {
            //kills mario
            level.events.emit(LevelTimer.EVENT_TIMER_DEATH);
            this.timeDeathEmitted = null;
            this.currentTime = this.totalTime;
            level.events.emit(LevelTimer.EVENT_TIMER_OK);
            this.hurryEmitted = false;
        }if (this.timeDeathEmitted == null && this.currentTime > this.deathTime) {
            //un does killing
            this.timeDeathEmitted = false;
        }
    }
}

export default {LevelTimer}