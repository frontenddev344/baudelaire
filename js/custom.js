$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".close-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });

   

    // $(".read-more-toggle").click(function () {
    //   const $btn = $(this);
    //   const isOpen = $btn.data("open") || false;
    
    //   $btn.text(isOpen ? "Read More" : "Read Less");
    //   $btn.data("open", !isOpen);
      
    //   $(".read-more-text").slideToggle();
    // });
    
    
  });

const sellerSwiper = new Swiper(".sellerSwiper",{
    slidesPerView:4.5,
    spaceBetween:16,
    speed:500,
    loop:true,
    navigation:{
        nextEl:".seller-next",
        prevEl:".seller-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1.2,
            spaceBetween:16,
        },
        576:{
            slidesPerView:2.2,
            spaceBetween:20,
        },
        768:{
            slidesPerView:3,
            spaceBetween:20,
        },
        992:{
            slidesPerView:4,
            spaceBetween:20,
        },
        1200:{
            slidesPerView:4.6,
            spaceBetween:20,
        }
    }
});