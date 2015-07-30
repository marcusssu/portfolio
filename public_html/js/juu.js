$(document).ready(function() {

    $(".clickable_image").click(function() {


        console.log("clicked");
        // $(".popout").show();
        // $(".popout").attr("opacity","1");
        // setTimeout(function() {
        // $(".popout").fadeIn(100);
        $(".popout").css("display","block");
        setTimeout(function() {
        $(".popout").css("opacity","1");
      }, 1);
          // $('.popout').addClass('show_popout');
        // }, 100);
        $("body").css("overflow", "hidden");
    });
    $(".popout").click(function() {

      // $(".popout").fadeOut();
      $(".popout").css("opacity","0");
      $("body").css("overflow", "scroll");
      setTimeout(function() {
        $(".popout").css("display","none");
      }, 500);
    });
});
