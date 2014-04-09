'use strict';

angular.module('klickrApp')
  .controller('GalleryCtrl', function ($scope, KlickService) {

    $scope.spinner = false;
    $scope.refresh = function(){
      $scope.spinner = true;
      return KlickService.getKlicks().then(function(klicks){
        console.log(klicks);
        $scope.klicks = klicks;
        $scope.spinner = false;
      });
    };

    $scope.refresh();
  });