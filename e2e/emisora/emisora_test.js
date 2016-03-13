/* global describe, beforeEach, it, browser, expect */
'use strict';

var EmisoraPagePo = require('./emisora.po');

describe('Emisora page', function () {
  var emisoraPage;

  beforeEach(function () {
    emisoraPage = new EmisoraPagePo();
    browser.get('/#/emisora');
  });

  it('should say EmisoraCtrl', function () {
    expect(emisoraPage.heading.getText()).toEqual('emisora');
    expect(emisoraPage.text.getText()).toEqual('EmisoraCtrl');
  });
});
