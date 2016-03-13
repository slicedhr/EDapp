/* global element, by */
'use strict';

function NotificationsPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = NotificationsPage;
