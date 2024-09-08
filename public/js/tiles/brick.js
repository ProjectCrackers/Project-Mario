import { Sides } from "../Entity.js";
import { Player } from "../traits/Player.js";

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
        if (entity.traits.has(Player)){
            const grid = resolver.matrix;
            grid.delete(match.indexX, match.indexY);

            const sawdust_1 = gameContext.entityFactory.brick();
            sawdust_1.vel.set(-40, -300);
            sawdust_1.pos.set(entity.pos.x, match.y1);
            level.entities.add(sawdust_1);
            const sawdust_2 = gameContext.entityFactory.brick();
            sawdust_2.vel.set(40, -300);
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

export const brick = [handleX, handleY];