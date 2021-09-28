function onKeyDown(e) {
  console.log(e.key);
  if (e.key === "Tab") {
    e.preventDefault();
    document.body.classList.toggle("fullscreen");
  }
}

window.addEventListener("keydown", onKeyDown);

function toggleMouseBox() {
  const mouseBox = document.querySelector(".mouse");
  const mouseButton = document.querySelector(".mouse-button");
  mouseBox.classList.toggle("mouse-visible");
  const isVisible = mouseBox.classList.contains("mouse-visible");

  if (isVisible) {
    mouseButton.innerHTML = "Close ";
  } else {
    mouseButton.innerHTML = "Mouse and tool controls";
  }
}

function toggleExampleBox() {
  const exampleBox = document.querySelector(".example");
  const exampleButton = document.querySelector(".example-button");
  exampleBox.classList.toggle("example-visible");
  const isVisible = exampleBox.classList.contains("example-visible");

  if (isVisible) {
    exampleButton.innerHTML = "Close";
  } else {
    exampleButton.innerHTML = "Examples";
  }
}

function toggleProjectBox() {
  const projectBox = document.querySelector(".project");
  const projectButton = document.querySelector(".project-button");
  projectBox.classList.toggle("project-visible");
  const isVisible = projectBox.classList.contains("project-visible");

  if (isVisible) {
    projectButton.innerHTML = "Close";
  } else {
    projectButton.innerHTML = "About the project";
  }
}
window.onload = function () {
  document
    .querySelector(".example-button")
    .addEventListener("click", toggleExampleBox);

  document
    .querySelector(".mouse-button")
    .addEventListener("click", toggleMouseBox);

  document
    .querySelector(".project-button")
    .addEventListener("click", toggleProjectBox);
};
