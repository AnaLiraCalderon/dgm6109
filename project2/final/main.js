"use strict";

let storeChoice;
let giftAmount;
let zipCode;

document.getElementById("submit").addEventListener("click", processFormValues);
document.getElementById("reset").addEventListener("click", clear);

//IN THIS PART I DEFINED THAT THE GIFT HUB ESTRUCTURE HAVE 3 PART, THE NAME OF THE STORES, THE GIFT AMOUNT AND THE ZIP CODE
function processFormValues() {
    storeChoice = Number(document.getElementById("opt").value);//IT FIND THE STORE AND GETS THE SELECTED VALUE, THE NUMBER CONVERT THE STORES INTO NUMBERS
    giftAmount = document.getElementById("quant").value;//IT GRABS THE MONEY AMOUNT AND SAVED AS TEXT AND THE USE DECIMALS
    zipCode = document.getElementById("zip").value;//IT GET THE ZIP CODE FROM THE ZIB BOX AND ALSO IT CAN USED THEN FOR THE 5 DIGITS.

    processData();//ONCE ALL THE VARIABLE ARE FILLED, IT TELL THE PROGRAM TO START THE VALIDATION AND EVALUATION
}

// THIS IS HOW THE PROGRAM PROCESS THE INFORMATION
function processData() {//STAR WITH FALSE UNTIL EVERTYHING IS OK
    let evaluationCompleted = false;

    if (validateData()) {//ZIP AND AMOUNT IS OK OR IT END 
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {//THIS IS THE PART OF THE BOTTON SUBMIT AND THE RESET THAT IS HIDDEN
        document.getElementById("submit").setAttribute("hidden", "hidden");
        document.getElementById("reset").removeAttribute("hidden");
    }
}

//THIS IS THE VALIDATE DATA PART IN THIS PART THE CODE VALIDATE THE ZIP AND THE AMOUNT PART
function validateData() {
//ZIP CODE//
    if (isNaN(zipCode)) {
        alert("Please enter a number");
        return false;
    }

    let zipTexto = zipCode.toString(); //I use this for change the zip code to a text, then the "if" could reconice the longevity of the zip code.
    if (zipTexto.length != 5) {
        alert("ZIP code must be exactly 5 digits");
        return false;
    }
//GIFT AMOUNT//
    let amountText = giftAmount.toString(); //I use this for convert the text to digits.

    if (isNaN(giftAmount) || giftAmount === "") {
        alert("Please enter a number");
        return false;
    }

    if (Number(giftAmount) < 0) {
        alert("Please enter a positive number");
        return false;
    }

    if (amountText.includes(".") == true) {
        let parts = amountText.split(".");
        let cents = parts[1];

        if (cents.length != 2) {
            alert("Amount format incorrect. Numbers like 1.1 (too few digits) or 1.111 (too many digits) should not be accepted");
            return false;
        }
    }

    giftAmount = Number(giftAmount);
    return true;
}

//THIS IS THE EVALUATION OF THE THREE STORES, SEPHAROAH, WALGRINDS AND TACO HUT
function evaluateAnswers() {
    const zipNumber = Number(zipCode);
    let processingFee = 0;

//SEPHAROAH//
//IN THIS PART WE DEFINED THE EXCEPTIONS ALERT//

    if (storeChoice === 1) {

        if (zipNumber >= 34000) {
            alert("Sorry, the Sepharoah gift card can only be ordered on the East Coast");
            return false;
        }

        const firstThreeDigits = Math.floor(zipNumber / 100);

        if (firstThreeDigits >= 90) {
            if (firstThreeDigits <= 99) {
                alert("Sorry, the Sepharoah gift card can only be ordered on the East Coast");
                return false;
            }
        }

        if (giftAmount < 50) {
            alert("Sorry, the Sepharoah gift card has a minimum or maximum value of $50 or $1,000");
            return false;
        }

        if (giftAmount > 1000) {
            alert("Sorry, the Sepharoah gift card has a minimum or maximum value of $50 or $1,000");
            return false;
        }
// IN THIS PART I DEFINED IF THE GIFT CARD PROCEDED WITH FEE OR WITHOUT FREE, AND SAID THANKS//
        if (giftAmount < 100) {
            if (!(zipNumber >= 96701 && zipNumber <= 96898)) {
                processingFee = giftAmount * 0.05;

                output("Add 5% of the card value as a processing fee");
                output(
                    `Your gift card for Sepharoah in the amount of $${giftAmount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}. Please note that a processing fee of $${processingFee.toFixed(2)} has been added to your purchase`
                );
                output("Thanks!");
                return true;
            }
        }

        output(
            `Your gift card for Sepharoah in the amount of $${giftAmount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}`
        );
        output("Thanks!");
        return true;
    }

//WALLGRINDS//
//IN THIS PART WE DEFINED THE EXCEPTIONS ALERT//
    if (storeChoice === 2) {

        if (giftAmount < 5) {
            alert("Sorry, the amount placed on the Wallgrinds gift card must be at least $5 ");
            return false;
        }

        if (giftAmount > 500) {
            alert("Sorry, the amount placed on the Wallgrinds gift card must be at most $500");
            return false;
        }

        if (giftAmount % 5 !== 0) {
            alert("The Wallgrinds card can only be purchased in increments of $5");
            return false;
        }
// IN THIS PART I DEFINED IF THE GIFT CARD PROCEDED WITH FEE OR WITHOUT FREE, AND SAID THANKS//
        if (giftAmount < 100) {
            if (!(zipNumber >= 96701 && zipNumber <= 96898)) {
                processingFee = giftAmount * 0.05;
                
                output("Add 5% of the card value as a processing fee");
                output(
                    `Your gift card for Wallgrinds in the amount of $${giftAmount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}. Please note that a processing fee of $${processingFee.toFixed(2)} has been added to your purchase`
                );
                output("Thanks!");
                return true;
            }
        }

        output(
            `Your gift card for Wallgrinds in the amount of $${giftAmount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}`
        );
        output("Thanks!");
        return true;
    }

//TACO HUT//
//IN THIS PART WE DEFINED THE EXCEPTIONS ALERT//

    if (storeChoice === 3) {

        if (giftAmount < 5) {
            alert("Sorry, the amount placed on the Taco Hut gift card must be at least $5 ");
            return false;
        }

        if (giftAmount > 500) {
            alert("Sorry, the amount placed on the Taco Hut gift card must be at most $500");
            return false;
        }
// IN THIS PART I DEFINED IF THE GIFT CARD PROCEDED WITH FEE OR WITHOUT FREE, AND SAID THANKS//
        if (giftAmount < 100) {
            if (!(zipNumber >= 96701 && zipNumber <= 96898)) {
                processingFee = giftAmount * 0.05;

                output("Add 5% of the card value as a processing fee");
                output(
                    `Your gift card for Taco Hut in the amount of $${giftAmount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}. Please note that a processing fee of $${processingFee.toFixed(2)} has been added to your purchase`
                );
                output("Thanks!");
                return true;
            }
        }

        output(
            `Your gift card for Taco Hut in the amount of $${giftAmount.toFixed(2)} will be shipped to your address in ZIP code ${zipCode}`
        );
        output("Thanks!");
        return true;
    }

    return false;
}

// This part resets the interface. I used AI to fix this because I couldn't enter information again after the alert appeared but until I used it I try to learn in some blogs: 
function clear() {// THIS FUNCTION ACTS A RESTORATION TOOL
    document.getElementById("submit").removeAttribute("hidden");//it makes the botton being visible
    document.getElementById("reset").setAttribute("hidden", "hidden");//it hides the star over
    document.getElementById("quant").value = "";//this clear the text boxes of the amount and the zip
    document.getElementById("zip").value = "";//this clear the text boxes of the amount and the zip
    document.getElementById("output").innerHTML = "";//this deletes any previous success messages
}
