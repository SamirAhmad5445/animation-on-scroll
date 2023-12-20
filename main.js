let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollValue = document.documentElement.scrollTop;
  document.documentElement.style.setProperty(
    "--scrollValue",
    scrollValue / height
  );
});

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX - window.innerWidth / 2;
  const mouseY = event.clientY - window.innerHeight / 2;

  document.documentElement.style.setProperty("--mouseX", mouseX / 100);
  document.documentElement.style.setProperty("--mouseY", mouseY / 100);
});
