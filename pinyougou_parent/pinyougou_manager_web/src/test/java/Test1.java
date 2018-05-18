import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import org.junit.Test;

import java.util.List;

public class Test1 {

    @Reference
    private BrandService brandService;

    @Test
    public void test11(){
        List<TbBrand> all = brandService.findAll();
        for (TbBrand b:all
             ) {
            System.out.println(b.getName());
        }
    }
}
