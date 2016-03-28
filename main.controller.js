angular
  .module('nflCrime')
  .controller('HomeController', function($scope) {

  })
  .controller('DuiArrestController', function($scope,DuiArrestService) {
    // $scope.Date = '';
    // $scope.Team = '';
    // $scope.Name = '';
    // $scope.Encounter = '';
    // $scope.Description = '';
    // $scope.Outcome = '';
  //  $scope.img = 'http://www.bleachercreatures.com/media/catalog/category/5_NFL_BW.png'


    $scope.getArrestCtrl = function(crime) {
      console.log(crime);
      DuiArrestService.getCrime(crime)
        .then(function(data) {
          console.log(data);
          $scope.arrests = data.data;
          // $scope.Date = data.data[0].Date;
          // $scope.Team = data.data[0].Team;
          // $scope.Name = data.data[0].Name;
          // $scope.Encounter = data.data[0].Encounter;
          // $scope.Description = data.data[0].Description;
          // $scope.Outcome = data.data[0].Outcome
           if($scope.team === 'DEN') {
           $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
           }
          if($scope.arrests.team === 'MIN') {
            $scope.img = "http://cdn.shopify.com/s/files/1/0927/1718/files/large_small.png?8371973353256280267"
          }
        })
    }
  })

  .controller('GunArrestController', function($scope,GunArrestService) {
    // $scope.Date = '';
    // $scope.Team = '';
    // $scope.Name = '';
    // $scope.Encounter = '';
    // $scope.Description = '';
    // $scope.Outcome = '';
    // $scope.img = 'http://www.bleachercreatures.com/media/catalog/category/5_NFL_BW.png'

    $scope.getArrestCtrl = function(crime) {
      console.log(crime);
      GunArrestService.getCrime(crime)
        .then(function(data) {
          console.log(data);
          $scope.arrests = data.data;
          // $scope.Date = data.data[0].Date;
          // $scope.Team = data.data[0].Team;
          // $scope.Name = data.data[0].Name;
          // $scope.Encounter = data.data[0].Encounter;
          // $scope.Description = data.data[0].Description;
          // $scope.Outcome = data.data[0].Outcome
          if($scope.team === 'DEN') {
            $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
          }
        })
    }
  })

  .controller('DrugsArrestController', function($scope,DrugsArrestService) {
    // $scope.Date = '';
    // $scope.Team = '';
    // $scope.Name = '';
    // $scope.Encounter = '';
    // $scope.Description = '';
    // $scope.Outcome = '';
    // $scope.img = 'http://www.bleachercreatures.com/media/catalog/category/5_NFL_BW.png'

    $scope.getArrestCtrl = function(crime) {
      console.log(crime);
      DrugsArrestService.getCrime(crime)
        .then(function(data) {
          console.log(data);
          $scope.arrests = data.data;

          // $scope.Date = data.data[0].Date;
          // $scope.Team = data.data[0].Team;
          // $scope.Name = data.data[0].Name;
          // $scope.Encounter = data.data[0].Encounter;
          // $scope.Description = data.data[0].Description;
          // $scope.Outcome = data.data[0].Outcome
          if($scope.team === 'DEN') {
            $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
          }
        })
    }
  })

    .controller('SexArrestController', function($scope,SexArrestService) {
      $scope.getArrestCtrl = function(crime) {
        console.log(crime);
        SexArrestService.getCrime(crime)
          .then(function(data) {
            console.log(data);
            $scope.arrests = data.data;
            if($scope.team === 'DEN') {
              $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
            }
          })
        }
    })

      .controller('PimpimgArrestController', function($scope,PimpingArrestService) {
        $scope.getArrestCtrl = function(crime) {
          console.log(crime);
          PimpingArrestService.getCrime(crime)
            .then(function(data) {
              console.log(data);
              $scope.arrests = data.data;
              if($scope.team === 'DEN') {
                $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
              }
            })
         }
      })

        .controller('ParkingArrestController', function($scope,ParkingArrestService) {
          $scope.getArrestCtrl = function(crime) {
            console.log(crime);
            ParkingArrestService.getCrime(crime)
              .then(function(data) {
                console.log(data);
                $scope.arrests = data.data;
                if($scope.team === 'DEN') {
                  $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
                }
              })
          }
        })
          .controller('DrunkArrestController', function($scope,DrunkArrestService) {
            $scope.getArrestCtrl = function(crime) {
              console.log(crime);
              DrunkArrestService.getCrime(crime)
                .then(function(data) {
                  console.log(data);
                  $scope.arrests = data.data;
                  if($scope.team === 'DEN') {
                    $scope.img = "https://media.glassdoor.com/sql/5269/denver-broncos-squarelogo-1426496893613.png"
                  }
                })
            }
        })
