import { Trait } from "../Trait.js";
import { marioAI } from "../marioAI.js";
import { SpawnAI } from "../input.js";
import { createPlayer } from "../player.js";

export class Clone extends Trait{
    update(player, deltaTime) {
        if (this.spawnTimeout > 2 && player.vel.y < 0) {
            if (SpawnAI === 1) {
                const spawn = entityFactory.mario();
                spawn.pos.x = player.pos.x;
                spawn.pos.y = player.pos.y;
                spawn.vel.y = player.vel.y - 200;
                level.entities.add(spawn);
                this.spawnTimeout = 0;
                new marioAI(spawn);
                const spawnEnv = createPlayer(window.mario);
                level.entities.add(spawnEnv);
            }
            
        }
        this.spawnTimeout += deltaTime;
    }
}

export default {Clone}