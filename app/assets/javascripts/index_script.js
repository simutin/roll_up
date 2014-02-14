$(document).ready(function(){

	var fullHeight = $(window).height();
	if(fullHeight > 980) { $('.wrapper').css({'margin-top':(fullHeight-980)/2+'px'}); }
	else { $('.wrapper').css({'margin-top':'0px'});}
	$(window).resize(function() {
		var fullHeight = $(window).height();
		if(fullHeight > 980) { $('.wrapper').css({'margin-top':(fullHeight-980)/2+'px'}); }
		else { $('.wrapper').css({'margin-top':'0px'});}
	});

	$(".column").mouseenter(function(){
		$(this).addClass("current");
		$(this).find(".stand_name").addClass("current_name")
    $(this).stop().animate({
    },500);
    $(this).find(".stand_name").stop().animate({
      backgroundColor: "#cb272e",
      color: "#fff",
	    },500);
			
	}).mouseleave(function(){
		$(this).removeClass("current")
		$(this).stop().animate({
    },500);
		if ( $(this).hasClass("no_border") ) {
		  $(this).stop().animate({
		}, 500)};
    $(this).find(".stand_name").stop().animate({
      backgroundColor: "#fff",
      color: "#949597",
    },500, function() {$(this).find(".stand_name").removeClass("current_name");
			});
	});
});