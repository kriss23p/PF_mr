'use strict';

$(function() {
	
	AOS.init();
    // $('map').imageMapResize();

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        slidesPerView: 3,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        touchRatio: 0,
    });
    
    
    var swiper = new Swiper('.keyvisual_video_wrap', {
        touchRatio:1,
        effect:"fade",
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: galleryThumbs,
            clickable: false,
        },
        navigation: {
            nextEl: ".video_next",
            prevEl: ".video_prev",
        },
        ally: {
            prevSlideMessage: '이전 슬라이드',
            nextSlideMessage: '다음 슬라이드',
            prevLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.',
        },
        on: {
                init: function () {  
                var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
                currentVideo.trigger('play');
            },
            slideChangeTransitionStart: function () {
                $('.txt_title').hide(0);
                $('.txt_subtitle').hide(0);
                $('.txt_con').hide(0);
                $('.txt_title').removeClass('aos-init').removeClass('aos-animate');
                $('.txt_subtitle').removeClass('aos-init').removeClass('aos-animate');
                $('.txt_con').removeClass('aos-init').removeClass('aos-animate');
                $('.gallery-thumbs').find('.swiper-slide').eq(0).removeClass('swiper-slide-thumb-active'); //메인 첫번째 프로그래스바 화면 로드시 작동
            },
            slideChangeTransitionEnd: function () {
                $('.txt_title').show(0);
                $('.txt_subtitle').show(0);
                $('.txt_con').show(0);
                AOS.init();
            },
        },
        
    });

    var sliderVideos = $(".swiper-slide video");

    swiper.on('slideChange', function () {
        sliderVideos.each(function( index ) {
            this.currentTime = 0;
            this.pause();
        });

        var prevVideo =  $("[data-swiper-slide-index=" + this.previousIndex + "]").find("video");
        var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
        prevVideo.trigger('stop');
        currentVideo.trigger('play');
    });

    $('.main-video-control').on('click', function() {
        if($(this).hasClass("on")) {
            $(this).toggleClass("on");
            $(this).html("정지");
            swiper.autoplay.start();
        } else {
            $(this).addClass("on");
            $(this).html("재생");
            swiper.autoplay.stop();
        }
        return false;
    });

    
    //피드백 스와이프
    let swiperTopNum = $('.feedback_view').find('.swiper-slide');
	let swiperSubNum = $('.feedback_thumb').find('.swiper-slide');

    let feedbackSlides = new Swiper('.feedback_view', {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: { 
            el: ".swiper-pagination", 
            clickable: true, 
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        loopedSlides: swiperTopNum.length,
        observer: true,
        observeParents: true,
    });

    let feedbackThums = new Swiper('.feedback_thumb', {
        spaceBetween: 20,
        slidesPerView: 3.5,
        controller: {
            control: feedbackSlides,
        },
        loop:true,
        loopedSlides: swiperSubNum.length,
        slideToClickedSlide : true,
        observer: true,
        observeParents: true,
        breakpoints: {
            2000: {
                slidesPerView: 4
            },
        }
    });

    //피드백 스와이프 연동
    feedbackSlides.controller.control = feedbackThums;
    feedbackThums.controller.control = feedbackSlides;

    var media_swiper = new Swiper('.main-media-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 600,
        touchRatio: 1,
        threshold: 0,
        freeMode: true,
        allowTouchMove: true,
        loop: true,
        navigation: {
            nextEl: ".media-button-next",
            prevEl: ".media-button-prev",
        },
        pagination: {
            el: ".media-pagination",
            type: "progressbar",
        },
        observer: true,
        observeParents: true,
    });


 
    //스마트팩토리 공정
    let triggerHeight2 = $("#trigger_02").height();


    let miracomServerPcController = new ScrollMagic.Controller()

    let miracomServerPcScene = new ScrollMagic.Scene({
        triggerElement: "#trigger_03",
        triggerHook: 0,
        duration: "120%",
    })
    // .setTween(miracomServerPcTween)
    .setPin("#trigger_03")
    .addTo(miracomServerPcController);


    var offset = $("#trigger_03").offset();
    var faHeight = $(".factory_box img").height();
    var HeightOne = $("#trigger_02").height() + triggerHeight2;
    var HeightTwo = $("#trigger_03").offset();

    $(".btnHomeServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secA navOn customer_server_box");});
    $(".btnOneServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secB navOn customer_server_box");});
    $(".btnTwoServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secC navOn customer_server_box")});
    $(".btnThreeServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secD navOn customer_server_box")});
    $(".btnFourServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secE navOn customer_server_box")});
    $(".btnFiveServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secF navOn customer_server_box")});
    $(".btnSixServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secG navOn customer_server_box")});
    $(".btnSevenServer").on("click", function(){$(".customer_server_box").removeClass().addClass("secH navOn customer_server_box");});


    $(window).on("resize",function(){
        var miracomServerPcController = new ScrollMagic.Controller()
    });

    //피드백 스와이프
    let feedController = new ScrollMagic.Controller();

    let feedScene = new ScrollMagic.Scene({
        triggerElement: '#trigger_04',
        triggerHook: 0,
        duration: '120%',
    })
    .setPin('#trigger_04')
    .addTo(feedController)

    let feedbackSlidesMo = new Swiper('.feedback_mo_slide', {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: { 
            el: ".swiper-pagination", 
            clickable: true, 
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        observer: true,
        observeParents: true,
        resizeObserver: true,
    });

    var miracomServer = new Swiper(".miracom_server_thumbs", {
        spaceBetween:16,
        slidesPerView: "auto",
        slidesPerGroup: 2,
        freeMode: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        allowTouchMove: true,
        breakpoints: {
            400: {
                spaceBetween: 12,
                slidesPerGroup: 2,
            }
        }
    });
    
    var miracomServer2 = new Swiper('.miracom_server_slider',{
        autoHeight:true,
        spaceBetween: 16,
        observer: true,
        observeParents: true,
        touchStartPreventDefault: false,
        thumbs: {
            swiper: miracomServer,
        },
        breakpoints: {
            
        }
    });

    $('img[usemap]').rwdImageMaps();

    //로고 스와이프 
    let thisSlide,
        autoPlayBtn,
        autoPlayState;

    let logoSwiper = new Swiper('.logo_container', {
        direction: 'horizontal',
        speed: 600,
        touchRatio: 1,
        freeMode: true,
        allowTouchMove: true,
        loop: true,
        spaceBetween:76,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 1000,
        },
        on: {
            init: function () {
                thisSlide = this;
                autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
                autoPlayBtn.addEventListener('click', (e) => {
                    autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                    if (autoPlayState === 'false') {
                        autoPlayBtn.setAttribute('aria-pressed', 'true');
                        autoPlayBtn.setAttribute('aria-label', '재생');
                        thisSlide.autoplay.stop();
                    } else if (autoPlayState === 'true') {
                        autoPlayBtn.setAttribute('aria-pressed', 'false');
                        autoPlayBtn.setAttribute('aria-label', '정지');
                        thisSlide.autoplay.start();
                    };
                });
            },
        },                 
    });
    $()


    if($(window).width() < 1024) {
        
        // const serverMobile = $("#miracom_server_mobil .customer_server_video")[0];
        // let controller1 = new ScrollMagic.Controller()
        // let scene1 = new ScrollMagic.Scene({
        //     triggerElement: "#miracom_server_mobil .customer_server_video",
        //     triggerHook: 0.2,
        // })
        // .setClassToggle(serverMobile, "hide")
        // .setPin("#miracom_server_mobil .customer_server_video")
        // .addTo(controller1);
        // // .addIndicators()
    }    
    
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(1)').html('02<em>스마트팩토리 컨설팅</em>');
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(2)').html('03<em>MES 구축</em>');
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(3)').html('04<em>전사자원관리(ERP)</em>');
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(4)').html('05<em>설비자동화</em>');
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(5)').html('06<em>제조물류자동화</em>');
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(6)').html('07<em>IT 인프라</em>');
    $('.factory_slider_wrap .swiper-pagination').children('.swiper-pagination-bullet:eq(7)').html('08<em>IT 운영(ITO)</em>');



});
