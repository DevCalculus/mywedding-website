document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sideBar = document.querySelector(".side-bar");
  const closeMenu = document.querySelector(".closeMenu img");

  hamburger.addEventListener("click", function () {
    sideBar.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    sideBar.classList.remove("active");
  });
});

document
  .querySelector(".rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your RSVP!");
  });
