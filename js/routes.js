angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.blog', {
    url: '/blog',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blog.html',
        controller: 'blogCtrl'
      }
    }
  })

  .state('menu.aboutPage', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutPage.html',
        controller: 'aboutPageCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu/home')

  

});