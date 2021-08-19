$(document).ready(function(){
  var counter = document.querySelector(".percent");

  function progress() {
      var windowScrollTop = $(window).scrollTop();
      var docHeight = $(document).height();
      var windowHeight = $(window).height();
      var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

      var $bgColor = progress > 99 ? "#fff" : "#fff";
      var $textColor = progress > 99 ? "#fff" : "#333";

      $(".counter__scroll")
          .text(Math.round(progress) + "%")
          .css({ color: $textColor });

      $(".fill")
          .height(progress + "%")
          .css({ backgroundColor: $bgColor });
  }
  progress();
  $(document).on("scroll", progress);
});



$(document).ready(function(){
  var t1 = new TimelineMax({ paused: true });

  t1.to(".nav-container", 1.5, {
    left: 0,
    ease: Expo.easeInOut,
  });

  t1.staggerFrom(
    ".menu > div",
    1,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.4"
  );

  t1.staggerFrom(
    ".socialsxd",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.4",
    "-=0.6"
  );

  t1.reverse();
  $(document).on("click", ".menu-open", function () {
    t1.reversed(!t1.reversed());
  });
  $(document).on("click", ".menu-close", function () {
    t1.reversed(!t1.reversed());
  });
  $(document).on("click", ".menu__item-link", function () {
    t1.reversed(!t1.reversed());
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}