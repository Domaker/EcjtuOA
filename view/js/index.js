window.onload=function(){
	sidewidth=document.getElementById('side').offsetWidth;
	mainobj=document.getElementById("main");
	work=document.getElementById("work");
    get_center("all");
    // 发布任务弹出框
    $('.theme-publish').click(function(){
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover').slideDown(200);
    })
    $('.theme-poptit .close').click(function(){
        $('.theme-popover-mask').fadeOut(100);
        $('.theme-popover').slideUp(200);
    });
    // 显示新信息条数
    new_mes();
}





