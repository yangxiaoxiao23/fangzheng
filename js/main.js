// JavaScript Document

define(function(require, exports, module){
	// 团队展示图片切换
	$(function(){
		var oWalkAsemi = $('.walk-asemi');
		var oUl = oWalkAsemi.find('.pic ul');
		var oLi = oUl.find('li');
		var prevBtn = oWalkAsemi.find('.title .left');
		var nextBtn = oWalkAsemi.find('.title .right');
		require('./module/picswitch.js').picSwitch(oUl, oLi, prevBtn, nextBtn);	
	});
	
	
	//首页轮播图
	$(function(){
		var oSlideWrap = $('#j_main_slider');
		var oUl = oSlideWrap.find('.slide-ul');
		var oLi = oUl.find('li');
		var oBtnWrap = oSlideWrap.find('.slide-flag');
		require('./module/picslide.js').picSlide(oUl, oLi, oBtnWrap);
	});

	
	//导航折叠
	$(function(){
		var oUl = $('#J_Wrap .pro-ul');
		var oLi = oUl.find('li.pro-li');
		require('./module/menuFold.js').menuFold(oUl, oLi, {
			showbackposition: '160px 14px',
			hidebackposition: '160px -20px',
			expandindexs: [0]
		});
	});
});

$(function(){
    $('#J_Wrap').append('<div class="returnTop"><div class="returnTop-bd"><a href="#">返回顶部</a></div></div>');
});


function returnTop(oReturnTop, positionWidth){
    if($.browser.msie && $.browser.version == 6.0){
        oReturnTop.css({
            position: 'absolute',
            left: positionWidth,
            top: $(window).scrollTop() + $(window).height() - 180
        });
    } else {
        oReturnTop.css('left', positionWidth);
    }
}

$(function(){
    var oReferenceEl = $('.search-wrap-bd'); //参考的El
    var oReturnTop = $('.returnTop');
    
    var getPosWidth = function(){
        if($(window).width() < 1060){
            var positionWidth = positionWidth = $(window).width() - 60;
        } else {
            var positionWidth = oReferenceEl.offset().left + oReferenceEl.outerWidth() + 60;
        }
        return positionWidth;
    }
    
    oReturnTop.click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
    
    
    
    oReturnTop.hide();
    //当滚动条的位置处于距顶部400像素以下时，跳转链接出现，否则消失
    $(window).scroll(function(){
        if ($(window).scrollTop() > 400){
            oReturnTop.fadeIn(1500);
        } else {
            oReturnTop.fadeOut(1500);
        }
        if($.browser.msie && $.browser.version == 6.0){
            returnTop(oReturnTop, getPosWidth());
        }
    });
    
    
    returnTop(oReturnTop, getPosWidth());
    
    
    $(window).resize(function(){
        returnTop(oReturnTop, getPosWidth());
    });
});