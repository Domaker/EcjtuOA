<?php
/**
*	更新消息为已读消息
*
*/
	session_start();
	header("Content-type:text/html; charset=utf-8");
	include('medoo/medoo.php');
	$database = new medoo();
	if(@$_POST['read']){
		$read=$_POST['read'];
		$name=$_SESSION['name'];
		$sql = $database->update("message",array(
			"read"=>$read
			),array("Toname"=>$name));
		$result=array();
		if($sql){
			$result['state']="success";
		}else{
			$result['state']="error";
		}
		$result_json=json_encode($result);
		echo $result_json;
	}
?>