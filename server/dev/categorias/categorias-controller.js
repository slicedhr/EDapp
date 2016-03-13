(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name categorias.controller:CategoriasCtrl
   *
   * @description
   *
   */
  angular
    .module('categorias')
    .controller('CategoriasCtrl', CategoriasCtrl);

  function CategoriasCtrl($scope, $rootScope, $mdDialog, AppService, $filter) {

    var vm = this;

    vm.data = [];

    vm.openDialog = function ($event, categoria){

      $scope.selectedCategoria = angular.copy(categoria) || undefined;

      $mdDialog.show({

        controller: DialogController,

        controllerAs: 'categoriaForm',

        templateUrl: 'categorias/categorias-form.tpl.html',

        parent: angular.element(document.body),

        targetEvent: $event,

        clickOutsideToClose:true,

        scope: $scope,

        preserveScope: true

      })
      .then(function(response) {

        if (response.verb === 'POST') vm.data.push(response.data)

        if (response.verb === 'PUT'){

          vm.data[vm.data.indexOf($filter('filter')(vm.data, { id: response.data.id })[0])] = response.data


        } 

      }, function() {



      })


      function DialogController($scope, $rootScope, $mdDialog, AppService){

        var self = this;

        this.data = $scope.selectedCategoria || {}

        this.save = function(){

          var verb = self.data.id ? 'PUT' : 'POST',

            config = {

            method: verb,

            url: self.data.id ? 'categoria/' + self.data.id : 'categoria',

            data: self.data,

            prefix: true

          }

          AppService
            .http(config)
            .then(function(success){

              $mdDialog.hide({

                data: success.data,

                verb: verb

              })

            })
            .catch(function(){

              $rootScope.$broadcast('Err')

            })


        }



      }

    }

    vm.delete = function($event, item){

        var confirm = $mdDialog
                          .confirm()
                          .title('Confirmación')
                          .content('¿Realmente deseas eliminar este item?')
                          .ariaLabel('Delete Confirm')
                          .ok('Confirmar')
                          .cancel('Cancelar')
                          .targetEvent($event)

          $mdDialog.show(confirm).then(function() {
            
            var config = {

              url: 'categoria/' + item.id,

              method: 'DELETE',

              prefix: true

            }

            AppService.http(config).then(function(response){

              vm.data.splice(vm.data.indexOf($filter('filter')(vm.data, { id: item.id })[0]), 1);

            })

          }, function() {
          });


    }

    AppService.http({

      url: 'categoria?limit=99',

      method: 'GET',

      prefix: true

    }).then(function(success){

      vm.data = success.data

    })
    .catch(function(){

      $rootScope.$broadcast('Err')

    })

  }
}());
