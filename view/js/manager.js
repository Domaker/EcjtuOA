window.onload=function(){ 
        var obj=document.getElementById("depart");
        var index=obj.selectedIndex;
        var val=obj.options[index].value;
        data={
            "option":val
        }
        console.log(val);
		$.ajax({
            cache: false,
            url:"ecjtu/manager.php",
            data:data,
            type:"POST",
            dataType:"json",
            success: function(data) {
                if(data.state=="success"){
                    var td="";
                    for(i=0;i<data.info.length;i++){
                        td+='<tr><td>'+data.info[i].name+'</td><td>'+data.info[i].sex+'</td><td>'+data.info[i].depart+'</td><td>'+data.info[i].college+'</td><td><a href="javascript:message('+data.info[i].id+');"><i class="icon-comment-alt"></i></a></td></tr>';
                    }
                    document.getElementById("contain").innerHTML=td;
                }else{
                    alert("获取部门成员信息失败");
                }
            }
        });
        $('.theme-add').click(function(){
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
        })
        $('.theme-poptit .close').click(function(){
            $('.theme-popover-mask').fadeOut(100);
            $('.theme-popover').slideUp(200);
        })
}
 

 