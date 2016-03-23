angular
  .module('nflCrime',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/dui-crime', {
        templateUrl: "templates/dui-crime.html",
        controller: "DuiArrestController"
      })
      .when('/gun-crime', {
        templateUrl: "templates/gun-crime.html",
        controller: 'GunArrestController'
      })
    })
