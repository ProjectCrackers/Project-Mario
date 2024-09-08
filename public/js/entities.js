import { loadMario } from './entities/Mario.js';
import { loadLuigi } from './entities/Luigi.js';
import { loadGoomba } from './entities/Goomba.js';
import { loadKoopa } from './entities/Koopa.js';
import { loadBullet } from './entities/Bullet.js';
import { loadCannon } from './entities/Cannon.js';
import { loadEledlowLegacy } from './entities/ELedlow-1.0.js';
import { loadELedlow } from './entities/ELedlow-2.0.js';
import { loadBrick } from './entities/Sawdust.js';
import { loadBlock } from './entities/Block.js';

export async function loadEntities(audioContext) { 
    const entityFactories = {};

    function addAs(name) {
        return factory => entityFactories[name] = factory;
    }

    await Promise.all([
        loadMario(audioContext).then(addAs('mario')),
        loadLuigi(audioContext).then(addAs('luigi')),
        loadGoomba(audioContext).then(addAs('goomba')),
        loadKoopa(audioContext).then(addAs('koopa')),
        loadBullet(audioContext).then(addAs('bullet')),
        loadCannon(audioContext).then(addAs('cannon')),
        loadEledlowLegacy(audioContext).then(addAs('eledlowlegacy')),
        loadELedlow(audioContext).then(addAs('eledlow')),
        loadBrick(audioContext).then(addAs('brick')),
        loadBlock(audioContext).then(addAs('block')),
    ]);

    return entityFactories;
}