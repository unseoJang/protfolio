<?php
    //print phpinfo();  
// multiple recipients
/*$to  = 'gunug@naver.com';*/
$to  = $_POST['to'];
/* += 이전 값에 추가값을 더함 */
/*메일 받을 사람*/
/*$to = 'aidan@example.com, wez@example.com'*/

// subject
/* $subject = 'hollo~'; */
$subject = $_POST['subject'];

// message 본문
/*$message = '<div>'.'mail_send_test'.'</div>';*/
$message = '<div>'.$_POST['message'].'</div>';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Additional headers
$headers .= 'To: <'.$_POST['to'].'>' . "\r\n";
$headers .= 'From: <'.$_POST['from'].'>' . "\r\n";
/*$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";*/
/*$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";*/
/* to 수신자, from 발신자, cc 참조, bcc 숨은 참조 */

// Mail it
/*mail($to, $subject, $message, $headers);*/
if ($_POST['submit']) {
        if (mail($to, $subject, $message, $headers)) { 
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        }
    }
?>