var restful = require('node-restful');

module.exports = function(app, route){

	var rest = restful.model('department', app.models.department)
		.methods(['get', 'put', 'post', 'delete']);

	rest.register(app, route);

	return function(req, res, next){
		next();
	};
};