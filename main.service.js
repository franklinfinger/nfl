ngular
  .module('nflCrime')
  .service('NewWeatherService', function($http) {

    function getCrime(crime) {
      return $http.get('http://nflarrest.com/api/v1/crime/arrests/DUI '+ crime + ',')


    return {
      getCrime: getCrime
    }

  })
