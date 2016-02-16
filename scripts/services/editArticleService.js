var init = function(module) {
	module.service("editArticleService", ['$http', function($http) {
		this.getArticleById = function(article_id) {
			return $http({
		        method : "get",
		        url : "/getArticleById",
		        params : {
		        	article_id : article_id
		        }
		    }).then(function(res) {
		    	return res;	
		    });
		}
	}]);
};

module.exports = {
	init : init
}