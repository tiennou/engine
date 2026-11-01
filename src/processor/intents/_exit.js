var _ = require('lodash'),
    utils = require('../../utils'),
    driver = utils.getDriver(),
    C = driver.constants;

function edgeDestination(object) {
    var [roomX, roomY] = utils.roomNameToXY(object.room),
        x = object.x,
        y = object.y,
        room = object.room;

    if (object.x == 0) {
        x = 49;
        room = utils.getRoomNameFromXY(roomX-1, roomY);
    }
    else if (object.y == 0) {
        y = 49;
        room = utils.getRoomNameFromXY(roomX, roomY-1);
    }
    else if (object.x == 49) {
        x = 0;
        room = utils.getRoomNameFromXY(roomX+1, roomY);
    }
    else if (object.y == 49) {
        y = 0;
        room = utils.getRoomNameFromXY(roomX, roomY+1);
    }

    return {room, x, y};
}

// Power creeps ignore intershard portals and can still walk off the edge.
// Creeps take the portal instead, which is not a same-shard exit.
module.exports = function(object, scope, portalWhen) {
    const {roomObjects, bulk, eventLog} = scope;

    let destination = null;

    if(utils.isAtEdge(object) && object.user != '2' && object.user != '3') {
        destination = edgeDestination(object);
    }

    if(portalWhen) {
        const portal = _.find(roomObjects, i => i.type == 'portal' && i.x == object.x && i.y == object.y);
        if(portal && portal.destination) {
            if(portal.destination.shard && object.type != 'powerCreep') {
                bulk.update(object, {interRoom: portal.destination});
                return;
            }
            if(!portal.destination.shard) {
                destination = portal.destination;
            }
        }
    }

    if(!destination) {
        return;
    }

    bulk.update(object, {interRoom: destination});
    eventLog.push({
        event: C.EVENT_EXIT,
        objectId: object._id,
        data: {room: destination.room, x: destination.x, y: destination.y}
    });
};
