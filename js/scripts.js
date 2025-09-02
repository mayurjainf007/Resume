/**
*	Mayur - Resume
*	Version: 1.0
*	Author: Mayur Jain
*	Copyright © by MJ. All Rights Reserved.
**/

/*
	Preloader
*/

$(window).on("load", function () {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function () {
		preload.fadeOut();
	});
});

$(function () {
	'use strict';

	var width = $(window).width();
	var height = $(window).height();

	/*
		Typed
	*/

	$('.subtitle.subtitle-typed').each(function () {
		var subtitleContainer = $(this);

		subtitleContainer.typed({
			stringsElement: subtitleContainer.find('.typing-title'),
			backDelay: 3500, /* Delay in text change */
			typeSpeed: 0, /* Typing speed */
			loop: true
		});
	});


	/*
		Sidebar Show/Hide
	*/

	$('header, .profile').on('click', '.menu-btn', function () {
		$('.s_overlay').fadeIn();
		$('.content-sidebar').addClass('active');
		$('body,html').addClass('sidebar-open');
		return false;
	});
	$('.content-sidebar, .container').on('click', '.close, .s_overlay', function () {
		$('.s_overlay').fadeOut();
		$('.content-sidebar').removeClass('active');
		$('body,html').removeClass('sidebar-open');
	});


	/*
		Popup Menu Navigation
	*/

	$('.main-menu li.page_item_has_children').each(function () {
		$(this).find('> a').after('<span class="children_toggle"></span>');
	});
	$('.main-menu').on('click', '.children_toggle', function () {
		var main_menu_item = $(this).closest('.page_item_has_children');
		if (main_menu_item.hasClass('open')) {
			main_menu_item.removeClass('open');
			main_menu_item.find('> ul').slideUp(250);
		} else {
			main_menu_item.addClass('open');
			main_menu_item.find('> ul').slideDown(250);
		}
	});


	/*
		Default Menu
	*/

	$('.lnk-view-menu').on('click', function () {
		var btn_text1 = $(this).find('.text').text();
		var btn_text2 = $(this).find('.text').data('text-open');
		if ($('.profile').hasClass('default-menu-open')) {
			$('.profile').removeClass('default-menu-open');
			$(this).find('.text').data('text-open', btn_text1);
			$(this).find('.text').text(btn_text2);
		} else {
			$('.profile').addClass('default-menu-open');
			$(this).find('.text').data('text-open', btn_text1);
			$(this).find('.text').text(btn_text2);
		}

		return false;
	});


	/*
		Header Menu Desktop
	*/

	var container = $('.container');
	var card_items = $('.card-inner');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');

	$('.top-menu').on('click', 'a', function () {

		/* vars */
		var width = $(window).width();
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.top-menu li');
		var menu_item = $(this).closest('li');
		var d_lnk = $('.lnks .lnk.discover');

		if ((width >= 1024)) {
			if ($(card_item).hasClass('active')) {
				menu_item.removeClass('active');
				container.find(card_item).addClass('animated ' + animation_out);
				container.find(card_item).removeClass(animation_in);
				$(card_item).removeClass('active');
				$(card_item).addClass('hidden');

			}
			else {
				menu_items.removeClass('active');
				container.find(card_items).removeClass('animated ' + animation_in);

				if ($(container).hasClass('opened')) {
					container.find(card_items).addClass('animated ' + animation_out);
				}

				menu_item.addClass('active');
				container.addClass('opened');

				container.find(card_item).removeClass('animated ' + animation_out);
				container.find(card_item).addClass('animated ' + animation_in);

				$(card_items).addClass('hidden');
				$(card_items).removeClass('active');

				$(card_item).removeClass('hidden');
				$(card_item).addClass('active');
			}
			// if(!$(card_item).hasClass('hidden')) {
			// 	$(card_item).addClass('hidden');
			// 	container.find(card_item).addClass('animated '+animation_out);
			// }	 
		}
		/* if mobile */
		if ((width < 1024) & $('#home-card').length) {

			/* scroll to section */
			$('body,html').animate({
				scrollTop: h - 76
			}, 800);
		}
		return false;
	});

	$(window).on('resize', function () {
		var width = $(window).width();
		var height = $(window).height();

		if ((width < 1024)) {
			$('.card-inner').removeClass('hidden');
			$('.card-inner').removeClass('fadeOutLeft');
			$('.card-inner').removeClass('rotateOutUpLeft');
			$('.card-inner').removeClass('rollOut');
			$('.card-inner').removeClass('jackOutTheBox');
			$('.card-inner').removeClass('fadeOut');
			$('.card-inner').removeClass('fadeOutUp');
			$('.card-inner').removeClass('animated');

			$(window).on('scroll', function () {
				var scrollPos = $(window).scrollTop();
				$('.top-menu ul li a').each(function () {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.offset().top - 76 <= scrollPos) {
						$('.top-menu ul li').removeClass("active");
						currLink.closest('li').addClass("active");
					}
				});
			});

			$('.card-inner .card-wrap').slimScroll({ destroy: true });
			$('.card-inner .card-wrap').attr('style', '');
		}
		else {
			$($('.top-menu li.active a').attr('href')).addClass('active');
			if ((!$('.page').hasClass('new-skin')) && (width > 1024)) {
				$('.card-inner .card-wrap').slimScroll({
					height: '570px'
				});
			}
		}
	});


	/*
		Smoothscroll
	*/

	if ((width < 1024) & $('#home-card').length) {
		$(window).on('scroll', function () {
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 76 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}


	/*
		slimScroll
	*/

	if ((!$('.page').hasClass('new-skin')) && (width > 1024)) {
		$('.card-inner .card-wrap').slimScroll({
			height: '570px'
		});
	}


	/*
		Hire Button
	*/

	$('.lnks').on('click', '.lnk.discover', function () {
		$('.top-menu a[href="#contacts-card"]').trigger('click');
	});


	/*
		Initialize Portfolio
	*/
	var $container = $('.grid-items');
	$container.imagesLoaded(function () {
		$container.isotope({
			percentPosition: true,
			itemSelector: '.grid-item'
		});
	});

	var $container = $('.sgrid-items');
	$container.imagesLoaded(function () {
		$container.isotope({
			percentPosition: true,
			itemSelector: '.grid-item'
		});
	});



	/* button Function */
	$(document).ready(function () {
		var $container = $('.sgrid-items'); // Ensure this matches your Isotope container class
		$container.imagesLoaded(function () {
			$container.isotope({
				itemSelector: '.sgrid-item'
			});
			$('.sfilter-button-group .s_btn:first-child').addClass('active');
			var defaultFilter = $('.sfilter-button-group .s_btn:first-child input').val();
			$container.isotope({ filter: '.' + defaultFilter });
		});
		$('.sfilter-button-group').on('click', '.s_btn', function () {
			var filterValue = $(this).find('input').val();
			$container.isotope({ filter: '.' + filterValue });
			$(this).addClass('active').siblings().removeClass('active');
		});
	});

	/*
		Filter items on button click
	*/
	$(document).ready(function () {
		var $container = $('.grid-items'); // Ensure this matches your Isotope container class
		$container.imagesLoaded(function () {
			$container.isotope({
				itemSelector: '.grid-item'
			});
			$('.filter-button-group .f_btn:first-child').addClass('active');
			var defaultFilter = $('.filter-button-group .f_btn:first-child input').val();
			$container.isotope({ filter: '.' + defaultFilter });
		});
		$('.filter-button-group').on('click', '.f_btn', function () {
			var filterValue = $(this).find('input').val();
			$container.isotope({ filter: '.' + filterValue });
			$(this).addClass('active').siblings().removeClass('active');
		});
	});




	/*
		Gallery popup
	*/
	if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))) {
		$('.gallery-item a').magnificPopup({
			gallery: {
				enabled: true
			},
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-fade'
		});
	}


	/*
		Media popup
	*/
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade popup-box-inline'
	});


	/*
		Image popup
	*/
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-fade',
		image: {
			verticalFit: true
		}
	});


	/*
		Video popup
	*/
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
			patterns: {
				youtube_short: {
					index: 'youtu.be/',
					id: 'youtu.be/',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				}
			}
		},
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade',
		callbacks: {
			markupParse: function (template, values, item) {
				template.find('iframe').attr('allow', 'autoplay');
			}
		}
	});


	/*
		Music popup
	*/
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade'
	});


	/*
		Gallery popup
	*/
	$('.has-popup-gallery').on('click', function () {
		var gallery = $(this).attr('href');

		$(gallery).magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false,
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');

		return false;
	});


	/*
		Validate Contact Form
	*/

	$("#cform").validate({
		ignore: ".ignore",
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			hiddenRecaptcha: {
				required: function () {
					if (grecaptcha.getResponse() == '') {
						return true;
					} else {
						return false;
					}
				}
			}
		},
		success: "valid",
		submitHandler: function () {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name=' + $("#cform").find('input[name="name"]').val() + '&email=' + $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function () {

				},
				complete: function () {

				},
				success: function (data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});


	/*
		Validate Commect Form
	*/

	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			}
		},
		success: "valid",
		submitHandler: function () {
		}
	});


	/*
		Google Maps
	*/

	if ($('#map').length) {
		initMap();
	}


	/*
		Tesimonials Carousel
	*/
	var revs_slider = $(".revs-carousel.default-revs .owl-carousel");

	revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		dots: true
	});

	var rtl_revs_slider = $(".revs-carousel.rtl-revs .owl-carousel");

	rtl_revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		rtl: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		dots: true
	});


	/*
		New JS
	*/

	$(window).on('resize', function () {
		/*
			Dotted Skills Line On Resize Window
		*/

		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if (skills_dotted.length) {
			skills_dotted.find('.percentage .da').css({ 'width': skills_dotted_w + 1 });
		}

		/*
			Testimonials Carousel On Resize Window
		*/

		var revs_slider = $(".revs-carousel .owl-carousel");
		revs_slider.find('.revs-item').css({ 'max-width': revs_slider.width() });
	});

	/*
		Dotted Skills Line
	*/

	function skills() {
		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if (skills_dotted.length) {
			skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage .da').css({ 'width': skills_dotted_w });
		}
	}
	setTimeout(skills, 1000);

	/*
		Circle Skills Line
	*/

	var skills_circles = $('.skills-list.circles .progress');
	if (skills_circles.length) {
		skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
	}

	/*
		Wrap First Title Word
	*/

	$('.content .title').each(function (index) {
		var title = $(this).text().split(' ');
		if (title.length > 1) {
			var firstWord = title[0];
			var replaceWord = '<span class="first-word">' + firstWord + '</span>';
			var newString = $(this).html().replace(firstWord, replaceWord);
			$(this).html(newString);
		} else {
			$(this).html('<div class="first-letter">' + $(this).html() + '</div>');
		}
	});
});

