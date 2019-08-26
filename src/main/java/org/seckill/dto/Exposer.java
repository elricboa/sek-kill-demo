package org.seckill.dto;

import lombok.Data;

/**
 * @author elricboa on 2018/11/6
 */
@Data
public class Exposer {

    private boolean isExpose;

    private String md5;

    private long seckillId;

    private long now;

    private long start;

    private long end;

    public Exposer(boolean isExpose, String md5, long seckillId) {
        this.isExpose = isExpose;
        this.md5 = md5;
        this.seckillId = seckillId;
    }

    public Exposer(boolean isExpose, long seckillId, long now, long start, long end) {
        this.end = end;
        this.isExpose = isExpose;
        this.seckillId = seckillId;
        this.now = now;
        this.start = start;
    }

    public Exposer(boolean isExpose, long seckillId) {
        this.isExpose = isExpose;
        this.seckillId = seckillId;
    }
}
