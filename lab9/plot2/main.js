"use strict"
//--------------------------------------------------------
//----------------THIS IS THE CANVAS----------------------
//--------------------------------------------------------

/* Drawing size */
let svgWidth = 800;/* total width of the SVG */
let svgHeight = 500;/* total height of the SVG */

//--------------------------------------------------------
//----------------THIS IS THE MARGIN----------------------
//--------------------------------------------------------

let leftMargin = 80;
let rightMargin = 180;
let topMargin = 40;
let bottomMargin = 60;

//--------------------------------------------------------
//----------------THIS IS THE CONTAINER-------------------
//--------------------------------------------------------

/* Resize the container */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create the SVG canvas */
let svg = d3.select("#canvas") /* Declares a variable called svg, Uses D3.js to select an HTML element with the ID */
    .append("svg") /* Appends creates a new svg element inside the canvas element */
    .attr("width", svgWidth) /* Sets the width attribute of the SVG */
    .attr("height", svgHeight); /* Sets the height attribute of the SVG */

/* This is the outer canvas border */
svg.append("rect") /* Appends creates a rect element inside the SVG */
    .attr("fill", "none") /* Removes the interior color of the rectangle */
    .attr("stroke", "black") /* Sets the border color of the rectangle to black */
    .attr("width", svgWidth) /* Sets the canvas width equal to the SVG width */
    .attr("height", svgHeight); /* Sets the canvas height equal to the SVG height */

/* Draw the inner dotted margin line border */
svg.append("rect") /* New rect inside the SVG. */
    .attr("fill", "none") /* The rectangle has no fill color. */
    .attr("stroke", "black") /* Sets the border color to black. */
    .attr("stroke-dasharray", "5") /* This is the dotted line */
    .attr("x", leftMargin) /* Positions the top left corner of the rectangle inside the SVG by the margin amount */
    .attr("y", topMargin)/* Positions the top left corner of the rectangle inside the SVG by the margin amount */
    .attr("width", svgWidth - (leftMargin + rightMargin)) /* Width of the inner rectangle */
    .attr("height", svgHeight - (topMargin + bottomMargin)); /* total height minus top and bottom margins. */

//--------------------------------------------------------
//----------------THIS IS THE DATA------------------------
//--------------------------------------------------------
/* Dataset of my Sims4 data coleection, date, minutes, stress level After playing sims4 */
let simsGamingObservations = [ /* Declares the variable of Sims4 and the stress level that I had after playing */
    { date: "2026-01-24", minutesPlayed: 0, temperatureC: -1, timeOfDay: "None", stressLevelAfter: 4 },
    { date: "2026-01-25", minutesPlayed: 0, temperatureC: 5, timeOfDay: "None", stressLevelAfter: 5 },
    { date: "2026-01-26", minutesPlayed: 30, temperatureC: 3, timeOfDay: "Afternoon", stressLevelAfter: 2 },
    { date: "2026-01-27", minutesPlayed: 0, temperatureC: 5, timeOfDay: "None", stressLevelAfter: 1 },
    { date: "2026-01-28", minutesPlayed: 30, temperatureC: 6, timeOfDay: "Afternoon", stressLevelAfter: 0 },
    { date: "2026-01-29", minutesPlayed: 30, temperatureC: 9, timeOfDay: "Evening", stressLevelAfter: 3 },
    { date: "2026-01-30", minutesPlayed: 60, temperatureC: 9, timeOfDay: "Evening", stressLevelAfter: 1 },
    { date: "2026-01-31", minutesPlayed: 30, temperatureC: 12, timeOfDay: "Evening", stressLevelAfter: 3 },
    { date: "2026-02-01", minutesPlayed: 42, temperatureC: 8, timeOfDay: "Evening", stressLevelAfter: 3 },
    { date: "2026-02-02", minutesPlayed: 30, temperatureC: 9, timeOfDay: "Afternoon", stressLevelAfter: 1 },
    { date: "2026-02-03", minutesPlayed: 40, temperatureC: 11, timeOfDay: "Evening", stressLevelAfter: 1 },
    { date: "2026-02-04", minutesPlayed: 0, temperatureC: 16, timeOfDay: "None", stressLevelAfter: 0 },
    { date: "2026-02-05", minutesPlayed: 50, temperatureC: 14, timeOfDay: "Evening", stressLevelAfter: 0 },
    { date: "2026-02-06", minutesPlayed: 40, temperatureC: 15, timeOfDay: "Evening", stressLevelAfter: 0 },
    { date: "2026-02-07", minutesPlayed: 30, temperatureC: 11, timeOfDay: "Afternoon", stressLevelAfter: 0 },
    { date: "2026-02-08", minutesPlayed: 30, temperatureC: 10, timeOfDay: "Afternoon", stressLevelAfter: 1 },
    { date: "2026-02-09", minutesPlayed: 45, temperatureC: 7, timeOfDay: "Evening", stressLevelAfter: 2 },
    { date: "2026-02-10", minutesPlayed: 32, temperatureC: 3, timeOfDay: "Evening", stressLevelAfter: 0 },
    { date: "2026-02-11", minutesPlayed: 30, temperatureC: 9, timeOfDay: "Evening", stressLevelAfter: 1 },
    { date: "2026-02-12", minutesPlayed: 0, temperatureC: 8, timeOfDay: "None", stressLevelAfter: 3 },
    { date: "2026-02-13", minutesPlayed: 36, temperatureC: 8, timeOfDay: "Afternoon", stressLevelAfter: 0 }
];

