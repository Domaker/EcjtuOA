<?php
/**
*	获取个人所有消息
*
*/
	session_start();
	//error_reporting(null);
	header("Content-type:text/html; charset=utf-8");
	include('medoo/medoo.php');
	$database = new medoo();
	$name=$_SESSION['name'];
	$sql =$database->select("message",array(
		"id",
		"Byname",
		"message",
		"time",
		"read",
		"mid",
		"backmes",
		"backtime"
		),array("Toname"=>$name,"ORDER"=>"message.id DESC"));
	$result =array();
	if($sql){
		$result['state']="success";
		$result['info']=$sql;
	}else{
		$result['state']="error";
		$result['message']="message select errror";
	}
	$result_json=json_encode($result);
	echo $result_json;
?>