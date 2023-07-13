
const display = document.querySelector(".display");
const button = document.querySelectorAll(".btn");

button.forEach(button => {
    button.addEventListener("click", () => {
        const clickedButton = button.textContent;

        if (button.id === "c") {
            display.textContent = "0";
            return;
        }

        
        if (display.textContent==="Infinity" || display.textContent==="-Infinity"  ){
            display.textContent = "Error!"
        }


        if (button.id === "del") {
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equals") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error!";
            }
            return;
        }

        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = clickedButton;
        } else {
            display.textContent += clickedButton;
        }
        
    })
})