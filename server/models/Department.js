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
		type: mongoose.Schema.ObjectId,
		ref: 'DepartmentSchema'
	}
});

module.exports = DepartmentSchema;