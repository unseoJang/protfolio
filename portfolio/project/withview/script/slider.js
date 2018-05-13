/**************

	with-view

***************/

$(function(){
	initSlider();

	slider.find('.controls .btn_prev').click(function(){
		currSlider = $(this).parents('.slider');
		if(!sliderMotionChk) prevSlider();
		return false;
	});
	slider.find('.controls .btn_next').click(function(){
		currSlider = $(this).parents('.slider');
		if(!sliderMotionChk) nextSlider();
		return false;
	});
	slider.find('.controls .carousel a').click(function(){
		
		currSlider = $(this).parents('.slider');
		sliderL = currSlider.find('.slider_cont li').length;

		// alert('sliderMotionChk : ' + sliderMotionChk + '// currSlider : ' + currSlider.attr('id'))
		
		if(!sliderMotionChk){	
			currIdx = $(this).parent().index();

			if(currSlider.attr('id') == 's01') s01_currIdx = currIdx;
			else if(currSlider.attr('id') == 's02') s02_currIdx = currIdx;
			else if(currSlider.attr('id') == 's05') return false;
			else if(currSlider.attr('id') == 's06') s06_currIdx = currIdx;
			
			sliderMotion();
		}
		return false;
	});
});
$(window).resize(function(){
	ww = viewportWidth();
});
var slider, currSlider;
var currIdx, s01_currIdx, s02_currIdx, s05_currIdx, s06_currIdx,
	oldIdx, s01_oldIdx, s02_oldIdx, s05_oldIdx, s06_oldIdx;
var sliderMotionChk, sliderMotionEndChk;

var ww;

function initSlider(){
	ww = viewportWidth();
	slider = $('.feature .slider');

	currIdx = 0,
	s01_currIdx = 0,
	s02_currIdx = 0,
	s05_currIdx = 0,
	s06_currIdx = 0,

	oldIdx = 0,
	s01_oldIdx = 0,
	s02_oldIdx = 0,
	s05_oldIdx = 0,
	s06_oldIdx = 0;

	sliderMotionChk = false;
}

