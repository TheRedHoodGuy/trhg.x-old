window.addEventListener("scroll", function () {
  const fadeInElements = document.querySelectorAll("fadeinOne");
  fadeInElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Check if element is in viewport
    if (
      elementPosition < viewportHeight &&
      elementPosition >= -element.offsetHeight
    ) {
      element.classList.add("animate"); // Add class to trigger animation
    } else {
      element.classList.remove("animate"); // Remove class if not in viewport
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }
  });
});

function getCounting(val) {
  alert("Iw");
  thecount = 0;
  for (i = 0; i <= val; i++) {
    document.getElementById("count").innerHTML = thecount += 1;
  }
}
