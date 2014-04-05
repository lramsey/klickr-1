angular.module('klickr', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html' // this is the request to the server for the file
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        // redirectTo: '/'
      });
  });