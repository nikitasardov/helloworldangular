/**
 * Created by lime14 on 14.06.16.
 */
angular.module("test", [])
    .controller("hello", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World, AngularJS";
    } );