//--------------------------------------------------------
//--This is the use of array.filter and array.sort--------
//--------------------------------------------------------

function filterStressLevelAfter(value) {
    return value.stressLevelAfter <= 3;
}

let sortByTemperatureC = function (a, b) {
    return b.temperatureC - a.temperatureC;
}
//--------------------------------------------------------
//----------------THIS IS THE POSITION OF THE DATA--------
//--------------------------------------------------------

/* Determine the maximum minutes to set the X scale in this case the number 60 */
simsGamingObservations.sort(function (a, b) {
    return b.minutesPlayed - a.minutesPlayed;
});

/* d3.min() and d3.max() for dynamic scales */
let minTemp = d3.min(simsGamingObservations, function (d) {
    return d.temperatureC;
});
let maxTemp = d3.max(simsGamingObservations, function (d) {
    return d.temperatureC;
});
let maxMins = d3.max(simsGamingObservations, function (d) {
    return d.minutesPlayed;
});

/* Create Linear Scales for X and Y axes */
//-------------------minutes Played---------------------------------
let xScale = d3.scaleLinear()
    .domain([0, 60])
    .range([leftMargin, svgWidth - rightMargin]);
//------------------Temperature---------------------
let yScale = d3.scaleLinear()
    .domain([minTemp, maxTemp]) // -1 a 16 
    .range([svgHeight - bottomMargin, topMargin]);
//-------------------Level of strees---------------------------------
let rScale = d3.scaleThreshold()
    .domain([1.5, 3.5]) // Relax, Tense y Stressed
    .range([6, 14, 24]); // Circles hight
//--------------------------------------------------------
//-----THIS IS THE CIRCLES, also the filter and sort------
//--------------------------------------------------------

let ByStress = svg
    .selectAll("circle.data-point")
    .data(simsGamingObservations.filter(filterStressLevelAfter).sort(sortByTemperatureC)) //this is the filter and the sort
    .join("circle")
    .classed("data-point", true)
    .attr("cx", function (value) {
        return xScale(value.minutesPlayed);
    })
    .attr("cy", function (value) {
        return yScale(value.temperatureC);
    })
    .attr("r", function (value) {
        return rScale(value.stressLevelAfter);
    })
    .attr("opacity", 0.7)
    .attr("stroke", "black")
    .attr("fill", function (value) {
        if (value.timeOfDay == "Morning") { return "yellow" }
        else if (value.timeOfDay == "Afternoon") { return "orange" }
        else if (value.timeOfDay == "Evening") { return "blue" }
        else { return "gray" }
    });

//--------------------------------------------------------
//----------------INFORMATION IN THE SCALE----------------
//--------------------------------------------------------

//-------------------Minutes played---------------------------------

svg.append("text") // Adds a text element to the SVG.
    .attr("x", leftMargin + (svgWidth - leftMargin - rightMargin) / 2) // x position left on chart
    .attr("y", svgHeight - 15)// y position center vertically
    .attr("text-anchor", "middle") // anchor of the text in the middle in the base of the graphic
    .text("Minutes played");// Text horizontal

