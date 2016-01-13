'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeptsCtrl
 * @description
 * # DeptsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DeptsCtrl', function ($scope, Dept) {
    $scope.maxSize = 10;
    $scope.bigCurrentPage = 1;

    $scope.itemsPerPage = 25;

    Dept.getList().then(function(data){
      $scope.bigTotalItems = data.length;
      $scope.numPages = data.length/$scope.itemsPerPage;
      $scope.all = data;

      $scope.depts = data.slice(($scope.bigCurrentPage-1)*$scope.itemsPerPage, $scope.bigCurrentPage*$scope.itemsPerPage);
    });
  })
  .controller('DeptsPageCtrl', function ($scope) {

    $scope.pageChange = function(){
      $scope.depts = $scope.all.slice(($scope.bigCurrentPage-1)*25, $scope.bigCurrentPage*25);
    };

  })
  .controller('DeptAddCtrl', function ($scope, Dept, $location) {
    $scope.dept = {};
    $scope.depts = Dept.getList().$object;
    $scope.saveDept = function(){
      Dept.post($scope.dept).then(function(){
        $location.path('/depts');
      });
    };
  })
  .controller('DeptDeleteCtrl', function ($scope, $routeParams, Dept, $location) {
    $scope.dept = Dept.one($routeParams.id).get().$object;
    $scope.deleteDept = function(){
      $scope.dept.remove().then(function(){
        $location.path('/depts');
      });
    };
    $scope.back = function(){
      $location.path('/dept/' + $routeParams.id);
    };
  })
  .controller('DeptEditCtrl', function ($scope, $routeParams, Dept, $location) {
    $scope.editDept = true;
    $scope.dept = {};
    $scope.depts = Dept.getList().$object;

    Dept.one($routeParams.id).get().then(function(dept){
      $scope.dept = dept;
      $scope.saveDept = function(){
        $scope.dept.save().then(function(){
          $location.path('/dept/'+$routeParams.id);
        });
      };
    });
  })
  .controller('DeptViewCtrl', function ($scope, $routeParams, Dept) {
    $scope.viewDept = true;
    $scope.dept = Dept.one($routeParams.id).get().$object;
  })
  .controller('DeptTreeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });