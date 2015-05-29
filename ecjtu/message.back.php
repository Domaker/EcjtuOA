<?php
/*
*	留言回复函数
*
*/
	session_start();
	header("Content-type:text/html; charset=utf8");
	date_default_timezone_set('Asia/Shanghai');
	include_once("./medoo/medoo.php");
	$database= new medoo();
	$result=array();
	$time=date("Y-m-d H:i:s");
	if(@$_POST['id']){
		$id = $_POST['id'];
		$backmes = $_POST['backmes'];
		if($backmes==""){
			$result['state']="error";
			$result['message']="内容不能为空！";
			exit;
		}
		$sql = $database->update("message",array(
			"backmes"=>$backmes,
			"mid"=>1,
			"backtime"=>$time
			),array("id"=>$id));
		if($sql){
			$result['state']="success";
			$result['message']="回复成功！";
		}else{
			$result['state']="error";
			$result['message']="回复失败！";
		}
	}else{		
		$result['state']="error";
		$result['message']="未获得POST的值！";
	}
		$result_json=json_encode($result);
		echo $result_json;

?>