"use strict"

//-------------------------------//
/* DEFINE THE WIDTH AND HEIGHT */
//-------------------------------//

let svgWidth = 1200
let svgHeight = 1200

//-------------------------------//
/* DEFINE THE MARGIN */
//-------------------------------//

let margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 80
}

//-------------------------------//
/* DEFINE THE COLOR */
//-------------------------------//

let colorHot = "#ff0000ff";
let colorModerate = "#ff9d00ff";
let colorCold = "#0000ffff";

//-------------------------------//
/* DEFINE THE EMOJI */
//-------------------------------//

let emojiRelax = "😌";
let emojiTense = "😐";
let emojiVeryStressed = "😵";

//-------------------------------//
/* DEFINE THE CANVAS */
//-------------------------------//

let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.append("rect")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", "none")
    .attr("stroke", "black");

//---------------------------------------------------------------//

//--------------------------------------------//
/* LOADING OF DATA BASE IN THE JSON AND FLOW  */ // I learn How to use it in the class of lab in the framework week 09
//--------------------------------------------//

(async function () {
    // LOADING OF DATA BASE JSON AND LOADING THE FUNTIONS 
    let data = await d3.json("data.json").then(simsGamingObservations);
    console.log("data loaded");
})();

function simsGamingObservations(data) {
    let renderData = organizeData(data);
    drawVisualization(renderData, svg);
    return data;
}

//--------------------------------------//
/*-----  CREATE A SCALE AND FUNTIONS---*/ // I learn How to use it in the class of lab in the framework week 09
//--------------------------------------//

/*----- ORGANIZE DATA: MULTI-FILTER -----*/

function organizeData(data) {

    let organized = data.filter(function (value) {
        return value["day"] !== undefined &&
            value["Time of day"] !== undefined &&
            value["Daily temperature °C"] !== undefined &&
            value["Minutes (0–60 minutes)"] !== undefined &&
            value["My stress level after playing The Sims 4 level 😌 0-1 = 😐 Relax 2-3 = 😵 Tense 4-5= Very Stressed"] !== undefined;
    });

    return organized;
}

//---------------------------------------------------------------//


