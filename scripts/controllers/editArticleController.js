import editArticleService from "../services/editArticleService.js";

var init = function(module) {
	module.controller('editArticleController', ['$scope', '$http', "editArticleService" , function($scope, $http, editArticleService) {
		$scope.init = function(articleId) {
			$scope.articleId = articleId;
			console.log('article_id : ' + articleId);
			editArticleService.getArticleById($scope.articleId).then(function(res) {
				if(res.data.errno == 0) {
					console.log(res.data);
					$scope.id = res.data.data[0].id;
					$scope.title = res.data.data[0].title;
					$scope.nickname = res.data.data[0].user.nickname;
					$scope.coverImageName = $scope.coverImagePath = res.data.data[0].cover_image;
					$scope.tag = res.data.data[0].tags;
					$scope.createTime = res.data.data[0].createdAt.substring(0, res.data.data[0].createdAt.indexOf("T"));
					$scope.content = res.data.data[0].content;
					setTimeout(function() {
						UE.getEditor('editor').setContent($scope.content);
					},500);
				}
			})
		};

		$scope.save = function() {
			if($scope.title.length == 0) {
				$scope.deployTip = "博文标题不能为空";
			}
			else if(UE.getEditor('editor').getContent().length == 0) {
				$scope.deployTip = "博文内容不能为空";	
			}
			else {
				$http({
			        method : "POST",
			        url : "/save",
			        data : {
			        	id : $scope.id,
			        	title : $scope.title,
			        	content : UE.getEditor('editor').getContent(),
			        	tag : $scope.tag,
			        	cover_image : $scope.coverImagePath
			        }
			    }).then(function(res) {
			        if(res.data.errno == 0) {
			        	$scope.deployTip = "博文保存成功，自动为您跳转到首页......";
			        	setTimeout(function() {
			        		window.location = "/";
			        	},2000);
			        }
			        else {
			        	$scope.deployTip = "博文保存失败";
			        }
			    });
			}
		};

		$scope.selectFile = function() {
			document.getElementById("file-input-el").click();
		};

		$scope.upload = function() {
			var fd = new FormData();
			var file = $scope.fileModel;
			fd.append('file', file);
			$http.post('/upload', fd, {
	            transformRequest: angular.identity,
	            headers: {'Content-Type': undefined}
	        }).success(function(res) {
				if(res.errno == 0) {
					$scope.uploadTip = "上传成功";
					$scope.coverImagePath = res.data.path;
				}
				else {
					$scope.uploadTip = "上传失败";	
				}
			})
		};

		$scope.fileSelected = function() {
			var tmpValue = document.getElementById("file-input-el").value;
			var imageName = tmpValue.substring(tmpValue.lastIndexOf('\\') + 1, tmpValue.length);
			$scope.coverImageName = imageName;
		};

	}]);
}

module.exports = {
	init : init
}