(function($) {
  "use strict";

  // meanmenu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "992"
  });

  // One Page Nav
  var top_offset = $(".header-area").height() - 10;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset
  });

  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

  
     
    // owlCarousel  
    $(".herowrepperSlider").owlCarousel({
      loop: true, 
      items: 1,
      autoplay:false,
      navText: [
        '<i class="fas fa-caret-circle-left"></i>',
        '<i class="fas fa-caret-circle-right"></i>'
      ],
      nav: true,    
      animateOut: 'fadeOut',
      animateIn: 'fadeIn', 
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1, 
      },
      1000:{
          items:1, 
      }
    } 
    });
  $(".major-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    autoplay:true,
    navText: [
      '<i class="fas fa-caret-circle-left"></i>',
      '<i class="fas fa-caret-circle-right"></i>'
    ],
    nav: true, 
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2, 
        },
        1000:{
            items:2, 
        }
      }    
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe"
  });

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // isotop
  $(".grid").imagesLoaded(function() {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item"
      }
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function() {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function(event) {
      $(this)
        .siblings(".active")
        .removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();
  // Hover-js
$('.banner-box').on('mouseenter', function () {
	$(this).addClass('hoverActive').parent().siblings().find('.banner-box').removeClass('hoverActive');
});
$(".bar-icon").click(function(){
  $(".sidBar").toggleClass("sideBar-active")
});
$(".bar-icon").click(function(){
  $(".bar-icon").toggleClass("menu-active")
});
})(jQuery);
