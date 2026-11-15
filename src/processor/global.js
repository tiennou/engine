var q = require('q'),
    _ = require('lodash'),
    utils = require('../utils'),
    driver = utils.getDriver(),
    C = driver.constants,
    marketProcessor = require('./global-intents/market'),
    powerProcessor = require('./global-intents/power'),
    roomEvents = require('./room-events');

module.exports = (processedRooms) => {

    return driver.getInterRoom().then((data) => {
        if(!data) {
            return;
        }

        var [gameTime,creeps,accessibleRooms,roomObjects,{orders,users,userPowerCreeps,userIntents,shardName}={}] = data;

        var bulkObjects = driver.bulkObjectsWrite(),
            bulkRooms = driver.bulkRoomsWrite(),
            bulkUsers = driver.bulkUsersWrite(),
            bulkTransactions = driver.bulkTransactionsWrite(),
            bulkUsersMoney = driver.bulkUsersMoney(),
            bulkUsersResources = driver.bulkUsersResources(),
            bulkUsersPowerCreeps = driver.bulkUsersPowerCreeps(),
            bulkMarketOrders = driver.bulkMarketOrders(),
            bulkMarketIntershardOrders = driver.bulkMarketIntershardOrders(),
            activateRooms = {},
            usersById = _.indexBy(users, '_id'),
            roomObjectsByType = _.groupBy(roomObjects, 'type'),
            eventsByRoom = {};

        // creeps

        creeps.forEach((creep) => {
            if(!accessibleRooms[creep.interRoom.room]) {
                return;
            }
            if(!activateRooms[creep.interRoom.room]) {
                driver.activateRoom(creep.interRoom.room);
            }
            activateRooms[creep.interRoom.room] = true;

            var arrived = creep.interRoom.room;
            eventsByRoom[arrived] = eventsByRoom[arrived] || [];
            eventsByRoom[arrived].push(roomEvents.enterEvent(creep));

            bulkObjects.update(creep, {room: creep.interRoom.room, x: creep.interRoom.x, y: creep.interRoom.y, interRoom: null});
        });

        powerProcessor({userIntents, usersById, roomObjectsByType, userPowerCreeps, gameTime,
            bulkObjects, bulkUsers, bulkUsersPowerCreeps, shardName, roomEvents: eventsByRoom});

        marketProcessor({orders, userIntents, usersById, gameTime, roomObjectsByType, bulkObjects, bulkUsers, bulkTransactions,
            bulkUsersMoney, bulkUsersResources, bulkMarketOrders, bulkMarketIntershardOrders});

        var eventWrites = roomEvents.writesForRooms(eventsByRoom, processedRooms).map(write =>
            driver.mergeRoomEventLog(write.roomId, write.events, write.replace));

        return q.all([
            bulkObjects.execute(),
            bulkRooms.execute(),
            bulkUsers.execute(),
            bulkMarketOrders.execute(),
            bulkMarketIntershardOrders.execute(),
            bulkUsersMoney.execute(),
            bulkTransactions.execute(),
            bulkUsersResources.execute(),
            bulkUsersPowerCreeps.execute(),
            driver.clearGlobalIntents()
        ].concat(eventWrites));
    });
};

