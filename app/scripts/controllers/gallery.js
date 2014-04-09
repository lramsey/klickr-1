'use strict';

angular.module('klickrApp')
  .controller('GalleryCtrl', function ($scope, KlickService) {

    $scope.spinner = false;
    $scope.kOrder = '-createdAt';

    /* TODO: Sort toggle */
    $scope.sortToggle = function(param){
      if (param && param[0] === '-'){
        return param.substring(1);
      } else {
        return '-' + param;
      }
    };

    /* Pulls klicks from server  */
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