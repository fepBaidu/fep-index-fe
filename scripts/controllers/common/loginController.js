var init = function(module) {
	module.controller('loginController', ['$scope', '$http', function($scope, $http) {
		$scope.login = function() {
			$http({
				url : '/login',
				method : 'POST',
				data : {
					username : $scope.username,
					password : $scope.password
				}
			})
			.then(function(res) {
				if(res.data.errno == 0) {
					$scope.loginTip = "登录成功";
					setTimeout(function(){
						location.reload();
					}, 1000);
				}
				else {
					$scope.loginTip = "用户名或密码错误";
				}
			}, function(res) {
				
			})
		};

		$scope.logout = function() {
			window.location = "/logout";
		}

		$scope.toggleLoginForm = function() {
			$scope.loginForm = !$scope.loginForm;
			$scope.loginTip = "";
		};

		$scope.toggleLogoutForm = function() {
			$scope.logoutForm  = !$scope.logoutForm;
		}
	}]);
}

module.exports = {
	init : init
}