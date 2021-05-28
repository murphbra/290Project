//this code is based on code found at: "https://www.w3schools.com/howto/howto_js_slideshow.asp" 

var pageIndex = 0;
carousel();

function carousel() {
    // iterates through slides, setting their display type to "none" so a single slide can be selected to display
  var i;
  var slides = document.getElementsByClassName("pageSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  pageIndex++;
  if (pageIndex > slides.length) {pageIndex = 1}
  // sets current slide display type to "block". utilizes setTimeout() to call carousel() again in 3 seconds
  slides[pageIndex-1].style.display = "block";
  setTimeout(carousel, 3000); 
}

function navSlides(n) {
    // calls chooseSlides function and passes it current pageIndex +/- 1 when previous or next button is pressed on home page
  chooseSlides(pageIndex += n);
}

function chooseSlides(n) {
    // iterates through slides setting their display type to "none" so they are not displayed except for the slide indicated by pageIndex which is currently selected
  var i;
  var slides = document.getElementsByClassName("pageSlides");
  if (n > slides.length) {pageIndex = 1}
  if (n < 1) {pageIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[pageIndex-1].style.display = "block";
}