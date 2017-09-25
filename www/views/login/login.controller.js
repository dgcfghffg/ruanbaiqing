/**
 * Created by Administrator on 2017/9/19.
 */
angular.module('starter.controllers')
.controller('LoginCtrl' ,['$scope',function ($scope) {
  $scope.user={
    username:'rbq',
    password:'3585995'
  };
  $scope.login=function () {
    console.log($scope,user);
  };
  }]);
