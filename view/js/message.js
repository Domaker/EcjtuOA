window.onload=function(){
	var read=1;
	data={
		"read":read
	}
	$.ajax({
		cache:false,
		type:"GET",
		url:"ecjtu/message_read.php",
		dataType:"json",
		error:function(request){
			alert("链接错误");
		},
		success: function(data) {

			//执行更新未读信息函数
			upload_read();

			console.log(data.info.length);
			var main="";
			for(i=0;i<data.info.length;i++){
				if(data.info[i].mid==0){
					var back_flog="回复";
					var back="";
					var back_to='<a onclick="javascript:back_to('+data.info[i].id+');" href="#">回复</a>';
				}else if(data.info[i].mid==1){
					var back='<div class="mes_back">'+
								'<p><span>回复'+data.info[i].Byname+'：</span>'+data.info[i].backmes+'</p>'+
								'<p style="text-align:right;margin-top:20px;">'+data.info[i].backtime+'</p>'+
							'</div>';
					var back_to='<a href="javascript:;">已回复</a>';
				}else{
					var back_flog="ERROR";
				}
				main+='<div class="mes_main">'+
							'<div class="mes_top"><span>'+data.info[i].Byname+' 给你留言：</span></div>'+
							'<div class="mes_get">'+
								'<p>'+data.info[i].message+'</p>'+
								'<div class="back_to">'+back_to+'</div>'+
								'<p style="text-align:right;margin-top:20px;">'+data.info[i].time+'</p>'+
							'</div>'+
							'<div id="back'+i+'"></div>'+
							'<div class="show">'+back+'</div>'+
						'</div>';
			}
			$("#right").html(main);
			// 调用消息提示函数
			new_mes();
		}
	});
}

// 更新未读信息为已读
function upload_read(){
	data={
		"read":1
	}
     $.ajax({
        cache: false,
        type: "POST",
        url:"ecjtu/upload_read.php",
        data:data,
        dataType:"json",
        async: true
    }); 
}

