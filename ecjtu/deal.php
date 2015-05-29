<?php
	session_start();
	header("Content-type:text/html; charset=utf8");
	include_once('./medoo/medoo.php');
	$database = new medoo;
	$method = $_GET['method'];
	$center = $_GET['center'];
	$id=$_GET['id'];

	//判断函数
	switch ($method) {
		case 'add':
			# 添加人员
			add($database);
			break;
		case 'delete_user':
			# 删除成员
			delete_user($database,$id);
			break;

		case 'task':
			# 添加任务
			task($database);
			break;
		case 'task_show':
			# 遍历任务
			task_show($database,$center);
			break;
		case 'task_del':
			task_del($database,$id);
		default:
			# code...
			break;
	}

	//增加成员
	function add($database){
		if(@$_POST['submit_add']){
			$name=$_POST['name'];
			$pwd = "123456ecjtu";
			$pwd = md5($pwd);
			$sex=$_POST['sex'];
			$posit=$_POST['posit'];
			$depart=$_POST['depart'];
			$center=$_POST['center'];
			$college = $_POST['college'];
			$power = $_POST['power'];
			$cell = $_POST['cellphone'];
			$qq = $_POST['qq'];

			$insert =$database->insert("user",[
				"name"   =>$name,
				"pwd"    =>$pwd,
				"sex"    =>$sex,
				"posit"  =>$posit,
				"depart" =>$depart,
				"center" =>$center,
				"college"=>$college,
				"power"  =>$power,
				"tel"	 =>$tel,
				"qq"	 =>$qq
				]);
			if($insert){
				$result=array();
				$result['state']="success";
				$result['message']="";
				$result_json=json_encode($result);
				echo $result_json;
			}else{
				$result=array();
				$result['state']="error";
				$result['message']="insert sql error!";
				$result_json=json_encode($result);
				echo $result_json;
			}
		}
	}

	// 删除成员
	function delete_user($database,$id){
		$sql =$database->delete("user",["id"=>$id]);
		if($sql){
			$result=array();
			$result['state']="success";
			$result['message']="";
			$result_json=json_encode($result);
			echo $result_json;
		}else{
			$result=array();
			$result['state']="error";
			$result['message']="delete error!";
			$result_json=json_encode($result);
			echo $result_json;
		}

	}

	// 增加任务
	function task($database){
		if(@$_POST['sub_task']){
			$depart = $_POST['depart'];
			$time = date("Y-m-d H:i:s");
			$author = $_POST['author'];
			$task 	= $_POST['task'];

			$sql = $database->insert("task",[
				"depart" =>$depart,
				"time"   =>$time,
				"author" =>$author,
				"task"	 =>$task
				]);
			$sql_task = "INSERT INTO task(depart,time,author,task) VALUES('$depart','$time','$author','$task')";
			if(mysqli_query($sql_task)){
				$result=array();
				$result['state']="success";
				$result['message']="add task success!";
				$result_json=json_encode($result);
				echo $result_json;
			}else{
				$result=array();
				$result['state']="error";
				$result['message']="add task error!";
				$result_json=json_encode($result);
				echo $result_json;
			}
		}
	}

	//删除任务
	function task_del($database,$id){
		$sql =$database->delete("task",[
			"id"=>$id
			]);
		$sql = "DELETE FROM task WHERE `id`=$id";
		if(mysqli_query($sql)){
			$result=array();
			$result['state']="success";
			$result['message']="delete task success!";
			$result_json=json_encode($result);
			echo $result_json;
		}else{
			$result=array();
			$result['state']="error";
			$result['message']="delete task error!";
			$result_json=json_encode($result);
			echo $result_json;
		}
	}

	// 显示任务
	function task_show($database,$center){
		$sql =$database->select("task",array[
			"id"=>$id,
			"title"=>$title,
			"time"=>$time,
			"writer"=>$writer,
			"des"=>$des
			],"*");
		if($sql){
			$result=array();
			$result['state']="success";
			$result['message']="delete task success!";
			$result['info']=$sql;
			$result_json=json_encode($result);
			echo $result_json;
		}else{
			$result=array();
			$result['state']="error";
			$result['message']="delete task error!";
			$result_json=json_encode($result);
			echo $result_json;
		}
	}
?>	