//---------------------------------------------//
/*--- DRAWING THE INFORMATION with the loop ---*/ //information get it in the class and by Alfredo
//--------------------------------------------//
function drawVisualization(data, drawing) {
    let daysPerRow = 7; // Number of days per row
    let rowSpacing = 180; // Sets the horizontal distance between rows to prevent overlapping
    let gridWidth = 700;//position of the vertical elements
    let gridHeight = 100;//position of the horizontal elements
    let gridX = (svgWidth / 2) - (gridWidth / 2);//horizontal
    let gridY = 300; // Vertical space between each week row 

    let rScale = d3.scaleLinear()
        .domain([-1, 16])
        .range([20, 20]);

    data.forEach(function (d, i) {//.forEach: A loop that instructs the computer to process every element in the array one by one.
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#:~:text=The%20forEach()%20method%20is,js%20Copy
        // Calculate which row (week) and column (day) this entry belongs to
        let col = i % daysPerRow; // 0–6 within the week
        let row = Math.floor(i / daysPerRow); // 0 = week 1, 1 = week 2, etc.

        let xPos = gridX + (col * 135); // Your grid is 700px width, so each day will get 100px width
        let yBase = gridY + (row * rowSpacing); // Shift down for each new week

        // Draw the grid lines once per row at the start of each week
        if (col == 0) {//horizontal
            // Top horizontal line
            drawing.append("line")
                .attr("x1", gridX - 100)
                .attr("y1", yBase)
                .attr("x2", gridX + gridWidth + 100)
                .attr("y2", yBase)
                .attr("stroke", "black")
                .attr("stroke-width", 3);
            // Bottom horizontal line
            drawing.append("line")
                .attr("x1", gridX - 100)
                .attr("y1", yBase + gridHeight)
                .attr("x2", gridX + gridWidth + 100)
                .attr("y2", yBase + gridHeight)
                .attr("stroke", "black")
                .attr("stroke-width", 3);
        }

        // Vertical line for each column
        if (col != 6) { // Avoid drawing the last line of the line to keep the grid with the same aesthetic//vertical
            drawing.append("line")
                .attr("x1", xPos)
                .attr("y1", yBase)
                .attr("x2", xPos)
                .attr("y2", yBase + gridHeight)
                .attr("stroke", "black")
                .attr("stroke-width", 3);
        }
        // DAY label
        drawing.append("text")
            .attr("x", xPos - 65) // Move left to the center of the box
            .attr("y", yBase - 50)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .text(d["day"]);

        // MINUTES 
        drawing.append("text")
            .attr("x", xPos - 65)
            .attr("y", yBase - 21)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("font-weight", "bold")
            .text(d["Minutes (0–60 minutes)"] + " " + "min playing Sims4");
        // TIME OF DAY 
        drawing.append("text")
            .attr("x", xPos - 65)
            .attr("y", yBase + 80)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .text(d["Time of day"]);

        // TEMPERATURE CIRCLE 
        drawing.append("circle")
            .attr("cx", xPos - 65)
            .attr("cy", yBase + (gridHeight / 3)) // VERTICAL CENTER IN THE CANVA
            .attr("r", rScale(d["Daily temperature °C"])) // RADIO OF THE CIRCLE OF TEMPERATURE
            .attr("fill", function () {//https://www.geeksforgeeks.org/javascript/javascript-anonymous-functions/
                // FUNTION OF COLOR FOR TEMPERATURE
                // Fill the circle blue if the daily temperature is <= 5°C,
                // orange if it is <= 10°C, or red if it is above 10°C.
                if (d["Daily temperature °C"] <= 5) {
                    return colorCold; // BLUE
                } if (d["Daily temperature °C"] <= 10) {
                    return colorModerate; // ORANGE
                } else {
                    return colorHot; //RED
                }
            })
        // STRESS EMOJI //https://stackoverflow.com/questions/18416749/adding-fontawesome-icons-to-a-d3-graph
        drawing.append("text")
            .attr("x", xPos - 65)
            .attr("y", yBase + (gridHeight / 3) + 7) // +7 FOR CENTER THE EMOJY
            .attr("text-anchor", "middle")
            .attr("font-size", "22px")
            .text(function () {//https://www.geeksforgeeks.org/javascript/javascript-anonymous-functions/
                // IF AND RETURN LOGIC
                // Display a relaxed emoji if stress level is 0-1,
                // a tense emoji if it is 2-3, or a very stressed emoji if it is 4-5.
                if (d["My stress level after playing The Sims 4 level 😌 0-1 = 😐 Relax 2-3 = 😵 Tense 4-5= Very Stressed"] <= 1) {
                    return emojiRelax;
                } if (d["My stress level after playing The Sims 4 level 😌 0-1 = 😐 Relax 2-3 = 😵 Tense 4-5= Very Stressed"] <= 3) {
                    return emojiTense;
                } else {
                    return emojiVeryStressed;
                }
            })
    });
}

//---------------------------------------------------------------//


//----------------------------------
//------------ legends -------------
//----------------------------------

let timeOfDay = svg.append("g")
    .attr("transform", "translate(290, 50)"); /* TECHNICAL REFLECTION (Lab 8):
I learned how to use the group element <g> in D3 to encapsulate all the elements 
of a legend (circles and text). This allowed me to move the entire legend as a 
single unit using a single line of code (transform, translate), instead of 
calculating the position of each individual piece relative to the chart.
*/ //Link: https://stackoverflow.com/questions/52216447/how-to-group-g-elements-in-d3

//---------------Legend Title-------------------------------------
timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("font-weight", "bold")
    .style("font-size", "14px")
    .text("Time of Day");
timeOfDay.append("rect")
    .attr("x", -10)
    .attr("y", -20)
    .attr("width", 230)
    .attr("height", 160)
    .attr("fill", "none")
    .attr("stroke", "#020202ff")
    .attr("rx", 5);

timeOfDay.append("line")
    .attr("x1", -10)
    .attr("y1", 8)
    .attr("x2", 220)
    .attr("y2", 8)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

//---------------- Morning  ---------------------

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 35)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Morning: (10:00 a.m. - 12:00 p.m.)");

