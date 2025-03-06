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

document.addEventListener("DOMContentLoaded", function () {
  const weddingDate = new Date("June 15, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
      document.getElementById("countdown").innerHTML = "We're Married!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `<span>${days} Days</span> : 
       <span>${hours} Hours</span> : 
       <span>${minutes} Minutes</span> : 
       <span>${seconds} Seconds</span>`;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
});

document
  .querySelector(".rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your RSVP!");
  });
