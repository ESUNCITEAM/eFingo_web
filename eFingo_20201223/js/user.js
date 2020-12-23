$(document).ready(function () {
  $('.scroll-down').click(function () {
    $("html,body").animate({
      scrollTop: $("#join").offset().top - 150
    }, 500);
  })
  $hash = location.hash;
  if ($hash === '#BnBook') {
    $("html,body").animate({
      scrollTop: $("#activity").offset().top - 150
    }, 500);
  };
  if ($hash === '#BnFund') {
    $("html,body").animate({
      scrollTop: $("#activity").offset().top - 150
    }, 500);
  };
  if ($hash === '#BnMoney') {
    $("html,body").animate({
      scrollTop: $("#activity").offset().top - 150
    }, 500);
  };
  if ($hash === '#BnFall') {
    $("html,body").animate({
      scrollTop: $("#activity").offset().top - 150
    }, 500);
  };
  if ($hash === '#BnPanda') {
    $("html,body").animate({
      scrollTop: $("#activity").offset().top - 150
    }, 500);
  };
  if ($hash === '#BnLoan') {
    $("html,body").animate({
      scrollTop: $("#activity").offset().top - 150
    }, 500);
  };
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true
      },
      600: {
        items: 1,
        autoplay: true
      },
      1000: {
        items: 3
      }
    }
  })
  // 第一重輪播畫面
  var swiper = new Swiper('.slideshow', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'slideshow-pagination-item',
      bulletActiveClass: 'active',
      clickableClass: 'slideshow-pagination-clickable',
      modifierClass: 'slideshow-pagination-',

    }
  });
  //錨點
  $('.main-nav ul.anchor li a').click(function () {

    //Animate
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 90
    }, 400);
    return false;
  });
  //faq_down
  $('.tabs .qa-section').each(function (i) {
    var _number = i;
    $(this).click(function () {
      $(this).toggleClass('active-qa')
      $('.answer').eq(_number).slideToggle(200);
    });
  });
  //動態連結
  if ($(window).width() < 800) {
    $('.jq_btn').attr('href', 'https://esb.page.link/eFingo-web');
  } else {
    $('.jq_btn').attr('href', 'https://reurl.cc/E7dbZv');
  }
  //tab
  $(".tab-list").on("click", ".tab", function (e) {
    e.preventDefault();

    $(".tab").removeClass("active-tab");
    $(".tab-content").removeClass("show");
    $(this).addClass("active-tab");
    $($(this).attr('href')).addClass("show");
  });
  $(".tab-list-1").on("click", ".tab-1", function (e) {
    e.preventDefault();

    $(".tab-1").removeClass("active-tab");
    $(".tab-content-1").removeClass("show");
    $(this).addClass("active-tab");
    $($(this).attr('href')).addClass("show");
  });
})

// 廣宣版位
if ($('.swiper-container .swiper-slide').length > 1) {
  var swiper_slider = new Swiper('.slider_wrapper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    watchOverflow: true,
    initialSlide: 0,
    slidesPerView: 3,
    slidesOffsetBefore: 0,
    hashNavigation: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
    loop: false,
    coverflowEffect: {
      rotate: 0,
      stretch: -10,
      depth: 100,
      modifier: 3,
      slideShadows: false
    },
    breakpoints: {
      550: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  });
}