var log = require('logger')('vehicle-make');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var types = require('validators').types;

var make = Schema({
    has: {type: Object, default: {}},
    allowed: {type: Object, default: {}},
    title: {
        type: String,
        required: true,
        validator: types.title({
            length: 100
        })
    }
}, {collection: 'vehicle-makes'});

make.set('toJSON', {
    getters: true,
    //virtuals: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    }
});

make.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('vehicle-makes', make);