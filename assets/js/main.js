/***************************************************
==================== JS INDEX ======================
****************************************************

	Preloader
	Header Sticky
	Mobile Menu Js
	Data CSS Js
	Nice Select Js

****************************************************/

(function ($) {
	"use strict";

	let device_width = window.innerWidth;

	////////////////////////////////////////////////////
	// Add Class on Mobile
	$(window).on("load resize", function () {
		if (device_width < 768) {
			$("body").addClass("is-mobile");
		}
	});

	////////////////////////////////////////////////////
	// Data CSS Js
	$("[data-bg-image]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-bg-image") + "  )");
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// Nice Select Js
	if ($(".ts-select").length > 0) {
		$("ts-select").niceSelect();
	}

	////////////////////////////////////////////////////
	// Preloader
	$(window).on("load", function () {
		$("#preloader").fadeOut(500);
	});
	if ($("#preloader").length > 0) {
		$(".tj-cancel-btn").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$("#preloader").fadeOut(500);
			});
		});
	}

	////////////////////////////////////////////////////
	//  Hamburger Menu
	if ($("#main-menu").length > 0) {
		$("#main-menu").meanmenu({
			meanMenuContainer: ".mobile_menu",
			meanScreenWidth: "991",
			meanExpand: [""],
		});
	}

	$(".ts-header_hamburger").on("click", function () {
		$(".ts-hamburger").addClass("hamburger-open");
		$(".ts-hamburger_overlay").addClass("opened");
		$("body").addClass("overflow-hidden");
	});
	$(".ts-hamburger_close").on("click", function () {
		$(".ts-hamburger").removeClass("hamburger-open");
		$(".ts-hamburger_overlay").removeClass("opened");
		$("body").removeClass("overflow-hidden");
	});
	$(".ts-hamburger_overlay").on("click", function () {
		$(".ts-hamburger").removeClass("hamburger-open");
		$(this).removeClass("opened");
		$("body").removeClass("overflow-hidden");
	});

	////////////////////////////////////////////////////
	// GLightBox JS
	const videoPopup = GLightbox({
		selector: ".video_popup",
		touchNavigation: false,
	});

	const tsImageGallery = GLightbox({
		selector: "[data-gallery]",
		touchNavigation: true,
		loop: true,
		zoomable: true,
		autoplayVideos: true,
	});

	////////////////////////////////////////////////////
	// Swiper Sliders

	// Post Thumb Slider
	if ($(".ts_post_thumb_slider").length > 0) {
		var tsPostThumbSlider = new Swiper(".ts_post_thumb_slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 1200,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".ts_slider-next",
				prevEl: ".ts_slider-prev",
			},
		});
	}
})(jQuery);
