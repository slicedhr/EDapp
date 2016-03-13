/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('EmisoraCtrl', function () {
  var ctrl;

  beforeEach(module('emisora'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('EmisoraCtrl');
  }));

  it('should have ctrlName as EmisoraCtrl', function () {
    expect(ctrl.ctrlName).toEqual('EmisoraCtrl');
  });
});
