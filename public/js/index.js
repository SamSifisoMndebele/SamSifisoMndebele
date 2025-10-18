// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// Back to top
const backTop = $(".btn-back_to_top");
$(window).scroll(function() {
    if($(document).scrollTop() > 400) {
        backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
        backTop.css('visibility', 'hidden');
    }
});
backTop.click(function() {
    $('html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});