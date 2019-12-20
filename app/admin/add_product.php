<?php

    include('../connect/connect.php');
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $name = $obj['name'];
    $price = $obj['price'];
    $description = $obj['description'];
    if($name !='' && $price != '' && $description!=''){
      $result = $mysqli->query("INSERT INTO product( name, price, description, new, inCollection ) VALUES('$name','$price','$description',1,1)");
      if($result){
      echo 'THANH_CONG';
      }
      else{
        echo 'KHONG_THANH_CONG';
      }
    }
    else{
      echo 'KHONG_THANH_CONG';
    }

?>