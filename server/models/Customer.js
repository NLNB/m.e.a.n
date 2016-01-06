var mongoose = require('mongoose');

//Create the CustomerSchema
var CustomerSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	code:{
		type: String,
		required: true
	},
	address:{
		type: String,
		required: false
	},
	lineMan:{
		type: String,
		required: false
	},
	tel:{
		type: String,
		required: false
	},
	tax:{
		type: String,
		required: false
	},
	dept:{
		type: String,
		required: false
	},


});


//Export the model schema
module.exports = CustomerSchema;