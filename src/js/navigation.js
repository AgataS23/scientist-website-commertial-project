console.log(`Hello ;)`);


const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector("#nav-ul");
const hamburgerIcon = document.querySelector(".bars");
const closeIcon = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("show");
  if (hamburger.classList.contains("show")) {
    hamburgerIcon.classList.add("hide");
    closeIcon.classList.remove("hide");
  } else {
    hamburgerIcon.classList.remove("hide");
    closeIcon.classList.add("hide");
  }
});
