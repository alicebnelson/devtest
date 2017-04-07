$(document).ready(function() {

console.log("Welcome to My Portfolio!");

  var vid = document.getElementById("bgvid");
  var pauseButton = document.querySelector("#logo button");
  var $animation_elements = $(".skillbar");
  var $window = $(window);
  $window.on('scroll', check_if_in_view);
  $window.on('scroll resize', check_if_in_view);
  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function()
  {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
  });


  pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "Pause";
    } else {
      vid.pause();
      pauseButton.innerHTML = "Paused";
    }
  })


  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
            $(this).find('.skillbar-bar').animate({
    			width:$(this).attr('data-percent')
    		},6000);
      }
    });
  }

  $(".circleBorder").on("click",function(){
    var id=$(this).attr("id");
    switch(id){

      case "dashboadrd":
        $("#myModal20").modal("show");
        break;
      case "SHApp":
        $("#myModal21").modal("show");
        break;
      case "erd":
        $("#myModal22").modal("show");
        break;
      case "penterra":
        $("#myModal23").modal("show");
        break;

      case "carolpersona":
        $("#myModal13").modal("show");
        break;
      case "sitemap":
        $("#myModal14").modal("show");
        break;
      case "annotaions":
        $("#myModal15").modal("show");
        break;
      case "demoReel":
        $("#myModal16").modal("show");
        break;
        // below is the old code.
        case "persona":
          $("#myModal4").modal("show");
          break;
        case "appFlow":
          $("#myModal3").modal("show");
          break;
        case "infoArch":
          $("#myModal2").modal("show");
          break;
        case "wireFrames":
          $("#myModal1").modal("show");
          break;



          //rearranging code above
      case "dishwasher":
        $("#myModal5").modal("show");
        break;
      case "data":
        $("#myModal6").modal("show");
        break;
      case "email1":
        $("#myModal7").modal("show");
        break;
      case "email2":
        $("#myModal8").modal("show");
        break;
      case "banner":
        $("#myModal9").modal("show");
        break;
      case "certificateLogo":
        $("#myModal10").modal("show");
        break;
      case "cattire":
        $("#myModal11").modal("show");
        break;
      case "signup":
        $("#myModal12").modal("show");
        break;
    }


  });


});
