app.controller("indexController",function($scope,loginService){
	
	//获取用户名
	$scope.getName=function(){
		loginService.getName().success(
			function(response){
				$scope.loginName=response.loginName;
			}
		);
	}
});