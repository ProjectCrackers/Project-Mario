import { Sides } from "../Entity.js";
import { Player } from "../traits/Player.js";
"use strict";

function handleX({entity, match}) {
    if (entity.vel.x > 0) {
        if (entity.bounds.right > match.x1) {
            entity.obstruct(Sides.RIGHT, match);
        }
    } else if (entity.vel.x < 0) {
        if (entity.bounds.left < match.x2) {
            entity.obstruct(Sides.LEFT, match);
        }
    }
}
function handleY({entity, match, resolver, gameContext, level}) {
    if (entity.vel.y > 0) {
        if (entity.bounds.bottom > match.y1) {
            entity.obstruct(Sides.BOTTOM, match);
        }
    } else if (entity.vel.y < 0) {
        entity.obstruct(Sides.TOP, match);
        if (entity.traits.has(Player)){
            const grid = resolver.matrix;
            //console.log("match:", match);
            grid.delete(match.indexX, match.indexY);
            if (entity.traits.has(Player)){
                // ...
                const emptyBlock = JSON.parse(JSON.stringify(match.tile));
                emptyBlock.type = 'ground';
                emptyBlock.name = "chance-empty"
                grid.set(match.indexX, match.indexY, emptyBlock);
                // ...
            }
            //grid.delete(match.indexX, match.indexY);
            
            //console.log("match:", match);
            //match.tile.name = "chance-empty";
            //debugger;
            //grid.delete(match.indexX, match.indexY);

            //const replacementBlock = gameContext.entityFactory.block();
            //replacementBlock.pos.set(match.indexX, match.indexY);

            //const grid = resolver.matrix;
            //var newMatch = grid.set(match.indexX, match.indexY, match)
            //newMatch.tile.type = "ground";
            //newMatch.tile.name = "chance-empty";
            //grid.delete(match.indexX, match.indexY);
            //blok
            //const blok = gameContext.entityFactory.block();
            //blok.vel.set(0, 0);
            //blok.pos.set(match.x1, match.y1);
            //level.entities.add(blok);

            const sawdust_1 = gameContext.entityFactory.brick();
            sawdust_1.vel.set(-60, -200);
            sawdust_1.pos.set(entity.pos.x, match.y1);
            level.entities.add(sawdust_1);
            const sawdust_2 = gameContext.entityFactory.brick();
            sawdust_2.vel.set(60, -200);
            sawdust_2.pos.set(entity.pos.x, match.y1);
            level.entities.add(sawdust_2);
            const sawdust_3 = gameContext.entityFactory.brick();
            sawdust_3.vel.set(-40, -200);
            sawdust_3.pos.set(entity.pos.x, match.y1);
            level.entities.add(sawdust_3);
            const sawdust_4 = gameContext.entityFactory.brick();
            sawdust_4.vel.set(40, -200);
            sawdust_4.pos.set(entity.pos.x, match.y1);
            level.entities.add(sawdust_4);
        }

        if (entity.bounds.top < match.y2) {
            entity.obstruct(Sides.TOP, match);
        }
    }
}

export const chance = [handleX, handleY];