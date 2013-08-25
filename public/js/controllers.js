'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('SongMapCtrl', function ($scope, angularFire) {
    var url = 'https://slapgenius.firebaseio.com/songs';
    var promise = angularFire(url, $scope, 'songs', []);
    promise.then(function() {
      console.log($scope.songs);
    })
  }).
  controller('AddSongCtrl', function ($scope, angularFire) {
    var url = 'https://slapgenius.firebaseio.com/songsArray';
    var promise = angularFire(url, $scope, 'songsArray', []);
    promise.then(function() {
      $scope.songsArray.push({title: "Homecoming", artist: "Kanye West"});
      console.log($scope.songsArray);
      // $scope.addSong = function() {
      //   $scope.songsArray.push({title: $scope.addSongForm.title, artist: $scope.addSongForm.artist});
      // };
    });
  });
