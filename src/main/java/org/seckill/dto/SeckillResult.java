package org.seckill.dto;

import lombok.Data;

/**
 * @author elricboa on 2018/12/17
 */

@Data
public class SeckillResult<T> {

    private boolean isSuccess;

    private T data;

    private String error;

    public SeckillResult(boolean isSuccess, String error) {
        this.isSuccess = isSuccess;
        this.error = error;
    }

    public SeckillResult(boolean isSuccess, T data) {
        this.isSuccess = isSuccess;
        this.data = data;
    }

}
