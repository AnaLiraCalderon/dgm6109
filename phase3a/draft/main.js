"use strict"

//-------------------------------------------------------------------
//-------------------------------Canva-------------------------------
//-------------------------------------------------------------------

/* Drawing size */
let svgWidth = 900;/* total width of the SVG */
let svgHeight = 600;/* total height of the SVG */
let margin = 150; // Margin 
//I change the margen and the size of the canva

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
    .attr("x", margin) /* Positions the top left corner of the rectangle inside the SVG by the margin amount */
    .attr("y", margin)/* Positions the top left corner of the rectangle inside the SVG by the margin amount */
    .attr("width", svgWidth - margin * 2) /* Width of the inner rectangle */
    .attr("height", svgHeight - margin * 2); /* total height minus top and bottom margins. */

//-------------------------------------------------------------------
//-------------------Dataset of my Sims4 data------------------------
//-------------------------------------------------------------------

//I change this part for put more information and also the temperature

/* Dataset of my Sims4 data coleection, date, minutes, stress level After playing sims4, temperature */
let simsGamingObservations = [ /* Declares the variable of Sims4 and the stress level that I had after playing */
    { date: "2026-01-24", minutesPlayed: 0, stressLevelAfter: 4, temperature: -1  },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-25", minutesPlayed: 0, stressLevelAfter: 5, temperature: 5 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-26", minutesPlayed: 30, stressLevelAfter: 2, temperature: 3 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-27", minutesPlayed: 0, stressLevelAfter: 1,  temperature: 5 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-28", minutesPlayed: 30, stressLevelAfter: 0, temperature: 6 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-29", minutesPlayed: 30, stressLevelAfter: 3, temperature: 9 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-30", minutesPlayed: 60, stressLevelAfter: 1, temperature: 9 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-01-31", minutesPlayed: 30, stressLevelAfter: 3, temperature: 12 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-01", minutesPlayed: 42, stressLevelAfter: 3, temperature: 8 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-02", minutesPlayed: 30, stressLevelAfter: 1, temperature: 9 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-03", minutesPlayed: 40, stressLevelAfter: 1, temperature: 11 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-04", minutesPlayed: 0, stressLevelAfter: 0, temperature: 16 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-05", minutesPlayed: 50, stressLevelAfter: 0, temperature: 14 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-06", minutesPlayed: 40, stressLevelAfter: 0, temperature: 15 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-07", minutesPlayed: 30, stressLevelAfter: 0, temperature: 11 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-08", minutesPlayed: 30, stressLevelAfter: 1, temperature: 10 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-09", minutesPlayed: 45, stressLevelAfter: 2, temperature: 7 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-10", minutesPlayed: 32, stressLevelAfter: 0, temperature: 3 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-11", minutesPlayed: 30, stressLevelAfter: 1, temperature: 9 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-12", minutesPlayed: 0, stressLevelAfter: 3, temperature: 8 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-13", minutesPlayed: 36, stressLevelAfter: 0, temperature: 8 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-14", minutesPlayed: 30, stressLevelAfter: 2, temperature: 9 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-15", minutesPlayed: 32, stressLevelAfter: 1, temperature: 3 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-16", minutesPlayed: 40, stressLevelAfter: 2, temperature: 5 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-17", minutesPlayed: 35, stressLevelAfter: 1, temperature: 6 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-17", minutesPlayed: 35, stressLevelAfter: 1, temperature: 6 },/* Date, minutesPlayed, stressLevel, temperature */
    { date: "2026-02-18", minutesPlayed: 37, stressLevelAfter: 3, temperature: 1 },/* Date, minutesPlayed, stressLevel, temperature */ 
    { date: "2026-02-19", minutesPlayed: 0, stressLevelAfter: 4, temperature: 4 },/* Date, minutesPlayed, stressLevel, temperature */ 
    { date: "2026-02-20", minutesPlayed: 41, stressLevelAfter: 3, temperature: 4 },/* Date, minutesPlayed, stressLevel, temperature */ 
    { date: "2026-02-21", minutesPlayed: 35, stressLevelAfter: 0, temperature: 8 },/* Date, minutesPlayed, stressLevel, temperature */ 
];
simsGamingObservations.sort(function(a, b) {
    return d3.descending(a.temperature, b.temperature);
});


//-------------------------------------------------------------------
//-------------------Create the scales-------------------------------
//-------------------------------------------------------------------


/* Determine the maximum minutes to set the X scale */
let maxMinutes = d3.max(simsGamingObservations, function (d) { /* The simsGamingObservation, the array of data */
    return d.minutesPlayed;/*D3 which property to check in each object */
});

/* Create Linear Scales for X and Y axes */
//------------------Minutes playing sims4---------------------
let xScale = d3.scaleLinear()//Declares a variable called xScale.
    .domain([0, maxMinutes]) // Minutes maximun an minutes
    .range([margin, svgWidth - margin]); //The range ensures that the points stay inside the inner margin of the SVG.

//-------------------Level of strees---------------------------------
let yScale = d3.scaleLinear()//Declares a variable called yScale.
    .domain([0, 5]) // Stress scale from 0 to 5
    .range([svgHeight - margin, margin]);//the bottom of the plotting area, the top of the plotting area

