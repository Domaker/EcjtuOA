function center(data){
        center={
            center:data
        };
        $.ajax({
            cache: false,
            type: "GET",
            data:center, 
            url:"ecjtu/task.php",
            dataType:"json",
            success: function(data) {
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
                  var node = '<div class="c_item">'+
                        '<div class="c_i_icon_arrow"><img src="view/images/jiao.jpg"></div>'+
                        '<div class="c_i_icon_dot">'+
                            '<div class="c_i_icon_dot_child"></div>'+
                        '</div>'+
                        '<div class="c_i_content">'+
                            '<div class="c_i_content_title">'+
                                '<span class="head">项目名称：</span><span>'+data.info[i].title+'</span>'+
                            '</div>'+
                            '<div class="c_i_content_time">'+
                                '<span class="head">发布时间：</span><span>'+data.info[i].time+'</span>'+
                            '</div>'+
                            '<div class="c_i_content_author">'+
                                '<span class="head">发布者：</span><span>'+data.info[i].writer+'</span>'+
                            '</div>'+
                            '<div class="c_i_content_intro">'+
                                '<span class="head">项目简介：</span><span>'+data.info[i].des+'</span>'+
                                '<a href="javascript:showdiv('+data.info[i].id+');" class="intro">查看详情</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="c_i_status" id="status">'+img+'</div>'+
                        '<div class="delete imooc-icon"><a onClick="javascript:deletes(this,'+data.info[i].id+');" href="#">&#xe9ac;</a></div></div>';
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

