'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeptsCtrl
 * @description
 * # DeptsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DeptsCtrl', function ($scope, Dept, $uibModal) {
    $scope.maxSize = 10;
    $scope.bigCurrentPage = 1;

    $scope.itemsPerPage = 25;

    Dept.getList().then(function(data){
      $scope.bigTotalItems = data.length;
      $scope.numPages = data.length/$scope.itemsPerPage;
      $scope.all = data;

      $scope.depts = data.slice(($scope.bigCurrentPage-1)*$scope.itemsPerPage, $scope.bigCurrentPage*$scope.itemsPerPage);

      toastr.info("Dept List View !");
    });


    $scope.open = function (size, id) {

      $scope.dept = Dept.one(id).get().$object;

      $uibModal.open({
        animation: true,
        templateUrl: 'views/dept-del-modal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          dept: function () {
            return $scope.dept;
          },
          wq:function(){
            return 'wangqiang';
          }
        }
      });

      
    };

  })
  .controller('DeptsPageCtrl', function ($scope) {

    $scope.pageChange = function(){
      $scope.depts = $scope.all.slice(($scope.bigCurrentPage-1)*25, $scope.bigCurrentPage*25);
      //toastr.info("Dept List View !");
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

    toastr.info("Dept Create View !");
  })
  .controller('DeptDeleteCtrl', function ($scope, $routeParams, Dept, $location) {
    $scope.dept = Dept.one($routeParams.id).get().$object;

    $scope.deleteDept = function(){
      $scope.dept.remove().then(function(){
        toastr.info("Dept Delete Success !");
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

    toastr.info("Dept Tree View !");
  })
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, dept) {
    $scope.dept = dept;

    $scope.ok = function () {
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });