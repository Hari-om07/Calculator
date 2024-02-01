// Get the display element by its ID
let display = document.getElementById("display");

       // Function to append a character to the display
        function appendCharacter(char) {
            display.value += char;
        }

        // Function to clear the display
        function clearDisplay() {
            display.value = "";
        }
        
        // Function to delete the last character from the display
        function backspace() {
            display.value = display.value.slice(0, -1);
        }

        // Function to calculate the result of the expression in the display
        function calculateResult() {
            try {
                let result = eval(display.value);
                if (isNaN(result) || !isFinite(result)) {
                    throw "Invalid input";
                }
                display.value = result;
            } catch (error) {
                display.value = "Can't divide by zero";
            }
        }

