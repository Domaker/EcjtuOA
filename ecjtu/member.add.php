<?php
/*
*	功能：添加用户
*	
*
*/
	session_start();
	header("Content-type:text/html; charset=utf8");
	include('../config/conn.php');
	if(@$_POST['submit']){
		$name	=$_POST['name'];
		$sex	=$_POST['sex'];
		$posit  =$_POST['posit']; 
		$depart =$_POST['depart'];
		$tel   	=$_POST['tel'];
		$qq		=$_POST['qq'];
		$power	=$_POST['power'];
		$center	=$_POST['center'];
		$college=$_POST['college'];
		$pwd =md5("123456ecjtu");
		if($name=="" || $sex=="" || $posit=="" || $depart=="" || $power=="" || $center==""){
			echo "<script> alert('请填写完整*处内容！'); history.go(-1);</script>";
		}
	}
	$sql = "INSERT INTO user(name,pwd,sex,depart,posit,tel,qq,center,college,power) VALUES('$name','$pwd','$sex','$depart','$posit','$tel','$qq','$center','$college','$power')";
 
	if(mysqli_query($conn,$sql)){ 
		echo "<script> alert('添加成员信息成功！默认密码为 123456'); history.go(-1);</script>";
	}else{ 
		echo "<script> alert('ERROR:添加成员信息失败！'); history.go(-1);</script>";
	} 
?>