/**************

	with-view

***************/
	
$(document).ready(function(){

	// wordbreak
	jQuery.fn.wordBreakKeepAll=function(option){var is_there_end_angle_bracket=function(str){return str.lastIndexOf('<')<str.lastIndexOf('>');};var is_there_start_angle_bracket=function(str){return str.lastIndexOf('>')<str.lastIndexOf('<');};var is_there_no_angle_bracket=function(str){return str.lastIndexOf('>')==str.lastIndexOf('<');};var defaultOption={OffForIE:false,useCSSonIE:true};var opt=$.extend(defaultOption,option);if(/MSIE/.test(navigator.userAgent)&&opt.OffForIE==false&&opt.useCSSonIE==true){var addWordBreakKeepAll=function(obj){$(obj).css({'word-break':'keep-all','word-wrap':'break-word'});if($(obj).css('display')=='inline'){$(obj).css('display','block');}};}else if(!/MSIE/.test(navigator.userAgent)||/MSIE/.test(navigator.userAgent)&&opt.OffForIE==false&&opt.useCSSonIE==false){var addWordBreakKeepAll=function(obj){var html=$(obj).html();html=html.replace(/(\r\n|\n|\r)/gm,' ＃＆＊＠§ ');var textArr=html.split(' ');textArr=textArr.filter(function(e){return e;});$(obj).text('');var skip=false;var full_str='';for(var i=0,j=textArr.length;i<j;i++){var str=textArr[i];if(skip==false&&is_there_no_angle_bracket(str)&&str.indexOf('＃＆＊＠§')==-1){full_str+='<span style="white-space: nowrap">'+str+'</span> ';}else{full_str+=str+' ';}
	if(is_there_start_angle_bracket(str)){skip=true;}
	if(is_there_end_angle_bracket(str)){skip=false;}};$(obj).html(full_str.replace(/＃＆＊＠§/g,"\n"));};}
	return this.each(function(){addWordBreakKeepAll(this);});};
	$('p').wordBreakKeepAll();

	setTimeout(function(){
		// intro motion
		$('.about_app').addClass('motion');
		$('.feature_app').addClass('motion');
		$('.motion_box01').addClass('motion');
		$('.motion_box02').addClass('motion');
		$('.motion_box03').addClass('motion');
		//$('.motion_box04').addClass('motion');
		//$('.motion_box05').addClass('motion');
		//$('.motion_box06').addClass('motion');
		//$('.motion_box07').addClass('motion');
		$('.motion_box08').addClass('motion');
		$('.motion_box09').addClass('motion');
	}, 200);
		
	scrollMotion();

	// video
	$('.video_control .btn_play').click(function(){
		$('.video .poster').animate({'opacity':0},function(){
			$(this).css('display', 'none');
		});
		$(this).animate({'opacity':0},function(){
			$(this).css('display', 'none');
		});
		$('.video_control .btn_close').css('display','block').animate({'opacity':1});
		$('.video video').attr('src', './movie/withview.mp4').attr('autoplay', 'autoplay');
		return false;
	});
	$('.video_control .btn_close').click(function(){
		$('.video .poster').css('display','block').animate({'opacity':1});
		$('.video_control .btn_play').css('display','block').animate({'opacity':1});


		$(this).animate({'opacity':0},function(){
			$(this).css('display', 'none');
		});
		$('.video video').attr('src', '');
		return false;
	});

});
$(window).scroll(function(){
	scrollMotion();
});

var scTop,
	space;
function scrollMotion(){
	scTop = $(window).scrollTop();
	space = $(window).height()*.25;

	console.log($('.motion_box04').offset().top)
	if(scTop <= $('.motion_box04').offset().top){
		$('.motion_box04').addClass('motion');

	}else if(scTop <= $('.feature01').offset().top-space){
		// feature01 motion
		$('.motion_box05').addClass('motion');
		$('.motion_box06').addClass('motion');
		$('.motion_box07').addClass('motion')
		$('.feature_wrap .feature01 .feature_txt').addClass('motion');
		$('.feature_wrap .feature02 .feature_txt').addClass('motion')

	}else if(scTop <= $('.feature02').offset().top-space){
		// feature02 motion

	}else if(scTop <= $('.feature03').offset().top-space){
		// feature03 motion
		
	}else if(scTop <= $('.feature05').offset().top-space){
		// feature05 motion
		$('.copyright').addClass('motion')
	}else if(scTop <= $('.feature06').offset().top-space){
		// feature06 motion


	}
}