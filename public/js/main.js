'use strict';
// video: 25/25 55:30/57:52
//---- Imports

//---- Game main:
import { Level } from './Level.js';
import { Timer } from './Timer.js';
import { createLevelLoader, disableLevelScroll, enableLevelScroll } from './loaders/level.js';
import { createInputLayer } from './layers/input-name.js';
import { loadFont } from './loaders/font.js';
import { loadEntities } from './entities.js';
import { makePlayer, createPlayerEnv, findPlayers } from './player.js';
import { setupKeyboard } from './input.js';
import { createDashboardLayer } from './layers/dashboard.js';
import { createColorLayer } from './layers/color.js';
import { createTextLayer } from './layers/text.js';
import { createMenuLayer } from './layers/menu.js';
import { EventEmitter } from './EventEmitter.js';
import { SceneRunner } from './SceneRunner.js';
import { createPlayerProgressLayer } from './layers/player-progress.js';
import { Scene } from './Scene.js';
import { TimedScene } from './TimedScene.js';
import { LevelTimer } from './traits/LevelTimer.js';
import { Killable } from './traits/Killable.js';
import { Go } from './traits/Go.js';
import { Animation } from './traits/Animation.js';

//---- Debug:
import { createCameraLayer } from "./layers/camera.js";
import { createCollisionLayer } from "./layers/collision.js";
import { setupMouseControl } from './debug.js';

//---- Main-only:
//import { marioAI } from './marioAI.js';
//import { elementFromHtml } from './element.js';
import { startClock, timeclock, resetClock } from  './clock.js';
import { buildrect } from './buildrect.js';


//---- Help me
window.EventEmitter = new EventEmitter();
window.levelLoaded = false;
window.allowCRTFilter = false;
window.leftLock = false;
window.rightLock = false;
window.debug = {
    active: true,
    delay: false,
    mouse: false,
    layers: false,
    hold: null,
    set: null,
    terminal: false,
    code: "",
    type: "",
}
window.selectedChar = "";
window.mobileOn = localStorage.getItem('mobileOn');
window.dimViolence = localStorage.getItem('dimViolence');
window.explicitMode = localStorage.getItem('explicitMode');

if (mobileOn === null) {
    window.mobileOn = false;
} else {
    let bool = mobileOn === "true";
    mobileOn = bool;
}
if (dimViolence === null) {
    window.dimViolence = false;
} else {
    let bool2 = dimViolence === "true";
    dimViolence = bool2;
}

//---- Global Keys
window.LAPressed = false;
window.RAPressed = false;
window.UAPressed = false;
window.DAPressed = false;
window.SEPressed = false;

//---- This is where you can put your mod
//import { changeYerFont } from './mods/fontmod.js';

//---- Main
startClock(0);

//--- Animation
function runAnim(anim, entity, level) {
    let animTrait = entity.traits.has(Animation);
    if (!animTrait) {
        return console.log('Entity does not have trait \"Animation\". Playing animations on this entity is unsupported.')
    }

    let playAnim = entity.traits.get(Animation).play;
    playAnim(entity, anim, level);
}

