//to slow down the video playspeed
var vid = document.getElementById("background");
vid.playbackRate = 0.4;

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  if (n == 1) {
    document.getElementById("under_bar").style.marginLeft = "33%";
  } else if (n == 2) {
    document.getElementById("under_bar").style.marginLeft = "47%";
  } else if (n == 3) {
    document.getElementById("under_bar").style.marginLeft = "61%";
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
