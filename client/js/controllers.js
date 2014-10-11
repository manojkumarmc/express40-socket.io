myApp.controller('MyCtrl',['$scope','socket', function($scope, socket){

  $scope.cObjs = []

  $scope.cObj = {
    id : -1,
    name : 'This is an Object'
  }

  socket.on('container:add', function(data) {
    var found = false;
    var cObjs = $scope.cObjs

    for (var i = 0; i < cObjs.length -1; i++) {
      if (cObj.id == data.id) {
        found = true
      }
    }
    if (!found) {
      $scope.cObjs.push(data)
    }
  })

}])
