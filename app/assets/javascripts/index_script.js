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
<<<<<<< HEAD
      borderTopColor: "#cb272e",
			borderBottomColor: "#cb272e",
			borderLeftColor: "#cb272e",
			borderRightColor: "#cb272e",
			borderLeftStyle: "solid",
			borderTopStyle: "solid",
			borderRightStyle: "solid",
			borderBottomStyle: "solid",
			borderWidth: "1px",
=======
>>>>>>> cb10c331b8ce25c72079ec3f21399325426c508f
    },500);
    $(this).find(".stand_name").stop().animate({
      backgroundColor: "#cb272e",
      color: "#fff",
	    },500);
			
	}).mouseleave(function(){
<<<<<<< HEAD
		$(this).stop().animate({
      borderTopColor: "#fff",
			borderBottomColor: "#949597",
			borderLeftColor: " #949597",
			borderRightColor: " #fff",
			borderLeftStyle: "dashed",
			borderTopStyle: "solid",
			borderRightStyle: "solid ",
			borderBottomStyle: "dashed",
			borderWidth: "1px"
    },500, function() {$(this).removeClass("current");
			});
    $(this).find(".stand_name").stop().animate({
      backgroundColor: "#fff",
      color: "#ccc",
=======
		$(this).removeClass("current")
		$(this).stop().animate({
    },500);
		if ( $(this).hasClass("no_border") ) {
		  $(this).stop().animate({
		}, 500)};
    $(this).find(".stand_name").stop().animate({
      backgroundColor: "#fff",
      color: "#949597",
>>>>>>> cb10c331b8ce25c72079ec3f21399325426c508f
    },500, function() {$(this).find(".stand_name").removeClass("current_name");
			});
	});
});