<?php

include('../connect/connect.php');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$id = $obj['id'];
$name = $obj['name'];
$price = $obj['price'];
$description = $obj['description'];

$sql = "UPDATE product SET name='$name', price='$price', description='$description' WHERE id = '$id' ";
$product = $mysqli->query($sql);
if($product){
    echo 'THANH_CONG';
}
else{
    echo 'KHONG_THANH_CONG';
}

?>