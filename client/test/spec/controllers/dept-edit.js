'use strict';

describe('Controller: DeptEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeptEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeptEditCtrl = $controller('DeptEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
