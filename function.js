/*
I wrote this function in order to change the about section's content
I am using setInterval which is a built-in function within JavaScript that runs another function
every 5 seconds, in this function what I am doing is I am either removing or adding
a class called 'hidden' depending if it already exists or not, in css I declared the class hidden
to have display:none */

function changeAbout() {
  setInterval(() => {
    const firstAbout = document.getElementById("first-about");
    const secondAbout = document.getElementById("second-about");
    if (firstAbout.classList.contains("hidden")) {
      firstAbout.classList.remove("hidden");
      secondAbout.classList.add("hidden");
    } else {
      secondAbout.classList.remove("hidden");
      firstAbout.classList.add("hidden");
    }
  }, 5000);
}
