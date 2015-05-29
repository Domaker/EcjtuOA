<?php
/*
*	获取个人信息
*
*/
	session_start();
	@$name=$_SESSION['name'];
	@$depart=$_SESSION['depart'];
	include('medoo/medoo.php');
	$database = new medoo();
	$info = $database->select("user",array(
			"name",			//姓名
			"depart",		//部门
			"sex",			//性别
			"posit",		//职位
			"birth",		//生日
			"tel",			//电话
			"qq",			//QQ
			"power"			//职权
		),array("name"=>$name));
	$result=array();
	$result["state"]="success";
	$result["message"]="";
	$result["info"]=$info;
	$json_result=json_encode($result);
	echo $json_result;
?>