async function main(canvas, context) {
    const videoContext = context;
    //const context = canvas.getContext('2d');
    const audioContext = new AudioContext();
    //this is where you can put:
    //changeYerFont("./img/SMB1/Fonts/Pixel/Black.png"),
    //inside of the promise:
    const [entityFactory, font] = await Promise.all([
        loadEntities(audioContext),
        loadFont(),
    ]);

    const loadLevel = await createLevelLoader(entityFactory);

    const sceneRunner = new SceneRunner();

    var player = entityFactory.mario();
    window.player = player;
    //---- movement
    let inputRouter = setupKeyboard(window);
    window.inputRouter = inputRouter;

    async function runNameSelect() {
        levelLoaded = false;
        allowCRTFilter = false;
        console.log('Loading', name);

        const loadScreen = new Scene();
        loadScreen.comp.layers.push(createColorLayer('#000'));
        loadScreen.comp.layers.push(createTextLayer(font, `Welcome`));
        sceneRunner.addScene(loadScreen);
        sceneRunner.runNext();

        await new Promise(resolve => setTimeout(resolve, 1000));

        const level = await loadLevel("name-select");
        disableLevelScroll(level);

        level.events.listen(Level.EVENT_TRIGGER, (spec, _trigger, touches) => {
            if (spec.type === "goto") {
                for (const _entity of findPlayers(touches)) {
                    runLevel(spec.name);
                    return;
                }
            } else if (spec.type === "anim") {
                for (const _entity of findPlayers(touches)) {
                    inputRouter.dropReciver(player);
                    runAnim(spec.anim, player, level);
                    return;
                }
            }
        });
        levelLoaded = true;
        leftLock = false;
        rightLock = false;

        const inputLayer = createInputLayer(font, level);
        level.comp.layers.push(inputLayer);

        sceneRunner.addScene(level);

        sceneRunner.runNext();

        //--- Debug
        if (debug.active) {
            if (debug.layers) {
                level.comp.layers.push(createCollisionLayer(level), createCameraLayer(camera));
                setInterval(() => {
                    console.log("x pos:",player.pos.x, "y pos:",player.pos.y, "direction:", player.traits.get(Go).dir, "heading:", player.traits.get(Go).heading);
                }, 0);
                console.log('Player entity:',player);
                console.log("Locks:", rightLock, leftLock);
            }
            if (debug.mouse) {
                setupMouseControl(canvas, player, camera);
            }
        }
        
        await new Promise(resolve => {
            window.addEventListener('keyup', function onKeydown(event) {
                if (event.key === 'Enter' && allowname) {
                    currentHost = 'null';
                    resolve();
                    window.removeEventListener('keydown', onKeydown);
                }
            });
        });
        localStorage.setItem('username', myname);
    }

    async function runMainMenu() {
        //--- Setup Level
        levelLoaded = false;
        leftLock = true;
        rightLock = true;
        allowCRTFilter = true;
        console.log('Loading Character Select. [No json name display.]');

        //--- Reset Go due to it being stupid.
        player.traits.get(Go).dir = 0;

        //--- Load the level itself
        const level = await loadLevel("menu");
        disableLevelScroll(level);

        level.events.listen(Level.EVENT_TRIGGER, (spec, _trigger, touches) => {
            if (spec.type === "goto") {
                for (const _entity of findPlayers(touches)) {
                    runLevel(spec.name);
                    return;
                }
            } else if (spec.type === "anim") {
                for (const _entity of findPlayers(touches)) {
                    inputRouter.dropReciver(player);
                    runAnim(spec.anim, player, level);
                    return;
                }
            }
        });

        levelLoaded = true;
        leftLock = false;
        rightLock = false;

        const selectLayer = createMenuLayer(font, level);

        level.comp.layers.push(selectLayer)
        sceneRunner.addScene(level);

        sceneRunner.runNext();

        //--- Broadcasting finish
        window.dispatchEvent(new CustomEvent('levelloaded'));

        //--- Debug
        if (debug.active) {
            if (debug.layers) {
                level.comp.layers.push(createCollisionLayer(level), createCameraLayer(camera));
                setInterval(() => {
                    console.log("x pos:",player.pos.x, "y pos:",player.pos.y, "direction:", player.traits.get(Go).dir, "heading:", player.traits.get(Go).heading);
                }, 0);
                console.log('Player entity:',player);
                console.log("Locks:", rightLock, leftLock);
            }
            if (debug.mouse) {
                setupMouseControl(canvas, player, camera);
            }
        }
        
        //--- Await E-Key input
        await new Promise(resolve => {
            let checkStartGame = setInterval(() => {
                if (startGame) {
                    inputRouter.dropReciver(player);
                    clearInterval(checkStartGame);
                    resolve();
                }
            }, 100); // checks every 100ms
        });
    }

    async function runLevel(name) {
        //--- Setup Level
        levelLoaded = false;
        leftLock = true;
        rightLock = true;
        allowCRTFilter = true;
        console.log('Loading', name);

        //--- Setup character
        if (!selectedChar) {
            player = entityFactory.eledlow()
        } else {
            if (selectedChar === 'Mario') {
                player = entityFactory.mario();
            } else if (selectedChar === 'Luigi') {
                player = entityFactory.luigi();
            } else if (selectedChar === 'ELedlow The Fox') {
                player = entityFactory.eledlow();
            } else if (selectedChar === 'Legacy ELedlow') {
                player = entityFactory.eledlowlegacy();
            } else {
                player = entityFactory.eledlow();
            }
        }

        //--- Initialize input
        inputRouter.dropReciver(player);
        inputRouter.addReciver(player);
        makePlayer(player, player.name);

        //--- Create Load Screen
        const loadScreen = new Scene();
        loadScreen.comp.layers.push(createColorLayer('#000'));
        loadScreen.comp.layers.push(createTextLayer(font, `Loading ${name}. Please wait...`));
        sceneRunner.addScene(loadScreen);
        sceneRunner.runNext();

        if (debug.delay && debug.active) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        //--- Load the level itself
        const level = await loadLevel(name);

        //--- Load Triggers and their animations
        level.events.listen(Level.EVENT_TRIGGER, (spec, _trigger, touches) => {
            if (spec.type === "goto") {
                for (const _entity of findPlayers(touches)) {
                    runLevel(spec.name);
                    return;
                }
            } else if (spec.type === "anim") {
                for (const _entity of findPlayers(touches)) {
                    inputRouter.dropReciver(player);
                    runAnim(spec.anim, player, level);
                    return;
                }
            }
        });

        //--- Check if users should die in level bc of timer.
        if (level.timer) {
            listenForTimeDeath(level);
        }

        const playerProgressLayer = createPlayerProgressLayer(font, level);
        const dashboardLayer = createDashboardLayer(font, level);
        player.pos.set(level.startX, level.startY);
        rightLock = level.lockRight; 
        leftLock = level.lockLeft;

        level.entities.add(player);

        player.traits.get(Go).dir = 0;

        player.vel.x = 0;
        player.vel.y = 0;
        
        //--- Create player
        const playerEnv = createPlayerEnv(player);
        level.entities.add(playerEnv);
    
        //--- Wait Screen
        const waitScreen = new TimedScene();
        waitScreen.countDown = 2;
        waitScreen.comp.layers.push(createColorLayer('#000'));
        waitScreen.comp.layers.push(dashboardLayer);
        waitScreen.comp.layers.push(playerProgressLayer);
        sceneRunner.addScene(waitScreen);
        levelLoaded = true;

        //--- Debug
        if (debug.active) {
            if (debug.layers) {
                level.comp.layers.push(createCollisionLayer(level), createCameraLayer(camera));
                setInterval(() => {
                    console.log("x pos:",player.pos.x, "y pos:",player.pos.y, "direction:", player.traits.get(Go).dir, "heading:", player.traits.get(Go).heading);
                }, 0);
                console.log('Player entity:',player);
                console.log("Locks:", rightLock, leftLock);
            }
            if (debug.mouse) {
                setupMouseControl(canvas, player, camera);
            }
        }

        //--- Broadcasting finish
        window.dispatchEvent(new CustomEvent('levelloaded'));

        //--- dashboard
        level.comp.layers.push(dashboardLayer);
        sceneRunner.addScene(level);

        sceneRunner.runNext();
    }

    const gameContext = {
        audioContext,
        videoContext,
        entityFactory,
        deltaTime: null,
    }

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        gameContext.deltaTime = deltaTime;
        sceneRunner.update(gameContext);
    }
    timer.start();
    await runNameSelect(); 
    window.runNameSelect = runNameSelect; 
    await runMainMenu(); 
    window.runMainMenu = runMainMenu; 
    await runLevel('1-1');
    window.runLevel = runLevel;
    
    buildrect(0, 0, canvas.width, canvas.height, 'black', context);
}
export const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
runMobileCode(canvas);

export function loadTheErrorOntoThePage(loadError){
    document.body.appendChild(loadError);
}

const start = () => {
    window.removeEventListener('click', start);
    main(canvas, context);
    resetClock();
};
//main(canvas, context);
start()
//window.addEventListener('click', start);

function listenForTimeDeath(level) {
    level.events.listen(LevelTimer.EVENT_TIMER_DEATH, () => {
        for (const entity of findPlayers(level.entities)) {
            if (entity.traits.has(Killable)){
                entity.traits.get(Killable).kill();
            }  
        }
    });
}