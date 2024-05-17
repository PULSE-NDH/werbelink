var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema for our links
var urlSchema = new Schema({
  id:  String,
  long_url: String,
  count : {type: Number,default: 0},
  created_at: Date
});


var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
