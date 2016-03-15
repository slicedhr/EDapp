(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name emisora.controller:EmisoraCtrl
   *
   * @description
   *
   */
  angular
    .module('emisora')
    .controller('EmisoraCtrl', EmisoraCtrl);

  function EmisoraCtrl($rootScope) {

    var vm = this;

    $rootScope.audio.play();
    
    $rootScope.playing = true;

    // var audio = document.getElementById('audio')

    // audio.play()

    vm.playToggle = function(){

      if ($rootScope.playing){

        $rootScope.audio.pause();

        $rootScope.playing = false;

      }

      else{

       $rootScope.audio.play()

        $rootScope.playing = true

      }

    }


  }
}());
