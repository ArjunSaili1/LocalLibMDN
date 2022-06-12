var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Genre = new Schema({
    name: {type: String, minLength: 3, maxLength: 300}
})

Genre.virtual('url').get(function(){
    return '/catalog/genre/' + this._id;
})

module.exports = mongoose.model('Genre', Genre);