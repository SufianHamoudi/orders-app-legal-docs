const buttons = document.querySelectorAll("[data-pick]");

function apply(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  document.querySelectorAll(".doc").forEach((article) => {
    article.hidden = article.dataset.lang !== lang;
  });
  const title = document.getElementById("title");
  if (title) title.textContent = title.dataset[lang];
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.pick === lang ? "true" : "false");
  });
  const heading = title ? title.textContent : "המותג לשיווק";
  document.title = heading + " · המותג לשיווק";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => apply(button.dataset.pick));
});
