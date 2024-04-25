const headerEl = document.querySelector(".header");
const btnTopEl = document.querySelector("#scroll-top");
const scrollEl = document.querySelector(".scroll");

let previousScrollPosition = window.pageYOffset;

function getHeaderP() {
  const currentScrollPosition = +window.pageYOffset.toFixed();
  scrollEl.textContent = currentScrollPosition + "px";

  if (scrollY >= 50) {
    headerEl.style.padding = `20px 0`;
    btnTopEl.style.transform = `scale(1)`;
  } else if (scrollY <= 50) {
    headerEl.style.padding = `50px 0`;
    btnTopEl.style.transform = `scale(0)`;
  }

  if (currentScrollPosition >= 200) {
    if (currentScrollPosition > previousScrollPosition) {
      headerEl.style.top = "-200px";
    } else {
      headerEl.style.top = "0";
    }
  }

  previousScrollPosition = currentScrollPosition;
}

function scrollTop() {
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", getHeaderP);
btnTopEl.addEventListener("click", scrollTop);
