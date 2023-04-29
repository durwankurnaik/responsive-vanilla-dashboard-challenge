const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const setColorMode = () => {
  if (localStorage.getItem("colorMode") == "dark") {
    setDarkMode();
    darkButton.click();
  } else if (localStorage.getItem("colorMode") == "light") {
    setLightMode();
    lightButton.click();
  }
};

const checkMode = () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    lightButton.click();
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkButton.click();
  }
};

const checkModeChange = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      checkMode();
    });
};

const setDarkMode = () => {
  document.querySelector("body").classList = "dark";
};

const setLightMode = () => {
  document.querySelector("body").classList = "light";
};

setColorMode();
checkModeChange();

const radioButtons = document.querySelectorAll(".toggle__wrapper input");

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", (event) => {
    if (document.getElementById("dark").checked) {
      document.querySelector("body").classList = "dark";
      localStorage.setItem("colorMode", "dark");
    } else {
      document.querySelector("body").classList = "light";
      localStorage.setItem("colorMode", "light");
    }
  });
}
