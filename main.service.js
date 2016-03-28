angular
  .module('nflCrime')
  .service('DuiArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })

  .service('GunArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })

  .service('DrugsArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })

  .service('SexArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })

  .service('PimpingArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })

  .service('ParkingArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })

  .service('DrunkArrestService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/'+ crime + '')
    }

    return {
      getCrime: getCrime
    }

  })
