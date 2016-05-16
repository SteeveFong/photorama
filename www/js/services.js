angular.module('starter.services', [])
  .factory('FlickApi', function ($q, $http) {
    var self = this

    var url_api  = 'https://api.flickr.com/services/rest'
    var api_key  = '26cf87552d5181315dc0b7aa686043f5'
    var format   = 'json'
    var method   = 'flickr.photos.getRecent'
    var extras   = 'url_m,description,views,date_taken,owner_name'
    var per_page = 20

    self.getPhotos = function () {
      var defer = $q.defer();

      $http({
        method: 'JSONP',
        url: url_api,
        params: {
          api_key: api_key,
          format: format,
          method: method,
          extras: extras,
          per_page: per_page,
          jsoncallback: 'JSON_CALLBACK'
        }
      }).then(function (response) {
        var data = response.data

        if (data.photos && data.photos.photo) {
          defer.resolve(data.photos.photo)
        } else {
          defer.reject('Photo not available')
        }
      }, function (errorResponse) {
        console.log(errorResponse);
        defer.reject(errorResponse)
      })

      return defer.promise
    }

    return self
  })
  .factory('Photos', function ($localStorage, $sessionStorage) {
    var self = this
    $sessionStorage.photos = []

    self.add = function (photo) {
      $sessionStorage.photos.push(photo)
    }

    self.getAll = function () {
      return $sessionStorage.photos
    }

    self.getById = function (id) {
      var myPhoto = {}

      $sessionStorage.photos.forEach(function (photo) {
        if (photo.id == id) {
          myPhoto = photo
        }
      })

      return myPhoto
    }

    return self
  })
