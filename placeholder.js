
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