app.controller('brandController',function($scope,$controller,brandService){
    $controller("baseController",{$scope:$scope});
    $scope.findAll=function () {
        brandService.findAll().success(
            function (response) {
                $scope.list=response;
            }
        )
    }

    $scope.findPage=function (page,rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.paginationConf.totalItems=response.total;
                $scope.list=response.rows;
            }
        )
    }
    $scope.save=function () {
        brandService.save($scope.entity).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else{
                    alert(response.message)
                }
            }
        )

    }
    $scope.findOne=function (id) {
       brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    }
    $scope.del=function () {
        brandService.del($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else{
                    alert(response.message);
                }
            }
        )
    }
    $scope.searchEntity={};
    $scope.search=function (page,rows) {
        brandService.search(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.paginationConf.totalItems=response.total;
                $scope.list=response.rows;
            }
        )
    }
})