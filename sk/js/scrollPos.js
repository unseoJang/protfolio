$(document).ready(function(){
	var pos = (location.href.split('='))[1];
	if(pos!=undefined){
		var offsetY = $('.' + pos).offset().top;
		var headerH = $('header .header_wrap').outerHeight();
		$('html,body').animate({'scrollTop' : offsetY-headerH-1}, 600);
	}
});

//location.href 기능:새로운페이지로 이동된다 형태:속성 주소히스토리:기록된다. 사용예:loaction.href='abc.php'
//location.replace 기능:새로운 페이지로 변경시킨다. 형태:메서드 주소히스토리:기록도지 않는다. 사용예:location.replace('abc.php')
//split() 기능:문자열 분할.
//undefined 기능:변수가 정의되었지만 아무 값도 할당받지 않은 상태를 뜻.
//test.offset().top:상단을 기준으로 test엘리먼트 요소가 위치한 거리를 절대좌표로 반환
//test.outerHeight():조건에 부합되는 요소들중 첫번째 요소를 반환해줌, padding,border,margin값도 포함됨 "px"없는 정수 또는 요소 집합이 없을때 null을 반환합니다.
