$('#switcher1').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3
});
$('#switcher2').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3
});
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 72) sticky.css("background", "#1a3163");
    else sticky.css("background", "transparent");
});