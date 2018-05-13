$(function(){
	sliderInit();
});
$(window).scroll(function(){
	scTop = $(window).scrollTop();
	onScroll();
});
$(window).resize(onResize);

var winH,
	htmlBody,
	time;

function sliderInit(){
	winH = $(window).height();
	htmlBody = $('html,body');
	time = 800;

	window.scrollTo(0,0); //scrollTop을 0으로 보냄.
	htmlBody.animate({'scrollTop':0},100); // 위의 scrollTo가 잘 동작하지 않아서 한번 더 0으로 보냄.

	$('#intro').css({'position':'fixed', 'top':0});
	$('#container').css({'position':'fixed'})
	$('#wrap').css('height', winH*2 + $('#container').height());
	setTimeout(function(){
		window.scrollTo(0,0);
		htmlBody.animate({'scrollTop':0},100);

		htmlBody.css({'height':'auto', 'overflow':'auto'})
	}, 800);
}
function onScroll(){
	if(viewportWidth() >= 1280){
		console.log('scroll : ' + scTop)
		console.log("wheelState : " + wheelState);
		// console.log('top : ' + scTop, wheelState)
		if(wheelState == 'down'){
			if(scTop > 0 && scTop < winH){
				disableScroll();
				htmlBody.animate({'scrollTop':winH},time);
				$('#intro').animate({'top':-winH}, time, function(){
					blockScroll();	
				});
			}else if(scTop > winH && scTop < winH*2){
				disableScroll();
				htmlBody.animate({'scrollTop':winH*2},time);
				$('#intro').animate({'top':-winH*2}, time, function(){
					
					htmlBody.animate({'scrollTop':winH*2},time);
					$('#container').css({'padding-top':winH*2, 'position':'static'})
					setTimeout(function(){
						blockScroll();
					},800);	
				});					
			}
		}else if(wheelState == 'up'){
			if(scTop <= winH*2 && scTop > winH){
				disableScroll();
				$('#container').css({'padding-top':0, 'position':'fixed'});
				htmlBody.animate({'scrollTop':winH},time);
				
				setTimeout(function(){
					$('#intro').animate({'top':-winH*1}, time, function(){
						blockScroll();
					});	
				}, 200);

			}else if(scTop <= winH){
				disableScroll();
				htmlBody.animate({'scrollTop':0},time);
				$('#intro').animate({'top':0}, time, function(){
					blockScroll();
				});
			}
		}
	}else{
		blockScroll();
		// scTop=0;
		// htmlBody.css({'height':'100%', 'overflow':'100%'})
		$('#wrap').css('height', 'auto');
		$('#intro').css({'position':'relative', 'top':0});
		$('#container').css({'position':'static', 'padding-top':0});

		// sliderInit();
	}		
}
function onResize(){
	viewportWidth();
	
	if(viewportWidth() >= 1280){
		sliderInit();
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

/* viewport width */
function viewportWidth() {  
	if (typeof window.innerWidth != 'undefined'){
		return window.innerWidth;  
	}else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0){
		return document.documentElement.clientWidth;  
	}else{
		return viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
	} 
}