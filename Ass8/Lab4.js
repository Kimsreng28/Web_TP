const menunation = document.querySelector(".menu");
const navMenu = document.querySelector(".content");

menunation.addEventListener("click", () => {
  menunation.classList.toggle("rotate");
  navMenu.classList.toggle("hide");
});
