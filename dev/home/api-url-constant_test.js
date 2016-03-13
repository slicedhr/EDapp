/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('apiUrl', function () {
  var constant;

  beforeEach(module('home'));

  beforeEach(inject(function (apiUrl) {
    constant = apiUrl;
  }));

  it('should equal 0', function () {
    expect(constant).toBe(0);
  });
});
