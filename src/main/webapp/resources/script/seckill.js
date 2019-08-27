var seckill = {
    URL: {
        now: function () {
            return "/seckill/time/now"
        },
        exposer: function (seckillId) {
            return "/seckill/" + seckillId + "/exposer";
        },
        excution: function (seckillId, md5) {
            return "/seckill/" + seckillId + md5 + "/excution";
        }
    },
    handelSeckill: function (seckillId, node) {
        node.hide('<button class="btn btn-primary btn-lg" id="killBtn">开始秒杀</button>')
        $.post(seckill.URL.exposer(seckillId), {}, function (result) {
            if (result && result['sucess']) {
                var exposer = result['data'];
                if (exposer['exposed']) {
                    var md5 = exposer['md5'];
                    var killUrl = seckill.excution(seckillId, md5);
                    $('#killBtn').one('click', function () {
                        $(this).addClass('disabled');
                        $.post(killUrl, {}, function () {
                            if (result && result['success']) {
                                var killResult = result['data'];
                                var state = killResult['state'];
                                var stateInfo = killResult['stateInfo'];
                                node.html('<sapn class="label">' + stateInfo + '</sapn>');
                            }
                        })
                    })
                } else {
                    var now = exposer['now'];
                    var start = exposer['start'];
                    var end = exposer['end'];
                    seckill.countdown(seckillId, now, start, now);
                }
            } else {
                console.log('result:', result)
            }
        })
    },
    validatePhone: function (phone) {
        return !!(phone && phone.length == 11 && !isNaN(phone));
    },
    countdown: function (seckillId, nowTime, startTime, endTime) {
        var seckillBox = $('#seckill-box');
        if (nowTime > endTime) {
            seckillBox.html('秒杀结束')
        } else if (nowTime < startTime) {
            var killTime = new Date(startTime, 1000);
            seckillBox.countdown(killTime, function (event) {
                var format = event.strftime('秒杀倒计时: %D天 %H时 %H分 %S秒');
                seckillBox.html(format);
            }).on('finish.countdown', function () {
                seckill.handelSeckill(seckillId, seckillBox)
            });
        } else {
            seckill.handelSeckill(seckillId, seckillBox)
        }
    },
    detail: {
        init: function (params) {
            var phone = $.cookie('phone');
            var startTime = params['startTime'];
            var endTime = params['endTime'];
            var seckillId = params['seckillId'];
            if (!seckill.validatePhone(phone)) {
                var phoneModal = $('#killPhoneModal');
                phoneModal.modal({
                    show: true, //显示弹出层
                    backdrop: 'static', //禁止位置关闭
                    keyboard: false  //关闭键盘事件
                });
                $('#killPhoneModal').click(function () {
                    var inputPhone = $('#killphoneKey').val();
                    if (seckill.validatePhone(inputPhone)) {
                        $.cookie('phone', inputPhone, {expires: 7, path: '/seckill'});
                        window.location.reload();
                    } else {
                        $('#killphoneMessage').hide().html('<label class="label label-danger">手机号错误!</label>').show(300);
                    }
                })
            }
            $.get(seckill.URL.now(), {}, function (result) {
                if (result && result['success']) {
                    var nowTime = result['data'];
                    seckill.countdown(seckillId, nowTime, startTime, endTime);
                } else {
                    console.log('result:', result)
                }
            })
        }
    }
}