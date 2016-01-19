'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngResource',
    'ngRoute',
    'restangular',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl'
      })
      .when('/dept/create', {
        templateUrl: 'views/dept-add.html',
        controller: 'DeptAddCtrl'
      })
      .when('/dept/:id', {
        templateUrl: 'views/dept-view.html',
        controller: 'DeptViewCtrl'
      })
      .when('/dept/:id/edit', {
        templateUrl: 'views/dept-edit.html',
        controller: 'DeptEditCtrl'
      })
      .when('/dept/:id/delete', {
        templateUrl: 'views/dept-delete.html',
        controller: 'DeptDeleteCtrl'
      })
      .when('/depts', {
        templateUrl: 'views/depts.html',
        controller: 'DeptsCtrl'
      })
      .when('/dept-tree', {
        templateUrl: 'views/dept-tree.html',
        controller: 'DeptTreeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular){
    return MovieRestangular.service('movie');
  })
  .factory('DeptRestangular', function(Restangular){
    //Restangular.setDefaultRequestParams('get', {limit: 20});

    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Dept', function(DeptRestangular){
    return DeptRestangular.service('dept');
  })
  .directive('youtube', function(){
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function($sce){
    return function(url){
      return $sce.trustAsResourceUrl(url);
    };
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '*://www.youtube.com/**'
    ]);
  })
  .config(function(toastr){
    toastr.options.timeOut = 4000;
    toastr.options.showMethod = 'slideDown';
    toastr.options.positionClass = 'toast-bottom-right';
    toastr.options.progressBar = false;
  })
  .constant('toastr', toastr);
