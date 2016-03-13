/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('theFooter', function () {
  var scope
    , element;

  beforeEach(module('home', 'home/the-footer-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<the-footer></the-footer>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().theFooter.name).toEqual('theFooter');
  });
});
