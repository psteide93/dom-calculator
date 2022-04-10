let acceptingInput = true;

const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".buttons span");
document.querySelectorAll(".operator")[1].textContent = "/";
document.querySelectorAll(".operator")[2].textContent = "*";

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.textContent !== "=" && acceptingInput) {
      screen.textContent += button.textContent;
    }
    if (button.textContent === "C" && acceptingInput) {
      screen.textContent = null;
    }
    try {
      if (
        button.textContent === "=" &&
        acceptingInput &&
        screen.textContent.includes("/0")
      ) {
        screen.textContent = "error";
      } else if (button.textContent === "=" && acceptingInput) {
        screen.textContent = eval(screen.textContent);
      }
    } catch (error) {
      screen.textContent = "error";
      acceptingInput = false;
      setTimeout(function () {
        acceptingInput = true;
        screen.textContent = null;
      }, 2000);
    }
  })
);