$(document).on('click', '.pager .page-numbers', function (e) {
	e.preventDefault();

	const $this = $(this);
	const container = $('#blog-container');
	let currentPage = parseInt(container.data('current-page'), 10);
	const totalPages = parseInt(container.data('total-pages'), 10);

	if ($this.hasClass('prev') && currentPage > 1) {
		currentPage--;
	} else if ($this.hasClass('next') && currentPage < totalPages) {
		currentPage++;
	}

	// Update the current page
	container.data('current-page', currentPage);

	// Show the corresponding blog page
	$('.blog-page').hide();
	$(`.blog-page[data-page="${currentPage}"]`).fadeIn();

	// Update button states
	if (currentPage === 1) {
		$('.pager .prev').addClass('disabled');
	} else {
		$('.pager .prev').removeClass('disabled');
	}

	if (currentPage === totalPages) {
		$('.pager .next').addClass('disabled');
	} else {
		$('.pager .next').removeClass('disabled');
	}
});


// Smooth Transition

$(document).ready(function () {
	// Initially show only the home card and hide sidebar
	// Show main card by default (skip landing click)
	$('#home-card').hide();     // hide intro card
	$('#main-card').show();     // show resume
	$('.top-menu').show();      // show sidebar menu
	$('.card-inner').show();    // show content

	// Home to Main Card (Slide-in effect)
	$('#home-card .image a').on('click', function (e) {
		e.preventDefault();

		// Hide home card with slide-out and show main card with slide-in
		$('#home-card').fadeOut(500, function () {
			$('#main-card').removeClass('animated slideOutLeft').fadeIn(500).addClass('animated slideInRight');

			// Show the sidebar
			$('.top-menu').fadeIn(500, function () {
				// Trigger the about-card after the main-card appears
				$('.top-menu a[href="#about-card"]').trigger('click');
				$('.card-inner').show()
			});
		});
	});

	// Main to Home Card (Deactivate, Fade-out Header, Slide-out)
	$('#main-card .image').on('click', function (e) {
		e.preventDefault();

		// Deactivate other active cards
		$('.card-inner').removeClass('active animated fadeInLeft').addClass('hidden');
		$('.top-menu li').removeClass('active');

		// Fade out sidebar and slide out the main card
		$('.top-menu').fadeOut(300, function () {
			$('#main-card').removeClass('animated slideInRight').addClass('animated slideOutLeft');

			setTimeout(function () {
				$('#main-card').fadeOut(300, function () {
					$('#home-card').fadeIn(500).addClass('animated slideInLeft');
				});
			}, 500); // Matches animation duration
		});
	});
});

