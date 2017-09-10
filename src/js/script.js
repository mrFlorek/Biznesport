$(function() {

// NAVBAR CLASS TOGGLE

  $(".nav-button").click(function() {
    $(this).toggleClass("open");
    $(".nav-cont").toggleClass("slide");
  });

// SLIDER MECHANICS

var slider = document.querySelector(".slider");
var count = 0;
var x = 0;

$(".slider-btn").click(function(){
  $(".active").removeClass("active");
  $(this).addClass("active");
 x = $(this).attr("data-count");

  if (count < (x*100)) {
      nextSlider();
  }
  else{
      prevSlider();
  }



  setTimeout(function() {

    switch (x) {
      case "1":
        slider.style.left = "-" + 0 + "%";
        count = 0;
        break;
      case "2":
        slider.style.left = "-" + 100 + "%";
        count = 100;
        break;
      case "3":
        slider.style.left = "-" + 200 + "%";
        count = 300;
        break;
      case "4":
        slider.style.left = "-" + 300 + "%";
        count = 400;
        break;
      case "5":
        slider.style.left = "-" + 400 + "%";
        count = 500;
        break;
      case "6":
        slider.style.left = "-" + 500 + "%";
        count = 600;
        break;
    }

  },1000);


});

function nextPage() {

  if (count < 500) {
    nextSlider();
    setTimeout(function() {

      count += 100;
      slider.style.left = "-" + count + "%";
      var b = document.querySelector('.active').nextElementSibling;
      $(".active").removeClass("active");
      $(b).addClass("active");

    },1000);

  }else {
    prevSlider();
    setTimeout(function() {

      count = 0;
      slider.style.left = "-" + count + "%";
      var b = document.getElementsByClassName('slider-btn')[0];
      $(".active").removeClass("active");
      $(b).addClass("active");

    },1000);
  }

}
setInterval(function() {
  nextPage();
},50000);


function prevSlider() {
  var li = document.querySelectorAll(".header-container li");
  for (var i = 0; i < li.length; i++) {
  $(li[i]).addClass("slider-animation-prev");
  $(li[i]).on("animationend",function() {
    $(this).removeClass("slider-animation-prev");
  });
  }
}

function nextSlider() {
  var li = document.querySelectorAll(".header-container li");
  for (var i = 0; i < li.length; i++) {
  $(li[i]).addClass("slider-animation-next");
  $(li[i]).on("animationend",function() {
    $(this).removeClass("slider-animation-next");
  });
  }
}

// FORM




$("#form").submit(function (e) {

  $(this).validate({
    submitHandler: function() {
      document.getElementById('form-msg').innerHTML = "Successfully Sended, Thank You!";
    }
  });
  e.preventDefault();
});



// NAVBAR NAVIGATION
$(".portfolio-btn").click(function () {
  var nav = document.querySelector("header");
  $('html, body').animate({'scrollTop': nav.offsetTop},1000, 'swing');
});

$(".about-btn").click(function () {
  var nav = document.querySelector(".about");
  $('html, body').animate({'scrollTop': nav.offsetTop},1000, 'swing');
});
$(".getintouch-btn").click(function () {
  var nav = document.querySelector(".getintouch");
  $('html, body').animate({'scrollTop': nav.offsetTop},1000, 'swing');
});

});
