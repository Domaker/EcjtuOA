<?php
/*
*	留言信息处理
*	@author：张明亮
*
*/
	session_start();
	//error_reporting(null);
	header("Content-type:text/html; charset=utf-8");
	include('medoo/medoo.php');
	$database = new medoo();
	if(@$_POST['name']&&$_POST['message']){
		$Toname = $_POST['name'];
		$message=$_POST['message'];
		$time	=date("Y-m-d H:i:s");
		$Byname =$_SESSION['name'];
		$sql = $database->insert("message",array(
			"ToName"=>$Toname,
			"ByName"=>$Byname,
			"time"	=>$time,
			"message"=>$message
			));
		$result=array();
		if($sql){
			$result['state']="success";
			
			$result['message']="向".$Toname."留言成功！";
			$result_json=json_encode($result);
			echo $result_json;
		}
	}
	// $method=$_GET['method'];
	// switch ($method) {
	// 	case 'ToSb':
	// 		# 给某人留言
	// 		addMessage();
	// 		break;

	// 	case 'backTo':
	// 		# code...
	// 		break;
		
	// 	default:
	// 		# code...
	// 		break;
	// }

	// function addMessage(){
	// 	if($_POST['submit']){
	// 		$ToName=$_POST['ToName'];
	// 		$ByName=$_SESSION['name'];
	// 		$des=$_POST['des'];
	// 		$time=date("Y-m-d H:i:s");

	// 		$database->insert('message',[
	// 			'ToName' => $ToName,
	// 			'ByName' => $ByName,
	// 			'des'    => $des,
	// 			'time'   => $time,
	// 			]);
	// 	}
	// }
?>