var log = require('logger')('model-vehicle-makes');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var validators = require('validators');
var model = require('model');

var types = validators.types;

var make = Schema({
    title: {
        type: String,
        required: true,
        validator: types.title({
            length: 100
        })
    }
}, {collection: 'vehicle-makes'});

make.plugin(mongins());
make.plugin(mongins.user);
make.plugin(mongins.createdAt());
make.plugin(mongins.updatedAt());

model.ensureIndexes(make, [
  {createdAt: -1, _id: -1}
]);

module.exports = mongoose.model('vehicle-makes', make);