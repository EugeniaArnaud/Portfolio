$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').addClass("show")
        }
    })

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

    // toggle menu bars and x
    $('.menu-btn').click(function(){
        $('.navbar .content_nav').toggleClass("active");
        $('.navbar i').toggleClass("active");
    })
})




