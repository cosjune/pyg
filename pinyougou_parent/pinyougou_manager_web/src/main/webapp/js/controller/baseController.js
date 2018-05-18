app.controller("baseController",function($scope) {

    $scope.paginationConf={
        currentPage:1,
        totalItems:10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }

    }
    $scope.reloadList=function () {
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }
    $scope.selectIds=[];
    $scope.selectid=function (id) {
        if($scope.selectIds.indexOf(id)!=-1){
            $scope.selectIds.splice($scope.selectIds.indexOf(id),1);
        }else{
            $scope.selectIds.push(id);
        }
    }
    $scope.check=function (id) {
        if($scope.selectIds.indexOf(id)!=-1){
            return true;
        }else{
            return false;
        }
    }
    $scope.jsonToString=function (jsonString, key) {
        var json = JSON.parse(jsonString);
        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=","+json[i][key];
            }else{
                value+=json[i][key];
            }
        }
        return value;
    }

})