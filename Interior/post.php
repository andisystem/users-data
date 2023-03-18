<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$company = $_POST['company'];
$profession = $_POST['post'];

if($name === '' || $phone === '' || $email === '' || $company === '' || $post === ''){
    echo json_encode('This record is required');
}else{
    echo json_encode('Your datas have seen sent<br>Name:'.$name.'<br>Phone:'.$phone.'<br>Corporative email:.'.$email.'<br>Company:'.$company.'<br>Post:'.$profession);
}

?>