'use strict';

describe('Controller: DeptAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeptAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeptAddCtrl = $controller('DeptAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
