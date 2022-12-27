$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// plan 
$('.back-to-top').on('click', function(event) {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_part');
    }
    else {
         $('.navbar').removeClass('sticky_part');
    }
    });  



    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });