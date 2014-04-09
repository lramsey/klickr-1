'use strict';

angular.module('klickrApp')
  .controller('NavCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.bg = function() {
      var bg = {
        '/': 'landing-bg',
        '/gallery': 'gallery-bg'
      };

      console.log('BG', bg[$location.path()] || bg['/']);
      return bg[$location.path()] || bg['/'];
    };

  });