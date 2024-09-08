import { Entity } from "../Entity.js";
import { Trait } from "../Trait.js";
import { Velocity } from "../traits/Velocity.js";
import { Solid } from "../traits/Solid.js";
import { Sides } from "../Entity.js";
import { loadSpriteSheet } from "../loaders/sprite.js";

export async function loadBlock() { 
    const sprite = await loadSpriteSheet('block');
    return createBlockFactory(sprite);
}

class Behavior extends Trait {
    collides(match, entity) {
        blockHandler.forEach(handler => {
            handler(match, entity);
        });
    }

    update(block) {
        block.y2 = block.bounds.top;
        block.y1 = block.bounds.bottom;
        block.x2 = block.bounds.left;
        block.x1 = block.bounds.right;
    }
}

function createBlockFactory(sprite) {
    //const brokenAnim = sprite.animation.get('break');

    function routeAnim(block) {
        return 'block';
        //return brokenAnim(block.lifetime);
    }

    function drawBlock(context) {
        sprite.draw(routeAnim(this), context, 0, 0);
    };

    return function createBlock() {
        const block = new Entity();
        block.size.set(16, 16);
        block.addTrait(new Solid());
        block.addTrait(new Velocity());
        block.addTrait(new Behavior());
        block.traits.get(Behavior).update(block);

        block.draw = drawBlock;

        return block;
    };
}

/**
 * @ignore
 * @deprecated
 * @param {*} match 
 * @param {*} entity 
 */
function handleX(match, entity) {
    if (entity.vel.x > 0) {
        if (entity.bounds.right > match.x2) {
            entity.obstruct(Sides.RIGHT, match);
        }
    } else if (entity.vel.x < 0) {
        if (entity.bounds.left < match.x1) {
            entity.obstruct(Sides.LEFT, match);
        }
    }
}
/*
function handleX(match, entity) {
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
function handleX(match, entity) {
    //console.log("handleX", match, entity);
    if (entity.vel.x > 0) {
        entity.obstruct(Sides.LEFT, match);
    } else if (entity.vel.x < 0) {
        entity.obstruct(Sides.RIGHT, match);
    }
}*/

/**
 * @ignore
 * @deprecated
 * @param {*} match 
 * @param {*} entity 
 */
function handleY(match, entity) {
    if (entity.vel.y > 0) {
        if (entity.bounds.bottom > match.y1) {
            entity.obstruct(Sides.BOTTOM, match);
        }
    } else if (entity.vel.y < 0) {
        if (entity.bounds.top < match.y2) {
            entity.obstruct(Sides.TOP, match);
        }
    }
}


/*
function handleY(match, entity) {
    if (entity.vel.y < 0) {
        if (entity.bounds.top < match.y2) {
            entity.obstruct(Sides.TOP, match);
        }
    } else if (entity.vel.y > 0) {
        if (entity.bounds.bottom > match.y1) {
            entity.obstruct(Sides.BOTTOM, match);
        }
    }
}
function handleY(match, entity) {
    //console.log("handleY",entity.vel.y);
    if (entity.vel.y < 0) {
        entity.obstruct(Sides.TOP, match);
    } else if (entity.vel.y > 0) {
        entity.obstruct(Sides.TOP, match);
    }
}*/

const blockHandler = [handleX, handleY];