/* global describe, beforeEach, it, browser, expect */
'use strict';

var JugadorDelMesPagePo = require('./jugador-del-mes.po');

describe('Jugador del mes page', function () {
  var jugadorDelMesPage;

  beforeEach(function () {
    jugadorDelMesPage = new JugadorDelMesPagePo();
    browser.get('/#/jugador-del-mes');
  });

  it('should say JugadorDelMesCtrl', function () {
    expect(jugadorDelMesPage.heading.getText()).toEqual('jugadorDelMes');
    expect(jugadorDelMesPage.text.getText()).toEqual('JugadorDelMesCtrl');
  });
});
