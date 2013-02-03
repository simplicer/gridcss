// JQuery Tabify by Jan Jarfalk <http://www.unwrongest.com> : MIT
(function(e){e.fn.extend({tabify:function(t){function n(t){hash=e(t).find("a").attr("href");hash=hash.substring(0,hash.length);return hash}function r(t){e(t).addClass("active");e(n(t)).show();e(t).siblings("li").each(function(){e(this).removeClass("active");e(n(this)).hide()})}return this.each(function(){function o(){if(location.hash&&e(i).find("a[href="+location.hash+"]").length>0){r(e(i).find("a[href="+location.hash+"]").parent())}}var i=this;var s={ul:e(i)};e(this).find("li a").each(function(){e(this).attr("href",e(this).attr("href"))});if(location.hash){o()}setInterval(o,100);e(this).find("li").each(function(){if(e(this).hasClass("active")){e(n(this)).show()}else{e(n(this)).hide()}});if(t){t(s)}})}})})(jQuery);

// JQuery Elastic by Jan Jarfalk <http://www.unwrongest.com> : MIT
(function(e){jQuery.fn.extend({elastic:function(){var t=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){function f(){var e=Math.floor(parseInt(n.width(),10));if(r.width()!==e){r.css({width:e+"px"});c(true)}}function l(e,t){var r=Math.floor(parseInt(e,10));if(n.height()!==r){n.css({height:r+"px",overflow:t})}}function c(e){var t=n.val().replace(/&/g,"&").replace(/ {2}/g," ").replace(/<|>/g,">").replace(/\n/g,"<br />");var u=r.html().replace(/<br>/ig,"<br />");if(e||t+" "!==u){r.html(t+" ");if(Math.abs(r.height()+i-n.height())>3){var a=r.height()+i;if(a>=o){l(o,"auto")}else if(a<=s){l(s,"hidden")}else{l(a,"hidden")}}}}if(this.type!=="textarea"){return false}var n=jQuery(this),r=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),i=parseInt(n.css("line-height"),10)||parseInt(n.css("font-size"),"10"),s=parseInt(n.css("height"),10)||i*3,o=parseInt(n.css("max-height"),10)||Number.MAX_VALUE,u=0;if(o<0){o=Number.MAX_VALUE}r.appendTo(n.parent());var a=t.length;while(a--){r.css(t[a].toString(),n.css(t[a].toString()))}n.css({overflow:"hidden"});n.bind("keyup change cut paste",function(){c()});e(window).bind("resize",f);n.bind("resize",f);n.bind("update",c);n.bind("blur",function(){if(r.height()<o){if(r.height()>s){n.height(r.height())}else{n.height(s)}}});n.bind("input paste",function(e){setTimeout(c,250)});c()})}})})(jQuery);

$(document).ready(function () {
	$('body').append('<div class="deal-arrow hide"></div>');
	$('textarea').elastic();
	//$('#sample-tabs').tabify();
	$('#main-tabs').tabify();
	$('.close').click( function(){
		$(this).parent('.msg').toggleClass('hide').fadeOut('slow');
		$(this).parent('.deal').toggleClass('hide').slideUp('slow');
		if( $(this).parent('.deal').hasClass('hide') ) {
			$('.deal-arrow').delay(500).slideDown('slow');
		}
	});
	$('.deal-arrow').click( function() {
		$(this).slideUp('slow');
		$('.deal').delay(500).slideDown('slow').toggleClass('hide');
		
	});
});
