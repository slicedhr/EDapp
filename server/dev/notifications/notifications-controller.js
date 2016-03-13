(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name notifications.controller:NotificationsCtrl
   *
   * @description
   *
   */
  angular
    .module('notifications')
    .controller('NotificationsCtrl', NotificationsCtrl);

  function NotificationsCtrl(AppService, $filter, toastr, $rootScope) {
    var vm = this;
    vm.ctrlName = 'NotificationsCtrl';

    AppService.http({ url: 'categoria', method: 'GET', prefix: true }).then(function(success){

      vm.categorias = success.data
    })

    vm.addOrRemoveTag = function(tag) {

      var tempobj = {}

      tempobj[tag] = true;

      if ($filter('filter')(vm.data.tags, tempobj)[0])
        return

      else{

        var obj = {}
       
        obj[tag] = true
       
        vm.data.tags.push(obj) 

      }


    }

    vm.selectAll = function(){

      vm.data.tags = []
    
      vm.categorias.forEach( function(element, index) {
          
        var obj = {}
       
        obj[element.id] = vm.selectedAll;

        vm.data.tags[element.id] = vm.selectedAll;

      });
      
    }

    vm.defaultData = {

      contents: {}, //Android IOS

      headings: {}, //Android

      isIos: true, //For IOS user

      isAndroid: true, //For Android users

      tags: [],

      data: {},

      // small_icon: 'ic_stat_onesignal_default',

      large_icon: 'ic_onesignal_large_icon_default',

      big_picture: '',

      send_after: ''

    }

    vm.data = angular.copy(vm.defaultData)



    vm.send = function(){
      
      $rootScope.loading = true;

      var definitiveTags = [];

      if (vm.data.tags.length)

        vm.data.tags.forEach( function(element, index) {


          if (vm.data.tags[Object.keys(element)[0]])

            definitiveTags.push({
              key: Object.keys(element)[0],
              relation: '=',
              value: Object.keys(element)[0]
            });

          
        });

      if (!definitiveTags.length) {

        toastr.error('Se debe seleccionar al menos una categoría!', 'Err')

        $rootScope.loading = false;

        return
      }

      vm.data.tags = definitiveTags;

      var config = {

        url: '/notificar',

        method: 'POST',

        data: {
          data: vm.data
        }

      }

      AppService.http(config).then(function(success){

        $rootScope.loading = false;
      
        vm.data = angular.copy(vm.defaultData)

        toastr.success('Notificación Enviada!', 'Ok')

      })

    }

  }
}());
