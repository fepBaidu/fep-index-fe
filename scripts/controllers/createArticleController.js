var init = function(module) {
	module.controller('deployController', ['$scope', '$http' , function($scope, $http) {
		$scope.deploy = function() {
			if($scope.title.length == 0) {
				$scope.deployTip = "博文标题不能为空";
			}
			else if(UE.getEditor('editor').getContent().length == 0) {
				$scope.deployTip = "博文内容不能为空";	
			}
			else {
				$http({
			        method : "POST",
			        url : "/deploy",
			        data : {
			        	title : $scope.title,
			        	content : UE.getEditor('editor').getContent(),
			        	tag : $scope.tag,
			        	cover_image : $scope.coverImagePath
			        }
			    }).then(function(res) {
			        if(res.data.errno == 0) {
			        	$scope.deployTip = "博文发布成功，自动为您跳转到首页......";
			        	setTimeout(function() {
			        		window.location = "/";
			        	},2000);
			        }
			        else {
			        	$scope.deployTip = "博文发布失败";
			        }
			    });
			}
		};

		$scope.selectFile = function() {
			document.getElementById("file-input-el").click();
		};

		$scope.upload = function() {
			console.log($scope.fileModel);
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