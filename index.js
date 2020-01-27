window.addEventListener("scroll", function() {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * -0.5 + "px)";
  this.console.log(scrollPosition * -0.5 );
});
