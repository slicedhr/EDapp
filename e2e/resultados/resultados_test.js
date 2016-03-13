/* global describe, beforeEach, it, browser, expect */
'use strict';

var ResultadosPagePo = require('./resultados.po');

describe('Resultados page', function () {
  var resultadosPage;

  beforeEach(function () {
    resultadosPage = new ResultadosPagePo();
    browser.get('/#/resultados');
  });

  it('should say ResultadosCtrl', function () {
    expect(resultadosPage.heading.getText()).toEqual('resultados');
    expect(resultadosPage.text.getText()).toEqual('ResultadosCtrl');
  });
});
