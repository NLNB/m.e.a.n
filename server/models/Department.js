var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	spell:{
		type: String,
		required: true
	},
	parent:{
		type: String,
		required: false
	}
});

module.exports = DepartmentSchema;