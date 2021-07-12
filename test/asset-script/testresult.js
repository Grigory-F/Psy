let acc = document.querySelector(".clarification__button");

acc.addEventListener("click", () => {
  acc.classList.toggle("active");
  let panel = acc.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.cssText = `max-height: ${null}; padding: 0px 20px 0px;`
  } else {
    panel.style.cssText = `max-height: ${panel.scrollHeight}px; padding: 0 20px 20px;`
  }
});