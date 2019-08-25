package org.seckill.dd;

import org.apache.ibatis.annotations.Param;
import org.seckill.entity.SuccessKilled;

/**
 * @author elricboa on 18/10/22
 */
public interface SuccessKilledDao {

    int insertSuccessKilled(@Param("seckillId") long seckillId, @Param("userPhone") long userPhone);
    SuccessKilled queryByIdWithSuccessKilled(@Param("seckillId") long seckillId, @Param("userPhone") long userPhone);

}
