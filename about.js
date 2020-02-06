// let slideIndex = 0;

// imgCarousel = () => {
//   let i;
//   let slideShow = document.querySelector("slideshow");
//   for (let i = 0; i < slideShow.length; i++) {
//     slideShow[i].style.display = "none";
//   }
//   slideIndex += 1;
//   if (slideIndex > slideShow.length) {
//     slideIndex = 1;
//   }
//   slideShow[slideIndex - 1].style.display = "block";
//   setTimeout(imgCarousel, 2000);
// };

// imgCarousel();

//taken from w3 school
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let slideshow = document.getElementsByClassName("mySlides");
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slideshow.length) {
    slideIndex = 1;
  }
  slideshow[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
