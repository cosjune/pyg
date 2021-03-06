app.service('brandService',function ($http) {
    this.findAll=function () {
       return $http.get("../brand/findAll.do");
    }
    this.findPage=function(page, rows) {
        return $http.get("../brand/findPage.do?page="+page+"&rows="+rows);
    }
    this.save=function(entity) {
        return $http.post("../brand/add.do",entity);
    }
    this.findOne=function(id) {
        return $http.get("../brand/findOne.do?id="+id);
    }
    this.del=function(ids) {
        return $http.get("../brand/del.do?ids="+ids);
    }
    this.search=function(page, rows,searchEntity) {
        return $http.post("../brand/search.do?page="+page+"&rows="+rows,searchEntity);
    }
    this.findBrandList=function () {
        return $http.get("../brand/findBrandList.do");
    }
})