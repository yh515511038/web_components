const switchEl = document.querySelector(".switch");

function switchMode(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

switchEl.addEventListener("change", switchMode);
