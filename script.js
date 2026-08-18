var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const emailLink = document.getElementById("emailLink");
const emailAddress = "uanish767@gmail.com";

emailLink.addEventListener("click", function (e) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    // Desktop/laptop: open Gmail compose in browser instead of relying on a mail app
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`,
      "_blank"
    );
  }
  // Mobile: let mailto: fire normally — opens the phone's mail app
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyjdFNTyuXJGRnQLF9SzrHeFsRUeaR5ybEB46vQkq6cCsoDOi4AwFHiIef2J6ARoaQE/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Submitted";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
