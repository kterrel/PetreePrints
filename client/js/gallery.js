var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  console.log("plusslides: " + n);
  showSlides(slideIndex += n);
}

function showSlides(n) {
  console.log("showSlides: " + n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  if (n > slides.length) {
    slideIndex = 1;
    console.log("n>slides.length");
  } 
  if (n < 1) {
    slideIndex = slides.length;
    console.log("n<1");
  }
  console.log("slides.length: " + slides.length);
  for (i = 0; i < slides.length; i++) {
      
      slides[i].style.display = "none"; 
  }

  console.log("new n: " + n);
  /*slides[slideIndex-1].style.clear = "both";*/
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].style.opacity = "1";
}