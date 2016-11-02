/***********************************

	UNSEO JANG's 1st Portfolio

***********************************/
$(window).resize(onResize);
$(document).ready(function(){

	init();
	sliderInit();
	$('header .btn_open').click(function(){
		naviOpen();
		return false;
	});
	$('header .btn_close, header .navigation').click(function(){
		naviClose();
		return false;
	});


	var autoSlider = setInterval(function(){nextSlider()}, 2000);

	c_slider.find('.controlor .prev').click(function(){
		console.log('prev btn')
		clearInterval(autoSlider);
		prevSlider();
		autoSlider = setInterval(function(){nextSlider()}, 2000);
	});
	c_slider.find('.controlor .next').click(function(){
		console.log('next btn')
		clearInterval(autoSlider);
		nextSlider();
		autoSlider = setInterval(function(){nextSlider()}, 2000);
	});
	c_slider.find('.btns_circle ul li a').click(function(){
		console.log('carousel btn')
		//carousel
		var activeIdx = $(this).parent().index();

		clearInterval(autoSlider);
		c_slider.find('.cont ul li').eq(activeIdx).css({'left':'100%'});
		oldIdx = currIdx;
		currIdx = activeIdx;
		sliderMotion('next');
		autoSlider = setInterval(function(){nextSlider()}, 2000);
	});

});
function onResize(){
	sliderInit();
}

/* charactor slider */
var c_slider,
	currIdx = 0,
	oldIdx; 
function sliderInit(){
	c_slider = $('#intro .charactor .slider');

	c_slider.find('.cont ul li').css({'width':c_slider.width()});
	c_slider.find('.cont ul').css('width',c_slider.width()*c_slider.find('.cont ul li').length);
	c_slider.find('.cont').css('margin-top', c_slider.find('.cont').height()/-2)
}
function prevSlider(){
	oldIdx = currIdx;

	if (currIdx == 0) currIdx = (c_slider.find('.cont ul li').length)-1;
	else currIdx --; //currIdx -1

	sliderMotion('prev');
}
function nextSlider(){
	oldIdx = currIdx;

	if (currIdx == (c_slider.find('.cont ul li').length)-1) currIdx = 0;	
	else currIdx ++; //currIdx + 1	

	sliderMotion('next');
}
function sliderMotion(status){

	c_slider.find('.cont ul').animate({'margin-left':-c_slider.find('.cont ul li').outerWidth()*currIdx})

	carouselMotion();
}
function carouselMotion(){
	$('.btns_circle ul li').removeClass('active');
	$('.btns_circle ul li').eq(currIdx).addClass('active');
}


var ww, wh;
function init(){
	ww = $(window).width();
	wh = $(window).height();

}


/* navigation */
var naviOpenChk = false;
function naviOpen(){
	if(!naviOpenChk){
		naviOpenChk = true;
		$('header .btn_open').animate({'opacity':0},function(){
			$(this).css({'display':'none'});
		});
		$('header .navigation, header .btn_close').css({'display':'block'}).animate({'opacity':1});
	}		
}
function naviClose(){
	if(naviOpenChk){
		$('header .btn_close, header .navigation').animate({'opacity':0},function(){
			$(this).css({'display':'none'});
		});
		$('header .btn_open').css({'display':'block'}).animate({'opacity':1}, function(){
			naviOpenChk = false;
		});		
	}
}