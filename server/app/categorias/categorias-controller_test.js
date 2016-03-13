/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CategoriasCtrl', function () {
  var ctrl;

  beforeEach(module('categorias'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CategoriasCtrl');
  }));

  it('should have ctrlName as CategoriasCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CategoriasCtrl');
  });
});
