package org.seckill.entity;

import lombok.Data;

import java.util.Date;

/**
 * @author elricboa on 18/10/22
 */
@Data
public class SuccessKilled {
    private long seckillId;
    private long userPhone;
    private short state;
    private Date createTime;

    private Seckill seckill;
}