function toggleSubskills(skillItem) {
    let subskillsContainer = skillItem.nextElementSibling;
    let subskills = skillItem.getAttribute("data-subskills").split(",");

    // Close other open skill sections (optional)
    document.querySelectorAll(".subskills").forEach(container => {
        if (container !== subskillsContainer) {
            container.innerHTML = "";
            container.style.display = "none";
        }
    });

	document.querySelectorAll(".skill-category").forEach(item => {
        if (item !== skillItem) {
            item.classList.remove("active-skill");
            item.classList.add("passive-skill"); // Add passive class to other items
        }
    });

    // Toggle current subskills
    if (subskillsContainer.innerHTML.trim() === "") {
        subskillsContainer.style.display = "flex";
        subskillsContainer.innerHTML = subskills.map(subskill => 
            `<div class="subskill">${subskill.trim()}</div>`
        ).join("");

        adjustSubskillAlignment(subskillsContainer);
		skillItem.classList.add("active-skill"); // Highlight clicked skill
        skillItem.classList.remove("passive-skill"); // Ensure it doesn't turn gray
    } else {
        subskillsContainer.innerHTML = "";
        subskillsContainer.style.display = "none";
        skillItem.classList.remove("active-skill");
        skillItem.classList.add("passive-skill"); // Turns gray when deselected
    }
}

