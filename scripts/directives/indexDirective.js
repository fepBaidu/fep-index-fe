var init = function(module) {

	module.directive("articlecard", function() {
		return {
			restrict : 'EA',
			replace : true, 
			transclude : true,
			scope : {
				articleData : "=articleData"
			},
			//template : '<div class="helloworld">{{title}}<div ng-transclude></div></div>'
			template : '<li>' + 
        					'<a href="/articleDetail/{{articleData.id}}">' + 
        						'<div class="bnwrap">' + 
          							'<img src="{{articleData.cover_image}}" onerror="this.src=\'\'">' + 
          						'</div>' + 
        					'<p>{{articleData.title}}</p>' + 
        					'<span class="date">{{articleData.user.nickname}} 发布于 {{articleData.createdAt.substring(0, articleData.createdAt.indexOf("T"))}}</span>' + 
       				 		'</a>' + 
      					'</li>'
		}
	});
};

module.exports = {
	init : init
}