function prevSlider(){
	sliderL = currSlider.find('.slider_cont li').length;

	if(currSlider.attr('id') == 's01'){
		if(s01_currIdx == 0) s01_currIdx=0;
		else s01_currIdx--;
	}else if(currSlider.attr('id') == 's02'){
		if(s02_currIdx == 0) s02_currIdx=0;
		else s02_currIdx--;
	}else if(currSlider.attr('id') == 's05'){
		if(s05_currIdx == 0) s05_currIdx=0;
		else s05_currIdx--;
	}else if(currSlider.attr('id') == 's06'){
		if(s06_currIdx == 0) s06_currIdx=0;
		else s06_currIdx--;
	}

	sliderMotion();
}
function nextSlider(){
	sliderL = currSlider.find('.slider_cont li').length;

	if(currSlider.attr('id') == 's01'){		
		if(s01_currIdx == sliderL-1) s01_currIdx=sliderL-1;
		else s01_currIdx++;
	}else if(currSlider.attr('id') == 's02'){
		if(s02_currIdx == sliderL-1) s02_currIdx=sliderL-1;
		else s02_currIdx++;
	}else if(currSlider.attr('id') == 's05'){
		if(s05_currIdx == sliderL-1) s05_currIdx=sliderL-1;
		else s05_currIdx++;
	}else if(currSlider.attr('id') == 's06'){
		if(s06_currIdx == sliderL-1) s06_currIdx=sliderL-1;
		else s06_currIdx++;
	}

	sliderMotion();
}
function sliderMotion(){

	console.log(currIdx)

	if(currSlider.attr('id') == 's01'){		
		currIdx = s01_currIdx;
		oldIdx = s01_oldIdx;
	}else if(currSlider.attr('id') == 's02'){
		currIdx = s02_currIdx;
		oldIdx = s02_oldIdx;
	}else if(currSlider.attr('id') == 's05'){
		currIdx = s05_currIdx;
		oldIdx = s05_oldIdx;
	}else if(currSlider.attr('id') == 's06'){
		currIdx = s06_currIdx;
		oldIdx = s06_oldIdx;
	}

	// console.log('curr : ' + currSlider.attr('id'))
	console.log('idx1 : ' + s01_currIdx + '// idx2 : ' + s02_currIdx + '// idx3 : ' + s05_currIdx + '// idx4 : ' + s06_currIdx)

	

	if(s01_currIdx!=s01_oldIdx || s02_currIdx!=s02_oldIdx || s05_currIdx!=s05_oldIdx || s06_currIdx!=s06_oldIdx){
		if(!sliderMotionChk){
			sliderMotionChk = true;

			if(currSlider.attr('id') != 's05'){
				currSlider.find('.slider_cont ul').animate({'margin-left':-(ww*currIdx)}, function(){
					endMotion();
				});
				sliderBtnMotion();
			}else{				
				var phoneW = 160*2;

				if(currIdx > 2) currSlider.find('.slider_cont ul li').eq(currIdx-3).css({'opacity':0, 'z-index':1});
				if(currIdx > 1) currSlider.find('.slider_cont ul li').eq(currIdx-2).css({'marginLeft':-560, 'opacity':.2, 'transform':'scale(.5)', 'z-index':3});
				if(currIdx > 0) currSlider.find('.slider_cont ul li').eq(currIdx-1).css({'marginLeft':-410, 'opacity':.7, 'transform':'scale(.8)', 'z-index':4});
				currSlider.find('.slider_cont ul li').eq(currIdx).css({'marginLeft':-phoneW/2, 'opacity':1, 'transform':'scale(1)', 'z-index':5});
				currSlider.find('.slider_cont ul li').eq(currIdx+1).css({'marginLeft':410-phoneW, 'opacity':.7, 'transform':'scale(.8)', 'z-index':4});
				currSlider.find('.slider_cont ul li').eq(currIdx+2).css({'marginLeft':560-phoneW, 'opacity':.2, 'transform':'scale(.5)', 'z-index':3});
				currSlider.find('.slider_cont ul li').eq(currIdx+3).css({'opacity':0, 'z-index':1});

				setTimeout(function(){
					endMotion();
				},600);

				sliderBtnMotion();
			}
		}
	}
}
function sliderBtnMotion(){	
	if(currIdx == 0){
		currSlider.find('.btn_prev').addClass('disabled');
		currSlider.find('.btn_next').removeClass('disabled');
	}else if(currIdx == sliderL-1){
		currSlider.find('.btn_prev').removeClass('disabled');
		currSlider.find('.btn_next').addClass('disabled');
	}else{	
		currSlider.find('.btn_prev').removeClass('disabled');
		currSlider.find('.btn_next').removeClass('disabled');
	}

	currSlider.find('.carousel li').eq(oldIdx).removeClass('active');
	currSlider.find('.carousel li').eq(currIdx).addClass('active');
}
function endMotion(){
	sliderMotionChk = false;

	if(currSlider.attr('id') == 's01') s01_oldIdx=s01_currIdx;
	else if(currSlider.attr('id') == 's02') s02_oldIdx=s02_currIdx;
	else if(currSlider.attr('id') == 's05') s05_oldIdx=s05_currIdx;
	else if(currSlider.attr('id') == 's06') s06_oldIdx=s06_currIdx;
}
function viewportWidth() {  	
  if (typeof document.documentElement.clientWidth != 'undefined' && typeof window.innerWidth != 'undefined'){
    if(document.documentElement.clientWidth > window.innerWidth)
      return document.documentElement.clientWidth;
    else 
      return window.innerWidth;  
  }else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0){
    return document.documentElement.clientWidth;  
  }else{
    return document.getElementsByTagName('body')[0].clientWidth;
  } 
}
