myApp.controller('MyCtrl',['$scope','socket', function($scope, socket){

  $scope.cObjs = []
  
  socket.on('container:add', function(data) {
    $scope.cObjs.push(data)
  })

}])