// Adjust subskills alignment dynamically
function adjustSubskillAlignment(container) {
    let containerWidth = container.offsetWidth;
    let totalWidth = 0;
    let subskills = container.querySelectorAll(".subskill");

    subskills.forEach(skill => {
        totalWidth += skill.offsetWidth + 10;
        if (totalWidth > containerWidth) {
            skill.style.display = "block"; // Moves to new line when width exceeded
        } else {
            skill.style.display = "inline-block";
        }
    });
}

$(document).ready(function () {
    $('.profile-photo').on('click', function (event) {
        event.stopPropagation(); // Prevents event from bubbling up
        $('.card-inner').toggleClass('active'); // Toggles visibility
    });

    // Hide when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.card-inner, .profile-photo').length) {
            $('.card-inner').removeClass('active'); // Hides the card
        }
    });
});


/*
	Google Map Options
*/

function initMap() {
	var myLatlng = new google.maps.LatLng(33.791260,-118.136041); // <- Your latitude and longitude
	var styles = [
		{
			"featureType": "water",
			"stylers": [{
				"color": "#d8dee9"
			},
			{
				"visibility": "on"
			}]
		},
		{
			"featureType": "landscape",
			"stylers": [{
				"color": "#eeeeee"
			}]
		}]

	var mapOptions = {
		zoom: 14,
		center: myLatlng,
		mapTypeControl: false,
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
		styles: styles
	}

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'We are here!'
	});
}

function sendMessage() {
	const userInput = document.getElementById('chat-input').value;
	fetch('https://api.openai.com/v1/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
		},
		body: JSON.stringify({
			model: 'text-davinci-003',
			prompt: userInput,
			max_tokens: 100
		})
	}).then(response => response.json()).then(data => {
		document.getElementById('chat-response').innerText = data.choices[0].text;
	}).catch(error => {
		document.getElementById('chat-response').innerText = 'Error: Unable to fetch response.';
	});
}