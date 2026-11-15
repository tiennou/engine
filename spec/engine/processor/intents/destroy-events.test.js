const {describe, it, beforeEach} = require('node:test'),
    assert = require('node:assert/strict'),
    utils = require('../../../../src/utils'),
    driver = utils.getDriver(),
    C = driver.constants,
    intents = require('../../../helpers/mocks/intents'),
    destroy = require('../../../../src/processor/intents/structures/_destroy'),
    damage = require('../../../../src/processor/intents/_damage'),
    diePowerCreep = require('../../../../src/processor/global-intents/power/_diePowerCreep');

describe('destroyed object events', () => {
    beforeEach(() => {
        intents.reset();
    });

    it('logs a structure removed by destroy', () => {
        const extension = {
            _id: 'ext1',
            type: 'extension',
            room: 'E2S7',
            x: 10,
            y: 10,
            hits: 100,
            hitsMax: 100,
            user: 'u1',
            store: {}
        };
        intents.scope.roomObjects[extension._id] = extension;
        intents.scope.bulk.insert(extension);

        destroy(extension, intents.scope);

        assert.deepEqual(intents.scope.eventLog, [{
            event: C.EVENT_OBJECT_DESTROYED,
            objectId: 'ext1',
            data: {type: 'extension'}
        }]);
    });

    it('logs a structure killed by damage once', () => {
        const wall = {
            _id: 'wall1',
            type: 'constructedWall',
            room: 'E2S7',
            x: 10,
            y: 11,
            hits: 10,
            hitsMax: 100
        };
        intents.scope.roomObjects[wall._id] = wall;
        intents.scope.bulk.insert(wall);
        const attacker = {_id: 'c1', type: 'creep', user: 'u2', x: 10, y: 12, actionLog: {}};

        damage(attacker, wall, 10, C.EVENT_ATTACK_TYPE_MELEE, intents.scope);

        const destroyed = intents.scope.eventLog.filter(event => event.event == C.EVENT_OBJECT_DESTROYED);
        assert.deepEqual(destroyed, [{
            event: C.EVENT_OBJECT_DESTROYED,
            objectId: 'wall1',
            data: {type: 'constructedWall'}
        }]);
    });

    it('records a power creep death on that room log', () => {
        const roomEvents = {};
        const creep = {
            _id: 'p1',
            type: 'powerCreep',
            room: 'W1N1',
            x: 4,
            y: 5,
            user: 'u1',
            ageTime: 80,
            name: 'Op',
            className: 'operator',
            level: 1,
            powers: {},
            store: {},
            actionLog: {}
        };

        diePowerCreep(creep, {
            roomObjects: {},
            bulkObjects: {insert() {}, remove() {}, update() {}},
            bulkUsersPowerCreeps: {update() {}},
            gameTime: 40,
            roomEvents
        });

        assert.deepEqual(roomEvents.W1N1, [{
            event: C.EVENT_OBJECT_DESTROYED,
            objectId: 'p1',
            data: {type: 'powerCreep'}
        }]);
    });
});
