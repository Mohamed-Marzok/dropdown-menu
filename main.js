let dropdown = document.querySelector(".dropdown");
let opations = document.querySelectorAll(".opation div");
let inputText = document.querySelector("input");
console.log(opations);
dropdown.addEventListener("click", function (e) {
  e.stopPropagation();

  dropdown.classList.toggle("active");
});
[...opations].forEach(function (opation) {
  opation.addEventListener("mouseover", function () {
    inputText.value = opation.textContent.toLocaleUpperCase();
  });
});
document.addEventListener("click", function (e) {
  e.stopPropagation();
  if (dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
  }
});
