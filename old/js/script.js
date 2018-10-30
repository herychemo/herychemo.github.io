
var p_windows = 0;

var main = function(){
	console.log("Hi Friends");
	alert( "En Construcción." );
	var image_path_base = "./images/bg/bg$.jpg";
	
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
		$("html, body").animate({ scrollTop: 0 }, "fast");
		$("#loading-window").slideUp('fast');
	}

	add_photo_events( $(  $(".gallery-container")[0]  ) );
}
$(main);

function on_resize(){
	p_windows.css('minHeight', $(window).height() );
	hide_all_theater_photos();
}

function add_photo_events( $album ){ 
	var $photos = $album.children('img');
	$photos.click(function(e){
		console.log("starts");
		hide_all_theater_photos();
		$window = $(window);
		$photo = $("<img class=\"theater-photo rad-corner-min\" alt=\"Theater\"></img> ");
		$photo.attr('src', $(this).attr('src')  );
		$("#_ref").before( $photo );

		$photo.css({
			position: 'fixed',
			maxHeight : 600,
			maxWidth : 600,
		});
		if ( $photo.height() == 0 || $photo.width() == 0 ) {
			console.log("Issue...");
			hide_all_theater_photos();
			return;
		}
		$photo.css({
			top: 	($window.height() / 2) - ($photo.height() / 2) ,
			left: 	($window.width() / 2) - ($photo.width() / 2) ,
			display : 'none'
		});
		$photo.click(function(event) {
			hide_all_theater_photos();
		});

		$photo.slideDown("fast");
		console.log("ends");
	});
}

function hide_all_theater_photos(){
	$(".theater-photo").slideUp("fast", function(){
		$(this).remove();
	});
}