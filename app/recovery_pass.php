<?php
    include('connect/connect.php');
    require_once('PHPMailer\PHPMailerAutoload.php');
    $context = stream_context_create(
        array(
            "http" => array(
                "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            )
        )
    );
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $email = trim($obj['email']);
    //$email = 'satefubuki@gmail.com';
    $sql = "SELECT u.name,  u.password FROM users u where email = '$email' ";

    $result = $mysqli->query($sql);
    $user = mysqli_fetch_assoc($result);
    //check returned values
    if($user){
    $name = $user['name'];
    $pass = $user['password'];
    //encrypt md5 password
    $hash_type = "md5";
    $md5_email = "hoathieng1234@gmail.com";
    $code = "22117eff02f2d983";
    $response = file_get_contents("https://md5decrypt.net/Api/api.php?hash=".$pass."&hash_type=".$hash_type."&email=".$md5_email."&code=".$code, false, $context);
    $en_pass = $response;
    //send mail
     $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                  // Enable SMTP authentication
        $mail->Username   = 'hoathieng1234@gmail.com';                     // SMTP username
        $mail->Password   = 'Mohammed124';                               // SMTP password
        $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = '465';                                    // TCP port to connect to
        //Recipients
        $mail->setFrom('Mizu@gmail.com', 'Mizu Shop');
        $mail->addAddress($email);
        //$mail->addAddress($email);     // Add a recipient
    
        // Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Recovery password';
        $mail->Body    = 'Xin chào, '.$name.' <br> Đây là mật khẩu của bạn: <b>'.$en_pass.'</b>';
    
        $mail->send();
        
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
    }else{
        echo 'fail';
    }


?>
