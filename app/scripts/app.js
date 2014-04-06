angular.module('Klickr', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html'
    })
    .when('/links', {
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