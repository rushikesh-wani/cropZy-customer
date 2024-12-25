export const initializeDarkMode = () => {
  const isDarkModeOn = localStorage.getItem("isDarkModeOn") === "true";
  if (isDarkModeOn) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

export const darkModeHandler = () => {
  const isDarkModeOn = localStorage.getItem("isDarkModeOn") === "true";
  localStorage.setItem("isDarkModeOn", !isDarkModeOn);

  if (!isDarkModeOn) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};
