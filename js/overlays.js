$(document).ready(function()
{
    
       $('body').css('background-image', 'url(img/bck4.jpg)').fadeTo('slow', 100);



    $("#main_menu span").click(function(ev)
    { 
           
          $("#overlay_main_menu").animate({"left":"0"}, 1000);
    

    });

    $("#close_main_menu").click(function()
    {

      $("#overlay_main_menu").animate({"left":"-100%"}, 1000);
    

    //  $("#overlay_main_menu").hide();
    });


/*
    function moveLeft() {
      if(current > 0)
      {
         if(!$('.cbp-fwprev').is(":visible"))
        {
          $('.cbp-fwprev').show();
         
        }
        $('#listImg  ul').animate({
             marginLeft: '+=539'
        }, "slow" , function () {
           // $('#listImg  ul li:last-child').prependTo('#listImg  ul');
           // $('#listImg  ul').css('margin-left', '');
        });

        current--;
           if(current<8)
          $('.cbp-fwnext').show();
      }
      else
      {
           $('.cbp-fwprev').hide();
      }
    };*/

});