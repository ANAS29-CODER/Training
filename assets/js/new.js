
/* slider main  */

/*
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
*/



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

        rtl: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
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

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });


    $('.fruits').slick({
        rtl: true,
        prevArrow: '.arrow-prev2',
        nextArrow: '.arrow-next2',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
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

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    $('.test').slick({

        rtl: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
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

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

});








/*

$('.prod').on("click", function(){
  console.log('open');
  $('.main').css('opacity','.1');
   $('.add-pro-to-cart').css('opacity','1');
$('.add-pro-to-cart').css('display', 'unset');
});
 
*/







$('.plus span').on("click", function () {
    var as = document.getElementsByClassName("number").value;
    console.log(as);

});


$('.heads .fa').on("click", function () {

    if ($(this).css('color') == 'rgb(209, 206, 206)') {
        $(this).css('color', 'red');

    } else {
        $(this).css('color', '#d1cece');
    }
});




$('.addcart').on("click", function () {
    console.log('asd');
    $('.opacity-all').css('display', 'unset');
    $('.add-pro-to-cart').css('display', 'unset');


});

$('.close-pro').on("click", function () {
    $('.add-pro-to-cart').css('display', 'none');
    $('.opacity-all').css('display', 'none');

});

var width = window.innerWidth;

$('.close-ul').click(function () {
    $('.navbar-collapse').removeClass('show')
    $('.navbar-collapse').css('animation', 'closeul .3s ease-in');



});


$('.navbar-toggler').click(function () {
    console.log('toggler');


    if (width == '991') {
        $('.navbar-collapse').addClass('sticky-top');


    }
});




$('.arrows').click(function () {

    $(this).css('outline', 'none');

});


$('.plus-minus button').click(function () {

    $(this).css('outline', 'none');
    $(this).css('border', 'none');

});


$('.plus-minus plus').click(function () {

    let vd = document.getElementsByClassName('number');



});
/*
function my_code(){
  
    console.log('its loading');
    }
    
    window.onload=my_code();*/
    $(document).ready(function() {
        console.log($.ajax);
      });


$(document).ready(function () {

    $('#sas').html(make_skeleton());


    /*setTimeout(function(){
        
        load_content(5);
      

    },200);*/


    function make_skeleton() {


        var output = '<div class="ph-item test">';
        for (var i = 1; i <= 5; i++) {

            output += '<div class="ph-col-12 prod">';
            output += '<div class="ph-picture "></div>';
            output += '<div class="ph-row">';
            output += '<div class="ph-col-6 ph-price"></div>';
            output += '<div class="ph-col-8 ph-description"></div>';
            output += '<div class="ph-col-10 ph-buttons"></div>';
            output += '</div>';
            output += '</div>';

        };
        output += '</div>';

        return output;

    }


/*
    function load_content(time){

        $.ajax({

            url:"././sas.php",
            methode:"POST",
            data:time,
            success:function (data)
            {
                $('#sas').html(data);
            }
        });
    }
    */


});


