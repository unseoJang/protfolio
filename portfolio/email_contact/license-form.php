<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<?php 
if(isset($_POST['submit'])){
    $to = "qqbck123@naver.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $toSubject = "[장운서]" . $name . "님이 홈페이지에 가맹문의 글을 등록하셨습니다."; 
    // $fromSubject = "[½´ÆÛÁ·¹ß]" . $name . "´ÔÀÌ µî·ÏÇÏ½Å °¡¸Í¹®ÀÇ ±ÛÀÌ Á¤»óÀûÀ¸·Î ´ã´çÀÚ¿¡°Ô Àü´ÞµÇ¾ú½À´Ï´Ù.";
    
    $message = ":-)!". "\n\n" ."지금 홈페이지에 가맹문의 글이 등록되었습니다.". "\n\n" ."이름 : " .$name . "\n\n" ."이메일 : " .$email . "\n\n" ."연락처 : " .$phone . "\n\n" ."문의내용 : " .$message;
    // $message2 = "Here is a copy of your message " . $address . "\n\n" . $message;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$toSubject,$message,$headers);

    // mail($from,$fromSubject,$message2,$headers2); // sends a copy of the message to the sender
    // echo "<script>window.close();</script>";
    echo   '<link href="./../css/reset.css" rel="stylesheet" type="text/css">
            <link href="./../css/fonts.css" rel="stylesheet" type="text/css">  
            <style>
                .layer {background:#ffd360;box-sizing:border-box;font-family:"NanumGothicWebUltraLight";text-align:center;padding:0 20px;position:absolute;width:100%;height:100%;}
                .layer .valign {display:table;height:100%;width:100%;}
                .layer .valign .middle {display:table-cell;vertical-align:middle;height:100%;width:100%;}
                .layer h1 {color:#444;font-size:60px;letter-spacing:-0.4px;}
                .layer p {color:#222;display:block;font-size:12px;letter-spacing:-0.2px;line-height:16px;margin:40px 0;}
                .layer button {background:rgba(0, 0, 0, .6);display:inline-block;color:#ffd360;font-size:14px;line-height:18px;font-weight:bold;padding:8px 20px;}
            </style>
            <div class="layer">
                <div class="valign">
                    <div class="middle">
                        <h1>완료되었습니다!</h1>
                        <p>
                            문의글이 전달 되었습니다.<br />
                            담당자가 메일을 확인하면 입력하신 이메일이나 휴대폰으로 연락드립니다.<br />
                            감사합니다 :-)
                        </p>
                        <button onclick="self.close();">확인</button>
                    </div>
                </div>
            </div>';
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>

