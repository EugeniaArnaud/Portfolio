$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
$('.navbar').addClass("sticky")
        }else {
            $('.navbar').removeClass("sticky")
        }
    })
    // toggle menu bars and x
    $('.menu-btn').click(function(){
        $('.navbar .content_nav').toggleClass("active");
        $('.navbar i').toggleClass("active");
    })
})