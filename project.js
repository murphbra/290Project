<!-- this code is adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp -->

var pageIndex = 0;
carousel();

function carousel() {

  var i;
  var slides = document.getElementsByClassName("pageSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  pageIndex++;
  if (pageIndex > slides.length) {pageIndex = 1}
  slides[pageIndex-1].style.display = "block";
  setTimeout(carousel, 2000); 
}
function navSlides(n) {
    <!-- calls chooseSlides function and passes it current pageIndex +/- 1 when previous or next button is pressed on home page -->
  chooseSlides(pageIndex += n);
}

function chooseSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pageSlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {pageIndex = 1}
  if (n < 1) {pageIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[pageIndex-1].style.display = "block";
  //dots[pageIndex-1].className += " active";
}