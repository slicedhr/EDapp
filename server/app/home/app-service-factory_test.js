/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AppService', function () {
  var factory;

  beforeEach(module('home'));

  beforeEach(inject(function (AppService) {
    factory = AppService;
  }));

  it('should have someValue be AppService', function () {
    expect(factory.someValue).toEqual('AppService');
  });

  it('should have someMethod return AppService', function () {
    expect(factory.someMethod()).toEqual('AppService');
  });
});
