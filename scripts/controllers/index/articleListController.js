import articleService from "../../services/articleService.js";

var init = function(module) {
	module.controller('articleListController', ['$scope', '$http',  "articleService", function($scope, $http, articleService) {
		articleService.getArticleList().then(function(res) {
			$scope.articleList = res.data.data;
		})
	}]);
}

module.exports = {
	init : init
}