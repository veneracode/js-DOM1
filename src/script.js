let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));
let themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    });

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        if (button === themeToggle) return;

        if (display.innerText === "Error!") {
            display.innerText = ""; 
        }
        switch(e.target.innerText){
            case "AC":
            display.innerText = "0"
            break;
            case "=":
                try {
                    if (display.innerText.includes("/0")) {
                        display.innerText = "Error!";
                    } else {
                        let result = eval(display.innerText);
                        if (Number.isFinite(result)) {
                            display.innerText = result.toFixed(10).replace(/\.?0+$/, "");
                         }
                          else {
                        display.innerText = "Error!"
                        
                    }
                }
                } catch (e) {
                    display.innerText = "Error!";
                    
                }
            break;
            case "+/-":
                display.innerText = "-";
                break
            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;


    default:
    if (display.innerText === "0" && e.target.innerText !==".") {
        display.innerText = e.target.innerText;
    } else {
        display.innerText += e.target.innerText;
    }        
    }
 })
 
})