// 滑动窗口
var showdiv=function(data){
    //console.log(work.offsetWidth);
	mainobj.style.left=(sidewidth-work.offsetWidth)+"px"; 
    console.log(data);
    dataa={
        "id":data
    }
    $.ajax({
        cache: false,
        type: "POST",
        url:"ecjtu/task_info.php",
        data:dataa,
        dataType:"json",
        async: true,
        error: function(request) {
            alert("链接失败");
        },
        success: function(data) {
            if(data.state=="success"){
                var info='<div><a href="javascript:hidediv();" class="back">&lt;&lt;返回首页</a></div>'+
                '<div class="work-content">'+
                    '<div class="renwu">'+
                        '<div class="task_header" name="time">'+
                            '<span class="head">发布时间：</span><span>'+data.info[0].time+'</span></div>'+
                        '<div class="task_header" name="author">'+
                            '<span class="head">发布人：</span><span>'+data.info[0].writer+'</span></div>'+
                        '<div class="max" name="content">'+
                            '<span class="head">任务详情：</span><div class="task_info">'+data.info[0].details+'</div></div>'+
                        '<div class="task_header" name="endTime">'+
                            '<span class="head">任务期限：</span><span>'+data.info[0].timelong+'天</span></div>'+
                        '<button class="button" onclick="get_task('+data.info[0].id+')">接受任务</button></div>'+
                        '</div>'; 
                document.getElementById('work-content').innerHTML=info;
            }else{
                alert(data.message);
            }
        }
    });
}
function hidediv(){
	mainobj.style.left=sidewidth+"px";
}

function get_task(get){
    console.log(get);
    get={
        id:get
    }
    $.ajax({
        cache: false,
        type: "POST",
        url:"ecjtu/task_get.php",
        data:get,
        dataType:"json",
        async: true, 
        success: function(data) {
            if(data.state=="success"){
                alert("成功接受任务！");
                location.replace(location.href);
            }else{
                alert(data.message);
            }
        }
    }); 
}