/* global describe, beforeEach, it, browser, expect */
'use strict';

var NotificationsPagePo = require('./notifications.po');

describe('Notifications page', function () {
  var notificationsPage;

  beforeEach(function () {
    notificationsPage = new NotificationsPagePo();
    browser.get('/#/notifications');
  });

  it('should say NotificationsCtrl', function () {
    expect(notificationsPage.heading.getText()).toEqual('notifications');
    expect(notificationsPage.text.getText()).toEqual('NotificationsCtrl');
  });
});
