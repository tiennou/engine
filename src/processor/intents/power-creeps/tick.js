var _ = require('lodash'),
    movement = require('../movement');

module.exports = function(object, scope) {

    const {bulk} = scope;

    if(!object || object.type != 'powerCreep') return;

    movement.execute(object, scope);

    require('../_exit')(object, scope, true);

    let hits = object.hits;

    if (object._damageToApply) {
        hits -= object._damageToApply;
        delete object._damageToApply;
    }

    if (object._healToApply) {
        hits += object._healToApply;
        delete object._healToApply;
    }

    if(hits > object.hitsMax) {
        hits = object.hitsMax;
    }

    if(hits != object.hits) {
        bulk.update(object, {hits});
    }

    if(!_.isEqual(object.actionLog, object._actionLog)) {
        bulk.update(object, {actionLog: object.actionLog});
    }

};
