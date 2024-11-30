"use strict";$(function(){AOS.init();var r,i,t,e=new Swiper(".gallery-thumbs",{observer:!0,observeParents:!0,spaceBetween:0,slidesPerView:3,freeMode:!1,watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!0,touchRatio:0}),s=new Swiper(".keyvisual_video_wrap",{touchRatio:1,effect:"fade",loop:!0,observer:!0,observeParents:!0,autoplay:{delay:4e3,disableOnInteraction:!1},thumbs:{swiper:e,clickable:!1},navigation:{nextEl:".video_next",prevEl:".video_prev"},ally:{prevSlideMessage:"이전 슬라이드",nextSlideMessage:"다음 슬라이드",prevLabelMessage:"총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다."},on:{init:function(){$("[data-swiper-slide-index="+this.realIndex+"]").find("video").trigger("play")},slideChangeTransitionStart:function(){$(".txt_title").hide(0),$(".txt_subtitle").hide(0),$(".txt_con").hide(0),$(".txt_title").removeClass("aos-init").removeClass("aos-animate"),$(".txt_subtitle").removeClass("aos-init").removeClass("aos-animate"),$(".txt_con").removeClass("aos-init").removeClass("aos-animate"),$(".gallery-thumbs").find(".swiper-slide").eq(0).removeClass("swiper-slide-thumb-active")},slideChangeTransitionEnd:function(){$(".txt_title").show(0),$(".txt_subtitle").show(0),$(".txt_con").show(0),AOS.init()}}}),o=$(".swiper-slide video"),e=(s.on("slideChange",function(){o.each(function(e){this.currentTime=0,this.pause()});var e=$("[data-swiper-slide-index="+this.previousIndex+"]").find("video"),r=$("[data-swiper-slide-index="+this.realIndex+"]").find("video");e.trigger("stop"),r.trigger("play")}),$(".main-video-control").on("click",function(){return $(this).hasClass("on")?($(this).toggleClass("on"),$(this).html("정지"),s.autoplay.start()):($(this).addClass("on"),$(this).html("재생"),s.autoplay.stop()),!1}),$(".feedback_view").find(".swiper-slide")),n=$(".feedback_thumb").find(".swiper-slide"),e=new Swiper(".feedback_view",{spaceBetween:0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,loopedSlides:e.length,observer:!0,observeParents:!0}),n=new Swiper(".feedback_thumb",{spaceBetween:20,slidesPerView:3.5,controller:{control:e},loop:!0,loopedSlides:n.length,slideToClickedSlide:!0,observer:!0,observeParents:!0,breakpoints:{2e3:{slidesPerView:4}}}),n=((e.controller.control=n).controller.control=e,new Swiper(".main-media-container",{direction:"horizontal",slidesPerView:"auto",spaceBetween:20,speed:600,touchRatio:1,threshold:0,freeMode:!0,allowTouchMove:!0,loop:!0,navigation:{nextEl:".media-button-next",prevEl:".media-button-prev"},pagination:{el:".media-pagination",type:"progressbar"},observer:!0,observeParents:!0}),$("#trigger_02").height(),new ScrollMagic.Controller),e=(new ScrollMagic.Scene({triggerElement:"#trigger_03",triggerHook:0,duration:"120%"}).setPin("#trigger_03").addTo(n),$("#trigger_03").offset(),$(".factory_box img").height(),$("#trigger_02").height(),$("#trigger_03").offset(),$(".btnHomeServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secA navOn customer_server_box")}),$(".btnOneServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secB navOn customer_server_box")}),$(".btnTwoServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secC navOn customer_server_box")}),$(".btnThreeServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secD navOn customer_server_box")}),$(".btnFourServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secE navOn customer_server_box")}),$(".btnFiveServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secF navOn customer_server_box")}),$(".btnSixServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secG navOn customer_server_box")}),$(".btnSevenServer").on("click",function(){$(".customer_server_box").removeClass().addClass("secH navOn customer_server_box")}),$(window).on("resize",function(){new ScrollMagic.Controller}),new ScrollMagic.Controller),n=(new ScrollMagic.Scene({triggerElement:"#trigger_04",triggerHook:0,duration:"120%"}).setPin("#trigger_04").addTo(e),new Swiper(".feedback_mo_slide",{spaceBetween:0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,observer:!0,observeParents:!0,resizeObserver:!0}),new Swiper(".miracom_server_thumbs",{spaceBetween:16,slidesPerView:"auto",slidesPerGroup:2,freeMode:!0,watchSlidesProgress:!0,observer:!0,observeParents:!0,slideToClickedSlide:!0,allowTouchMove:!0,breakpoints:{400:{spaceBetween:12,slidesPerGroup:2}}}));new Swiper(".miracom_server_slider",{autoHeight:!0,spaceBetween:16,observer:!0,observeParents:!0,touchStartPreventDefault:!1,thumbs:{swiper:n},breakpoints:{}}),$("img[usemap]").rwdImageMaps(),new Swiper(".logo_container",{direction:"horizontal",speed:600,touchRatio:1,freeMode:!0,allowTouchMove:!0,loop:!0,spaceBetween:76,slidesPerView:"auto",slidesPerGroup:1,observer:!0,observeParents:!0,autoplay:{delay:1e3},on:{init:function(){r=this,(i=document.querySelector(".wrap-autoplay-control > button")).addEventListener("click",function(e){"false"===(t=i.getAttribute("aria-pressed"))?(i.setAttribute("aria-pressed","true"),i.setAttribute("aria-label","재생"),r.autoplay.stop()):"true"===t&&(i.setAttribute("aria-pressed","false"),i.setAttribute("aria-label","정지"),r.autoplay.start())})}}});$(),$(window).width(),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(1)").html("02<em>스마트팩토리 컨설팅</em>"),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(2)").html("03<em>MES 구축</em>"),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(3)").html("04<em>전사자원관리(ERP)</em>"),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(4)").html("05<em>설비자동화</em>"),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(5)").html("06<em>제조물류자동화</em>"),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(6)").html("07<em>IT 인프라</em>"),$(".factory_slider_wrap .swiper-pagination").children(".swiper-pagination-bullet:eq(7)").html("08<em>IT 운영(ITO)</em>")});