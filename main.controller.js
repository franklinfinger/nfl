angular
  .module('nflCrime')
  .controller('HomeController', function($scope) {

  })
  .controller('DuiArrestController', function($scope,DuiArrestService) {
    $scope.Date = '';
    $scope.Team = '';
    $scope.Name = '';
    $scope.Encounter = '';
    $scope.Description = '';
    $scope.Outcome = '';
    $scope.img = ''


    $scope.getArrestCtrl = function(crime) {
      console.log(crime);
      DuiArrestService.getCrime(crime)
        .then(function(data) {
          console.log(data);

          $scope.Date = data.data.Date;
          $scope.Team = data.data.Team;
          $scope.Name = data.data.Name;
          $scope.Encounter = data.data.Encounter;
          $scope.Description = data.data.Description;
          $scope.Outcome = data.data.Outcome
          if($scope.team === 'DEN') {
            $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
          }
        });
    }

  })
  // .controller('OldWeatherController', function() {
  //
  // })
