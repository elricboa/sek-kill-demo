package org.seckill.dd;

import org.apache.ibatis.annotations.Param;
import org.seckill.entity.Seckill;

import java.util.Date;
import java.util.List;

/**
 * @author elricboa on 18/10/22
 */
public interface SeckillDao {
    int reduceNumber(@Param("seckillId") long seckillId, @Param("killTime") Date killTime);
    Seckill queryById(@Param("seckillId") long seckillId);
    List<Seckill> queryByAll(@Param("offset") int offset,@Param("limit") int limit);
}
