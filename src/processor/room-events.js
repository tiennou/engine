var utils = require('../utils'),
    C = utils.getDriver().constants;

exports.enterEvent = function(object) {
    return {
        event: C.EVENT_ENTER,
        objectId: object._id,
        data: {room: object.room, x: object.x, y: object.y}
    };
};

exports.writesForRooms = function(eventsByRoom, processedRooms) {
    var processed = {};
    (processedRooms || []).forEach(roomId => {
        processed[roomId] = true;
    });
    return Object.keys(eventsByRoom).filter(roomId => eventsByRoom[roomId] && eventsByRoom[roomId].length).map(roomId => ({
        roomId,
        events: eventsByRoom[roomId],
        replace: !processed[roomId]
    }));
};
