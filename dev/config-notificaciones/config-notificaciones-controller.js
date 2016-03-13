(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name configNotificaciones.controller:ConfigNotificacionesCtrl
   *
   * @description
   *
   */
  angular
    .module('configNotificaciones')
    .filter('getByProperty', function() {
        return function(propertyName, propertyValue, collection) {
            var i=0, len=collection.length;
            for (; i<len; i++) {
                if (collection[i][propertyName] == +propertyValue) {
                    return collection[i];
                }
            }
            return null;
        }
    })
    .controller('ConfigNotificacionesCtrl', ConfigNotificacionesCtrl);

  function ConfigNotificacionesCtrl($rootScope, $ionicPopup, AppService, apiUrl, $filter) {
    
    var vm = this;

    vm.ctrlName = 'ConfigNotificacionesCtrl';

    vm.addOrDelete = function(item){

      if (item.checked)
        window.plugins.OneSignal.sendTag(item.id, item.id) 

      else
        window.plugins.OneSignal.deleteTag(item.id)

      

    }

    AppService.http({
        url: apiUrl + '/api/v1/categoria',
        method: 'GET'
      })
      .then(function(success){

          vm.categorias = success.data;

          if ($rootScope.device.verb === 'POST'){

            var tagsToSend = {}

            vm.categorias.forEach( function(element, index) {
              
              tagsToSend[element.id] = element.id

            });

            vm.tags = tagsToSend

            // window.plugins.OneSignal.sendTags(tagsToSend);


            vm.categorias.forEach( function(element, index) {
                
                element.checked = true;

              });

            $rootScope.device.verb = 'GET'
            

          }

          if ($rootScope.device.verb === 'GET'){

             AppService.http({
              url: 'https://onesignal.com/api/v1/players/' + $rootScope.device.deviceid,
              method: 'GET'
            }).then(function(success){

              vm.tags = Object.keys(success.data.tags)

              vm.categorias.forEach( function(element, index) {

                vm.tags.forEach( function(tag, indx) {
                  
                  if (tag == element.id)
                    vm.categorias[index].checked = true

                });
                
              });


            })

            

          }

          
      
      })
  }
}());
