<?php
/**
*		获取留言对方姓名
*
*
*/
	header("Content-type:text/html; charset=utf8");
	$id=$_POST['id'];
	include_once('./medoo/medoo.php');
	$database = new medoo();

	$sql =$database->select("user",array(
		"name"
		),array("id"=>$id));
	if($sql){
		$result['state']="success";
		$result['message']="成功得到对方姓名";
		$result['info']=$sql;
		$result_json=json_encode($result);
		echo $result_json;
	}else{
		$result['state']="error";
		$result['message']="获取对方姓名失败"; 
		$result_json=json_encode($result);
		echo $result_json;
	}
?>