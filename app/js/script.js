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

const setDarkMode = () => {
  document.querySelector("body").classList = "dark";
};

const setLightMode = () => {
  document.querySelector("body").classList = "light";
};

setColorMode();

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
