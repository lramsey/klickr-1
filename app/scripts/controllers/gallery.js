'use strict';

angular.module('klickrApp')
  .controller('GalleryCtrl', function ($scope, KlickService) {
    $scope.refresh = function(){
      return KlickService.getKlicks().then(function(klicks){
        console.log(klicks);
        $scope.klicks = klicks;
      });
    };

    $scope.refresh();
  });