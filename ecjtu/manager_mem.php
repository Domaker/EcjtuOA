<?php
/*
*	获取部门成员信息
*
*
*/
	session_start();
	header("Content-type:text/html; charset=utf8");
	include('medoo/medoo.php');
	$database = new medoo();

	if(@$_POST['depart']){
		$depart=$_POST['depart'];
		if($depart!="日新网"){
			$manager = $database->select("user",array(
				"id",
				"name",
				"sex",
				"college",
				"depart",
				"center"
				),array("depart"=>$depart));
		}else{
			$manager = $database->select("user",array(
				"id",
				"name",
				"sex",
				"college",
				"depart",
				"center"
				));
		}
	}else{
		$manager = $database->select("user",array(
			"id",
			"name",
			"sex",
			"college",
			"depart",
			"center"
			));
	}
	$result=array();
	if($manager){
		$result["state"]="success";
		$result["message"]="all done"; 
		$result["info"]=$manager;
		$json_result=json_encode($result);
		echo $json_result;
	}else{
		$result["state"]="error";
		$result["message"]="ERROR:Sql flase"; 
		$json_result=json_encode($result);
		echo $json_result;
	}

	if(@$_POST['id']){
		$id=$_POST['id'];
		$database->delete("user",array("id"=>$id));
	}
	
?>