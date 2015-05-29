<?php
/*
*	首页引导
*
*
*/
	session_start();
	error_reporting(null);
	header("Content-type: text/html; charset=utf-8");

	if(@$_GET['page']){
		$page=$_GET['page'];
		if($_SESSION['name']==""){

			// 跳转到登陆
			$page=6;
		}
	}
	switch($page){
		case 1:
			# 首页
			include("view/index.html");
			break;
		case 2:
			# 首页
			include("view/member.html");
			break;
		case 3:
			# 个人信息
			include("view/info.html");
			break;
		case 4:
			# 首页
			include("view/message.html");
			break;
		case 5:
			# 首页
			include("view/mesback.html");
			break;
		case 6:
			# 首页
			include("view/login.html");
			break;
		default:
			include("view/login.html");
			break;
	}
?>