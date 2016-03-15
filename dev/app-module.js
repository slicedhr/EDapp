if (!Array.prototype.find) {

  Array.prototype.find = function(predicate) {

    if (this == null) 

      throw new TypeError('Array.prototype.find called on null or undefined');

    
    if (typeof predicate !== 'function') 
      throw new TypeError('predicate must be a function');
    
    var list = Object(this);

    var length = list.length >>> 0;

    var thisArg = arguments[1];

    var value;

    for (var i = 0; i < length; i++) {

      value = list[i];

      if (predicate.call(thisArg, value, i, list))
        return value;
      
    }

    return undefined;

  };

}

(function () {
  'use strict';

  /* @ngdoc object
   * @name elDeportivo
   * @description
   *
   */
   function AppCtrl($ionicPlatform, $rootScope, $sce, $ionicSideMenuDelegate, $state, $ionicPopup, AppService, apiUrl, $ionicLoading){

    var vm = this;

    $rootScope.$on('$stateChangeStart', function(){

        if ($ionicSideMenuDelegate.isOpenLeft()) $ionicSideMenuDelegate.toggleLeft();

        if ($ionicSideMenuDelegate.isOpenRight()) $ionicSideMenuDelegate.toggleRight();

    })

    $rootScope.$on('loading:show', function() {
      $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        })
    })

    $rootScope.$on('loading:hide', function() {
      $ionicLoading.hide()
    })

    $rootScope.$on('cfpLoadingBar:loading', function(data) {

        $rootScope.loading = true

        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        })
        

      })

      // On load completed

      $rootScope.$on('cfpLoadingBar:completed', function(data) {

        $rootScope.loading = false

        $ionicLoading.hide()

      })

    vm.getNotifications = function(){

      AppService
      .getNotifications()
      .then(function (response){
        console.log(response)

        vm.notifications = response.data.notifications;

        $rootScope.$broadcast('scroll.refreshComplete');

      })
      .catch(function (err){
        console.log(err)

        $rootScope.$broadcast('scroll.refreshComplete');

      })


    }

    vm.getNotifications()
    

    vm.showMenu = function(menu) {

      if (menu === 'left')
        $ionicSideMenuDelegate.toggleLeft();

      else if (menu === 'right')
        $ionicSideMenuDelegate.toggleRight();

    }

    vm.goAndLoad = function(url, noprefix, ancho){

       var baseurl = 'http://eldeportivo.com.co/seccionM.php', 
               url = noprefix ? url : baseurl + url, 
      transitionTo = $state.current.name === 'home' ? 'home2' : 'home';

      vm.width = ancho || 95;


        $state.transitionTo(transitionTo, { url: url });
        
    }


    $rootScope.goToHome = function(){

        $rootScope.showScrollY = true;

        $rootScope.isHeaderVisible = true;

        $rootScope.isFixedNavVisible = true;

        $rootScope.isVisibleContentHome = true;

        $state.transitionTo('home', { url:'false' })

        if ($ionicSideMenuDelegate.isOpenLeft()) $ionicSideMenuDelegate.toggleLeft();

        if ($ionicSideMenuDelegate.isOpenRight()) $ionicSideMenuDelegate.toggleRight();

    }

    $rootScope.$on('Notification', function (data){

      //Do something

      $rootScope.notificationData = JSON.stringify(data)

      console.log('Notification!')
    })


      $ionicPlatform.ready(function() {

        $ionicPlatform.registerBackButtonAction(function (event) {

              event.preventDefault();

          }, 100);

        $ionicPlatform.onHardwareBackButton(function(){

          // $ionicPopup.alert({

          //  title: 'Aviso!',

          //  template: 'Si pulsas de nuevo el boton de ir atras saldras de la aplicación.'
           
          // })

          $ionicPopup.show({
            title: 'Confirmación',
            subTitle: '¿Realmente deseas salir de la aplicación?',
            buttons: [
              { text: 'No' },
              {
                text: 'Si',
                type: 'button-positive',
                onTap: function(e) {
                  navigator.app.exitApp() 
                  
                }
              }
            ]
          })
        })

        // $cordovaStatusbar.hide()

        var notificationOpenedCallback = function(jsonData) {

          // alert("Data: \n" + JSON.stringify(jsonData))

          // alert('Works! Now... Do something!.')


         $rootScope.notificationData = jsonData

         if (jsonData.additionalData && jsonData.additionalData.link)
            vm.goAndLoad(jsonData.additionalData.link, true)


          $rootScope.$broadcast('Notification', jsonData)

        };

        if (window.plugins && window.plugins.OneSignal){

          window
            .plugins
            .OneSignal
            .init("5fc5dbef-a106-473d-adc6-648a9b5ff9a7", { 
              googleProjectNumber: "981614261162" 
            }, notificationOpenedCallback);

            window.plugins.OneSignal.enableInAppAlertNotification(true)
            
            // window.plugins.OneSignal.sendTag("developer", "true")

            window.plugins.OneSignal.getIds(function(ids) {

              AppService.http({
                method: 'POST',
                data: {
                  deviceid: ids.userId
                },
                url: apiUrl + '/api/v1/device/findorcreate' 
              })
                .then(function(success){

                  $rootScope.device = success.data;


                  if (success.data.verb == 'POST'){

                      var tagsToSend = {}

                      success.data.categorias.forEach( function(element, index) {
                        
                        tagsToSend[element.id] = element.id

                      });

                      window.plugins.OneSignal.sendTags(tagsToSend);
                  }
              
              })
                .catch(function(err){
                  
                })

          })
        }

      });

   }


   function Config($ionicConfigProvider, cfpLoadingBarProvider, $httpProvider){

      $ionicConfigProvider.views.forwardCache(true)

      cfpLoadingBarProvider.includeSpinner = false;

      cfpLoadingBarProvider.includeBar = false;

      $httpProvider.interceptors.push(function($rootScope) {
        return {
          request: function(config) {
            $rootScope.$broadcast('loading:show')
            return config
          },
          response: function(response) {
            $rootScope.$broadcast('loading:hide')
            return response
          }
        }
      })

   }

  function Run($rootScope, $state, $ionicPlatform, $ionicLoading) {


      $rootScope.isFixedNavVisible = true;

      $rootScope.deviceHeight = window.screen.height;

      $rootScope.audio = document.createElement('audio');

      $rootScope.audio.src = 'http://radio25.virtualtronics.com:8272/;stream.mp3';

       // When is loading
      
      

      
      
      $ionicPlatform.ready(function() {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        }

      });
      
  }

  angular
    .module('elDeportivo', [
      'ionic',
      'ngCordova',
      'ui.router',
      'ngAnimate',
      'anim-in-out',
      'angular-loading-bar',
      'home',
      'resultados',
      'jugadorDelMes',
      'emisora',
      'configNotificaciones'
    ])
    .controller('AppCtrl', AppCtrl)
    .config(Config)
    .run(Run)

}());
