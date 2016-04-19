var app = angular.module('NoteApp', []);

app.controller('NoteController',function($scope){
  $scope.MessageNote= "";
  $scope.info="";
  $scope.memory="";
  $scope.count= 100;
  $scope.status = 0;
  $scope.$watch('MessageNote',function(newValue,oldValue){
      $scope.count = 100 - newValue.length;
      $scope.status = 0;
      if($scope.count < 10){
        $scope.status = 1;
        $scope.info = "Bientôt plus de caractère"
      }
      if($scope.count == 0){
        $scope.status = 3;
        $scope.info = "Plus de caractère"
      }
  });
  $scope.clear = function(){
    $scope.MessageNote= "";
    $scope.info="";
    $scope.status = 2;
  };
  $scope.save = function(){
    $scope.memory = $scope.MessageNote;
    $scope.info = "Note sauvegardé !"
    $scope.status = 2;
  };
  $scope.updateInfo = function(){
    if($scope.MessageNote !== $scope.memory){
      $scope.info = "Note modifié !"
    }
  }
});
