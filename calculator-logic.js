const display = document.querySelector(".display");
const button = document.querySelectorAll(".btn");

button.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedButton = button.textContent;

    if (button.id === "c") {
      display.textContent = "0";
      return;
    }

    if (button.id === "del") {
      if (
        display.textContent.length === 1 ||
        display.textContent === "Error!"
      ) {
        display.textContent = "0";
      } else {
        display.textContent = display.textContent.slice(0, -1);
      }
      return;
    }

    if (button.id === "equals") {
      try {
        const result = eval(display.textContent);
        if (isFinite(result)) {
          display.textContent = result;
        } else {
          display.textContent = "Error!";
        }
      } catch {
        display.textContent = "Error!";
      }
      return;
    }

    if (display.textContent.length > 20) {
      var startIndex = display.textContent.length - 20;
      var displayedNumbers = display.textContent.substring(startIndex);
    } else {
      var displayedNumbers = display.textContent;
    }

    display.textContent = displayedNumbers;

    if (display.textContent === "0" || display.textContent === "Error!") {
      display.textContent = clickedButton;
    } else {
      display.textContent += clickedButton;
    }
  });
});
