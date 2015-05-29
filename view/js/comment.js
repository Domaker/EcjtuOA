/**
*	网站中常用函数
*
*/

// 删除任务函数
var deletes = function(data){
  $.post('ecjtu/task.php',{id:arguments[1]},function(d){
    if(d){
      $(data.parentNode.parentNode).remove();
    }
  });
  console.log(arguments[1]);
}; 


// 删除成员 
var del_mem = function(data){
  
  $.post('ecjtu/manager_mem.php',{id:arguments[1]},function(d){
    if(d){
      $(data.parentNode.parentNode).remove();
    }
  });
  console.log(arguments[1]);
};

// 显示部门成员信息
function get_change(){
    var depart=$("#depart option:selected").val();
    data={
        "depart":depart
    }
    console.log(depart);
    $.ajax({
        cache:false,
        type:"POST",
        data:data,
        url:"ecjtu/manager_mem.php",
        dataType:"json",
        success:function(data){
            // 如果成功获取成员信息
                if(data.state=="success"){
                    var td="";
                    // 遍历成员信息，并显示
                    for(i=0;i<data.info.length;i++){
                        td+='<tr><td>'+data.info[i].name+'</td><td>'+data.info[i].sex+'</td><td>'+data.info[i].depart+'</td><td>'+data.info[i].center+'</td><td>'+data.info[i].college+'</td><td><a href="javascript:message('+data.info[i].id+');"><i class="icon-comment-alt"></i></a></td><td><a onclick="javascript:del_mem(this,'+data.info[i].id+');" href="#"><i class="glyphicon glyphicon-remove"></i></a></td></tr>';
                    }
                    document.getElementById("contain").innerHTML=td;

                 // 如果获取成员信息失败，弹出提示
                }else{
                    alert("获取部门成员信息失败，该部门可能还没有成员");
                }
        }
    })
}

// 中心任务显示
function get_center(data){
    data={
        "center":data
    }
    $.ajax({
            cache: false,
            url:"ecjtu/task.php",
            data:data,
            type:"POST",
            dataType:"json",
            success: function(data) {
                var node='<div class="top"></div> ';
                work.innerHTML = node;
                if(data.state=="success"){
                  status=document.getElementById("status");
                  for(var i = 0; i<data.info.length; i++){
                  if(data.info[i].status==1){
                    img="<img src='view/images/get.png'>"; 
                  }
                  if(data.info[i].status==2){
                    img="<img src='view/images/success.png'>"; 
                  }
                  if(data.info[i].status==0){
                    img="";
                  }
                  node = '<div class="c_item">'+
                        '<div class="c_i_icon_arrow"><img src="view/images/jiao.jpg"></div>'+
                        '<div class="c_i_icon_dot">'+
                            '<div class="c_i_icon_dot_child"></div>'+
                        '</div>'+
                        '<div class="c_i_content">'+
                            '<div class="c_i_content_title">'+
                                '<span class="task_head">项目名称：</span><span>'+data.info[i].title+'</span>'+
                            '</div>'+
                            '<div class="c_i_content_time">'+
                                '<span class="task_head">发布时间：</span><span>'+data.info[i].time+'</span>'+
                            '</div>'+
                            '<div class="c_i_content_author">'+
                                '<span class="task_head">发布者：</span><span>'+data.info[i].writer+'</span>'+
                            '</div>'+
                            '<div class="c_i_content_intro">'+
                                '<span class="task_head">项目简介：</span><span>'+data.info[i].des+'</span>'+
                                '<a href="javascript:showdiv('+data.info[i].id+');" class="intro">查看详情</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="c_i_status" id="status">'+img+'</div>'+
                        '<div class="delete imooc-icon"><a onClick="javascript:deletes(this,'+data.info[i].id+');" href="#"><i class="icon-trash"></i></a></div></div>';
                        work.innerHTML += node;
                      }
                }else{
                    alert(data.message);
                }
            },
            error: function(request){
                alert(request);
            }
        });
}

// 新消息条数显示函数
function new_mes(){
	$.ajax({
		cache:false,
		type:"GET",
		url:"ecjtu/message_read.php",
		dataType:"json",
		error:function(request){
			alert("链接错误");
		},
		success: function(data) {
			console.log(data.info.length);
			var main="";
			var k=r=b=0;
			for(i=0;i<data.info.length;i++){
				if(data.info[i].read==0){
					k++;
				}
			}
            if(k!=0) $(".all_mes").html(k);
		}
	})
}

// 用于查看消息
$(".badge").click(function(){
	var flog=1;
	read={
		"read":flog
	}
	$.ajax({
		type:"POST",
		url:"ecjtu/message.done.php",
		cache:false,
		data:read,
		dataType:"json",
		success:function(request){
			if(data.state=="error"){
				alert(data.message);
			}
		}
	})
});

// 滑动窗口，显示任务详情
var showdiv=function(data){
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
                            '<span class="head"><b>任务详情：</b></span><div class="task_info">'+data.info[0].details+'</div></div>'+
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

// 隐藏首页任务详情
function hidediv(){
	mainobj.style.left=sidewidth+"px";
}

// 接取任务函数
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

// 留言回复函数
function back_to(data){
    // 留言遮罩层
    cover();
    $(".mes_h3").html("回复：");
    var back = '<button class="btn btn-primary bac" type="submit" name="message"> 回 复 </button>';
    $(".get").html(back);
    $(".bac").click(function(){
        console.log(data);
        var id =data;
        var backmes = $("textarea").val();
        data={
            "id":id,
            "backmes":backmes
        }
        $.ajax({
            cache:false,
            url:"ecjtu/message.back.php",
            type:"POST",
            data:data,
            dataType:"json",
            async:true,
            success: function(data){
                if(data.state=="success"){
                    alert("回复成功！");
                    history.go(0);
                }else{
                    alert(data.message);
                    history.go(0);
                }
            },
            error:function(request){
                alert("链接错误！");
            }
        });        
    });
}



/////////////////////---------以下是公用函数---------///////////////////////////

// 遮罩层函数
function cover(){
    // 显示
    $('.theme-message-mask').fadeIn(100);
    $('.theme-message').slideDown(200); 
    // 关闭
    $('.theme-message-poptit .close').click(function(){
        $('.theme-message-mask').fadeOut(100);
        $('.theme-message').slideUp(200);
    });
}




