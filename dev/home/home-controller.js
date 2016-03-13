(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($rootScope, $ionicSideMenuDelegate, $state, $sce) {

    var vm = this;

    $rootScope.isVisibleContentHome = true;

    $rootScope.isHeaderVisible = true;

    $rootScope.showScrollY = true;

    $rootScope.isHome = true

    if ($state.params.url !== 'false'){

      var url = $state.params.url;

      // $rootScope.loadContent(url.url, url.noprefix)

      $rootScope.urlContent = $sce.trustAsResourceUrl(url);

      $rootScope.showScrollY = false;

      $rootScope.isHeaderVisible = true;

      $rootScope.isFixedNavVisible = true;

      $rootScope.isVisibleContentHome = false;


      if ($ionicSideMenuDelegate.isOpenLeft()) $ionicSideMenuDelegate.toggleLeft();

      if ($ionicSideMenuDelegate.isOpenRight()) $ionicSideMenuDelegate.toggleRight();


    }

    vm.images = [
      {
        image: 'home_alto_1.png',
        target: '?id=6&cat=Fútbol&name=Liga Colombiana'
      },
      {
        image: 'home_alto_2.png',
        target: '?id=25&cat=Fútbol&name=Selección Colombia'
      },
      {
        image: 'home_alto_3.png',
        target: '?id=11&cat=Fútbol&name=Colombianos en el Exterior'
      },
      {
        image: 'home_alto_4.png',
        target: '?cat=Farándula Deportiva'
      }
    ]


  }
}());
