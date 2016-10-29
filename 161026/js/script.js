/*
	기능
	0. 랜덤으로 문장 뿌려주기
	1. 사용자의 키보드 입력
	2. 키코드 들어올 때마다 확인
	3. 틀리면 빨간색 맞을때까지 빨간색
	4. 한문장을 정확히 쓴 후 엔터치면 정확도/평균정확도/현재속도/최고속도 측정
*/

$(document).ready(function(){ 
	randomStrNum();

	

});
/* 사용자의 키보드 입력 */
var inputStr;
$(window).keyup(function(){
	inputStr =  $('.typing .string_box .user input').val(); // input에 입력한 텍스트
	/* 체크 */
	strChk();
});

/* 랜덤으로 문장 뿌려주기 */
var randomStr;
randomStr = [
	'동해물과 백두산이 마르고 닳도록', //index 0
	'하느님이 보우하사 우리 나라 만세', //index 1
	'무궁화 삼천리 화려강산', //index 2
	'대한사람 대한으로 길이 보전하세' //index 3
];
var a;
function randomStrNum(){ // 함수 정의
	// math.random() ; 0~1 랜덤한 숫자를 반환
	// math.floor() ; 실수->정수
	// length : 길이
	// 배열의 인덱스(몇번째) 찾기 : 배열이름[인덱스]
	//.append() = innerHtml
	a = Math.floor(Math.random()*randomStr.length);
	$('.typing .string_box .view').append(randomStr[a]); 
}

/* 사용자가 입력한 텍스트 체크하기 */
function strChk(){ //string check
	// randomStr[a] // view에 뿌려진 텍스트
	// inputStr // 사용자가 입력한 텍스트

	var x = '';
	for(var i=0;i<randomStr[a].length;i++){
		// var i=0 ; 초기값
		// i<randomStr[a] ; 조건식
		// i++ ; 변화조건

		//console.log(i)
		if(randomStr[a].substring(i,i+1)!=inputStr.substring(i,i+1) && i<inputStr.length){ // view에 뿌려진 텍스트 == 사용자가 입력한 텍스트 
			console.log(i);
			x += '<span style="color:red">'+randomStr[a].substring(i,i+1)+'</span>';
		}else{
			x += randomStr[a].substring(i,i+1);
		}
	}
	$('.typing .string_box .view').empty().append(x); // empty() : 태그 안의 내용을 지우기;

	// var x = '가나다라';
	// console.log(x.substring(0,1))
	// console.log(x.substring(1,2))
	// console.log(x.substring(2,3))
	// console.log(x.substring(3,4))

	// if(randomStr[a] == inputStr){
	// 	console.log('맞았다');
	// }else {
	// 	console.log('틀렸다');
	// }
}



