var log = require('logger')('model-vehicle-makes');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var types = require('validators').types;

var make = Schema({
    title: {
        type: String,
        required: true,
        validator: types.title({
            length: 100
        })
    }
}, {collection: 'vehicle-makes'});

make.plugin(mongins);
make.plugin(mongins.user);
make.plugin(mongins.createdAt);
make.plugin(mongins.updatedAt);

make.set('toJSON', {
    getters: true,
    //virtuals: false,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
    }
});

make.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('vehicle-makes', make);