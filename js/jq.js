$(function () {
  //menu效果
  function db(down) {
    down.find('.dropdown').css('display', 'block')
  }
  $('.menu ul li').mouseenter(function () {
    // $(this).children('.dropdown')

    $(this).find('.dropdown').stop().animate({
      'opacity': 1,
      'top': '45%'
    }, 300)
    setTimeout(db($(this)), 300)
  })
  $('.menu ul li').mouseleave(function () {
    $(this).find('.dropdown').stop().animate({
      'opacity': 0,
      'top': '100%'
    }, 300)
    $(this).find('.dropdown').css('display', 'none')
  })

  //swiper 轮播图
  var mySwiper = new Swiper('.swiper-container2', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    //自动播放 鼠标进入停止播放
    autoplay: {
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    //swiper animate
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      }
    }
  })



  //wow.js
  new WOW().init();


  // init Isotope
  var $container = $('#container').isotope({
    // options
  });
  // filter items on button click
  $('#filters').on('click', 'a', function () {
    $(this).addClass('active').siblings().removeClass('active')
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });


  //#our-serves .nav-tabs li a点击
  $('#our-serves .nav-tabs li a').click(function () {
    $(this).addClass('active').parent().siblings().children().removeClass('active')
  })

  var mySwiper = new Swiper('.swiper-container1', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
  })

  var mySwiper = new Swiper('.swiper-container3', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    slidesPerView: 3,
    slidesPerGroup: 3,
    // 如果需要分页器
    pagination: {
      el: '.yang',
    },

  })

  //header fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $('header').stop().slideDown(300);
      $('header').css({
        'position': 'fixed',
        'z-index': 999,
      })
      $('.fanding').stop().show()

    } else {
      $('header').css({
        'position': 'static',
        'top': '0',
        'z-index': 0
      })
      $('.fanding').stop().hide()
    }
  })


  //返回顶部
  $('.fanding a').click(function () {
    $('html').animate({
      scrollTop: 0
    }, 500)
  })





})

