$(function(){

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrolloffset = $(window).scrollTop();

  // fixed Header

  checkScroll(scrolloffset);

  $(window).on("scroll", function() {
    scrolloffset = $(this).scrollTop();
    checkScroll(scrolloffset);
  });

  function checkScroll(scrolloffset) {

    if(scrolloffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass('fixed');
   }
  }

  // smoth Scroll

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data("scroll"),
        blockoffset = $(blockId).offset().top;

    $("#nav a").removeClass('active')
    $this.addClass('active');

    $("html, body").animate({
      scrollTop: blockoffset
    });
  });

  // nav toggle
  $("#nav__toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass('active');
    $("#nav").toggleClass('active');

  });

  $("#nav").on("click", function(event){
    $("#nav").removeClass('active');
  });

  // collapse
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this),
        blockId = $this.data("collapse");
    $this.toggleClass('active');
  });
  // slider
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1

  });
});
