/* ----------------------------- jQuery AJAX GET Function for Header external file-------------------------------------*/
$(document).ready(function(){
    $.get("header.html", function (dataH, statusH) {
        $("#header").html(dataH);
        //console.warn(statusH);
      })
})
/* ----------------------------- jQuery AJAX GET Function for Footer external file -------------------------------------*/
$(document).ready(function(){
    $.get("footer.html", function (dataF, statusF) {
        $("#footer").html(dataF);
        //console.warn(statusF);
      })
})
/* ----------------------------- jQuery AJAX GET API URL-------------------------------------*/
$(document).ready(function () {
    var url =
        "http://api.flickr.com/services/feeds/photos_public.gne?" +
        "format=json&jsoncallback=?&tags=waterfall,yosemite";
    $.getJSON(url, function(data){
        var html = "";
        $.each(data.items, function(i, item){
            html += "<div class='ajaxDiv';>"
            html += "<h2 class='ajaxTitle';>" + item.title + "</h2>";
            html += "<img class='ajaxImg'; src=" + item.media.m + ">";
            html += "<p></p>";
            html += "</div>";
        });
        $("#recentProjects").html(html);
        }); 
});
/* ---------------------------- Load More Button ---------------------------------------- */
/*let currentItem = 3;
function loadMoreFunc() {
    let loadMoreBtn = document.querySelector("#loadMoreBtn");
        let boxes = [...document.querySelectorAll('.ajaxDiv')];
        for (let q = currentItem; q < currentItem+3; q++) {
            boxes[q].style.display = "block";    
        }
        document.querySelectorAll(".recentProjectsDiv .recentProjects").style.display = "block";
        currentItem += 3;
}*/



   
/* ------------------------------------- Mobile Header ---------------------------------- */
function mobileHeaderFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* ---------------------- jQuery Form Plugins -----------------------------------------------*/
$(document).ready(function(){
    var country = [
        "United Kingdom",
        "United States",
        "Germany",
        "Japan",
        "China",
        "Danmark",
        "Turkey",
        "Italy"
    ];
    
    $("#country").autocomplete({
        source: country
    });
})

$( "#birthday" ).datepicker();

/* --------------------------------------------- Match Height ----------------------------------*/
$(document).ready(function(){
    $('.services_box .single_box').matchHeight();
})




/* ------------------------------------------------------ CAROUSEL ---------------------------------------------------- */
(function($) {
  // This is the connector function.
  // It connects one item from the navigation carousel to one item from the
  // stage carousel.
  // The default behaviour is, to connect items with the same index from both
  // carousels. This might _not_ work with circular carousels!
  var connector = function(itemNavigation, carouselStage) {
      return carouselStage.jcarousel('items').eq(itemNavigation.index());
  };

  $(function() {
      // Setup the carousels. Adjust the options for both carousels here.
      var carouselStage      = $('.carousel-stage').jcarousel();
      var carouselNavigation = $('.carousel-navigation').jcarousel();

      // We loop through the items of the navigation carousel and set it up
      // as a control for an item from the stage carousel.
      carouselNavigation.jcarousel('items').each(function() {
          var item = $(this);

          // This is where we actually connect to items.
          var target = connector(item, carouselStage);

          item
              .on('jcarouselcontrol:active', function() {
                  carouselNavigation.jcarousel('scrollIntoView', this);
                  item.addClass('active');
              })
              .on('jcarouselcontrol:inactive', function() {
                  item.removeClass('active');
              })
              .jcarouselControl({
                  target: target,
                  carousel: carouselStage
              });
      });

      // Setup controls for the stage carousel
      $('.prev-stage')
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .jcarouselControl({
              target: '-=1'
          });

      $('.next-stage')
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .jcarouselControl({
              target: '+=1'
          });

      // Setup controls for the navigation carousel
      $('.prev-navigation')
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .jcarouselControl({
              target: '-=1'
          });

      $('.next-navigation')
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .jcarouselControl({
              target: '+=1'
          });
  });
})(jQuery);