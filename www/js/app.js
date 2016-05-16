// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'index.html',
        controller: 'AppCtrl'
      })
      .state('app.tabs', {
        url: '/tabs',
        templateUrl: 'templates/tabs.html'
      })
      .state('app.tabs.photos', {
        url: '/photos',
        templateUrl: 'templates/photo-collection.html',
        controller: 'PhotosCtrl'
      })
      .state('app.tabs.photos-detail', {
        url: '/photos/:id/detail',
        templateUrl: 'templates/photo-details.html',
        controller: 'PhotosDetailCtrl'
      })
      .state('app.tabs.favorites', {
        url: '/favorites',
        templateUrl: 'templates/photo-collection.html',
        controller: 'FavoritesCtrl'
      })
      .state('app.tabs.favorites-detail', {
        url: '/favorites/:id/detail',
        templateUrl: 'templates/photo-details.html',
        controller: 'FavoritesDetailCtrl'
      })

    $urlRouterProvider.otherwise('/app/tabs/photos');
  })
