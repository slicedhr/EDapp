(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive:theFooter
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="home">
       <file name="index.html">
        <the-footer></the-footer>
       </file>
     </example>
   *
   */
  angular
    .module('home')
    .directive('theFooter', theFooter);

  function theFooter() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'home/the-footer-directive.tpl.html',
      replace: false,
      controllerAs: 'theFooter',
      controller: function () {
        var vm = this;
        vm.name = 'theFooter';

        vm.date = new Date().getFullYear();
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
