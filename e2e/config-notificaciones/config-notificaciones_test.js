/* global describe, beforeEach, it, browser, expect */
'use strict';

var ConfigNotificacionesPagePo = require('./config-notificaciones.po');

describe('Config notificaciones page', function () {
  var configNotificacionesPage;

  beforeEach(function () {
    configNotificacionesPage = new ConfigNotificacionesPagePo();
    browser.get('/#/config-notificaciones');
  });

  it('should say ConfigNotificacionesCtrl', function () {
    expect(configNotificacionesPage.heading.getText()).toEqual('configNotificaciones');
    expect(configNotificacionesPage.text.getText()).toEqual('ConfigNotificacionesCtrl');
  });
});
