CREATE DATABASE seckill;
USE seckill;
CREATE TABLE seckill(
  `seckill_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '商品库存id',
  `name` VARCHAR(120) NOT NULL COMMENT '商品名称',
  `number` int NOT NULL COMMENT '库存数量',
  `start_time` TIMESTAMP NOT NULL COMMENT '秒杀开启时间',
  `end_time` TIMESTAMP NOT NULL COMMENT '秒杀结束时间',
  `create_time` TIMESTAMP NOT NULL DEFAULT current_timestamp COMMENT '秒杀开启时间',
PRIMARY KEY (seckill_id),
  KEY idx_start_time(start_time),
  KEY idx_end_time(end_time),
  KEY idx_create_time(create_time)
)ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 COMMENT ='秒杀库存表';
-- init data
insert into
seckill(name,number,start_time,end_time)
values('100秒杀爱疯',100,'2018-10-20 00:00:00','2018-10-22 00:00:00'),
  ('50秒杀iPad',200,'2018-10-20 00:00:00','2018-10-22 00:00:00'),
  ('10元秒杀小米',300,'2018-10-20 00:00:00','2018-10-22 00:00:00'),
  ('5元秒杀红米',400,'2018-10-20 00:00:00','2018-10-22 00:00:00');

CREATE TABLE sucess_killed(
  `seckill_id` BIGINT NOT NULL COMMENT '商品id',
  `user_phone` BIGINT NOT NULL COMMENT '用户手机id',
  `state` TINYINT NOT NULL COMMENT '状态',
  `create_time` TIMESTAMP NOT NULL DEFAULT current_timestamp COMMENT '秒杀成功时间',
  PRIMARY KEY (seckill_id,user_phone),
  KEY idx_create_time(create_time)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT ='秒杀库存表';

