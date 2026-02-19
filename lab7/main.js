"use strict"

/* Drawing size */
let svgWidth = 600;/* total width of the SVG */
let svgHeight = 400;/* total height of the SVG */
let margin = 65; // Margin 

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

/* Dataset of my Sims4 data coleection, date, minutes, stress level After playing sims4 */
let simsGamingObservations = [ /* Declares the variable of Sims4 and the stress level that I had after playing */
    { date: "2026-01-24", minutesPlayed: 0, stressLevelAfter: 4 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-25", minutesPlayed: 0, stressLevelAfter: 5 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-26", minutesPlayed: 30, stressLevelAfter: 2 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-27", minutesPlayed: 0, stressLevelAfter: 1 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-28", minutesPlayed: 30, stressLevelAfter: 0 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-29", minutesPlayed: 30, stressLevelAfter: 3 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-30", minutesPlayed: 60, stressLevelAfter: 1 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-01-31", minutesPlayed: 30, stressLevelAfter: 3 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-01", minutesPlayed: 42, stressLevelAfter: 3 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-02", minutesPlayed: 30, stressLevelAfter: 1 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-03", minutesPlayed: 40, stressLevelAfter: 1 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-04", minutesPlayed: 0, stressLevelAfter: 0 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-05", minutesPlayed: 50, stressLevelAfter: 0 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-06", minutesPlayed: 40, stressLevelAfter: 0 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-07", minutesPlayed: 30, stressLevelAfter: 0 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-08", minutesPlayed: 30, stressLevelAfter: 1 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-09", minutesPlayed: 45, stressLevelAfter: 2 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-10", minutesPlayed: 32, stressLevelAfter: 0 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-11", minutesPlayed: 30, stressLevelAfter: 1 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-12", minutesPlayed: 0, stressLevelAfter: 3 },/* Date, minutesPlayed, stressLevel */
    { date: "2026-02-13", minutesPlayed: 36, stressLevelAfter: 0 }/* Date, minutesPlayed, stressLevel */
];

/* Determine the maximum minutes to set the X scale in this case the number 60 */
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

    

//-------------------Create the circless-----------------------------
/* Draw the data points in grayscale */
let circles = svg.selectAll("circle")//Declares a variable called circle
    .data(simsGamingObservations)//Binds the dataset to the selection.
    .join("circle");//Creates a circle for each data point to the d3

circles.attr("r", 5)//Set the radius
    .attr("fill", "black")//Fills the circle with black color
    .attr("stroke", "black")//Draws the border of the circle in black
    .attr("cx", function (d) {//Sets the X position of each circle
 
//------------------Minutes playing sims4---------------------      
        return xScale(d.minutesPlayed);//converts minutes played
    })
//-------------------Level of strees---------------------------------
    .attr("cy", function (d) {//Sets the Y position of each circle
        return yScale(d.stressLevelAfter);//converts stress level
    });



/**** label the axes ****/

//------------------Minutes playing sims4---------------------
// X axis label including units
svg.append("text") // Adds a text element to the SVG.
    .attr("x", svgWidth / 2) // x position left on chart
    .attr("y", svgHeight - 15)// y position center vertically
    .attr("text-anchor", "middle") // anchor of the text in the middle in the base of the graphic
    .text("Time Playing The Sims 4 (Minutes)");// Text horizontal

//-------------------Level of strees---------------------------------
// Y axis label including measurement scale
svg.append("text")
    .attr("x", -svgHeight / 2)// x position left on chart
    .attr("y", 25)// y position center vertically
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .attr("transform", "rotate(-90)")// Rotate the text 90 
    .text("Final Stress Level (Scale 0-5)");// Strees level text vertically

/**** value labels (Low and high end) ****/

//------------------Minutes playing sims4---------------------
// X axis value labels (0 ), this is the minutes spend in the game.
svg.append("text")
    .attr("x", xScale(0))
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .style("font-size", "12px")// Size of the font
    .text("0");// Text 0
// X axis value labels (60), this is the minutes spend in the game.
svg.append("text")
    .attr("x", xScale(maxMinutes))
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")// anchor of the text in the middle in the base of the graphic
    .style("font-size", "12px")// Size of the font
    .text(maxMinutes);// Text Maximun minutes

//-------------------Level of strees---------------------------------
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