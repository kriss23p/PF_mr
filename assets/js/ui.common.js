"use strict";

// const { url } = require('video.js');
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var uiCommon = function (uiCommon, $window, $body) {
  uiCommon.init = function () {
    $('.accordian').length > 0 && uiCommon.accordian.init();
    $('.accordian2').length > 0 && uiCommon.accordian2.init();
    $('[data-aos]').length > 0 && uiCommon.aos.init();
    $('.file-input-wrap').length > 0 && uiCommon.handler.init();
    $('.box-select').length > 0 && select.init();
    $('.family-site').length > 0 && familySite.init();
    header.init();
    stickyTab.init();
    countNumb.init();
    sectionFixed.init();
    topWrap.init();
    $('.contContainer').length > 0 && uiCommon.cardLayer.init();
    $('.career').length > 0 && uiCommon.careerFix.init();
    uiCommon.input.init();
    uiCommon.tab.init();
    uiCommon.gnb.init();
    uiCommon.slider.init();
    $('select').length > 0 && niceSelect.init();
    $('textarea').length > 0 && textareabox.init();
    $(".layer-popup").length > 0 && layer.init();
    $('.swiper-container').length > 0 && uiCommon.swiperSlider.init();
    floating.init();
    $('#mgnb').length > 0 && mgnb.init();
    $('.library-menu').length > 0 && offerBtn.init();
    $('.load-more').length > 0 && loadMore.init();
    // $('.videoWrap').length > 0 && videoLayer.init();
  };

  // SLICK 생성
  uiCommon.slick = {
    init: function init(el, opt) {
      return el.not('.slick-initialized').slick(opt);
    },
    destory: function destory(el) {
      el.filter('.slick-initialized').slick('unslick');
    }
  };
  uiCommon.slider = {
    init: function init() {
      $('.slider-default').length > 0 && this["default"]();
      $('.slick-card-slider').length > 0 && this.cardSlider();
      $('.feedback-card-slider').length > 0 && this.mainCardSlider();
    },
    "default": function _default() {
      // DEFAULT SLIDER
      uiCommon.slick.init($('.slider-default'), {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        arrows: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            draggable: true,
            autoplay: true,
            speed: 1000
          }
        }]
      });
    },
    cardSlider: function cardSlider() {
      uiCommon.slick.init($('.slick-card-slider').each(function () {
        $(this).slick({
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
          pauseOnHover: true,
          draggable: true,
          appendDots: $(this).siblings('.indicatorBox').children('.card-dots'),
          dotsClass: 'slick-dots',
          prevArrow: $(this).siblings('.indicatorBox').children('.prev-arrow'),
          nextArrow: $(this).siblings('.indicatorBox').children('.next-arrow'),
          responsive: [{
            breakpoint: 1024,
            autoplay: true,
            settings: {
              slidesToShow: 1,
              pauseOnHover: true,
              slidesToScroll: 1,
              fade: false,
              draggable: true,
              autoplay: true,
              speed: 2000
            }
          }]
        });
      }));
    },
    mainCardSlider: function mainCardSlider() {
      uiCommon.slick.init($('.feedback-card-slider'), {
        arrows: true,
        dots: false,
        dotsClass: 'feedback-card-paging',
        customPaging: function customPaging(slider, i) {
          return "<span>" + (i + 1) + "</span>" + '/' + slider.slideCount;
        },
        responsive: [{
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            draggable: true,
            autoplay: false,
            speed: 1000,
            dots: true,
            prevArrow: '<a class="slick-prev" href="#"></a>',
            nextArrow: '<a class="slick-next" href="#"><img src="" alt=""></a>'
          }
        }]
      });
    }
  };
  // Body Scroll Fix(레이어 오픈 시 본 페이지 위치 고정)
  var bodyFix = {
    on: function on() {
      var $wrap = $('#wrap');
      var wScroll = $window.scrollTop();
      $('body').addClass('scrOff').css({
        'top': -wScroll
      });
    },
    off: function off() {
      var wScroll = Math.abs(parseInt($('body').css('top')));
      $('body').removeClass('scrOff').removeAttr('style');
      $window.scrollTop(wScroll);
    }
  };

  // nice select
  var niceSelect = {
    init: function init() {
      $('select').niceSelect();
    }
  };

  //header
  var header = {
    init: function init() {
      this.gnb();
      $(".total-menu").length > 0 && this.totalMenu();
      $(".total-menu .mo-total-menu-inner__right").length > 0 && this.moTotalMenu();
      this.breadCrumb();
      this.headerScroll();
    },
    gnb: function gnb() {
      //gnb
      $("body").on('mouseenter focusin', '#gnb > ul > li > a', function () {
        $("#gnb > ul > li").removeClass('on');
        $("#header").addClass('gnb-on');
        $(".gnb-depth2-bg").addClass('on');
        $(this).parents('li').addClass('on');
      });
      $("#gnb .gnb-depth1 li:last-child > .gnb-depth1-hover > .gnb-depth2 li:last-child").on('mouseenter focusout', function () {
        $("#header").removeClass('gnb-on').removeAttr('style');
        $("#gnb > ul > li").removeClass('on');
        $(".gnb-depth2-bg").removeClass('on');
      });
      $("#header .top-util button.top-menu").on('mouseenter focusout', function () {
        $("#header").removeClass('gnb-on').removeAttr('style');
        $("#gnb > ul > li").removeClass('on');
        $(".gnb-depth2-bg").removeClass('on');
      });
      $("#gnb").on('mouseleave', function () {
        $("#header").removeClass('gnb-on').removeAttr('style');
        $("#gnb > ul > li").removeClass('on');
        $(".gnb-depth2-bg").removeClass('on');
      });
    },
    totalMenu: function totalMenu() {
      //전체메뉴
      //document.querySelector(".total-menu").style.height = window.innerHeight + "px";
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        // We execute the same script as before
        if ($(window).width() < 1025) {
          var _vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
        }
      });
      $("#header .top-menu").click(function () {
        bodyFix.on();
        $(".total-menu").addClass('on').addClass('active');
        $(this).attr('aria-expanded', 'true');
        $(".total-menu h1.logo a").attr("tabindex", "1").show().focus();
        $(".total-menu a, .total-menu button").attr("tabindex", "0");
      });
      $(".total-menu .btn-close, .total-menu .total-menu-inner .mo-total-menu-inner__right .depth1 li a, .total-menu-inner__util ul li a").click(function () {
        $(".total-menu").removeClass('on').removeClass('active');
        $('.mo-total-menu-inner__right .depth1 dl').removeClass('on');
        $(".total-menu h1.logo a").attr("tabindex", "-1");
        $(".total-menu a, .total-menu button").attr("tabindex", "-1");
        $('.top-util .top-menu').attr('aria-expanded', 'false');
        $('.mo-total-menu-inner__right .depth1 dd').slideUp({
          duration: 'fast',
          easing: 'linear',
          start: function start() {
            $(this).css({
              display: "none"
            });
          }
        });
        $(".top-menu").focus();
        bodyFix.off();
      });
      $(".total-menu .total-menu-inner__right .depth1 > dl").on('mouseenter', function () {
        $(".total-menu").removeClass('active');
      });
      $(".total-menu .total-menu-inner__right .depth1 > dl").on('mouseleave', function () {
        $(".total-menu").addClass('active');
      });
    },
    moTotalMenu: function moTotalMenu() {
      var moTotalMenu = $('.mo-total-menu-inner__right'),
        menuTitle = moTotalMenu.find('.depth1 .menu-title'),
        menuCont = moTotalMenu.find('.depth1 .depth2, .depth1 .depth2 .depth3'),
        categoryTitle = moTotalMenu.find('.depth1 .depth2 .category-title');
      menuTitle.attr('aria-expanded', 'false');
      categoryTitle.attr('aria-expanded', 'false');
      menuCont.css('display', 'none');
      menuTitle.on('click', function (e) {
        var controller = $(this).parents();
        if ($(this).hasClass('on')) {
          $(e.target).attr('aria-expanded', 'false');
          $(e.target).removeClass('on');
          controller.find('.depth2').slideUp(150);
        } else {
          $(e.target).attr('aria-expanded', 'true');
          $(e.target).addClass('on');
          $(e.target).parents('.depth1').children('.depth2').slideDown(150);
          controller.siblings().find(menuTitle).removeClass('on');
          controller.siblings().find(categoryTitle).removeClass('on');
          controller.siblings().find('.depth2, .depth3').slideUp(150);
        }
      });
      categoryTitle.on('click', function (e) {
        var controller = $(this).parents();
        if ($(this).hasClass('on')) {
          $(e.target).attr('aria-expanded', 'false');
          $(e.target).removeClass('on');
          controller.find('.depth3').slideUp(150);
        } else {
          $(e.target).attr('aria-expanded', 'true');
          $(e.target).addClass('on');
          $(e.target).parent('h3').siblings('.depth3').slideDown(150);
          controller.siblings().find(categoryTitle).removeClass('on');
          controller.siblings().find('.depth3').slideUp(150);
        }
      });
    },
    breadCrumb: function breadCrumb() {
      //breadcrumb
      $(".breadcrumb>li").mouseenter(function () {
        $(".breadcrumb>li").removeClass('on');
        $(this).addClass('on').find('.breadcrumb-sub').fadeIn(300);
      });
      $(".breadcrumb>li").mouseleave(function () {
        $(".breadcrumb>li").removeClass('on').find('.breadcrumb-sub').fadeOut(300);
      });
    },
    headerScroll: function headerScroll() {
      var header = $('#header'),
        lastScroll = 0;
      $window.on('scroll', function () {
        var scTop = $(this).scrollTop();
        if (scTop > 0) {
          $("#header").addClass('gnb-on');
        } else {
          $("#header").removeClass('gnb-on');
        }
        lastScroll = scTop;
      });
    }
  };

  //미라콤의가치 : 가치제안
  var suggestionImgSlider = new Swiper('.suggestion_img_slide', {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: false,
    observer: true,
    observeParents: true,
    resizeObserver: true
  });

  //미라콤의가치 section1
  uiCommon.careerFix = {
    init: function init() {
      this.careerFix();
    },
    careerFix: function careerFix() {
      var controller = new ScrollMagic.Controller();
      var careerCon3 = new TimelineMax().to('.career .careerCon3', 1, {
        className: "careerCon3 sceneE"
      }).to('.career .careerCon3', 1, {
        className: "careerCon3 sceneF"
      }).to('.career .careerCon3', 1, {
        className: "careerCon3 sceneG"
      }).to('.career .careerCon3', 1, {
        className: "careerCon3 sceneH"
      }).to('.career .careerCon3', 1, {
        className: "careerCon3 sceneI"
      });
      if ($(window).width() >= 768) {
        var scene3 = new ScrollMagic.Scene({
          triggerElement: ".careerCon3",
          triggerHook: 0,
          duration: "270%"
        }).setPin(".careerCon3").setTween(careerCon3).addTo(controller);
      } else {
        var scene3 = new ScrollMagic.Scene({
          triggerElement: ".careerCon3",
          triggerHook: 0,
          duration: "450%"
        }).setPin(".careerCon3").setTween(careerCon3).addTo(controller);
      }
      scene3.on("update", function (event) {
        var pageNum;
        if ($('.career .careerCon3').hasClass("sceneE")) {
          pageNum = '01';
        } else if ($('.career .careerCon3').hasClass("sceneF")) {
          pageNum = '02';
        } else if ($('.career .careerCon3').hasClass("sceneG")) {
          pageNum = '03';
        } else if ($('.career .careerCon3').hasClass("sceneH")) {
          pageNum = '04';
        } else if ($('.career .careerCon3').hasClass("sceneI")) {
          pageNum = '05';
        }
        $('.paging .current').text(pageNum);
      });
    }
  };
  uiCommon.cardLayer = {
    init: function init() {
      this.cardLayer();
    },
    cardLayer: function cardLayer() {
      //스크롤
      $(window).on("scroll", function (e) {
        var _$$offset;
        var st = $(this).scrollTop();
        var groups = ((_$$offset = $('.contContainer').offset()) === null || _$$offset === void 0 ? void 0 : _$$offset.top) - $('.contWrap').outerHeight();
        if (groups <= st) {
          $('.contContainer').removeClass('ready');
        } else {
          $('.contContainer').addClass('ready');
        }
      });

      //gsap
      gsap.registerPlugin(ScrollTrigger);
      var dur = 2,
        next = 2,
        fade = 0.3;

      //value-04-cont
      var groupImg = gsap.utils.toArray(".contContainer > .contWrap");
      gsap.set(groupImg, {
        yPercent: 120
      });
      var groupText = gsap.utils.toArray('.contContainer > .contWrap .contTxt');
      var groupEnd = groupImg.length;
      var groupImgH = 1000;
      var groupContentH = groupImgH * groupEnd;
      var groupAction = gsap.timeline({
        defaults: {
          ease: 'none',
          stagger: next
        },
        paused: true
      }).to(groupImg, {
        yPercent: 0,
        duration: dur
      }).to(groupText, {
        duration: dur
      }, dur - fade).to(groupText, {
        opacity: 0,
        duration: dur
      }, dur * 2);
      var groupSlider = gsap.fromTo(groupAction, {
        time: dur
      }, {
        time: groupAction.duration() - dur,
        paused: true
      });
      ScrollTrigger.create({
        trigger: '.contContainer',
        start: 'top',
        end: '+=' + "".concat(groupContentH),
        pin: true,
        animation: groupSlider,
        scrub: 0.5,
        invalidateOnRefresh: true
      });
    }
  };

  //countNumb
  var countNumb = {
    init: function init() {
      this.scrollCount();
    },
    scrollCount: function scrollCount() {
      gsap.registerPlugin(ScrollTrigger);
      sectionAnimation();
      function sectionAnimation() {
        ScrollTrigger.defaults({
          toggleActions: "restart pause resume pause",
          scrub: true,
          start: "top 100%",
          end: "+=100% 90%"
        });
        var sections = gsap.utils.toArray(".countNumBox");
        var section = $(".countNumBox");
        sections.forEach(function (section, index) {
          gsap.set(section, {
            y: 100,
            opacity: 0
          });
          gsap.to(section, {
            y: 100,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: sections[index],
              onEnter: function onEnter() {
                return animText(sections, index);
              },
              onLeave: function onLeave() {
                return resetAnimText(sections, index);
              }
            }
          });
        });
      }
      function resetAnimText(section, index) {
        if ($(section[index]).attr("id") == "fast-facts") {
          // console.log('onLeave!');
        }
      }
      function animText(section, index) {
        if ($(section[index]).attr("id") == "fast-facts") {
          $(".countNum").each(function () {
            $(this).prop("Counter", 0).animate({
              Counter: $(this).data("count")
            }, {
              duration: 800,
              easing: "swing",
              step: function step(now) {
                if (now == 31.5) {
                  $(this).text(now);
                } else if (now == 1998) {
                  $(this).text(Math.ceil(now).toString());
                } else {
                  $(this).text(Math.ceil(now).toLocaleString());
                }
                if (now == 23.96) {
                  $(this).text(now);
                }
                if (now == 230.9) {
                  $(this).text(now);
                }
              }
            });
          });
        }
      }
      function animText02(section, index) {
        if ($(section[index]).attr("id") == "fast-facts") {
          $(".countNum").each(function () {
            $(this).prop("Counter", 0).animate({
              Counter: $(this).data("count")
            }, {
              duration: 800,
              easing: "swing",
              step: function step(now) {
                if (now == 31.5) {
                  $(this).text(now);
                } else if (now == 1998) {
                  $(this).text(Math.ceil(now).toString());
                } else {
                  $(this).text(Math.ceil(now).toLocaleString());
                }
              }
            });
          });
        }
      }
    }
  };

  //sectionFixed  
  var sectionFixed = {
    init: function init() {
      this.sectionFix();
      this.valueFix();
    },
    sectionFix: function sectionFix() {
      if (document.getElementById('pinContainer') !== null) {
        var controller = new ScrollMagic.Controller();
        var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
          z: -180
        }).to("#slideContainer", 1, {
          x: "-60%"
        }).to("#slideContainer", 1, {
          z: 0
        });
        if ($(window).width() < 767) {
          var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
            z: -180
          }).to("#slideContainer", 1, {
            x: "-90%"
          }).to("#slideContainer", 1, {
            z: 0
          });
        }
        var scene = new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "150%"
        }).setPin("#pinContainer").setTween(wipeAnimation).addTo(controller);
      }
    },
    valueFix: function valueFix() {
      if (document.getElementById('valueContainer') !== null) {
        var slideLeft = -($('#slideContainer li:nth-child(1)').outerWidth() + $('#slideContainer li:nth-child(2)').outerWidth());
        var controller = new ScrollMagic.Controller();
        var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
          z: -180
        }).to("#slideContainer", 1, {
          x: slideLeft
        }).to("#slideContainer", 1, {
          z: 0
        });
        var scene = new ScrollMagic.Scene({
          triggerElement: "#valueContainer",
          triggerHook: "onLeave",
          duration: "150%"
        }).setPin("#valueContainer").setTween(wipeAnimation).addTo(controller);
        if ($(window).width() < 1025) {
          controller.destroy(true);
        }
        $(window).resize(function () {
          if ($(window).width() < 1025) {
            controller.destroy(true);
          } else {
            controller.destroy(true);
            slideLeft = -($('#slideContainer li:nth-child(1)').outerWidth() + $('#slideContainer li:nth-child(2)').outerWidth());
            controller = new ScrollMagic.Controller();
            wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
              z: -180
            }).to("#slideContainer", 1, {
              x: slideLeft
            }).to("#slideContainer", 1, {
              z: 0
            });
            scene = new ScrollMagic.Scene({
              triggerElement: "#valueContainer",
              triggerHook: "onLeave",
              duration: "150%"
            }).setPin("#valueContainer").setTween(wipeAnimation).addTo(controller);
          }
        });
      }
    }
  };
  var topWrap = {
    init: function init() {
      this.topWrapScale();
    },
    topWrapScale: function topWrapScale() {
      if (document.getElementById('topWrapScale') !== null) {
        gsap.registerPlugin(ScrollTrigger);
        $(".company-03").each(function (index) {
          var triggerElement = $(this);
          var targetElement = $(".top_bg");
          var targetElementImg = $(".top_bg img");
          var targetElementTxt = $(".top_bg .top_txt p");
          gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "top top",
              scrub: true,
              pin: false,
              duration: "80%"
            }
          }).fromTo(targetElementTxt, {
            y: 80,
            opacity: 1
          }, {
            y: 0,
            opacity: 1
          }, "<").fromTo(targetElementImg, {
            scale: 0.8
          }, {
            scale: 1
          }, "<");
        });
      }
    }
  };

  // tab
  uiCommon.tab = {
    init: function init() {
      $('.box-tab').hasClass('tab-ctrl') && this.tabEvent();
      $(".tab-contents-wrap > div").eq(0).show();
      $(".box-tab").hasClass('tabAccordionActive') && this.tabAccordion();
      $('.flexLayout_04').length > 0 && this.accordianPoint();
      $('.company-05 .tab-btn-wrap').length > 0 && this.scrollTab();
    },
    tabEvent: function tabEvent() {
      var $tabList = $('.tab-btn-wrap li');
      $tabList.on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.tab-contents-wrap > div').hide();
        $('.tab-contents-wrap > div').eq(idx).show();
        $('.slick-card-slider').slick('setPosition');
      });
    },
    accordianPoint: function accordianPoint() {
      $('.flexLayout_04 li .accordian').each(function (index, item) {
        $(item).eq(index).find('.acc-conts').css('display', 'block');
      });
    },
    scrollTab: function scrollTab() {
      $('.company-05 .tab-btn-wrap li a').on('click', function (e) {
        e.preventDefault();
        $(this).parents('li').addClass('on').siblings('li').removeClass('on');
        $('.tab-contents-wrap').show();
        $('.accordian2').find('.acc-trigger2').removeClass('on').siblings('.acc-conts2').hide();
        $(this.hash).find('.acc-trigger2').addClass('on').siblings('.acc-conts2').show();
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000);
      });
    },
    tabAccordion: function tabAccordion() {
      $(".box-tab").each(function (index, item) {
        $(item).find(".tab-btn-wrap").eq(0).find(" > li");
        $(item).find(".tab-contents-wrap").find("accordian-wrap").eq(0).siblings(".accordian");
      });
    }
  };

  //sticky tab
  var stickyTab = {
    init: function init() {
      var _this = this;
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      $(window).scroll(function () {
        _this.onScroll();
      });
      this.onScroll();
      this.checkTabContainerPosition();
    },
    onScroll: function onScroll() {
      this.checkTabContainerPosition();
    },
    checkTabContainerPosition: function checkTabContainerPosition() {
      var _$$offset2, _$$offset3, _$$offset4;
      var offset = (_$$offset2 = $('.stickTabContainer').offset()) === null || _$$offset2 === void 0 ? void 0 : _$$offset2.top;
      var offsetHeader = (_$$offset3 = $('#header').offset()) === null || _$$offset3 === void 0 ? void 0 : _$$offset3.top;
      var customerImg = (_$$offset4 = $('.flexLayout_04').offset()) === null || _$$offset4 === void 0 ? void 0 : _$$offset4.top;
      var customerImgBottom = customerImg + $('.flexLayout_04').outerHeight() - $('#footer').outerHeight();
      var headerTop = $('#header').outerHeight();
      var tabH = +$('.stickTabContainer .stickyTab.box-tab').outerHeight();
      if ($(window).scrollTop() > offset) {
        $('.stickyTab').css({
          'position': 'fixed',
          'top': '12rem',
          'left': '50%',
          'transform': 'translateX(-50%)'
        });
        if ($(window).scrollTop() > offsetHeader) {
          $('.stickyTab').css({
            'position': 'fixed',
            'top': '0rem',
            'left': '50%',
            'transform': 'translateX(-50%)'
          });
        }
      } else {
        $('.stickyTab').css({
          'position': 'relative',
          'top': '0px'
        });
      }

      //header + tab 있을 경우
      if ($(window).scrollTop() > customerImg - tabH * 2) {
        $('.flexLayout_04 > li:last-child').css({
          'position': 'sticky',
          'top': headerTop + tabH
        });
      } //header만 있을 경우
      else if ($(window).scrollTop() > headerTop) {
        $('.flexLayout_04 > li:last-child').css({
          'position': 'sticky',
          'top': headerTop
        });
      } else {
        $('.flexLayout_04 > li:last-child').css({
          'position': 'sticky',
          'top': '0'
        });
      }
      if ($(window).scrollTop() > customerImgBottom) {
        $('.flexLayout_04 > li:last-child').css({
          'position': 'sticky',
          'bottom': '0'
        });
      }
      if ($(window).width() < 1024) {
        var _$$offset5;
        if ($(window).scrollTop() >= ((_$$offset5 = $('.stickTabContainer').offset()) === null || _$$offset5 === void 0 ? void 0 : _$$offset5.top) - 50) {
          $('.stickyTab').css({
            'position': 'fixed',
            'top': '4.4rem',
            'left': '50%',
            'transform': 'translateX(-50%)'
          });
          if ($(window).scrollTop() > offsetHeader) {
            $('.stickyTab').css({
              'position': 'fixed',
              'top': '0rem',
              'left': '50%',
              'transform': 'translateX(-50%)'
            });
          }
        }
      }
    }
  };

  //sticky nav
  $(document).ready(function () {
    var $nav = $(".sticky-layout nav ul"),
      $list = $nav.find("li"),
      $nav_btn = $nav.find("li a"),
      $main = $('.container');
    var article_heights;
    var list_heights;
    arrInit();
    arrList();

    //탭 
    $nav_btn.on("click", function (e) {
      e.preventDefault();
      var _index = $(e.target).closest("li").index();

      //탭의 유무에 따른 위치값 변경
      //탭 있을때
      if ($(".stickTabContainer").length === 1) {
        if (_index === 0) {
          $("html,body").stop().animate({
            scrollTop: article_heights[_index]
          }, 300);
        } else if (_index !== 0) {
          $("html,body").stop().animate({
            scrollTop: article_heights[_index] - 82
          }, 300);
        }

        //탭 없을때
      } else if ($(".stickTabContainer").length === 0) {
        $("html,body").stop().animate({
          scrollTop: article_heights[_index] + 62
        }, 300);
      }
      $(this).addClass('on');
      $(this).parent().siblings().children().removeClass('on');
    });

    //반응형 탭 이동
    $(window).on("resize", function () {
      $nav_btn.on("click", function (e) {
        e.preventDefault();
        var _index = $(e.target).closest("li").index();

        //탭의 유무에 따른 위치값 변경
        //탭 있을때
        if ($(".stickTabContainer").length === 1) {
          if (_index === 0) {
            $("html,body").stop().animate({
              scrollTop: article_heights[_index]
            }, 300);
          } else if (_index !== 0) {
            $("html,body").stop().animate({
              scrollTop: article_heights[_index] - 82
            }, 300);
          }

          //탭 없을때
        } else if ($(".stickTabContainer").length === 0) {
          $("html,body").stop().animate({
            scrollTop: article_heights[_index] + 62
          }, 300);
        }
        $(this).addClass('on');
        $(this).parent().siblings().children().removeClass('on');
      });
      arrInit();
    });

    //스크롤
    function arrInit() {
      article_heights = [];
      var activeIndex = 0;
      var timer;
      var _sTab = $('.stickyTab');
      $(".container article").each(function (index, item) {
        var _self = $(item);
        var _self_top = _self.offset().top;
        var _headerH = $("header").height();
        if (_sTab.hasClass('fix')) {
          article_heights.push(_self_top - _headerH);
        } else {
          article_heights.push(_self_top - _headerH - 82);
        }
      });
      $window.on("scroll", function (e) {
        if (!timer) {
          timer = setTimeout(function () {
            timer = null;
            var _self = $(e.target);
            var scTop = _self.scrollTop();
            if (scTop + 100 >= article_heights[0]) {
              for (var i = 0; i < article_heights.length; i++) {
                if (scTop + 100 >= article_heights[i]) {
                  activeIndex = i;
                }
              }
            } else {
              activeIndex = 0;
            }
            activeMenu(activeIndex);
          }, 300);
        }
      });

      //스크롤시 메뉴 활성화
      function activeMenu(index) {
        /* 
            $nav($(".sticky-layout nav ul"))에 activeMenu 가 있을 경우, 스크롤 위치에 따라 적합한 메뉴 활성화 
            주석된 소스 푼거라 추가 조건문을 씁니다. 
        */
        if ($nav.hasClass('activeMenu')) {
          //스크롤시 bg변경 활성화 (연혁메뉴일경우)
          $nav_btn.removeClass("on");
          $list.eq(index).find("a").addClass("on");
        } else {
          $nav_btn.removeClass("on");
          $list.eq(index).find("a").addClass("on"); //연혁메뉴 아닐경우
        }
      }
    }

    //회사소개 - 연혁
    function arrList() {
      if (document.getElementById('activList') !== null) {
        var activeList = function activeList(index) {
          $('.container article ul li').removeClass('on');
          $('.container article ul li').eq(index).addClass('on');
        };
        list_heights = [];
        var activeListIndex = 0;
        var timer;
        setTimeout(function () {
          $(".container article ul li").each(function (index, item) {
            var _selfLi = $(item);
            var _selfLi_top = _selfLi.offset().top;
            var _headerH = $("header").height();
            list_heights.push(_selfLi_top - _headerH);
          });
        }, 50);
        $window.on("scroll", function (e) {
          if (!timer) {
            timer = setTimeout(function () {
              timer = null;
              var _selfLi = $(e.target);
              var scTopLi = _selfLi.scrollTop();
              if (scTopLi + 100 >= list_heights[0]) {
                for (var i = 0; i < list_heights.length; i++) {
                  if (scTopLi + 100 >= list_heights[i]) {
                    activeListIndex = i;
                  }
                }
              } else {
                activeListIndex = 0;
              }
              activeList(activeListIndex);
            }, 300);
          }
        });
      }
    }
  });

  // input
  uiCommon.input = {
    init: function init() {
      this["delete"]();
      this.focus();
    },
    "delete": function _delete() {
      var $el = $('.box-input'),
        $input = $el.find('.is-delete'),
        $del = $el.find('.ico-delete'),
        $timeTxt = $el.find('.txt-time'),
        $icoEye = $el.find('.ico-eye'),
        $icoSearch = $del.siblings('.ico-search'),
        $unit = $(this).siblings('.input-unit');

      // input 타이핑 이벤트
      setTimeout(function () {
        $input.on('change keyup', function () {
          var currentVal = $(this).val(),
            btn = $(this).siblings('.ico-delete'),
            $timeTxt = $(this).siblings('.txt-time'),
            $icoEye = $(this).siblings('.ico-eye'),
            $icoSearch = $(this).find('.ico-search'),
            $unit = $(this).siblings('.input-unit');
          if (currentVal !== '') {
            btn.addClass('on');
            $timeTxt.addClass('on');
            $icoEye.addClass('on');
            $icoSearch.addClass('on');
            $unit.addClass('on');
          } else {
            btn.removeClass('on');
            $timeTxt.removeClass('on');
            $icoEye.removeClass('on');
            $icoSearch.removeClass('on');
            $unit.removeClass('on');
          }
        });
      }, 100);

      // 기존 삭제 클릭시 엘리먼트에 display:none 노출중이므로
      // css로 변경후 엘리먼트에 노출 안하고 class로 제어
      $del.on('click', function () {
        $(this).removeClass('on');
        $(this).siblings().val('').focus();
        $(this).siblings($timeTxt).removeClass('on');
        $(this).siblings($icoEye).removeClass('on');
        $(this).siblings($icoSearch).removeClass('on');
        $(this).siblings($unit).removeClass('on');
      });
      $icoEye.on('click', function () {
        if ($(this).hasClass('show') == true) {
          $(this).removeClass('show');
          $(this).type = 'text';
          $('input[type=text]').prop('type', "password");
        } else {
          $(this).addClass('show');
          $('input[type=password]').prop('type', "text");
        }
      });
    },
    focus: function focus() {
      var $el = $('.box-input'),
        $input = $el.children('.input-wrap').children('.input-default'),
        $label = $el.children('.input-wrap').children('.label-trans'),
        $textarea = $('.box-textarea').children('.input-default');

      //input 포커스
      $input.focusin(function () {
        $(this).siblings($label).addClass('on');
      });
      $input.focusout(function () {
        var currentVal = $(this).val();
        if (currentVal !== '') {
          $(this).siblings($label).addClass('on');
        } else {
          $(this).siblings($label).removeClass('on');
        }
      });

      //input 타이핑
      setTimeout(function () {
        $input.on('change keyup', function () {
          var currentVal = $(this).val();
          if (currentVal !== '') {
            $(this).siblings($label).addClass('on');
          } else {
            $(this).siblings($label).removeClass('on');
          }
        });
      }, 100);

      //textarea 포커스
      $textarea.focusin(function () {
        $(this).parents('.box-textarea').siblings('.input-label').addClass('on');
      });
      $textarea.focusout(function () {
        $(this).parents('.box-textarea').siblings('.input-label').removeClass('on');
      });
    }
  };

  // select
  var familySite = {
    init: function init() {
      this.siteSelect();
    },
    siteSelect: function siteSelect() {
      $('.family-site').find('.family-site-select').on('click', function () {
        $(this).find('.arrow').toggleClass('active');
        if ($('.arrow').hasClass('active')) {
          $('.family-site-menu').fadeIn(100);
        } else {
          $('.family-site-menu').fadeOut(100);
        }
      });
    }
  };
  var select = {
    init: function init() {
      this.borderChange();
      this.selectAfter();
      $('.self-write-wrap').length > 0 && this.showTextArea();
    },
    borderChange: function borderChange() {
      $(".select-default").change(function () {
        var optionSelect = $(this).children(':selected'),
          depthSelect = $(this).parents(".box-select").siblings('.select-more'),
          openSelect = $('.open'),
          $label = $('.label-trans'),
          $el = $(this).find('.box-input'),
          $input = $el.find('.is-delete'),
          $del = $el.find('.ico-delete');
        if (openSelect) {
          $(this).prev($label).addClass('on');
        }
        if (optionSelect) {
          depthSelect.addClass('on');
          depthSelect.prev('.select-multple').hide();
        }

        // input 타이핑 이벤트
        setTimeout(function () {
          $input.on('change keyup', function () {
            var currentVal = $(this).val(),
              btn = $(this).siblings('.ico-delete');
            if (currentVal !== '') {
              btn.addClass('on');
            } else {
              btn.removeClass('on');
            }
          });
        }, 100);
        $del.on('click', function () {
          $(this).removeClass('on');
          $(this).siblings().val('').focus();
        });
      });
    },
    selectAfter: function selectAfter() {
      $(".select-after").change(function () {
        var optionSelect = $(this).children(':selected'),
          $box = $(this).parents('.box-select'),
          $el = $(this).siblings('.box-input').children('.input-wrap'),
          $input = $el.find('.input-default'),
          $del = $el.find('.ico-delete');
        if (optionSelect) {
          $(this).addClass('on');
          $(this).siblings('.nice-select').addClass('on');
          $box.addClass('on');
        }
      });
    }
  };

  //textarea
  var textareabox = {
    init: function init() {
      this.textareabox();
    },
    textareabox: function textareabox() {
      var default_Height = 0; // textarea 기본 height

      var $textarea = document.querySelector('textarea');
      $textarea.oninput = function (event) {
        var $target = event.target;
        $target.style.height = 0;
        $target.style.height = default_Height + $target.scrollHeight + 'px';
      };
    }
  };

  // ACCORDIAN
  uiCommon.accordian = {
    init: function init() {
      var accordian = $('.accordian');
      accordian.each(function () {
        var button = $(this).find('.acc-trigger'),
          content = $(this).find('.acc-conts'),
          sideImg = $(this).parents().siblings().children('.acc-img');
        button.attr('aria-expanded', 'false');
        content.attr('aria-hidden', 'true');
        button.on('click', function () {
          var controller = $(this).parent();
          var i = controller.closest('div').index();
          if (controller.find('.acc-trigger').hasClass('on')) {
            $(this).attr('aria-expanded', 'false');
          } else {
            $(this).attr('aria-expanded', 'true');
            controller.find('.acc-trigger').addClass('on');
            controller.find('.acc-conts').slideDown(150).attr('aria-hidden', 'false');

            //추가  
            controller.siblings().find('.acc-trigger').removeClass('on');
            controller.siblings().find('.acc-conts').slideUp(150).attr('aria-hideen', 'false');
            sideImg.eq(i).siblings('.acc-img').removeClass('on');
            sideImg.eq(i).addClass('on');
          }
        });
      });
    }
  };

  // ACCORDIAN2
  uiCommon.accordian2 = {
    init: function init() {
      var accordian2 = $('.accordian2');
      accordian2.each(function () {
        var button2 = $(this).find('.acc-trigger2'),
          content2 = $(this).find('.acc-conts2');
        button2.attr('aria-expanded', 'false');
        content2.attr('aria-hidden', 'true');
        button2.on('click', function () {
          var controller = $(this).parent();
          var i = controller.closest('div').index();
          if (controller.find('.acc-trigger2').hasClass('on')) {
            $(this).attr('aria-expanded', 'false');
            controller.find('.acc-trigger2').removeClass('on');
            controller.find('.acc-conts2').slideUp(150).attr('aria-hidden', 'true');
          } else {
            $(this).attr('aria-expanded', 'true');
            controller.find('.acc-trigger2').addClass('on');
            controller.find('.acc-conts2').slideDown(150).attr('aria-hidden', 'false');
          }
        });
      });
    }
  };
  uiCommon.gnb = {
    init: function init() {
      var gnb = $('#gnb');
      var depth1 = $('.depth-1 > li strong');
      var depth2 = $('.depth-2');
      var depth2Li = $('.depth-2 li');
      gnb.each(function () {
        uiCommon.gnb.gnbMenu(depth1, depth2, depth2Li);
      });
    },
    gnbMenu: function gnbMenu(depth1, depth2, depth2Li) {
      depth1.off('click').on('click', function (event) {
        event.preventDefault();
        depth1.removeClass('active');
        depth2.slideUp();
        $(this).addClass('active').siblings('ul').stop().slideToggle();
      });
      depth2Li.off('click').on('click', function (event) {
        event.preventDefault();
        depth2Li.children('a').removeClass('on');
        $(this).find('a').addClass('on');
      });
    }
  };
  uiCommon.handler = {
    init: function init() {
      this.removeFile();
      $('#attach1').length > 0 && this.fileImg();
    },
    fileImg: function fileImg() {
      $('#attach1').on('change', function () {
        var preview = $('.box-file-attached');
        var files = Array.from($(this)[0].files);
        files.forEach(function (file) {
          preview.append("\n                    <li id=\"".concat(file.lastModified, "\" class=\"box-attached\">\n                        <div class=\"file-txt\">\n                            <span>").concat(file.name, "</span>\n                            <button data-index=\"").concat(file.lastModified, "\" class=\"ico-delete\"><span class=\"hidden\">\uC0AD\uC81C</span></button>\n                        </div>\n                    </li>\n                    "));
        });
      });
    },
    removeFile: function removeFile() {
      $(document).on('click', '.ico-delete', function () {
        var removeTargetId = $(this).data('index');
        var removeTarget = $('#' + removeTargetId);
        var files = $('#attach1')[0].files;
        var dataTransfer = new DataTransfer();
        Array.from(files).filter(function (file) {
          return file.lastModified != removeTargetId;
        }).forEach(function (file) {
          dataTransfer.items.add(file);
        });
        $('#attach1').prop('files', dataTransfer.files);
        removeTarget.remove();
      });
    }
  };
  // LAYER POPUP
  var layer = {
    init: function init() {
      var _this2 = this;
      $(".layer-popup");
      $('[data-popup]').on('click', function (e) {
        return _this2.open(e);
      });
      $('body').on('click', '.popup-close', function (e) {
        return _this2.close(e);
      });
    },
    open: function open($target) {
      var _id;
      if (_typeof($target) == 'object') {
        _id = '#' + $($target.currentTarget).attr('data-popup');
      } else {
        _id = '#' + $target;
      }
      this.obj = $($target.currentTarget);
      bodyFix.on();
      $(_id).stop().fadeIn().css({
        'display': 'flex',
        'z-index': '101'
      }).addClass('show').focus();
    },
    close: function close($target) {
      if (_typeof($target) == 'object') {
        $($target.currentTarget).closest('.layer-popup').stop().fadeOut().removeClass('show');
      } else {
        $('#' + $target).stop().fadeOut().removeClass('show');
      }
      bodyFix.off();
      this.obj && this.obj.focus();
    }
  };
  uiCommon.aos = {
    init: function init() {
      AOS.init();
    }
  };
  uiCommon.swiperSlider = {
    init: function init() {
      this.companySwiper();
      this.tableSwiper();
      this.cardSwiper();
    },
    cardSwiper: function cardSwiper() {
      $(window).ready(function () {
        var card_swiper = new Swiper('.cardSwiper', {
          direction: 'horizontal',
          slidesPerView: "auto",
          autoHeight: true,
          touchRatio: 1,
          allowTouchMove: true,
          threshold: 0,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: ".next_bottom",
            prevEl: ".prev_bottom"
          },
          observer: true,
          observeParents: true
        });
      });
    },
    tableSwiper: function tableSwiper() {
      $(window).ready(function () {
        var table_swiper = new Swiper('.tableSwiper', {
          spaceBetween: 16,
          direction: 'horizontal',
          slidesPerView: "auto",
          autoHeight: true,
          touchRatio: 1,
          allowTouchMove: true,
          threshold: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: ".table_button_next, .table_button_next_bottom",
            prevEl: ".table_button_prev, .table_button_prev_bottom"
          },
          observer: true,
          observeParents: true
        });
      });
    },
    companySwiper: function companySwiper() {
      $(window).ready(function () {
        var table_swiper = new Swiper('.companySwiper', {
          spaceBetween: 16,
          direction: 'horizontal',
          slidesPerView: "auto",
          autoHeight: true,
          touchRatio: 1,
          allowTouchMove: true,
          threshold: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: ".table_button_next, .table_button_next_bottom",
            prevEl: ".table_button_prev, .table_button_prev_bottom"
          },
          observer: true,
          observeParents: true
        });
      });
    }
  };

  //플로팅 버튼 제어
  var floating = {
    init: function init() {
      this.top();
      $('.chat-bot').length > 0 && this.chatbot();
      this.fixBtn();
    },
    top: function top() {
      $('.float-top a').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 300);
      });
    },
    chatbot: function chatbot() {
      var _this3 = this;
      $('body').on('click', '.chat-bot .open', function () {
        _this3.chatbotOpen();
      });
      $('body').on('mouseenter', '.chat-bot .open', function () {
        $(this).addClass('on');
      });
      $('body').on('mouseleave', '.chat-bot .open', function () {
        $(this).removeClass('on');
      });
      $('body').on('click', '.chat-bot .close', function () {
        _this3.chatbotClose();
      });
    },
    chatbotOpen: function chatbotOpen() {
      $('iframe[title="메시징 창"]').parent('div').addClass('chat-box');
      $('.chat-bot .close').css('display', 'block');
      if ($('.product-info').length > 0 && $('.product-info .bottom-layer-pop').length > 0) {
        $('.chat-box').addClass('chat-product');
      }
      ;
    },
    chatbotClose: function chatbotClose() {
      $('.chat-bot .close').hide();
      $('.chat-bot .open').show();
    },
    button: function button() {
      $('.chat-bot').css('bottom', $('.btn-group.btn-fix').height() + 10);
    },
    fixBtn: function fixBtn() {
      if ($('.product-info').length > 0 && $('.product-info .bottom-layer-pop').length > 0) {
        $('.chat-bot').css('bottom', $('.bottom-layer-pop').outerHeight() + 74);
        $('.float-top').css('bottom', $('.bottom-layer-pop').outerHeight() + 10);
      }
    }
  };

  // mgnb
  var mgnb = {
    init: function init() {
      this.btnMenu();
      this.action();
    },
    btnMenu: function btnMenu() {
      $('.btn-menu').on('click', function () {
        if ($(this).hasClass('on')) {
          $(this).removeClass('on');
          $('#mgnb').removeClass('on');
          bodyFix.off();
        } else {
          $(this).addClass('on');
          $('#mgnb').addClass('on');
          bodyFix.on();
        }
      });
    },
    action: function action() {
      var menu = $('.menu-scroll-list > li');
      var gnbItem = $('.gnb-menu > li');
      var menuScrollHT = $('.menu-header').outerHeight(true);
      var i = 0;
      $("body").on('click', '.menu-scroll-list > li', function (event) {
        event.preventDefault();
        $('a', this).addClass('on').closest('li').siblings('li').find('a').removeClass('on');
        if (i < $(this).index()) {
          var gnbItemTop = gnbItem.eq($(this).index()).offset().top + $('#mgnb').scrollTop();
          var gnbItemLeft = menu.eq($(this).index()).offset().left + $('.menu-scroll').scrollLeft() - $window.width() / 15;
          $('#mgnb').stop().animate({
            scrollTop: gnbItemTop - menuScrollHT
          }, 500);
          $('.menu-scroll').stop().animate({
            scrollLeft: gnbItemLeft
          }, 500);
        } else {
          var _gnbItemTop = gnbItem.eq($(this).index()).offset().top + $('#mgnb').scrollTop();
          var _gnbItemLeft = menu.eq($(this).index()).offset().left + $('.menu-scroll').scrollLeft() + $window.width() / 15;
          if ($(this).index() <= 3) {
            $('#mgnb').stop().animate({
              scrollTop: _gnbItemTop - menuScrollHT
            }, 500);
            $('.menu-scroll').stop().animate({
              scrollLeft: 0
            }, 500);
          } else {
            $('#mgnb').stop().animate({
              scrollTop: _gnbItemTop - menuScrollHT
            }, 500);
            $('.menu-scroll').stop().animate({
              scrollLeft: _gnbItemLeft
            }, 500);
          }
        }
        i = $(this).index();
      });
    }
  };
  var offerBtn = {
    init: function init() {
      this.offerBtn();
    },
    offerBtn: function offerBtn() {
      $('.total-wrap .btn-offering').on('click', function () {
        if ($(this).hasClass('on')) {
          $(this).removeClass('on');
          $('.library-menu').removeClass('on');
          bodyFix.off();
        } else {
          $(this).addClass('on');
          $('.library-menu').addClass('on');
          bodyFix.on();
        }
      });
    }
  };
  var loadMore = {
    init: function init() {
      this.loadMore();
    },
    loadMore: function loadMore() {
      var windowWidth = $(window).width();
      if (windowWidth < 1025 && $('.load-more .flexLayout_08 li').length > 8 == true) {
        $('.load-more > .flexLayout_08 li').css('display', 'none');
        $('.load-more > .flexLayout_08 li').slice(0, 8).show();
        $('.load-btn').css('display', 'block');
        $('.load-btn').on('click', function () {
          $('.load-more > .flexLayout_08 li').slice().show();
          $('.load-btn').css('display', 'none');
        });
      } else {
        $('.load-more > .flexLayout_08 li').css('display', 'block');
        $('.load-btn').css('display', 'none');
      }
    }
  };

  // const videoLayer = { 
  //     init() {
  //         this.videoLayer();
  //     },
  //     videoLayer() {
  //         $(".videoWrap").click(function() {
  //             $(".video_layer_popup").addClass("play"),
  //             $(".video_layer_popup .video-wrapper").remove(),
  //             $(".video_layer_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='closeIcon'></div>")
  //             bodyFix.on();
  //         }),
  //         $('.video_layer_popup').on('click', '.closeIcon', function() {
  //             $(".video_modal_popup .video-wrapper").remove(),
  //             $(".video_layer_popup").removeClass("play");
  //             $(".video-wrapper iframe").attr('src', '');
  //             bodyFix.off();
  //         });
  //     }
  // }

  uiCommon.init();
  return uiCommon;
}(window.uiCommon || {}, $(window), $('body'));