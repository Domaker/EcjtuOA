<?php 
/*
*		功能：更新个人信息
*
*/
	session_start();
	header("Content-type:text/html; charset=utf8");
	include_once('./medoo/medoo.php');
	$database	=	new medoo();

	$Sname = $_SESSION['name'];
	if($_POST['submit']){
		$name 	= 	$_POST['name'];
		$sex	=	$_POST['sex'];
		$posit	=	$_POST['posit'];
		$birth	=	$_POST['birth'];
		$tel	=	$_POST['tel'];
		$qq		=	$_POST['qq'];

		$sql	=	$database->update("user",array(
			"name"=>$name,
			"sex"=>$sex,
			"depart"=>$posit,
			"birth"=>$birth,
			"tel"=>$tel,
			"qq"=>$qq
			),array("name"=>$Sname));

		// 判断是否更新成功
		if($sql){
			echo "<script> alert('更新信息成功！'); history.go(-1);</script>";
		}else{
			echo "<script> alert('更新信息失败！'); history.go(-1);</script>";
		}
	}
?>