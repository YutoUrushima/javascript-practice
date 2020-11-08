"use strict";window.addEventListener("load",function(){headerShow(),kvShow(),KVinit()});var stalker=document.getElementById("mouse-stalker");document.addEventListener("mousemove",function(e){stalker.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"});var siteTitle=document.querySelector(".header-title");function headerShow(){gsap.to(siteTitle,3,{y:0,delay:1,ease:Power4.easeOut,opacity:1})}var headerMenu=document.querySelectorAll(".js-hover");headerMenu.forEach(function(e){e.addEventListener("mouseover",function(){gsap.to(e,{color:"#87cefa",duration:.3,ease:Power4.easeIn,onStart:function(){e.innerHTML="click"}})}),e.addEventListener("mouseleave",function(){gsap.to(e,{color:"#df5656",duration:.3,ease:Power4.easeIn,onStart:function(){e.innerHTML="reverse"}})}),console.log(e)});var kvText=document.querySelector(".kv-text_content");function kvShow(){gsap.to(kvText,3,{y:0,delay:2,ease:Power2.easeOut,opacity:1})}function KVinit(){new Swiper(".kv-swiper-container",{direction:"horizontal",loop:!0,speed:1e3,centeredSlides:!0,effect:"coverflow",autoplay:{delay:7e3,stopOnlastSlide:!1,disableOnInteraction:!1}})}function contentshow(e){gsap.to(e,{duration:1,opacity:1,delay:.5,ease:Power1.easeOut,y:-20})}gsap.set(kvText,{y:40,opacity:0});var targets=document.querySelectorAll(".js-scroll"),callback=function(e,t){e.forEach(function(e){e.isIntersecting&&(contentshow(e.target),t.unobserve(e.target))})},options={root:null,rootMargin:"0px",threshold:0},observer=new IntersectionObserver(callback,options);targets.forEach(function(e){return observer.observe(e)});