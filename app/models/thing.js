let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Thing model schema.
 */
let thingSchema = new Schema({
    ip : String,
    mac : String,
    name : String,
    type : String,
    created_date: Date,
    updated_date: Date
});

let Thing = mongoose.model('Thing', thingSchema);
module.exports = Thing;