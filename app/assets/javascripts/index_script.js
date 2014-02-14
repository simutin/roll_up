(function($){
   $.fn.shuffle = function() {
      var allElems = this.get(),
      getRandom = function(max) {
         return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function(){
         var random = getRandom(allElems.length),
         randEl = $(allElems[random]).clone(true)[0];
         allElems.splice(random, 1);
         return randEl;
      });
      this.each(function(i){
         $(this).replaceWith($(shuffled[i]));
      });
      return $(shuffled);
   };
})(jQuery);

$(document).ready(function(){
	$('ul#list li').shuffle();

	var fullHeight = $(window).height();
	if(fullHeight > 980) { $('.wrapper').css({'margin-top':(fullHeight-980)/2+'px'}); }
	else { $('.wrapper').css({'margin-top':'0px'});}
	$(window).resize(function() {
		var fullHeight = $(window).height();
		if(fullHeight > 980) { $('.wrapper').css({'margin-top':(fullHeight-980)/2+'px'}); }
		else { $('.wrapper').css({'margin-top':'0px'});}
	});
	
	$(".block").mouseenter(function(){
		var direction = "-98px";
		
		if($(this).hasClass("first")) { var direction = "0px"; }
		if($(this).hasClass("last"))  { var direction = "-196px"; }

		$(this).addClass("current");
		$(this).find(".column").stop().animate({
			width: "392px",
			left: direction
			}, 500, function() {
			// Animation complete.
			}
		);
			
		$(this).find(".thumb").stop().animate({
			height: "60%"
			}, 500, function() {
				
			}
		);



	}).mouseleave(function(){
		$(this).removeClass("current");
		$(this).find(".column").stop().animate({
			width: "196px",
			left: "0px"
			}, 500, function() {
				$(this).parent(".block").removeClass("current");
			}
		);
		$(this).find(".thumb").stop().animate({
			height: "35%"
			}, 500, function() {
				
			}
		);

	});
  
});