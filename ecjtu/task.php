<?php
/*
*	显示任务列表和删除任务
*
*/
	header("Content-type:text/html; charset=utf8");
	include_once('./medoo/medoo.php');
	$database = new medoo; 

	if(@(!$_POST)||$_POST['center']=="all"){	
		$sql =$database->select("task","*",array("ORDER"=>"task.id DESC"));	
	}else{
		//显示任务列表
		$center=$_POST['center'];
		if($center=="1"){$center="技术研发中心";}
		if($center=="2"){$center="新闻出版中心";}
		if($center=="3"){$center="行政管理中心";}
		if($center=="4"){$center="产品运营中心";}
		$sql =$database->select("task","*",array("center"=>$center,"ORDER"=>"task.id DESC"));
	}
	if($sql){
		$result=array();
		$result['state']="success";
		$result['message']="select task success!";
		$result['info']=$sql;
		$result_json=json_encode($result);
		echo $result_json;
	}else{
		$result=array();
		$result['state']="error";
		$result['message']="暂无任务！";
		$result_json=json_encode($result);
		echo $result_json;
	} 

	
	// 删除任务
	if(@$_POST['id']){
		$id = $_POST['id'];
		$database->delete("task",array("id"=>$id));
	}
 
 	


	
?>