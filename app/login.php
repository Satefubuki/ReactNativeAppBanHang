<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];
$password = md5($obj['password']);
//$role_id= $obj['role_id'];
//$token = $obj['token'];
//$key = "example_key";

$sql = "SELECT u.email, u.name,  u.role_id  FROM users u where email = '$email' and password = '$password' ";
//$sql1 = "SELECT u.email, u.name, u.role_id  FROM users u where email = '$email' and password = '$password' and role_id = 2";

$result = $mysqli->query($sql);
//$result1 = $mysqli->query($sql1);

$user = mysqli_fetch_assoc($result);
//$user_admin = mysqli_fetch_assoc($result1);

if($user){
	$jwt = getToken($email);
	$array = array('token'=>$jwt, 'user'=>$user);
	print_r(json_encode($array));
}
//elseif($user_admin){
//	//$decoded = JWT::decode($token, $key, array('HS256'));
//	print_r(json_encode($user));
//}
else{
	echo 'SAI_THONG_TIN_DANG_NHAP';
}

?>