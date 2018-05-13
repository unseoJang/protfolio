var $slider;
var slideIdx = 0;
var slideLength = 0;
var autoSlider = '';

/*
	* setInterval : time마다 반복
	* clearInterval : setInterval 삭제
	* setTimeout : time 후에 실행 
*/

$(document).ready(function(){
	$slider = $('#slider');
	slideLength = $slider.find('.visual_slider div ul.img li').length;
	// autoSlider = setInterval(function(){
	// 	slideNext();
	// }, 4000);
	autoSlider = setInterval(slideNext, 4000);

	$slider.find('.control a').click(function(){
		clearInterval(autoSlider);
		autoSlider = '';

		if($(this).attr('class') == 'btn_prev') slidePrev();
		else if($(this).attr('class') == 'btn_next') slideNext();
		return false;	
	});
});

function slidePrev(){
	if(slideIdx == 0) slideIdx = slideLength-1;
	else slideIdx--; //slideIdx = slideIdx-1;
	slideMotion();
}
function slideNext(){
	if(slideIdx == slideLength-1) slideIdx=0;
	else slideIdx++; //slideIdx = slideIdx+1;
	slideMotion();
}
function slideMotion(){
	console.log(slideIdx);
	$slider.find('.visual_slider div .img li').removeClass('active');
	$slider.find('.visual_slider div .img li').eq(slideIdx).addClass('active');
	$slider.find('.txt_wrap li').removeClass('active');
	$slider.find('.txt_wrap li').eq(slideIdx).addClass('active');
	$slider.find('.carousel ul li').removeClass('active');
	$slider.find('.carousel ul li').eq(slideIdx).addClass('active');

	if(autoSlider == ''){
		autoSlider = setInterval(slideNext, 4000);
	}
}

$(".chat-viewers-list.tw-pd-b-2:nth-child(2)").childElementCount;