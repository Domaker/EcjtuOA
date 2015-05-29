<?php
/*
*	登陆程序
*
*/
	session_start();
	header("Content-type:text/html; charset=utf-8");
	include('../config/conn.php');
	$user=$_POST['user'];
	$pwd=$_POST['pass']."ecjtu";
	$pwd=md5($pwd);
	$flog="false";			//标志符
	$sql_login="SELECT * FROM user";
	$query_login=mysqli_query($conn,$sql_login);
	while($arr_login=mysqli_fetch_assoc($query_login)){
		$name=$arr_login['name'];
		// 判断用户
		if($name==$user){
			$upwd=$arr_login['pwd'];
			$_SESSION['name']=$name;
			$_SESSION['depart']=$arr_login['depart'];
			$_SESSION['center']=$arr_login['center'];
			$_SESSION['power']=$arr_login['power'];
			$flog="success";
		}
	}
	$result=array();
	if($flog=="success"){
		if($pwd==$upwd){
			$result['state']="success";
			$result['name']=$user;
			$result['message']=$_SESSION['power'];
			$result_json=json_encode($result);
			echo $result_json;
		}else{
			$result['state']="error1";
			$result['message']="密码错误！";
			$result_json=json_encode($result);
			echo $result_json;
		}
	}elseif($flog=="false"){
		$result['state']="error2";
		$result['message']="用户名不存在！";
		$result_json=json_encode($result);
		echo $result_json;
	}
			
?>	