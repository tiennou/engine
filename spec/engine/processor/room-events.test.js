const {describe, it} = require('node:test'),
    assert = require('node:assert/strict'),
    utils = require('../../../src/utils'),
    C = utils.getDriver().constants,
    roomEvents = require('../../../src/processor/room-events');

describe('room arrival events', () => {
    it('records the room and tile the creep left', () => {
        assert.deepEqual(roomEvents.enterEvent({_id: 'c1', room: 'W1N1', x: 49, y: 3}), {
            event: C.EVENT_ENTER,
            objectId: 'c1',
            data: {room: 'W1N1', x: 49, y: 3}
        });
    });

    it('replaces a stale log when the destination was not processed this tick', () => {
        assert.deepEqual(roomEvents.writesForRooms({
            W1N1: [{event: C.EVENT_ENTER}],
            W2N1: [{event: C.EVENT_ENTER}]
        }, ['W1N1']), [
            {roomId: 'W1N1', events: [{event: C.EVENT_ENTER}], replace: false},
            {roomId: 'W2N1', events: [{event: C.EVENT_ENTER}], replace: true}
        ]);
    });
});
