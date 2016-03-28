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
      .when('/drug-crime', {
        templateUrl: "templates/drug-crime.html",
        controller: 'DrugsArrestController'
      })
      .when('/sex-crime', {
        templateUrl: "templates/sex-crime.html",
        controller: 'SexArrestController'
      })
      .when('/pimping-crime', {
        templateUrl: "templates/pimping-crime.html",
        controller: "PimpingArrestController"
      })
      .when('/parking-crime', {
        templateUrl: "templates/parking-crime.html",
        controller: "ParkingArrestController"
      })
      .when('/Drunk-crime', {
        templateUrl: "templates/Drunk-crime.html",
        controller: "DrunkArrestController"
      })
    })
