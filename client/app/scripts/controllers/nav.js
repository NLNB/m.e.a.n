'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NavCtrl', ['$scope', '$browser', '$location', function ($scope, $browser, $location) {

  	//$scope.isCollapsed = false;
  	//$scope.toggleCollapsibleMenu = function(){
	//	$scope.isCollapsed = true;
  	//};

  	$scope.$on('$locationChangeSuccess', function () {
  		angular.element('#navBtn').click();
  		console.log();
    });

  }]);
