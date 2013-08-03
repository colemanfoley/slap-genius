'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
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
