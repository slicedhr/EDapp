/* global describe, beforeEach, it, browser, expect */
'use strict';

var CategoriasPagePo = require('./categorias.po');

describe('Categorias page', function () {
  var categoriasPage;

  beforeEach(function () {
    categoriasPage = new CategoriasPagePo();
    browser.get('/#/categorias');
  });

  it('should say CategoriasCtrl', function () {
    expect(categoriasPage.heading.getText()).toEqual('categorias');
    expect(categoriasPage.text.getText()).toEqual('CategoriasCtrl');
  });
});
