
/* slider main  */


$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function () {

    var WindowWidth = $(window).width();
    var SlideCount = $('#slides li').length;
    var SlidesWidth = SlideCount * WindowWidth;

    $.global.item = 0;
    $.global.total = SlideCount;

    $('.slide').css('width', WindowWidth + 'px');
    $('#slides').css('width', SlidesWidth + 'px');

    $("#slides li:nth-child(1)").addClass('alive');

    $('#left').click(function () { Slide('back'); });
    $('#right').click(function () { Slide('forward'); });

});

function Slide(direction) {

    if (direction == 'back') { var $target = $.global.item - 1; }
    if (direction == 'forward') { var $target = $.global.item + 1; }

    if ($target == -1) { DoIt($.global.total - 1); }
    else if ($target == $.global.total) { DoIt(0); }
    else { DoIt($target); }


}

function DoIt(target) {

    var $windowwidth = $(window).width();
    var $margin = $windowwidth * target;
    var $actualtarget = target + 1;

    $("#slides li:nth-child(" + $actualtarget + ")").addClass('alive');

    $('#slides').css('transform', 'translate3d(-' + $margin + 'px,0px,0px)');

    $.global.item = target;

    $('#count').html($.global.item + 1);

}



//end slider main //

$('.navbar-nav .nav-item ').click(function () {

    $(this).addClass('active').siblings().removeClass('active');


});



$('.products .parts a ').click(function () {

    $('.products .description-review >div').css('display', 'none');

    $(this).addClass('active').siblings().removeClass('active');

    var a = $(this).attr('href');
    var id = a.slice(1);
    var element = document.getElementById(id);
    element.style.display = "unset";






});


$('.login .passw img ').click(function () {

    var x = document.getElementById('show-pass');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password'
    }
});

$('.sliders').slick({
    rtl: true,
});


$(document).ready(function () {

$('.ds').slick({
    rtl:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
   
 
  });
});

$(document).ready(function () {

  $('.fruits').slick({
      rtl:true,
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
     
   
    });
  });






