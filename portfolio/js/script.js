/***********************************

	UNSEO JANG's 1st Portfolio

***********************************/

$(function(){

	init();

	$('header .btn_open').click(function(){
		naviOpen();
		return false;
	});
	$('header .btn_close, header .navigation').click(function(){
		naviClose();
		return false;
	});
	$('header ul li a').click(function(){
		var i = $(this).parent().index();
		if($('header ul li.active').index() == i) return;

		if(viewportWidth() >= 1280){
			wheelState = $('header ul li.active').index() < i ? 'down' : 'up';
			if(i==0) scTop=0;
			else scTop=winH+1;
			onScroll();

			
			setTimeout(function(){
				if(i==2) $('html,body').animate({'scrollTop':$('.recent').offset().top});
				if(i==3) $('html,body').animate({'scrollTop':$('.contact').offset().top});
			}, 900);
		}else{
			var target;
			if(i==0) target=$('#intro');
			else if(i==1) target=$('.about')
			else if(i==2) target=$('.recent')
			else if(i==3) target=$('.contact')

			$('html,body').animate({'scrollTop':target.offset().top});
		}

		$('header ul li').removeClass('active');
		$(this).parent().addClass('active');
		// naviClose();
	});


	setTimeout(function(){
		$('#intro .planet').addClass('planet_ani');
	}, 400);
	setTimeout(function(){
		$('#intro .planet.planet_ani').addClass('re');
	}, 3600);

	c_slider = $('#intro .charactor .slider');

	c_slider.find('.controlor .prev').click(function(){
		prevSlider();
		return false;
	});
	c_slider.find('.controlor .next').click(function(){
		nextSlider();
		return false;
	});
	c_slider.find('.btns_circle ul li a').click(function(){
		var activeIdx = $(this).parent().index();

		c_slider.find('.cont ul li').eq(activeIdx).css({'left':'100%'});
		oldIdx = currIdx;
		currIdx = activeIdx;
		sliderMotion('next');
		return false;	
	});
	c_slider.find('.progress_circle').circleProgress({
		value:0,
		size:c_slider.find('.btns .progress_circle').width(),
		thickness:15,
		startAngle:(-Math.PI)/2,
		lineCap: 'round',
		fill: {gradient: ['#594c60', '#de465f', '#fff']}
	});
});
$(window).resize(resizeInit);
$(window).scroll(function(){
	if($(window).scrollTop() >= $('.contact').offset().top) $('.contact').addClass('rocket_motion');
});

var ww, wh;
function init(){
	ww = $(window).width();
	wh = $(window).height();
	
	c_sliderInit();
}

function resizeInit(){
	c_sliderInit();
	sliderMotion();
	
	c_slider.find('.progress_circle').circleProgress('size', c_slider.find('.btns .progress_circle').width());	
}

/***** navigation *****/
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

/***** charactor slider *****/
var c_slider,
	currIdx = 0,
	oldIdx; 
function c_sliderInit(){
	console.log('sliderInit');
	c_slider = $('#intro .charactor .slider');

	c_slider.find('.cont ul li').css({'width':c_slider.width()});
	c_slider.find('.cont ul').css('width',c_slider.width()*c_slider.find('.cont ul li').length);
	c_slider.find('.cont').css('margin-top', c_slider.find('.cont').height()/-2);

	progressSize();
}
function prevSlider(){
	oldIdx = currIdx;

	c_slider.find('.controlor a').removeClass('disabled');
	if (currIdx == 0) {
		//currIdx = (c_slider.find('.cont ul li').length)-1;
		currIdx = currIdx;
		c_slider.find('.controlor .prev').addClass('disabled');
	}else {
		currIdx --; //currIdx -1
	}
	sliderMotion('prev');
}
function nextSlider(){
	oldIdx = currIdx;

	c_slider.find('.controlor a').removeClass('disabled');
	if (currIdx == (c_slider.find('.cont ul li').length)-1) {
		// currIdx = 0;	
		currIdx = (c_slider.find('.cont ul li').length)-1;
		c_slider.find('.controlor .next').addClass('disabled');
	}else {
		currIdx ++; //currIdx + 1
	}	

	sliderMotion('next');
}
function sliderMotion(status){
	c_slider.find('.cont ul').animate({'margin-left':-c_slider.find('.cont ul li').outerWidth()*currIdx})

	carouselMotion();
}
function carouselMotion(){
	$('.btns_circle ul li').removeClass('active');
	$('.btns_circle ul li').eq(currIdx).addClass('active');

	
	if(currIdx != 0) c_slider.find('.progress_circle').circleProgress('value', (currIdx)/5);
	else c_slider.find('.progress_circle').circleProgress('value', 1);
}
function progressSize(){
	c_slider.find('.btns .progress_circle').css({'width':c_slider.width()+15, 'height':c_slider.height()+15});
}





