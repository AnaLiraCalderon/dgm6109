"use strict"

let choice, amount, zipCode; 

document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear(); 
    document.getElementById("submit").removeAttribute("hidden");
    document.getElementById("reset").setAttribute("hidden", "true");
});

//In this part, it should prevent entering more than 5 numbers and allow only numeric input.
//In this part, it should validate that only numbers are used, not letters, and that the input has the .00 format.

function processForm() {
    choice = Number(document.getElementById("opt").value);
    amount = Number(document.getElementById("quant").value);
    zipCode = document.getElementById("zip").value;

    let success = false;

    if (validateData()) {
        success = evaluateAnswers();
    }

    if (success) {
        document.getElementById("submit").setAttribute("hidden", "true");
        document.getElementById("reset").removeAttribute("hidden");
    }

}
    let success = false;

    if (validateData()) {
        success = evaluateAnswers();
    }

    if (success) {
        document.getElementById("submit").setAttribute("hidden", "true");
        document.getElementById("reset").removeAttribute("hidden");
    }


function validateData() {
    let isValid = true;

    // In this part I want to know if there are 5 digits
    if (zipCode.length < 5) {
        output("ZIP code must be exactly 5 digits");
        isValid = false;
    } 
    // In this part I want to know if the number is more then 5 digits
    else if (zipCode.length > 5) {
        output("ZIP code must be exactly 5 digits");
        isValid = false;
    }

    return isValid;
//In this part, it should prevent entering more than 5 numbers and allow only numeric input.
//In this part, it should validate that only numbers are used, not letters, and that the input has the .00 format.
}


function evaluateAnswers() {
    let storeName = "";
    let zipNum = Number(zipCode);
    let isBusinessValid = true; 

 //This is for Sepharoah
    if (choice === 1) {
        storeName = "Sepharoah";
        
        let isEastCoast = true;

        // In this part the ZIP is outside East Coast range (34000 or higher)
        if (zipNum >= 34000) {
            isEastCoast = false;
        }

        // In this part the program check for West Coast exception (ZIP codes starting with 90 to 99)
        if (zipNum >= 90000) {
            if (zipNum <= 99999) {
                isEastCoast = false;
            }
        }

        // Display error location is not on the East Coast
        if (isEastCoast === false) {
            output("Sorry, the Sephora gift card can only be ordered on the East Coast.");
            isBusinessValid = false;
        }

        // Check the amount is below the minimum requirement
        if (amount < 50) {
            output("Sorry, the Sepharaoh gift card has a minimum or maximum value of $50 or $1,000");
            isBusinessValid = false;
        }

        // Check the amount exceeds the maximum limit
        if (amount > 1000) {
            output("Sorry, the Sepharaoh gift card has a minimum or maximum value of $50 or $1,000");
            isBusinessValid = false;
        }
    }
//In this part, if the fields are filled out incorrectly, the incorrect text should be cleared and a message should appear explaining what went wrong.
//Here, it should identify whether the input is a number or text and check if it has the correct .00 format.
//The messages should be cleared, and all error messages related to incorrect input formatting should be displayed.


 //This is for wallgrinds   
    if (choice === 2) {
        storeName = "Wallgrinds";
        isBusinessValid = true;
        let errors = [];

        if (amount <= 5 || amount >= 500) {
        errors.push("Incorrect credit card information entered");
        isBusinessValid = false;
        }
        if(amount % 5 !== 0){
        errors.push("The Wallgrinds card can only be purchased in increments of $5");
        isBusinessValid = false;
         }
        if (!isBusinessValid) {
        errors.forEach(msg => output(msg));
    }
    }
//In this part, if the fields are filled out incorrectly, the incorrect text should be cleared and a message should appear explaining what went wrong.
//Here, it should identify whether the input is a number or text and check if it has the correct .00 format.
//The messages should be cleared, and all error messages related to incorrect input formatting should be displayed.


 //This is for Taco Hut
    else if (choice === 3) {
        storeName = "Taco Hut";
        if (amount < 5 || amount > 500) {
            output("Incorrect credit card information entered");
            isBusinessValid = false;
        }
    }

    if (!isBusinessValid) {
        return false;
    }
//In this part, if the fields are filled out incorrectly, the incorrect text should be cleared and a message should appear explaining what went wrong.
//Here, it should identify whether the input is a number or text and check if it has the correct .00 format.
//The messages should be cleared, and all error messages related to incorrect input formatting should be displayed.


//This is the format of the final message for all the stores
  let fee = 0;
    let isHawaii = false;

    // Check if the ZIP code belongs to Hawaii range
    if (zipNum >= 96701) {
        if (zipNum <= 96898) {
            isHawaii = true;
        }
    }

    // Apply fee only if amount is less than $100 and NOT in Hawaii
    if (amount < 100) {
        if (isHawaii === false) {
            fee = amount * 0.05;
            // Display the specific message only when the fee is added
            output("Add 5% of the card value as a processing fee");
        }
    }

    let finalMsg = `Your gift card for ${storeName} in the amount of $${amount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}.`;
    
   if (fee > 0) {
    finalMsg += ` Please note that a processing fee of $${fee.toFixed(2)} has been added to your purchase.`;
}
//This is the final message for all the stores
    output(finalMsg);
    output("Thanks!");
    return true;
//In this part, a pop-up message should appear displaying the final message in blue.
}