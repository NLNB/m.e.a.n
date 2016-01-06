'use strict';

describe('Controller: DeptViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeptViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeptViewCtrl = $controller('DeptViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