//-------------------Temperature---------------------------------
// Y axis label including measurement scale
svg.append("text")
    .attr("x", -(topMargin + (svgHeight - topMargin - bottomMargin) / 2))// x position left on chart
    .attr("y", 25)// y position center vertically
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .attr("transform", "rotate(-90)")// Rotate the text 90 
    .text("Temperature");// temperature

/**** value labels (Low and high end) ****/

//------------------Minutes playing sims4---------------------
// X axis value labels (0 ), this is the minutes spend in the game.
svg.append("text")
    .attr("x", xScale(0))
    .attr("y", svgHeight - bottomMargin + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text("0 min");

// X axis value labels (60), this is the minutes spend in the game.
svg.append("text")
    .attr("x", xScale(60))
    .attr("y", svgHeight - bottomMargin + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text("60 min");

//-------------------Level of strees---------------------------------
// Y axis value labels (0min), this is the temperature
svg.append("text")
    .attr("x", leftMargin - 10)
    .attr("y", yScale(minTemp))
    .attr("text-anchor", "end")
    .style("font-size", "12px")
    .text(minTemp + "°C");

// Y axis value temperature(60min), this is the temperature
svg.append("text")
    .attr("x", leftMargin - 10)
    .attr("y", yScale(maxTemp))
    .attr("text-anchor", "end")
    .style("font-size", "12px")
    .text(maxTemp + "°C");


// I add the legends of the time of day
//----------------------------------
//------------ legends -------------
//----------------------------------

let timeOfDay = svg.append("g")
    .attr("transform", "translate(650, 80)"); /* TECHNICAL REFLECTION (Lab 8):
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

//---------------- Morning (Yellow) ---------------------
timeOfDay.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 30)
    .attr("fill", "yellow")
    .attr("stroke", "black");

timeOfDay.append("text")
    .attr("x", 30)
    .attr("y", 35)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Morning");

//---------------- Afternoon (Orange) ---------------------
timeOfDay.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 60)
    .attr("fill", "orange")
    .attr("stroke", "black");

timeOfDay.append("text")
    .attr("x", 30)
    .attr("y", 65)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Afternoon");

//---------------- Evening (Blue) ---------------------
timeOfDay.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 90)
    .attr("fill", "blue")
    .attr("stroke", "black");

timeOfDay.append("text")
    .attr("x", 30)
    .attr("y", 95)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Evening");

//---------------- None (Gray) ---------------------
timeOfDay.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 120)
    .attr("fill", "gray")
    .attr("stroke", "black");

timeOfDay.append("text")
    .attr("x", 30)
    .attr("y", 125)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("None / N/A");

// I add the legends of the strees level
//----------------------------------
//------------ legends -------------
//----------------------------------

let stressLegend = svg.append("g")
    .attr("transform", "translate(650, 260)"); /* TECHNICAL REFLECTION (Lab 8):
I learned how to use the group element <g> in D3 to encapsulate all the elements 
of a legend (circles and text). This allowed me to move the entire legend as a 
single unit using a single line of code (transform, translate), instead of 
calculating the position of each individual piece relative to the chart.
*/ //Link: https://stackoverflow.com/questions/52216447/how-to-group-g-elements-in-d3

//---------------Legend Title-------------------------------------
stressLegend.append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("font-weight", "bold")
    .text("Stress Categories");

//---------------- Relax---------------------
stressLegend.append("circle")
    .attr("r", rScale(1))
    .attr("cx", 15)
    .attr("cy", 30)
    .attr("fill", "none")
    .attr("stroke", "black");

stressLegend.append("text")
    .attr("x", 50)
    .attr("y", 35)
    .style("font-size", "12px")
    .text("0-1: Relax");

//---------------- Tense---------------------
stressLegend.append("circle")
    .attr("r", rScale(3))
    .attr("cx", 15)
    .attr("cy", 70)
    .attr("fill", "none")
    .attr("stroke", "black");

stressLegend.append("text")
    .attr("x", 50)
    .attr("y", 75)
    .style("font-size", "12px")
    .text("2-3: Tense");

//---------------- Very stressed---------------------
stressLegend.append("circle")
    .attr("r", rScale(5))
    .attr("cx", 15)
    .attr("cy", 115)
    .attr("fill", "none")
    .attr("stroke", "black");

stressLegend.append("text")
    .attr("x", 50)
    .attr("y", 120)
    .style("font-size", "12px")
    .text("4-5: Very Stressed");