//-------------------Temperature---------------------------------
let rScale = d3.scaleLinear()
    .domain([
        d3.min(simsGamingObservations, function(d) { return d.temperature; }),
        d3.max(simsGamingObservations, function(d) { return d.temperature; })
    ])
    .range([4, 18]);
//I add this part of the temperature
    

//-------------------------------------------------------------------
//-------------------Create the circless-----------------------------
//-------------------------------------------------------------------


let circles = svg.selectAll("circle")//Declares a variable called circle
    .data(simsGamingObservations)//Binds the dataset to the selection.
    .join("circle");//Creates a circle for each data point to the d3

//I change this part for put the temperature
//Temperature, stress, minutes
circles.attr("r", function(d) {
        return rScale(d.temperature); 
    })
    .attr("fill", "black") 
    .attr("stroke", "black")
    .style("opacity", 0.5)
    .attr("cx", function(d) {
        return xScale(d.minutesPlayed);
    })
    .attr("cy", function(d) {
        return yScale(d.stressLevelAfter);
    });


    
//-------------------------------------------------------------------
//-------------------Axis labels and value markets-------------------
//-------------------------------------------------------------------


//------------------Minutes playing sims4 (horizontal title)---------------------
// X axis label including units
svg.append("text") // Adds a text element to the SVG.
    .attr("x", svgWidth / 2) // x position left on chart
    .attr("y", svgHeight - 15)// y position center vertically
    .attr("text-anchor", "middle") // anchor of the text in the middle in the base of the graphic
    .text("Time Playing The Sims 4 (Minutes)");// Text horizontal

//-------------------Level of strees (vertical title)---------------------------------
// Y axis label including measurement scale
svg.append("text")
    .attr("x", -svgHeight / 2)// x position left on chart
    .attr("y", 25)// y position center vertically
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .attr("transform", "rotate(-90)")// Rotate the text 90 
    .text("Final Stress Level (Scale 0-5)");// Strees level text vertically

/**** Value Labels (Scale Endpoints) ****/

//------------------Minutes playing sims4 (minimum and maximum values)---------------------
// X axis value labels (0 ), this is the minutes spend in the game.
svg.append("text")
    .attr("x", xScale(0))
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .style("font-size", "12px")// Size of the font
    .text("0");// Text 0
// X axis value labels (maxMinutes), this is the minutes spend in the game.
svg.append("text")
    .attr("x", xScale(maxMinutes))
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .style("font-size", "12px")// Size of the font
    .text(maxMinutes);// Text Maximun minutes

//-------------------Level of strees (minimum and maximum values) ---------------------------------
// Y axis value labels (0), this is the strees level 
svg.append("text")
    .attr("x", margin - 10)
    .attr("y", yScale(0))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")// anchor of the text in the middle in the base of the graphic
    .style("font-size", "12px")// Size of the font
    .text("0"); // Text 0

// Y axis value labels (5), this is the strees level 
svg.append("text")
    .attr("x", margin - 10)
    .attr("y", yScale(5))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")// anchor of the text in the middle in the base of the graphic
    .style("font-size", "12px")// Size of the font
    .text("5");// Text 5


//I add the legends of the temperature
//----------------------------------
//------------ legends -------------
//----------------------------------

let legendTemp = svg.append("g")
    .attr("transform", "translate(620, 50)"); 

//---------------Legend Title-------------------------------------
legendTemp.append("text")
    .attr("x", 150)
    .attr("y", 40)
    .style("font-weight", "bold")
    .style("font-size", "14px")
    .text("Temperature (°C)");

//---------------- Circle 1: Maximum (16°C)---------------------
legendTemp.append("circle")
    .attr("r", rScale(16))
    .attr("cx", 170)
    .attr("cy", 70)
    .attr("fill", "none") 
    .attr("stroke", "black");

legendTemp.append("text")
    .attr("x", 200)
    .attr("y", 75)
    .style("font-size", "12px")
    .text("16°C (High)");

//---------------- Circle 2: Medium-High (10°C)---------------------
legendTemp.append("circle")
    .attr("r", rScale(10))
    .attr("cx", 170)
    .attr("cy", 110)
    .attr("fill", "none") 
    .attr("stroke", "black");

legendTemp.append("text")
    .attr("x", 200)
    .attr("y", 112)
    .style("font-size", "12px")
    .text("10°C");

//---------------- Circle 3: Medium-Low (5°C)---------------------
legendTemp.append("circle")
    .attr("r", rScale(5))
    .attr("cx", 170)
    .attr("cy", 140)
    .attr("fill", "none") 
    .attr("stroke", "black");

legendTemp.append("text")
    .attr("x", 200)
    .attr("y", 143)
    .style("font-size", "12px")
    .text("5°C");

//---------------- Circle 4: Minimum (-1°C)---------------------
legendTemp.append("circle")
    .attr("r", rScale(-1))
    .attr("cx", 170)
    .attr("cy", 165)
    .attr("fill", "none") 
    .attr("stroke", "black");

legendTemp.append("text")
    .attr("x", 200)
    .attr("y", 168)
    .style("font-size", "12px")
    .text("-1°C (Low)");