//---------------- Afternoon  ---------------------

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 65)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Afternoon: (12:00 p.m. - 5:00 p.m.)");

//---------------- Evening  ---------------------

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 95)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Evening: (5:00 p.m. - 8:00 p.m.)");

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 120)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Didn't play: None");

let temperature = svg.append("g")
    .attr("transform", "translate(540, 50)"); /* TECHNICAL REFLECTION (Lab 8):
I learned how to use the group element <g> in D3 to encapsulate all the elements 
of a legend (circles and text). This allowed me to move the entire legend as a 
single unit using a single line of code (transform, translate), instead of 
calculating the position of each individual piece relative to the chart.
*/ //Link: https://stackoverflow.com/questions/52216447/how-to-group-g-elements-in-d3

//---------------Legend Title-------------------------------------
temperature.append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("font-weight", "bold")
    .style("font-size", "14px")
    .text("Temperature");

temperature.append("rect")
    .attr("x", -10)
    .attr("y", -20)
    .attr("width", 220)
    .attr("height", 160)
    .attr("fill", "none")
    .attr("stroke", "#020202ff")
    .attr("rx", 5);

temperature.append("line")
    .attr("x1", -10)
    .attr("y1", 8)
    .attr("x2", 210)
    .attr("y2", 8)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

//---------------- Cold day (blue) ---------------------

temperature.append("text")
    .attr("x", 40)
    .attr("y", 35)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Cold Days: <=5°C");

temperature.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 30)
    .attr("fill", colorCold);

//---------------- Moderate (Orange) ---------------------

temperature.append("text")
    .attr("x", 40)
    .attr("y", 65)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Moderate: > 5°C & <= 10°C");

temperature.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 60)
    .attr("fill", colorModerate);

//---------------- Hot day (Red) ---------------------

temperature.append("text")
    .attr("x", 40)
    .attr("y", 95)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Hot Days: > 10°C");

temperature.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 90)
    .attr("fill", colorHot);


let stressLevelAfter = svg.append("g")
    .attr("transform", "translate(780, 50)"); /* TECHNICAL REFLECTION (Lab 8):
I learned how to use the group element <g> in D3 to encapsulate all the elements 
of a legend (circles and text). This allowed me to move the entire legend as a 
single unit using a single line of code (transform, translate), instead of 
calculating the position of each individual piece relative to the chart.
*/ //Link: https://stackoverflow.com/questions/52216447/how-to-group-g-elements-in-d3

//---------------Legend Title-------------------------------------
stressLevelAfter.append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("font-weight", "bold")
    .style("font-size", "14px")
    .text("Stress Level After");

stressLevelAfter.append("rect")
    .attr("x", -10)
    .attr("y", -20)
    .attr("width", 160)
    .attr("height", 160)
    .attr("fill", "none")
    .attr("stroke", "#020202ff")
    .attr("rx", 5);

stressLevelAfter.append("line")
    .attr("x1", -10)
    .attr("y1", 8)
    .attr("x2", 150)
    .attr("y2", 8)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

//---------------- Relax ---------------------

stressLevelAfter.append("text")
    .attr("x", 0)
    .attr("y", 35)
    .style("font-size", "20px")
    .style("font-family", "sans-serif")
    .text(emojiRelax);

stressLevelAfter.append("text")
    .attr("x", 40)
    .attr("y", 32)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("0-1 (Relax)");


//---------------- Tense ---------------------

stressLevelAfter.append("text")
    .attr("x", 0)
    .attr("y", 65)
    .style("font-size", "20px")
    .style("font-family", "sans-serif")
    .text(emojiTense);

stressLevelAfter.append("text")
    .attr("x", 40)
    .attr("y", 62)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("2-3 (Tense)");

//---------------- Stress ---------------------

stressLevelAfter.append("text")
    .attr("x", 0)
    .attr("y", 95)
    .style("font-size", "20px")
    .style("font-family", "sans-serif")
    .text(emojiVeryStressed);

stressLevelAfter.append("text")
    .attr("x", 40)
    .attr("y", 92)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("4-5 (Very Stressed)");

