'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('SongMapCtrl', function ($scope, $http) {
    $http.get('/api/songs').
      success(function(data, status, headers, config) {
        $scope.songs = data.songs;
      });
  }).
  controller('AddSongCtrl', function ($scope, $http) {
    $scope.submitSong = function() {
      $http.post('/api/song', $scope.form).
        success(function(data) {
          //$location.path('/');
        });
    };
  });
