<?php
/*
*	接受任务，并判断是否已经被接受
*
*
*/
	session_start();
	header("Content-type:text/html; charset=utf8");
	include_once('../config/conn.php');

	// 获取当前登陆用户名
	$name=$_SESSION['name'];

	// 接收传递过来的任务的id
	$id = $_POST['id']; 

	// 查询任务表
	$sql_check="SELECT * FROM task WHERE `id`=$id";
	$query = mysqli_query($conn,$sql_check);
	$arr = mysqli_fetch_assoc($query); 
	$getman	=$arr['getman'];
	// 如果该任务未被接受，则更新信息，改为接受
	if($arr['status']==0){ 
		$sql = "UPDATE task SET `status` =1,`getman`='$name' WHERE `id`='$id'";
		// var_dump($sql);
		if(mysqli_query($conn,$sql)){
			$result=array();
			$result['state']="success"; 
			$result_json=json_encode($result);
			echo $result_json;
		}else{ 
			$result=array();
			$result['state']="error"; 
			$result['message']="ERROR:更新信息失败！";
			$result_json=json_encode($result);
			echo $result_json;
		}

	// 如果已经被接受，则提示错误信息
	}elseif($arr['status']==1){
		$result=array();
		$result['state']="error"; 
		$result['message']="该任务已经被 ".$getman." 接受了。^_^";
		$result_json=json_encode($result);
		echo $result_json;
	}elseif($arr['status']==2){
		$result=array();
		$result['state']="error"; 
		$result['message']="该任务已完成！";
		$result_json=json_encode($result);
		echo $result_json;
	}
?>