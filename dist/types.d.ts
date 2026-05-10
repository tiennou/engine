#!/usr/bin/env node
declare module "gulpfile" {
    export {};
}
declare module "src/utils" {
    export function getDriver(): any;
    export function getRuntimeDriver(): any;
    export function fetchXYArguments(firstArg: any, secondArg: any, globals: any): any[];
    export function getDirection(dx: any, dy: any): any;
    export function getOffsetsByDirection(direction: any): number[] | undefined;
    export function calcCreepCost(body: any): number;
    export function checkConstructionSite(objects: any, structureType: any, x: any, y: any): any;
    export function getDiff(oldData: any, newData: any): {};
    export function encodeTerrain(terrain: any): string;
    export function decodeTerrain(items: any): {
        room: any;
        x: number;
        y: number;
        type: string;
    }[];
    export function decodeTerrainByRoom(items: any): {
        spatial: {};
    };
    export function checkTerrain(terrain: any, x: any, y: any, mask: any): boolean;
    export function checkControllerAvailability(type: any, roomObjects: any, roomController: any, offset: any): boolean;
    export function getRoomNameFromXY(x: any, y: any): string;
    export function roomNameToXY(name: any): number[];
    export function comparatorDistance(target: any): (a: any, b: any) => number;
    export function storeIntents(userId: any, userIntents: any, userRuntimeData: any, customIntentTypes: any): {
        notify: any;
        global: any;
    };
    export function sendAttackingNotification(target: any, roomController: any): void;
    export function checkStructureAgainstController(object: any, roomObjects: any, roomController: any): boolean;
    export function defineGameObjectProperties(obj: any, dataFn: any, properties: any, opts: any): void;
    export function isAtEdge(object: any): boolean;
    export function serializePath(path: any): string;
    export function deserializePath(path: any): any[];
    export function calcResources(object: any): any;
    export function calcBodyEffectiveness(body: any, bodyPartType: any, methodName: any, basePower: any, withoutOldHits: any): number;
    export function dist(a: any, b: any): number;
    export function calcRoomsDistance(room1: any, room2: any, continuous: any): number;
    export function calcTerminalEnergyCost(amount: any, range: any): number;
    export function calcNeededGcl(gclLevel: any): number;
    export function calcTotalReactionsTime(mineral: any): any;
    export function capacityForResource(object: any, resourceType: any): any;
    export function calcReward(resourceDensities: any, targetDensity: any, itemsLimit: any): any;
    export function getReactionVariants(compound: any): string[][];
}
declare module "spec/engine/utilsSpec" {
    export {};
}
declare module "src/game/rooms" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
    export function makePos(_register: any): void;
}
declare module "spec/helpers/mocks/rooms" {
    export namespace terrain {
        let E2S7: string;
    }
}
declare module "spec/engine/game/roomsSpec" {
    export {};
}
declare module "src/game/store" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "spec/engine/game/storeSpec" {
    export {};
}
declare module "src/processor/intents/_create-energy" {
    function _exports(x: any, y: any, room: any, amount: any, resourceType: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/_add-fatigue" {
    function _exports(object: any, dFatigue: any, { roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/movement" {
    export function init(_roomObjects: any, _roomTerrain: any): void;
    export function addPulling(object: any, target: any): void;
    export function removePulling(object: any): void;
    export function add(object: any, dx: any, dy: any): void;
    export function isTileBusy(x: any, y: any): boolean;
    export function check(roomIsInSafeMode: any): void;
    export function execute(object: any, scope: any): void;
}
declare module "spec/helpers/mocks/common" {
    export function generateId(): string;
}
declare module "spec/helpers/mocks/bulk" {
    export function update(id: any, data: any): void;
    export function remove(id: any): void;
    export function insert(object: any): void;
    export function reset(): void;
}
declare module "spec/helpers/mocks/intents" {
    export namespace scope {
        let roomObjects: {};
    }
    export function reset(): void;
    export function ticks(): void;
}
declare module "src/processor/intents/creeps/move" {
    function _exports(object: any, intent: any, { roomObjects }: {
        roomObjects: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/pull" {
    function _exports(object: any, intent: any, { roomObjects }: {
        roomObjects: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/transfer" {
    function _exports(object: any, intent: any, { roomObjects, bulk, eventLog }: {
        roomObjects: any;
        bulk: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/_die" {
    function _exports(object: any, dropRate: any, violentDeath: any, { roomObjects, bulk, stats, gameTime, eventLog }: {
        roomObjects: any;
        bulk: any;
        stats: any;
        gameTime: any;
        eventLog: any;
    }, attackType: any): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/_born-creep" {
    function _exports(spawn: any, creep: any, scope: any): boolean;
    export = _exports;
}
declare module "src/processor/intents/creeps/_recalc-body" {
    function _exports(object: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/drop" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/_drop-resources-without-space" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "spec/helpers/mocks/creeps" {
    export function createCreep(template: any, data: any): any;
}
declare module "src/processor/intents/power-creeps/move" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "spec/helpers/mocks/powerCreeps" {
    export function createPowerCreep(template: any, data: any): any;
}
declare module "spec/engine/processor/intents/movementSpec" {
    export {};
}
declare module "spec/engine/processor/intents/creeps/transferSpec" {
    export {};
}
declare module "spec/helpers/mocks/users" {
    export const defaultId: "5a70498ac9e2f700010d0a63";
}
declare module "src/config" {
    export = result;
    var result: {};
}
declare module "src/decycle" {
    function _exports(object: any): any;
    export = _exports;
}
declare module "src/game/path-utils" {
    export class OpenClosed {
        constructor(size: any);
        list: Uint8Array;
        marker: number;
        clear(): void;
        isOpen(index: any): boolean;
        isClosed(index: any): boolean;
        open(index: any): void;
        close(index: any): void;
    }
    export class Heap {
        constructor(size: any, ctor: any);
        priorities: any;
        heap: Uint16Array;
        size_: number;
        minPriority(): any;
        min(): number;
        size(): number;
        priority(index: any): any;
        pop(): void;
        push(index: any, priority: any): void;
        update(index: any, priority: any): void;
        bubbleUp(ii: any): void;
        clear(): void;
    }
}
declare module "src/game/map" {
    export function makeMap(runtimeData: any, register: any, globals: any): {
        findRoute(fromRoom: any, toRoom: any, opts: any): any;
        findExit(fromRoom: any, toRoom: any, opts: any): any;
        describeExits: (roomName: any) => {} | null;
        isRoomAvailable(roomName: any): any;
        getRoomStatus(roomName: any): {
            status: string;
            timestamp: any;
        } | undefined;
        getTerrainAt(x: any, y: any, roomName: any): "wall" | "swamp" | "plain" | undefined;
        getRoomTerrain(roomName: any): any;
        getRoomLinearDistance(roomName1: any, roomName2: any, continuous: any): number;
        getWorldSize(): any;
    };
}
declare module "src/game/market" {
    export function make(runtimeData: any, intents: any, register: any): {
        calcTransactionCost: any;
        getAllOrders: any;
        getHistory: any;
        getOrderById: any;
        createOrder: any;
        cancelOrder: any;
        deal: any;
        changeOrderPrice: any;
        extendOrder: any;
    };
}
declare module "src/game/custom-prototypes" {
    function _exports(name: any, parent: any, properties: any, prototypeExtender: any, userOwned: any): (_runtimeData: any, _intents: any, _register: any, _globals: any) => void;
    export = _exports;
}
declare module "src/game/creeps" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/names" {
    export function getUniqueName(checkExistingFn: any): string;
}
declare module "src/game/structures" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/sources" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/minerals" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/deposits" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/nukes" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/resources" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/flags" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/tombstones" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/construction-sites" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/path-finder" {
    export function make(runtimeData: any, intents: any, register: any, globals: any): void;
}
declare module "src/game/power-creeps" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/ruins" {
    export function make(_runtimeData: any, _intents: any, _register: any, _globals: any): void;
}
declare module "src/game/game" {
    export function init(_globals: any, _codeModules: any, _runtimeData: any, _intents: any, _memory: any, _fakeConsole: any, _consoleCommands: any, _timeout: any, _getUsedCpu: any, _scriptCachedData: any, _sandboxedFunctionWrapper: any, _getHeapStatistics: any, _cpuHalt: any): any;
    export function run(userId: any): void;
}
declare module "src/game/console" {
    export function makeConsole(id: any, sandboxedFunctionWrapper: any): any;
    export function getMessages(id: any): any;
    export function getCommandResults(id: any): any;
    export function getVisual(id: any): any;
}
declare module "src/index" {
    export const game: typeof import("src/game/game");
    export const utils: typeof import("src/utils");
    export const console: typeof import("src/game/console");
}
declare module "src/processor/global-intents/market" {
    function _exports({ orders, userIntents, usersById, gameTime, roomObjectsByType, bulkObjects, bulkUsers, bulkTransactions, bulkUsersMoney, bulkUsersResources, bulkMarketOrders, bulkMarketIntershardOrders }: {
        orders: any;
        userIntents: any;
        usersById: any;
        gameTime: any;
        roomObjectsByType: any;
        bulkObjects: any;
        bulkUsers: any;
        bulkTransactions: any;
        bulkUsersMoney: any;
        bulkUsersResources: any;
        bulkMarketOrders: any;
        bulkMarketIntershardOrders: any;
    }): () => any;
    export = _exports;
}
declare module "src/processor/global-intents/power/_diePowerCreep" {
    function _exports(object: any, { roomObjects, bulkObjects, bulkUsersPowerCreeps, gameTime }: {
        roomObjects: any;
        bulkObjects: any;
        bulkUsersPowerCreeps: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/global-intents/power" {
    function _exports(scope: any): void;
    export = _exports;
}
declare module "src/processor/global" {
    function _exports(): any;
    export = _exports;
}
declare module "src/main" {
    export {};
}
declare module "src/processor/common/fake-runtime" {
    export function findPath(source: any, target: any, opts: any, scope: any): any;
    export function findClosestByPath(fromPos: any, objects: any, opts: any, scope: any): any;
    export function moveTo(creep: any, target: any, opts: any, scope: any): any;
    export function walkTo(creep: any, target: any, opts: any, context: any): any;
    export function flee(creep: any, hostiles: any, range: any, opts: any, scope: any): any;
    export function RoomPosition(x: any, y: any, roomName: any): void;
    export class RoomPosition {
        constructor(x: any, y: any, roomName: any);
        x: any;
        y: any;
        roomName: any;
        isEqualTo(p: any): boolean;
        getRangeTo(p: any): number;
        getDirectionTo(p: any): any;
        lookFor(type: any): string[] | "wall" | null;
        sPackLocal(): string;
    }
    export namespace RoomPosition {
        function sUnpackLocal(packed: any, roomName: any): RoomPosition;
    }
    export function CostMatrix(): void;
    export class CostMatrix {
        _bits: Uint8Array;
        set(xx: any, yy: any, val: any): void;
        get(xx: any, yy: any): number;
        clone(): CostMatrix;
    }
    export function hasActiveBodyparts(creep: any, part: any): any;
}
declare module "src/processor/intents/nukes/pretick" {
    function _exports(object: any, intents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/keepers/pretick" {
    function _exports(creep: any, scope: any): {};
    export = _exports;
}
declare module "src/processor/intents/creeps/invaders/flee" {
    function _exports(creep: any, range: any, context: any): boolean;
    export = _exports;
}
declare module "src/processor/intents/creeps/invaders/healer" {
    function _exports(creep: any, context: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/invaders/findAttack" {
    function _exports(creep: any, context: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/invaders/shootAtWill" {
    function _exports(creep: any, context: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/invaders/pretick" {
    function _exports(creep: any, scope: any): {};
    export = _exports;
}
declare module "src/processor/intents/invader-core/stronghold/defence" {
    export function createSafeMatrixCallback(context: any): ((room: any) => fakeRuntime.CostMatrix) | undefined;
    export function distribute(positions: any, agents: any): {};
    import fakeRuntime = require("src/processor/common/fake-runtime");
}
declare module "src/processor/intents/invader-core/stronghold/creeps" {
    export namespace bodies {
        let fortifier: any;
        let weakDefender: any;
        let fullDefender: any;
        let boostedDefender: any;
        let boostedRanger: any;
        let fullBoostedMelee: any;
        let fullBoostedRanger: any;
    }
    export const behaviors: {
        coordinated: (creep: any, context: any) => true | undefined;
        'simple-melee': (creep: any, context: any) => void;
        fortifier: (creep: any, context: any) => void;
    };
}
declare module "src/processor/intents/invader-core/destroy" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/structures/_destroy" {
    function _exports(object: any, scope: any, attackType: any): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/stronghold/stronghold" {
    export namespace behaviors {
        export function deploy(context: any): void;
        function _default(context: any): void;
        export { _default as default };
        export function bunker1(context: any): void;
        export function bunker2(context: any): void;
        export function bunker3(context: any): void;
        export function bunker4(context: any): void;
        export function bunker5(context: any): void;
    }
}
declare module "src/processor/intents/invader-core/pretick" {
    function _exports(object: any, scope: any): {} | undefined;
    export = _exports;
}
declare module "src/processor/intents/_calc_spawns" {
    function _exports(roomSpawns: any, roomExtensions: any, { roomController, bulk }: {
        roomController: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/room/remove-flag" {
    function _exports(userId: any, intent: any, { flags }: {
        flags: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/room/create-flag" {
    function _exports(userId: any, intent: any, { flags }: {
        flags: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/room/create-construction-site" {
    function _exports(userId: any, intent: any, { roomObjects, roomTerrain, bulk, roomController }: {
        roomObjects: any;
        roomTerrain: any;
        bulk: any;
        roomController: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/room/remove-construction-site" {
    function _exports(userId: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/_clear-newbie-walls" {
    function _exports({ roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/room/destroy-structure" {
    function _exports(userId: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/room/gen-energy" {
    function _exports(userId: any, intent: any, { roomObjects, roomTerrain, bulk }: {
        roomObjects: any;
        roomTerrain: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/room/intents" {
    function _exports(userId: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/links/transfer" {
    function _exports(object: any, intent: any, { roomObjects, bulk, roomController, eventLog }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/links/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/towers/heal" {
    function _exports(object: any, intent: any, { roomObjects, bulk, eventLog, gameTime }: {
        roomObjects: any;
        bulk: any;
        eventLog: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/towers/repair" {
    function _exports(object: any, intent: any, { roomObjects, bulk, stats, eventLog, gameTime }: {
        roomObjects: any;
        bulk: any;
        stats: any;
        eventLog: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/_damage" {
    function _exports(object: any, target: any, damage: any, attackType: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/towers/attack" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/towers/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/labs/boost-creep" {
    function _exports(object: any, intent: any, { roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/labs/unboost-creep" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/labs/run-reaction" {
    function _exports(object: any, intent: any, { roomObjects, bulk, gameTime }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/labs/reverse-reaction" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/labs/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/_charge-energy" {
    function _exports(spawn: any, cost: any, energyStructures: any, scope: any): boolean;
    export = _exports;
}
declare module "src/processor/intents/spawns/create-creep" {
    function _exports(spawn: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/renew-creep" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/recycle-creep" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/set-spawn-directions" {
    function _exports(spawn: any, intent: any, { bulk }: {
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/cancel-spawning" {
    function _exports(spawn: any, intent: any, { roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/ramparts/set-public" {
    function _exports(object: any, intent: any, { bulk }: {
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/terminal/send" {
    function _exports(object: any, intent: any, { bulk, gameTime }: {
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/nukers/launch-nuke" {
    function _exports(object: any, intent: any, { roomObjects, bulk, roomController, gameTime, roomInfo }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        gameTime: any;
        roomInfo: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/power-spawns/process-power" {
    function _exports(object: any, intent: any, { roomObjects, bulk, bulkUsers, roomController, stats, gameTime }: {
        roomObjects: any;
        bulk: any;
        bulkUsers: any;
        roomController: any;
        stats: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/power-spawns/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/transfer" {
    function _exports(object: any, intent: any, { roomObjects, bulk, roomController, eventLog }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/create-creep" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/reserveController" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/attackController" {
    function _exports(object: any, intent: any, { roomObjects, bulk, roomController, gameTime, eventLog, roomInfo }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        gameTime: any;
        eventLog: any;
        roomInfo: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/upgradeController" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/intents" {
    function _exports(object: any, objectIntents: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/factories/produce" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/controllers/unclaim" {
    function _exports(object: any, intent: any, { bulk, bulkUsers, gameTime, roomInfo, users }: {
        bulk: any;
        bulkUsers: any;
        gameTime: any;
        roomInfo: any;
        users: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/controllers/activateSafeMode" {
    function _exports(object: any, intent: any, { bulk, gameTime, roomInfo }: {
        bulk: any;
        gameTime: any;
        roomInfo: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/invader-core/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/energy/tick" {
    function _exports(object: any, { roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/sources/tick" {
    function _exports(object: any, { bulk, roomController, gameTime }: {
        bulk: any;
        roomController: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/deposits/tick" {
    function _exports(object: any, { roomObjects, bulk, gameTime }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/minerals/tick" {
    function _exports(object: any, { bulk, gameTime }: {
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/spawns/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/ramparts/tick" {
    function _exports(object: any, { roomObjects, bulk, roomController, gameTime }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/extensions/tick" {
    function _exports(object: any, { bulk, roomController }: {
        bulk: any;
        roomController: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/roads/tick" {
    function _exports(object: any, { roomObjects, roomTerrain, bulk, gameTime }: {
        roomObjects: any;
        roomTerrain: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/construction-sites/tick" {
    function _exports(object: any, {}: {}): void;
    export = _exports;
}
declare module "src/processor/intents/keeper-lairs/tick" {
    function _exports(object: any, { roomObjects, bulk, gameTime }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/portals/tick" {
    function _exports(object: any, { roomObjects, bulk, gameTime }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/constructedWalls/tick" {
    function _exports(object: any, { roomObjects, bulk, roomController, gameTime }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/links/tick" {
    function _exports(object: any, { bulk }: {
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/extractors/tick" {
    function _exports(object: any, { bulk }: {
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/towers/tick" {
    function _exports(object: any, { bulk }: {
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/controllers/tick" {
    function _exports(object: any, { bulk, bulkUsers, gameTime, roomInfo, users }: {
        bulk: any;
        bulkUsers: any;
        gameTime: any;
        roomInfo: any;
        users: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/labs/tick" {
    function _exports(object: any, { bulk }: {
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/containers/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/terminal/tick" {
    function _exports(object: any, { bulk, roomController }: {
        bulk: any;
        roomController: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/tombstones/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/ruins/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/factories/tick" {
    function _exports(object: any, { roomController, bulk }: {
        roomController: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/nukes/tick" {
    function _exports(object: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/storages/tick" {
    function _exports(object: any, { bulk, roomController, gameTime }: {
        bulk: any;
        roomController: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor" {
    export {};
}
declare module "src/runner" {
    export {};
}
declare module "src/game/constants" {
    export {};
}
declare module "src/processor/global-intents/power/createPowerCreep" {
    function _exports(intent: any, user: any, { userPowerCreeps, bulkUsersPowerCreeps }: {
        userPowerCreeps: any;
        bulkUsersPowerCreeps: any;
    }): void;
    export = _exports;
}
declare module "src/processor/global-intents/power/deletePowerCreep" {
    function _exports(intent: any, user: any, { userPowerCreeps, bulkObjects, bulkUsersPowerCreeps }: {
        userPowerCreeps: any;
        bulkObjects: any;
        bulkUsersPowerCreeps: any;
    }): void;
    export = _exports;
}
declare module "src/processor/global-intents/power/renamePowerCreep" {
    function _exports(intent: any, user: any, { userPowerCreeps, bulkObjects, bulkUsersPowerCreeps }: {
        userPowerCreeps: any;
        bulkObjects: any;
        bulkUsersPowerCreeps: any;
    }): void;
    export = _exports;
}
declare module "src/processor/global-intents/power/spawnPowerCreep" {
    function _exports(intent: any, user: any, { roomObjectsByType, userPowerCreeps, bulkObjects, bulkUsersPowerCreeps, shardName, gameTime }: {
        roomObjectsByType: any;
        userPowerCreeps: any;
        bulkObjects: any;
        bulkUsersPowerCreeps: any;
        shardName: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/global-intents/power/suicidePowerCreep" {
    function _exports(intent: any, user: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/global-intents/power/upgradePowerCreep" {
    function _exports(intent: any, user: any, { roomObjectsByType, userPowerCreeps, gameTime, bulkObjects, bulkUsersPowerCreeps }: {
        roomObjectsByType: any;
        userPowerCreeps: any;
        gameTime: any;
        bulkObjects: any;
        bulkUsersPowerCreeps: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/attack" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/attackController" {
    function _exports(object: any, intent: any, { roomObjects, bulk, roomController, gameTime, eventLog }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/build" {
    function _exports(object: any, intent: any, { roomObjects, roomTerrain, bulk, roomController, stats, gameTime, eventLog }: {
        roomObjects: any;
        roomTerrain: any;
        bulk: any;
        roomController: any;
        stats: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/claimController" {
    function _exports(object: any, intent: any, { roomObjects, bulk, bulkUsers, users }: {
        roomObjects: any;
        bulk: any;
        bulkUsers: any;
        users: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/dismantle" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/generateSafeMode" {
    function _exports(object: any, intent: any, { roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/harvest" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/heal" {
    function _exports(object: any, intent: any, { roomObjects, roomController, gameTime, eventLog }: {
        roomObjects: any;
        roomController: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/pickup" {
    function _exports(object: any, intent: any, { roomObjects, bulk }: {
        roomObjects: any;
        bulk: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/rangedAttack" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/rangedHeal" {
    function _exports(object: any, intent: any, { roomObjects, roomController, gameTime, eventLog }: {
        roomObjects: any;
        roomController: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/rangedMassAttack" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/repair" {
    function _exports(object: any, intent: any, { roomObjects, bulk, stats, eventLog }: {
        roomObjects: any;
        bulk: any;
        stats: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/reserveController" {
    function _exports(object: any, intent: any, { roomObjects, bulk, gameTime, eventLog }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/say" {
    function _exports(object: any, intent: any, {}: {}): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/signController" {
    function _exports(object: any, intent: any, { roomObjects, bulk, gameTime }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/suicide" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/upgradeController" {
    function _exports(object: any, intent: any, { roomObjects, bulk, bulkUsers, stats, gameTime, eventLog }: {
        roomObjects: any;
        bulk: any;
        bulkUsers: any;
        stats: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/creeps/withdraw" {
    function _exports(object: any, intent: any, { roomObjects, bulk, roomController, gameTime, eventLog }: {
        roomObjects: any;
        bulk: any;
        roomController: any;
        gameTime: any;
        eventLog: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/flags/intents" {
    function _exports(object: any, objectIntents: any, roomObjects: any, roomTerrain: any, bulk: any, bulkUsers: any, roomController: any, stats: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/drop" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/enableRoom" {
    function _exports(object: any, intent: any, { roomObjects, bulk, gameTime }: {
        roomObjects: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/pickup" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/renew" {
    function _exports(object: any, intent: any, { roomObjects, roomController, bulk, gameTime }: {
        roomObjects: any;
        roomController: any;
        bulk: any;
        gameTime: any;
    }): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/say" {
    function _exports(object: any, intent: any, {}: {}): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/transfer" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/usePower" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
declare module "src/processor/intents/power-creeps/withdraw" {
    function _exports(object: any, intent: any, scope: any): void;
    export = _exports;
}
