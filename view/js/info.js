window.onload=function(){
	$.ajax({
        cache: false,
        url:"ecjtu/info.php",
        dataType:"json",
        success: function(data) {
            if(data.state=="success"){
                var name=data.info[0].name;
                var depart=data.info[0].depart;
                var sex=data.info[0].sex;
                var birth=data.info[0].birth;
                var posit=data.info[0].posit;
                var tel=data.info[0].tel;
                var qq=data.info[0].qq;
                var power=data.info[0].power;
                if(power>=2){
                	var power_show="是";
                }else{
                	var power_show="否";
                }
                document.getElementById("input-name").placeholder=name;
                document.getElementById("input-sex").placeholder=sex;
                document.getElementById("input-work").placeholder=posit;
                document.getElementById("input-telephone").placeholder=tel;
                document.getElementById("input-qq").placeholder=qq;
                document.getElementById("input-birth").placeholder=birth;
                document.getElementById("input-birth").value=birth;
                document.getElementById("input-work").value=posit;
                document.getElementById("input-telephone").value=tel;
                document.getElementById("input-qq").value=qq;
                document.getElementById("input-power").value=power_show;
                document.getElementById("input-sex").value=sex;
                document.getElementById("input-name").value=name;
                new_mes();
            }else{
                alert("获取个人信息失败");
            }
        }
    });
}
