const {describe, it, beforeEach} = require('node:test'),
    assert = require('node:assert/strict'),
    utils = require('../../../../../src/utils'),
    driver = utils.getDriver(),
    C = driver.constants,
    creepsEnv = require('../../../../helpers/mocks/creeps'),
    intents = require('../../../../helpers/mocks/intents'),
    harvest = require('../../../../../src/processor/intents/creeps/harvest');

describe('harvest events', () => {
    beforeEach(() => {
        intents.reset();
        intents.scope.bulk.inc = (object, key, amount) => {
            object[key] = (object[key] || 0) + amount;
        };
    });

    function worker() {
        return creepsEnv.createCreep('fullWorker', {
            x: 10,
            y: 10,
            store: {},
            storeCapacity: 1000,
            spawning: false
        });
    }

    it('logs the mineral amount actually taken', () => {
        const creep = worker();
        const mineral = {
            _id: 'min1',
            type: 'mineral',
            x: 10,
            y: 11,
            mineralAmount: 1,
            mineralType: 'H'
        };
        const extractor = {_id: 'ex1', type: 'extractor', x: 10, y: 11};
        intents.scope.roomObjects[mineral._id] = mineral;
        intents.scope.roomObjects[extractor._id] = extractor;

        harvest(creep, {id: mineral._id}, intents.scope);

        assert.deepEqual(intents.scope.eventLog, [{
            event: C.EVENT_HARVEST,
            objectId: creep._id,
            data: {targetId: 'min1', amount: 1}
        }]);
    });

    it('logs a deposit harvest', () => {
        const creep = worker();
        const deposit = {
            _id: 'dep1',
            type: 'deposit',
            x: 11,
            y: 10,
            depositType: 'silicon',
            harvested: 0
        };
        intents.scope.roomObjects[deposit._id] = deposit;

        harvest(creep, {id: deposit._id}, intents.scope);

        assert.deepEqual(intents.scope.eventLog, [{
            event: C.EVENT_HARVEST,
            objectId: creep._id,
            data: {targetId: 'dep1', amount: 50}
        }]);
    });
});
