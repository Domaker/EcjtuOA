<?php
/*
*	显示任务详情
*
*
*/
	header("Content-type:text/html; charset=utf8");
	$id = $_POST['id'];
	include_once('./medoo/medoo.php');
	$database = new medoo();
	$sql = $database->select("task",array(
		"id",
		"time",
		"writer",
		"details",
		"timelong"
		),array("id"=>$id));
	if($sql){
		$result=array();
		$result['state']="success";
		$result['message']="get task success!";
		$result['info']=$sql;
		$result_json=json_encode($result);
		echo $result_json;
	}else{
		$result=array();
		$result['state']="error";
		$result['message']="get task error!select not work!";
		$result_json=json_encode($result);
		echo $result_json;
	} 
?>