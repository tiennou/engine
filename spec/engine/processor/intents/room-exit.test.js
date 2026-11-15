const {describe, it, beforeEach} = require('node:test'),
    assert = require('node:assert/strict'),
    utils = require('../../../../src/utils'),
    driver = utils.getDriver(),
    C = driver.constants,
    movement = require('../../../../src/processor/intents/movement'),
    roomsEnv = require('../../../helpers/mocks/rooms'),
    creepsEnv = require('../../../helpers/mocks/creeps'),
    powerCreepsEnv = require('../../../helpers/mocks/powerCreeps'),
    intents = require('../../../helpers/mocks/intents');

describe('room exit events', () => {
    beforeEach(() => {
        intents.reset();
        movement.init(intents.scope.roomObjects, roomsEnv.terrain.E2S7);
    });

    function creep(data) {
        return creepsEnv.createCreep('scout', Object.assign({
            user: '1',
            hits: 100,
            hitsMax: 100,
            ageTime: 1000,
            tutorial: true
        }, data));
    }

    function powerCreep(data) {
        return powerCreepsEnv.createPowerCreep('FullOperator', Object.assign({
            user: '1',
            hits: 100,
            hitsMax: 100
        }, data));
    }

    function portal(x, y, destination) {
        const object = {_id: 'portal'+x+y, type: 'portal', x, y, room: 'E2S7', destination};
        intents.scope.roomObjects[object._id] = object;
        return object;
    }

    it('logs a border exit in the room being left', () => {
        const scout = creep({x: 0, y: 25});
        scout.tick();

        assert.deepEqual(scout.interRoom, {room: 'E1S7', x: 49, y: 25});
        assert.deepEqual(intents.scope.eventLog, [{
            event: C.EVENT_EXIT,
            objectId: scout._id,
            data: {room: 'E1S7', x: 49, y: 25}
        }]);
    });

    it('logs a same-shard portal instead of the border behind it', () => {
        const scout = creep({x: 0, y: 10});
        portal(0, 10, {room: 'W3N3', x: 5, y: 6});
        scout.tick();

        assert.deepEqual(scout.interRoom, {room: 'W3N3', x: 5, y: 6});
        assert.deepEqual(intents.scope.eventLog, [{
            event: C.EVENT_EXIT,
            objectId: scout._id,
            data: {room: 'W3N3', x: 5, y: 6}
        }]);
    });

    it('does not log an intershard portal as a same-shard exit', () => {
        const scout = creep({x: 0, y: 10});
        const destination = {shard: 'shard2', room: 'W1N1'};
        portal(0, 10, destination);
        scout.tick();

        assert.deepEqual(scout.interRoom, destination);
        assert.deepEqual(intents.scope.eventLog, []);
    });

    it('does not move invaders off the map edge', () => {
        const invader = creep({x: 49, y: 10, user: '2'});
        invader.tick();

        assert.strictEqual(invader.interRoom, undefined);
        assert.deepEqual(intents.scope.eventLog, []);
    });

    it('logs a power creep portal exit and keeps the edge when the portal is intershard', () => {
        const operator = powerCreep({x: 49, y: 12});
        portal(49, 12, {shard: 'shard2', room: 'W8N8'});
        operator.tick();

        assert.deepEqual(operator.interRoom, {room: 'E3S7', x: 0, y: 12});
        assert.deepEqual(intents.scope.eventLog, [{
            event: C.EVENT_EXIT,
            objectId: operator._id,
            data: {room: 'E3S7', x: 0, y: 12}
        }]);
    });
});
