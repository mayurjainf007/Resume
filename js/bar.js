( function( $ ) {
	'use strict';

	$('.theme_panel .toggle_bts').on('click', 'a.sett', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
            $('.theme_panel').removeClass('active');
		}
		else {
			$(this).addClass('active');
            $('.theme_panel').addClass('active');
		}
		return false;
	});

	//colors panel
	$('.theme_panel .layout_style').on('click', 'a', function(){
		$(this).closest('.segment').find('a').removeClass('active');
		$(this).addClass('active');

		var color = $(this).attr('data-color');
        
        if( !$('#demo_animate_css').length ) {
        	$('head').append('<link rel="stylesheet" id="demo_layout_css" href="https://bslthemes.site/html/ryan/bar/css/'+color+'.css" />');
        } else {
        	$('#demo_layout_css').attr('href', 'https://bslthemes.site/html/ryan/bar/css/'+color+'.css');
        }
        return false;
	});
    
    //dark panels
    $('.theme_panel .dark_style').on('click', 'a', function(){
    	$(this).closest('.demo_list').find('a').removeClass('active');
		$(this).addClass('active');
    	
		var dark = $(this).attr('data-dark');

		if(dark == 'dark' && !$('#demo_dark_css').length) {
            $('head').append('<link rel="stylesheet" id="demo_dark_css" href="https://bslthemes.site/html/ryan/demo/css/template-dark/dark.css" />');
        } else {
            $('#demo_dark_css').remove();
        }

        return false;
	});

	//animation panel
	$('.theme_panel .animate_style').on('click', 'a', function(){
		$(this).closest('.demo_list').find('a').removeClass('active');
		$(this).addClass('active');

		var animate = $(this).attr('data-animation');
        
        if( !$('#demo_animate_css').length ) {
        	$('head').append('<link rel="stylesheet" id="demo_animate_css" href="https://bslthemes.site/html/ryan/bar/css/animation_'+animate+'.css" />');
        } else {
        	$('#demo_animate_css').attr('href', 'https://bslthemes.site/html/ryan/bar/css/animation_'+animate+'.css');
        }

        return false;
	});

	//direction panel
	var current_url = location.href;
	if( current_url.indexOf('https://bslthemes.site/html/ryan/demo/index-new-rtl.html') != -1 ) {
		$('.direction_style a[href="index-new-demo-1.html"]').closest('.demo_list').find('a').removeClass('active');
		$('.direction_style a[href="index-new-rtl.html"]').addClass('active');
	}

} )( jQuery );