(function () {
  'use strict';

  /* @ngdoc object
   * @name elDeportivoServer
   * @description
   *
   */

    function AppConfig(jwtInterceptorProvider, $httpProvider, $locationProvider, $mdThemingProvider){

      $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('light-blue')
        .warnPalette('teal')
   //    var customPrimary = {
   //      '50': '#404040',
   //      '100': '#333333',
   //      '200': '#262626',
   //      '300': '#1a1a1a',
   //      '400': '#0d0d0d',
   //      '500': '#000000',
   //      '600': '#000000',
   //      '700': '#000000',
   //      '800': '#000000',
   //      '900': '#000000',
   //      'A100': '#4d4d4d',
   //      'A200': '#595959',
   //      'A400': '#666666',
   //      'A700': '#000000'
   //  };
   //  $mdThemingProvider
   //      .definePalette('customPrimary', 
   //                      customPrimary);

   //  var customAccent = {
   //      '50': '#fbb4af',
   //      '100': '#f99d97',
   //      '200': '#f8877f',
   //      '300': '#f77066',
   //      '400': '#f55a4e',
   //      '500': '#F44336',
   //      '600': '#f32c1e',
   //      '700': '#ea1c0d',
   //      '800': '#d2190b',
   //      '900': '#ba160a',
   //      'A100': '#fccbc7',
   //      'A200': '#fde1df',
   //      'A400': '#fff8f7',
   //      'A700': '#a21309'
   //  };
   //  $mdThemingProvider
   //      .definePalette('customAccent', 
   //                      customAccent);

   //  var customWarn = {
   //      '50': '#9acffa',
   //      '100': '#82c4f8',
   //      '200': '#6ab8f7',
   //      '300': '#51adf6',
   //      '400': '#39a1f4',
   //      '500': '#2196F3',
   //      '600': '#0d8aee',
   //      '700': '#0c7cd5',
   //      '800': '#0a6ebd',
   //      '900': '#0960a5',
   //      'A100': '#b2dbfb',
   //      'A200': '#cae6fc',
   //      'A400': '#e3f2fd',
   //      'A700': '#08528d'
   //  };
   //  $mdThemingProvider
   //      .definePalette('customWarn', 
   //                      customWarn);

   //  var customBackground = {
   //      '50': '#dedede',
   //      '100': '#d1d1d1',
   //      '200': '#c4c4c4',
   //      '300': '#b7b7b7',
   //      '400': '#ababab',
   //      '500': '#9E9E9E',
   //      '600': '#919191',
   //      '700': '#848484',
   //      '800': '#787878',
   //      '900': '#6b6b6b',
   //      'A100': '#eaeaea',
   //      'A200': '#f7f7f7',
   //      'A400': '#ffffff',
   //      'A700': '#5e5e5e'
   //  };
   //  $mdThemingProvider
   //      .definePalette('customBackground', 
   //                      customBackground);

   // $mdThemingProvider.theme('default')
   //     .primaryPalette('customPrimary')
   //     .accentPalette('customAccent')
   //     .warnPalette('customWarn')
   //     .backgroundPalette('customBackground')

      $locationProvider.html5Mode(true)

      jwtInterceptorProvider.tokenGetter = function () {

        return sessionStorage['JWT'];

      }
       
      $httpProvider.interceptors.push('jwtInterceptor');

      $httpProvider.interceptors.push('ErrorInterceptor');


    }

    function RunApp($rootScope, $log, AuthService, $http, $state, toastr, $mdSidenav){

      $rootScope.auth = {}

      $rootScope.openMenu = function(menu){ 

         $mdSidenav(menu)
          .toggle()

      }

      //On route start Change
      
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {

          //Is logged not allow to change to login state
          if (angular.equals(toState.name, 'login') && sessionStorage['JWT']){

            if(angular.equals(fromState.name, ''))
              $state.transitionTo('home')

            e.preventDefault()
            
          }

        // if ( angular.equals(fromState.name, 'login') && angular.equals(toState.name,'home') )


        //Isnt login
        
        if (!toState.withoutAuthorization && !sessionStorage['JWT']){

          AuthService.clearSession();

          e.preventDefault();

          $state.transitionTo('login')

        }


      })

      //On Change Completed
    
      $rootScope.$on('$stateChangeSuccess', function (event, next, current)  {

      })

        //Handle AuthError

      $rootScope.$on('AuthError', function (something) {

        $log.warn('AuthError')

        if (sessionStorage['JWT']) delete sessionStorage['JWT']

        $rootScope.auth.logged = false

        $state.transitionTo('login')

      })

        //Handdle server error
      $rootScope.$on('ServerError', function (something) {

        console.info(something)


        toastr.error('Al parecer ocurrió un error!', 'Error')


      })


    }


    function AppCtrl($rootScope, $scope, $timeout, $mdDialog, AuthService){

      var self = this

      this.loading = false

      this.loaded = true


      if (sessionStorage['JWT']){

        AuthService.verify().then( function (response) {

          $rootScope.auth.user = response.data.user

        }, function (err) {

          alert('Ocurrio un error! \r\n Detalle: \r\n '+ JSON.stringify(err))

        })
          
      }
      else
        $rootScope.$broadcast('AuthError')




       // When is loading
      
      $rootScope.$on('cfpLoadingBar:loading', function (data) {

        self.loading = true

      })

      // On load completed

      $rootScope.$on('cfpLoadingBar:completed', function (data) {

        self.loading = false

      })

    }



  angular
    .module('elDeportivoServer', [
      'ngMaterial',
      'ui.router',
      'angular-jwt',
      'angular-loading-bar',
      'toastr',
      'ngAnimate',
      'anim-in-out',
      'login',
      'categorias',
      'users',
      'notifications',
      'home'
    ])
    .controller('AppCtrl', AppCtrl)
    .config(AppConfig)
    .run(RunApp)
    ;
}());
