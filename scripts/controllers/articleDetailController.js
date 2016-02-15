import articleDetailService from "../services/articleDetailService.js";

var init = function(module) {
	module.controller('articleDetailController', ['$scope', '$http' , "articleDetailService" , "$sce",  function($scope, $http, articleDetailService, $sce) {
		$scope.init = function(articleId) {
			$scope.articleId = articleId;
			articleDetailService.getArticleById($scope.articleId).then(function(res) {
				if(res.data.errno == 0) {
					$scope.title = res.data.data[0].title;
					$scope.nickname = res.data.data[0].user.nickname;
					$scope.createTime = res.data.data[0].createdAt.substring(0, res.data.data[0].createdAt.indexOf("T"));
					$scope.content = $sce.trustAsHtml(res.data.data[0].content);
				}
			})
		}
	}]);
};

module.exports = {
	init : init
};