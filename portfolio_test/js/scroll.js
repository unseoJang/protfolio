$(window)
	.scroll(onScroll)
	.load(function(){
		scrollInit();
});


var winH;
function scrollInit(){
	console.log('start!')

	winH = $(window).height();
	$('html,body').scrollTop(0);
	$('html,body').animate({'scrollTop':0},100);

	$('#wrap').css('height',winH+$('#container').height())
}

var scTop,	
	introEndChk=false;
function onScroll(){
	scTop = $(window).scrollTop();  	
	
	var time=800;
	if(wheelState=='down'){
		if(!introEndChk){
			if(scTop>0 && scTop<winH){
				disableScroll();
				$('html,body').animate({'scrollTop':winH},time);
				$('#intro').animate({'top':-winH}, time, function(){
					blockScroll();	
				});
			}else if(scTop>winH){
				disableScroll();
				$('#intro').animate({'top':-winH*2}, time, function(){
					$('#container').css({'position':'absolute','top':winH})
					blockScroll();
					introEndChk=true;
				});
			}
		}	
	}else{
		if(scTop<winH){
			if(introEndChk){
				introEndChk=false;
				disableScroll();
				$('#container').css({'position':'fixed','top':0});
				setTimeout(function(){
					$('#intro').css({'top':-winH*2}).animate({'top':-winH}, time, function(){
						blockScroll();
					});
				},400);
			}else{
				disableScroll();
				$('html,body').animate({'scrollTop':0},time);
				$('#intro').animate({'top':0}, time, function(){
					blockScroll();
				});
			}
		}
	}
}

/* 스크롤 방향 체크 */
var wheelState;
$(window).on('DOMMouseScroll mousewheel', function(e){
	if(e.originalEvent.detail>0 || e.originalEvent.wheelDelta<0) wheelState='down';
	else wheelState='up';
});


/* 스크롤제어 */
function disableScroll(){
	$(document).on('scroll touchmove mousewheel', function(e){
	   e.preventDefault();
	   e.stopPropagation(); 
	   return false;
	});
}
function blockScroll(){
	$(document).off('scroll touchmove mousewheel');
}