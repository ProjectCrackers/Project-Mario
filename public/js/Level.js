import { Camera } from "./Camera.js";
import { Compositor } from "./Compositor.js";
import { EventEmitter } from "./EventEmitter.js";
import { MusicController } from "./MusicController.js";
import { EntityCollider } from "./EntityCollider.js";
import { Scene } from "./Scene.js";
import { TileCollider } from "./TileCollider.js";
import { findPlayers } from "./player.js";
import { Player } from "./traits/Player.js"; // Import the Player trait
import { loadSpriteSheet } from "./loaders/sprite.js";

function focusPlayer(level) {
    if (level.scroll) {
        for (const player of findPlayers(level.entities)) {
            level.camera.pos.x = Math.max(0, player.pos.x - 140);
        }
    }
}

function checkEvents(level, player) {
    const events = level.ingameevents || []; // Use ingameevents instead of events
    const playerX = player.pos.x;
    const playerY = player.pos.y;
    //console.log(`Player X: ${playerX}, Player Y: ${playerY}`);
    //console.log(`Events: ${JSON.stringify(events)}`); // Log the events array

    // This gets called, but the overworld isn't changed?
    events.forEach(event => {
        //console.log(`Event: ${JSON.stringify(event)}`);
        if (event["x>pos"]) {
            event["x>pos"].forEach(condition => {
                console.log(`Condition is ${playerX > condition.x[0]}`); // Says true but does nothing
                if (playerX > condition.x[0] && !condition.triggered) {
                    handleEvent(level, condition.event);
                    condition.triggered = true; // Set the flag to prevent multiple calls
                }
            });
        }
        // Add similar checks for x<pos, y>pos, y<pos if needed
    });
}

function handleEvent(level, event) {
    console.log(`Handling event: ${event}`); // Add this line for debugging
    const [property, value] = event.split(": ");
    console.log(`Property: ${property}, Value: ${value}`); // Add this line for debugging
    switch (property) {
        case "spriteSheet":
            level.spriteSheet = value.replace(/"/g, '');
            //console.log(`Sprite sheet changed to: ${level.spriteSheet}`); // Add this line for debugging
            reloadSprites(level); // Call a function to reload the sprites
            break;
        // Add more cases for other event types
    }
}

function reloadSprites(level) {
    level.setupBackgrounds(level.originalSpec, level, level.originalBackgroundSprites, level.originalPatterns);
    level.setupEntities(level.originalSpec, level, level.originalEntityFactory);
    level.setupTriggers(level.originalSpec, level);
    level.setupBehavior(level, level.time);
}

export class Level extends Scene {
    static EVENT_TRIGGER = Symbol('trigger');
    constructor() {
        super();

        this.name = "";

        this.gravity = 1500;
        this.totalTime = 0;

        this.camera = new Camera();
        window.camera = this.camera;

        this.music = new MusicController();

        this.entities = new Set();
        this.ingameevents = []; // Initialize ingameevents as an array
        //this.tiles = new Matrix();

        this.entityCollider = new EntityCollider(this.entities);
        this.tileCollider = new TileCollider();
        //this.tileCollider = null  
        //...new TileCollider(this.tiles);
    }

    draw(gameContext) {
        this.comp.draw(gameContext.videoContext, this.camera);
    }

    /*setCollisionGrid(matrix) {
        this.tileCollider = new TileCollider(matrix);
    }*/

    update(gameContext) {
        this.entities.forEach(entity => {
            entity.update(gameContext, this);

            //entity.pos.x += entity.vel.x * deltaTime;
            //this.tileCollider.checkX(entity);

            //entity.pos.y += entity.vel.y * deltaTime;
            //this.tileCollider.checkY(entity);

            //entity.vel.y += this.gravity * deltaTime;
        });

        this.entities.forEach(entity => {
            this.entityCollider.check(entity);
        });

        this.entities.forEach(entity => {
            if (entity.traits.has(Player)) {
                checkEvents(this, entity); // Call checkEvents here
            }
            if (entity.finalize === undefined || entity.finalize === null || !entity.finalize) {
                //some entities are annoying like this
                console.error("Entity missing property \"Finalize\".");
                console.log("Debugging: find this entity:", entity);
            } else {
                entity.finalize();
            }
        });

        focusPlayer(this);

        this.totalTime += gameContext.deltaTime;
    }

    pause() {
        this.music.pause();
    }
}

//---- as default
export default { Level }