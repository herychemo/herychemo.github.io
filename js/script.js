
var p_windows = 0;

var main = function(){
	console.log("Hi Friends");

	var image_path_base = "./images/bg$.jpg";
	
	p_windows = $(".parallax-window");	
	
	$.each(p_windows, function(index, item) {

		$(item).parallax({
			imageSrc: image_path_base.replace( '$', index),
			naturalWidth : 3840,
			naturalHeight : 2160,
			bleed : 10
		});
	});

	$(window).on("resize", function(e){
		on_resize();
	});
	on_resize();

	window.onload = function(){
		
		$("#loading-window").slideUp('fast');
	}

}
$(main);

function on_resize(){
	p_windows.css('minHeight', $(window).height() );
}
