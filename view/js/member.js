window.onload=function(){
		// 添加成员遮罩层事件
			// 显示
        $('.theme-add').click(function(){
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
        })
        	// 关闭
        $('.theme-poptit .close').click(function(){
            $('.theme-popover-mask').fadeOut(100);
            $('.theme-popover').slideUp(200);
        })  

        // ajax显示成员信息
		$.ajax({
            cache: false,
            url:"ecjtu/manager_mem.php",
            type:"POST",
            dataType:"json",
            success: function(data) {

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
                    alert("获取部门成员信息失败");
                }
            }
        });
    // 发布任务弹出框
    $('.theme-publish').click(function(){
        $('.theme-pub-mask').fadeIn(100);
        $('.theme-pub').slideDown(200);
    })
    $('.theme-poptit .close').click(function(){
        $('.theme-pub-mask').fadeOut(100);
        $('.theme-pub').slideUp(200);
    });
    // 调用显示未读信息函数
    new_mes();
}

// 留言函数
function message(id){ 

    // 留言遮罩层
    cover();

    // 获取对方姓名
    console.log(id);
    id={
        "id":id
    } 
    $.ajax({
        cache: false,
        url:"ecjtu/manager_name.php",
        data:id,
        type: "POST",
        dataType:"json",
        success: function(data){
            if(data.state=="success"){

                // 显示收件人姓名
                $('.theme-message-poptit h3').html('To.'+data.info[0].name+':');

                // 将收件人姓名赋值
                var name = data.info[0].name;

                // 显示可以传参的留言按钮
                var sub ='<button class="btn btn-primary mes" type="submit" name="message"> 留 言 </button>';
                $('.get').html(sub);   
                // 触发留言事件
                $(".mes").click(function(){
                var message=$("#get_mes").val();
                    data={
                        "name":name,
                        "message":message
                    }
                    $.ajax({
                        cache: false,
                        url:"ecjtu/message.php",
                        type:"POST",
                        data:data,
                        dataType:"json",
                        success: function(data) {

                            //弹出成功信息
                            alert(data.message);    

                            //刷新当前页面    
                            history.go(0);             
                        }
                    })
                });

             // 如果获取收件人姓名未成功
            }else{
                // 弹出错误信息
                alert(data.message);
            }
        }
    });
    
}


