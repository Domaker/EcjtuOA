/*
*	获取回复信息
*
*/
window.onload=function(){
	$.ajax({
		cache:false,
		type:"GET",
		url:"ecjtu/message_back.php",
		dataType:"json",
		error:function(request){
			alert("链接错误");
		},
		success: function(data) {

			//执行更新未读信息函数
			upload_back();

			console.log(data.info.length);
			var main="";
			for(i=0;i<data.info.length;i++){
				if(data.info[i].mid==1||data.info[i].mid==2){
					main+='<div class="mes_main">'+
								'<div class="mes_top"><span>'+data.info[i].Toname+' 回复你：</span></div>'+
								'<div class="mes_get">'+
									'<p>'+data.info[i].backmes+'</p>'+
									'<p style="text-align:right;margin-top:20px;">'+data.info[i].backtime+'</p>'+
								'</div>'+
							'</div>';
						}
			}
			$("#right").html(main);
			// 调用消息提示函数
			new_mes();
		}
	});
}
// 更新未读回复信息为已读
function upload_back(){
	data={
		"read":2
	}
     $.ajax({
        cache: false,
        type: "POST",
        url:"ecjtu/upload_back.php",
        data:data,
        dataType:"json",
        async: true
    }); 
}
