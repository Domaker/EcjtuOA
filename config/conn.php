<?php header("Content-type:text/html; charset=utf8");
$conn = mysqli_connect("localhost","root","","ecjtu_oa") or die("数据库连接错误！");
mysqli_query($conn,"SET NAMES UTF8");?>