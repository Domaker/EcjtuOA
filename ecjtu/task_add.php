<?php
/*
*	增加任务
*
*
*/
	session_start();
	header("Content-type:text/html; charset=utf8");
	error_reporting(null);
	include_once('../config/conn.php'); 
	if($_POST['submit_task']){
		$title = $_POST['title'];
		$writer = $_POST['writer'];
		$start	=$_POST['start'];
		$end	=$_POST['end'];
		$des	=$_POST['des'];
		$info	=$_POST['info'];
 		$depart	=$_SESSION['depart'];
 		$center	=$_SESSION['center'];
 		$status =0;
 		$start=explode("/",$start);
 		$start=$start[0]."年".$start[1]."月".$start[2]."日";
 		$sql = "INSERT INTO task(title,writer,time,timelong,details,des,depart,center,status) VALUES('$title','$writer','$start','$end','$info','des','$depart','$center','$status')";
 		if(mysqli_query($conn,$sql)){
 			echo "<script>  history.go(-1); </script>";
 		}else{
 			echo "<script> alert('ERROR：任务添加失败--数据库语言错误'); history.go(0); </script>";
 		}
	}
?>