document.addEventListener('DOMContentLoaded', function() {
    const logo1 = document.querySelector('.logo-1');
    const logo2 = document.querySelector('.logo-2');
    const logo3 = document.querySelector('.logo-3');
    let check = 1;

    function loopLogos() {
        if (check === 1 ) {
            logo1.style.opacity = '1';
            logo2.style.opacity = '0';
            logo3.style.opacity = '0';
        } else if (check === 2) {
            logo1.style.opacity = '0';
            logo2.style.opacity = '0';
            logo3.style.opacity = '1';
        } else if (check === 3) {
            logo1.style.opacity = '0';
            logo2.style.opacity = '1';
            logo3.style.opacity = '0';
            check = 0;
        }
        check++;
    }

    setInterval(loopLogos, 4000);
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3300); 
}