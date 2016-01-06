'use strict';

describe('Controller: DeptDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeptDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeptDeleteCtrl = $controller('DeptDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
