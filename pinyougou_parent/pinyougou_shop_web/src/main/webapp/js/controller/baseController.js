app.controller("baseController",function ($scope) {
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,//当前页面
        totalItems: 10,//总记录数 默认10
        itemsPerPage: 10,//每页显示记录数
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载

        }
    };

    //方便书写，进行的方法抽取
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    //定义批量删除数组对象
    $scope.selectIds=[];

    //修改品牌列表复选框选中状态的方法
    $scope.updateSelection=function($event,id){
        //判断复选框的选中状态
        if($event.target.checked){//勾选
            //添加元素
            $scope.selectIds.push(id);
        }else{//取消勾选
            var index = $scope.selectIds.indexOf(id);
            //移除元素  参数一：移除元素的索引值 参数二：移除几个元素
            $scope.selectIds.splice(index,1);
        }

    }

    //翻页后，之前选中的复选框仍然选中状态
    $scope.hasChecked=function(id){
        if($scope.selectIds.indexOf(id)!=-1){
            return true;
        }else{
            return false;
        }
    }

    //基于key获取字符串中的value值（前提：数据是json格式）
    $scope.getValueByKey=function(jsonString,key){
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