let heading = document.querySelector("h1");
function changeBg(event) {
  document.body.style.backgroundImage = `url(${event.target.src})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  heading.style.display = "none";
}

function resetBg() {
  document.body.style.background = "white";
  heading.style.display = "block";
}

document.querySelectorAll(".image-box img").forEach((img) => {
  img.addEventListener("mouseenter", changeBg);
  img.addEventListener("mouseleave", resetBg);
});
