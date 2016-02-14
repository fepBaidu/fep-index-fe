var init = function(module) {
	module.service("articleService", ['$http', function($http) {
		this.getArticleList = function() {	
			return $http({
		        method : "GET",
		        url : "/getAllArticles"
		    }).then(function(res) {
		    	return res;	
		    });
		}
	}]);
};

module.exports = {
	init : init
}