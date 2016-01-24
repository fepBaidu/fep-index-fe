import content from "./indexCall.js";
import "../../../styles/index/main.less";
import earth from "../../general/earth.js";

earth.init(100, 100, 'images/sphere.png');
earth.animate();

var indexApp = angular.module('index',[]);
indexApp.controller('navigatorController', ['$scope', function($scope) {
  
}]);