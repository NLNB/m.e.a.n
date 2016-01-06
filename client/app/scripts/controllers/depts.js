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

    $scope.numPages = 20;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
    console.log(Dept);
    $scope.depts = Dept.getList().$object;

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
