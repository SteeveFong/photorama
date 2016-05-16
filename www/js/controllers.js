angular.module('starter.controllers', [])
  .controller('AppCtrl', function () {

  })
  .controller('PhotosCtrl', function ($scope, FlickApi, Photos, $window) {
    $scope.photos = []

    $scope.imageSize = $window.innerWidth / 4

    FlickApi.getPhotos().then(function (photos) {
      photos.forEach(function (photo) {
        Photos.add(photo)
      })
      $scope.photos = Photos.getAll()
    }, function (error) {
      console.log(error);
    })
  })
  .controller('PhotosDetailCtrl', function ($scope, $stateParams, Photos) {
    $scope.backButton = 'photos'
    $scope.photo      = {}

    if ($stateParams.id) {
      $scope.photo = Photos.getById($stateParams.id)
      console.log($scope.photo);
    }
  })
  .controller('FavoritesCtrl', function () {

  })
  .controller('FavoritesDetailCtrl', function () {

  })
