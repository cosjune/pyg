package com.pinyougou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/brand")
public class BrandControler {

    @Reference
    private BrandService brandService;

    @RequestMapping("/findAll")
    public List<TbBrand> findAll(){
        return brandService.findAll();
    }

    @RequestMapping("/findPage")
    public PageResult findPage(int page,int rows){
        return brandService.findPage(page,rows);
    }

    @RequestMapping("/add")
    public Result add(@RequestBody TbBrand tbBrand){
        Result result = new Result();
        if(tbBrand!=null&&tbBrand.getId()!=null){
            try{
                brandService.update(tbBrand);
                result.setSuccess(true);
            }catch (Exception e){
                result.setSuccess(false);
                result.setMessage("修改失败");
            }
        }else{
            try {
                brandService.add(tbBrand);
                result.setSuccess(true);
            }catch (Exception e){
                result.setSuccess(false);
                result.setMessage("添加失败");
            }
        }
        return result;
    }

    @RequestMapping("/findOne")
    public TbBrand findOne(Long id){
         return brandService.findOne(id);
    }

    @RequestMapping("/del")
    public Result del(long[] ids){
        Result result = new Result();
        try{
            brandService.delete(ids);
            result.setSuccess(true);
        }catch (Exception e){
            result.setSuccess(false);
            result.setMessage("删除失败");
        }
        return result;
    }

    @RequestMapping("/search")
    public PageResult search(@RequestBody TbBrand tbBrand,int page,int rows){
        return brandService.serch(tbBrand,page,rows);
    }

    @RequestMapping("/findBrandList")
    public List<Map> findBrandList(){
        return brandService.findBrandList();
    }

}
