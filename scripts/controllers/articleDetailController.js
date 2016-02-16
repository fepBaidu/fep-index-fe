import articleDetailService from "../services/articleDetailService.js";

var init = function(module) {
	module.controller('articleDetailController', ['$scope', '$http' , "articleDetailService" , "$sce",  function($scope, $http, articleDetailService, $sce) {
		$scope.init = function(articleId, loginUser) {
			$scope.articleId = articleId;
			articleDetailService.getArticleById($scope.articleId).then(function(res) {
				if(res.data.errno == 0) {
					$scope.id = res.data.data[0].id;
					$scope.title = res.data.data[0].title;
					$scope.nickname = res.data.data[0].user.nickname;
					$scope.createTime = res.data.data[0].createdAt.substring(0, res.data.data[0].createdAt.indexOf("T"));
					$scope.content = $sce.trustAsHtml(res.data.data[0].content);
					if(res.data.data[0].user.username == loginUser) {
						$scope.createUser = true;
					}
					else {
						$scope.createUser = false;	
					}
					setTimeout(function() {
						SyntaxHighlighter.highlight();
					},500);
				}
			})
		};

		$scope.delete = function() {
			$http({
		        method : "POST",
		        url : "/delete",
		        data : {
		        	id : $scope.id
		        }
		    }).then(function(res) {
		    	console.log(res);
		        if(res.data.errno == 0) {
		        	$scope.deleteTip = "博文删除成功，自动为您跳转到首页......";
		        	 setTimeout(function() {
		        	 	window.location = "/";
		        	 },2000);
		        }
		        else {
		        	$scope.deleteTip = "博文删除失败";
		        }
		    });
		};

	}]);
};

module.exports = {
	init : init
};