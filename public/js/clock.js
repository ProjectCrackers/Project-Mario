const timeclock = {
    type: "Frame",
    clock: 0
}

if (!requestAnimationFrame) {
    timeclock.type = "Interval"
}

let reset; // This will hold our reset function

//---- Clock (not Timer Clock)
/**
 * Intended to start a global clock to help in coding 
 */
export function startClock(startT){
    let GlobalClock = startT;
    reset = () => { GlobalClock = 0; }; // Define the reset function

    if (timeclock.type == "Interval") {
        console.log(`⏱️Timer⏱️ started at: ${startT}`);

        setInterval(() => {
            if (timeclock.reset) {
                GlobalClock = 0;
                timeclock.reset = false;
            } else {
                GlobalClock += 0.01;
            }
            //console.log(`The time is currently ${GlobalClock}`);
        }, 10);

        return GlobalClock;
    } else if (timeclock.type == "Frame") {
        console.log(`⏱️Timer⏱️ started at: ${startT}`);

        let lastTimestamp;
        lastTimestamp = startT;

        function updateClock(timestamp) {
            if (lastTimestamp) {
                if (timeclock.reset) {
                    GlobalClock = 0;
                    timeclock.reset = false;
                } else {
                    GlobalClock += (timestamp - lastTimestamp) / 1000; // convert to seconds
                }
                //console.log(`The time is currently ${GlobalClock}`);
            }
            lastTimestamp = timestamp;
            requestAnimationFrame(updateClock);
        }
        
        updateClock();
        return GlobalClock;
    } else {
        return "failed";
    }
}

export function resetClock() {
    reset(); // Call the reset function
    console.log("⏱️Timer⏱️ reset");
    return timeclock.clock;
}

export { timeclock };
