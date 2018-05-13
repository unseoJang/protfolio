$(function(){
	header = $('header');

	$('h1 a').click(function(){
		scrollToPos(0);
		return false;
	});
	header.find('nav a').click(function(){
		var idx = $(this).parent().index();
		naviScroll(idx);
		return false;
	});
	header.find('.contactus .btn').click(function(){
		var target = $(this).parent();
		target.attr('class', target.hasClass('active') ? 'contactus' : 'contactus active');
		return false;
	});
	header.find('.share .btn').click(function(){
		var target = $(this).parent();
		target.attr('class', target.hasClass('active') ? 'share' : 'share active');
		return false;
	});
	header.find('.btn_menu').click(function(){
		var target = header.find('.header_wrap');
		console.log(target)
		target.attr('class', target.hasClass('active') ? 'header_wrap' : 'header_wrap active');
		return false;
	});
	$('#experience .experience ul li a').click(function(){
		var idx = $(this).parent().index();
		var layer = $('#pop_experience');
		viewLayer(layer, idx);
	});
	$('#product .product article ul .thumb a').click(function(){
		var idx = $(this).parent().index();
		var layer = $('#pop_product');
		console.log('layer')
		viewLayer(layer, idx);
	}); 
	$('.layerpopup .btn_close').click(function(){
		hideLayer();
	});

	$('#go_top').click(function(){
		scrollToPos(0);
		return false;
	});
});
$(window).scroll(function(){
	scroll = $(window).scrollTop();
	naviActive(scroll);
});

var scroll;
var header;
var currentLayer;

var naviTarget = ['story', 'experience', 'product'];
function naviScroll(idx) {
	var top = $('#' + naviTarget[idx]).offset().top;
	var headerH = $('header').outerHeight() - 1;
	scrollToPos($('#' + naviTarget[idx]).offset().top - headerH);
}
function naviActive(scroll) {
	var headerH = $('header').outerHeight();
	$('header nav li').removeClass('active');
		 if(scroll+headerH < $('#' + naviTarget[1]).offset().top) $('header nav li').eq(0).addClass('active');	
	else if(scroll+headerH < $('#' + naviTarget[2]).offset().top) $('header nav li').eq(1).addClass('active');	
	else 														  $('header nav li').eq(2).addClass('active');	
}

function makeExperienceDom(target, idx) {
	var data = experienceLayer[idx]; // data.js
	var dom =  '<div class="title">Experience '+(idx+1)+'</div>\
				<div class="img">\
					<img src="./img/img_layerpop_experience01.jpg" alt="" />\
				</div>\
				<div class="txt">\
					<span class="ico"><img src="./img/ico_layerpop_experience0'+(idx+1)+'.png" alt="" /></span>\
					<div class="txt_wrap">\
						<div class="tit">'+data.title+'</div>\
						<p>'+data.desc+'</p>\
					</div>\
				</div>'
	target.find('.pop_cont').html(dom);
}
function makeProcudtDom(target, idx) {
	var data = productLayer[idx];
	var dom = '<div class="pop_cont_wrap">\
					<div class="title">Product '+(idx+1)+'</div>\
					<div class="img">\
						<img src="./img/img_layerpop_product01.jpg" alt="" />\
					</div>\
					<div class="txt">\
						<div class="tit">'+data.title+'</div>\
						<p>'+data.desc+'</p>\
						<a title="view more specification" href="#" class="link_spec collapse"></a>\
					</div>\
				</div>\
				<div class="spec">\
					<div class="spec_cont">\
						<div class="tit">Specification</div>\
						<div class="spec_wrap">\
							<div class="hw">\
								<div class="s_tit">H/W</div>\
								<ul>\
									<li><div>크기</div> '+data.hw.size+'</li>\
									<li><div>무게</div> '+data.hw.weight+'</li>\
									<li><div>동작 시간</div> '+data.hw.time+'</li>\
									<li><div>MEMS</div> '+data.hw.mems+'</li>\
									<li><div>IO</div> '+data.hw.io+'</li>\
									<li><div>MIC</div> '+data.hw.mic+'</li>\
									<li><div>메모리 용량</div> '+data.hw.memory+'</li>\
								</ul>\
							</div>\
							<div class="connectivity">\
								<div class="s_tit">Connectivity</div>\
								<ul>\
									<li><div>Bluetooth</div> '+data.connectivity.bluetooth+'</li>\
									<li><div>WLAN</div> '+data.connectivity.wlan+'</li>\
									<li><div>GPS</div> '+data.connectivity.gps+'</li>\
								</ul>\
							</div>\
							<div class="camera">\
								<div class="s_tit">Camera</div>\
								<ul>\
									<li><div>해상도</div> '+data.camera.iso+'</li>\
									<li><div>화각</div> '+data.camera.foc+'</li>\
									<li><div>Image sensor</div> '+data.camera.sensor+'</li>\
								</ul>\
							</div>\
						</div>\
					</div>\
				</div>'
	target.find('.pop_cont').html(dom);

	target.find('.link_spec').click(function(){
		target.find('.spec').css({'display':'block', 'height':'auto'}).animate({'opacity':1});
		return false;
	});
}

function scrollToPos(top) {
	$('html,body').animate({'scrollTop':top}, 800);
}
function viewLayer(target, idx) {
	if(target.attr('id') === 'pop_experience') makeExperienceDom(target, idx);
	else if(target.attr('id') === 'pop_product') makeProcudtDom(target, idx);
	currentLayer = target;
	target.css('display','block').animate({'opacity':1});
}
function hideLayer() {
	currentLayer.animate({'opacity':0}, function(){
		$(this).css('display','none');
		currentLayer = null;
	});	
}