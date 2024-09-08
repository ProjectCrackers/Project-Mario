//---- Timer (not clock timer)
export class Timer {
    constructor(deltaTime = 1/60){
        let accumulatedTime = 0;
        let lastTime = null;

        if (accumulatedTime > 1){
            accumulatedTime = 1;
        }   

        // update
        this.updateProxy = (time) => {
            // time (in function)
            if (lastTime) {
                //console.log("time:",time,"last time:",lastTime);
                accumulatedTime += (time - lastTime) / 1000;

                if (accumulatedTime > 1) {
                    accumulatedTime = 1;
                }

                while (accumulatedTime > deltaTime) {
                    this.update(deltaTime);
                    accumulatedTime -= deltaTime;
                }
            }

            lastTime = time;

            // enqueue
            this.enqueue();
        }
    } 

    enqueue() {
        requestAnimationFrame(this.updateProxy);
    }

    start() {
        this.enqueue();
    }
}

//---- as default
export default {Timer}