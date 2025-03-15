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

// 🟢 FIREBASE INITIALIZATION
import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js")
  .then(({ initializeApp }) =>
    import(
      "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
    ).then(({ getFirestore, collection, addDoc, onSnapshot }) => {
      const firebaseConfig = {
        apiKey: "AIzaSyA1ws0gOYKbfscvar_qlO_JYf-wKCPXboU",
        authDomain: "moore-wedding-a0402.firebaseapp.com",
        projectId: "moore-wedding-a0402",
        storageBucket: "moore-wedding-a0402.firebasestorage.app",
        messagingSenderId: "37596126599",
        appId: "1:37596126599:web:195890982975b7eb114722",
        measurementId: "G-028BT3HMDZ",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const commentsRef = collection(db, "comments");

      // 🟢 COMMENT FORM FUNCTIONALITY
      const commentForm = document.querySelector("#commentForm");
      if (commentForm) {
        commentForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = document.querySelector("#name").value;
          const message = document.querySelector("#message").value;

          if (name && message) {
            await addDoc(commentsRef, { name, message, timestamp: new Date() });
            commentForm.reset();
          }
        });
      }

      // 🟢 LIVE COMMENTS UPDATE
      const commentsList = document.querySelector("#commentsList");
      if (commentsList) {
        onSnapshot(commentsRef, (snapshot) => {
          commentsList.innerHTML = "";
          snapshot.forEach((doc) => {
            const data = doc.data();
            commentsList.innerHTML += `<p><strong>${data.name}:</strong> ${data.message}</p>`;
          });
        });
      }
    })
  )
  .catch((err) => console.error("Firebase failed to load:", err));

// RSVP Form
document
  .querySelector(".rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your RSVP!");
  });
