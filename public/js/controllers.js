'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('SongMapCtrl', function ($scope, angularFireCollection) {
    var url = 'https://slapgenius.firebaseio.com/songs';
    $scope.songs = angularFireCollection(new Firebase(url).limit(50));
  }).
  controller('AddSongCtrl', function ($scope, angularFireCollection) {
    var url = 'https://slapgenius.firebaseio.com/songs';
    $scope.songs = angularFireCollection(new Firebase(url).limit(50));
    $scope.addSong = function() {
      $scope.songs.add({title: $scope.addSongForm.title, artist: $scope.addSongForm.artist});
    };
  });
