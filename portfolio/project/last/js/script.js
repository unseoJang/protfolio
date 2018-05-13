$(function(){ // document ready
	
	init();

	$('nav ul li a').click(function(){
		navIdx = $(this).parent().index();
		navTarget = $('#container > section').eq(navIdx);
		goTop = navTarget.offset().top;
		$('html,body').animate({'scrollTop':goTop});

		return false;
	});

	$('.space_ship a').click(function(){
		var shipName = $(this).attr('id');
		var shipNum = shipName.charAt(shipName.length-1)-1; //0,1,2
		
		showShipLayer(shipNum);
		return false;
	});
});

$(window).scroll(function(){
	init();
});

var scTop;
function init(){
	scTop = $(window).scrollTop();
	//console.log(scTop)
	navStatus();
}
// nav scroll
var navIdx, navTarget, goTop;
function navStatus(){
	$('nav ul li').removeClass('active');

	var section1 = $('#container > section').eq(0).offset().top;
	var section2 = $('#container > section').eq(1).offset().top;
	var section3 = $('#container > section').eq(2).offset().top;
	var section4 = $('#container > section').eq(3).offset().top;
	var section5 = $('#container > section').eq(4).offset().top;
	var section6 = $('#container > section').eq(5).offset().top;

	
	if(scTop < section2) $('nav ul li').eq(0).addClass('active');
	else if(scTop < section3) $('nav ul li').eq(1).addClass('active');
	else if(scTop < section4) $('nav ul li').eq(2).addClass('active');
	else if(scTop < section5) $('nav ul li').eq(3).addClass('active');
	else if(scTop < section6) $('nav ul li').eq(4).addClass('active');
	else  $('nav ul li').eq(5).addClass('active');

}

var shiplayerMotionChk = false, 
	shiplayerOpenChk = false,
	oldlayerIdx;

function showShipLayer(i){
	console.log('i : '+i);
	shiplayerMotionChk = true;
	shiplayerOpenChk = true;
	if(shiplayerOpenChk){
		$('.space_ship a').eq(oldlayerIdx).removeClass('active');
		$('.atc4 .ship_cont ul li').eq(oldlayerIdx).animate({'opacity':0}, 400, function(){
			$(this).css('display', 'none');
		});
	}

	$('.atc4 .ship_cont ul li').eq(i).css('display','block').animate({'opacity':1}, 400, function(){
		shiplayerMotionChk = false;
		oldlayerIdx = i;
	});
	$('.space_ship a#btn-'+(i+1)).addClass('active');
}