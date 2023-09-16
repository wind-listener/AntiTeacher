
// =================== ↓↓↓ 主线程：自动打卡 ↓↓↓ ====================
const PASSWORD = "钉钉密码"

var password = '123456'
for (let i = 0; i < password.length; i++) {
    t = password[i]
    desc(t).findOne().click()
    sleep(100)
}
// =================== ↑↑↑ 主线程：自动打卡 ↑↑↑ =====================

// 解锁屏幕
function unlock()
{
    if(!device.isScreenOn())
    {
        device.wakeUp();
        sleep(500);
        swipe(500,2000,500,1000,210);
        sleep(500)
        var password = "00000"  //这里输入你手机的密码
        for(var i = 0; i < password.length; i++)
        {
            var p = text(password[i].toString()).findOne().bounds();
            click(p.centerX(), p.centerY());
            sleep(100);
        }
    }
}


// toast('打卡脚本即将运行')
// var a = text('企业微信').findOne().bounds()

// x = a.centerX()
// y = a.centerY()

// click(x, y)