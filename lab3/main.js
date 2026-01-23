"use strict";

document.getElementById("submit")
    .addEventListener("click", function () {

        let fahrenheit = document.getElementById("inputF").value;
        let conversionType = document.getElementById("conversionChoice").value;

        //let fahrenheit = 57.2 // 0c - 273.15k // Temperature represents the average daytime temperature in Huaraz, Peru, during April 2025
        let celsius = (fahrenheit - 32) * 5 / 9
        let kelvin = (fahrenheit + 459.67) * 5 / 9

       // if (conversionType == "c"){
        //output("Temperature (celsius):" + celsius);
        //}
       // if (conversionType == "k"){
        //output("Temperature (kelvin):" + kelvin);
      // }

        if (conversionType == "c"){
        output("Temperature (celsius):" + celsius);
        }
        else{
        output("Temperature (kelvin):" + kelvin);
        }
        output("Temperature (fahrenheit):" + fahrenheit);
        // It makes more sense to me because I am a structured person, and this is a structured way to organize the code.
        
    });//end of the line