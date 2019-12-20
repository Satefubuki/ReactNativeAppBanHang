<?php

include('../connect/connect.php');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$id = $obj['id'];
$status = $obj['status'];

$sql = "UPDATE product SET status = 0 WHERE id = '$id' ";
$product = $mysqli->query($sql);
if($product){
    echo 'THANH_CONG';
}
else{
    echo 'KHONG_THANH_CONG';
}

?>