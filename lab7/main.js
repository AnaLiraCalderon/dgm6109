"use strict"

/* Configuration variables: drawing dimensions */
let svgWidth = 600;
let svgHeight = 400;
let margin = 65; // Margin 

/* Resize the container div to match the SVG width */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create the drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw the outer canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw the inner margin border (Dotted line from starter file) */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5") // Creates the dashed/dotted effect
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

/* Dataset: observations from your data collection form */
let simsGamingObservations = [
    { date: "2026-01-24", minutesPlayed: 0, stressLevelAfter: 4 },
    { date: "2026-01-25", minutesPlayed: 0, stressLevelAfter: 5 },
    { date: "2026-01-26", minutesPlayed: 30, stressLevelAfter: 2 },
    { date: "2026-01-27", minutesPlayed: 0, stressLevelAfter: 1 },
    { date: "2026-01-28", minutesPlayed: 30, stressLevelAfter: 0 },
    { date: "2026-01-29", minutesPlayed: 30, stressLevelAfter: 3 },
    { date: "2026-01-30", minutesPlayed: 60, stressLevelAfter: 1 },
    { date: "2026-01-31", minutesPlayed: 30, stressLevelAfter: 3 },
    { date: "2026-02-01", minutesPlayed: 42, stressLevelAfter: 3 },
    { date: "2026-02-02", minutesPlayed: 30, stressLevelAfter: 1 },
    { date: "2026-02-03", minutesPlayed: 40, stressLevelAfter: 1 },
    { date: "2026-02-04", minutesPlayed: 0, stressLevelAfter: 0 },
    { date: "2026-02-05", minutesPlayed: 50, stressLevelAfter: 0 },
    { date: "2026-02-06", minutesPlayed: 40, stressLevelAfter: 0 },
    { date: "2026-02-07", minutesPlayed: 30, stressLevelAfter: 0 },
    { date: "2026-02-08", minutesPlayed: 30, stressLevelAfter: 1 },
    { date: "2026-02-09", minutesPlayed: 45, stressLevelAfter: 2 },
    { date: "2026-02-10", minutesPlayed: 32, stressLevelAfter: 0 },
    { date: "2026-02-11", minutesPlayed: 30, stressLevelAfter: 1 },
    { date: "2026-02-12", minutesPlayed: 0, stressLevelAfter: 3 },
    { date: "2026-02-13", minutesPlayed: 36, stressLevelAfter: 0 }
];

/* Determine the maximum minutes to set the X scale */
let maxMinutes = d3.max(simsGamingObservations, function (d) {
    return d.minutesPlayed;
});

/* Create Linear Scales for X and Y axes */
let xScale = d3.scaleLinear()
    .domain([0, maxMinutes])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 5]) // Stress scale from 0 to 5
    .range([svgHeight - margin, margin]);

/* Draw the data points (Scatterplot circles) in grayscale */
let circles = svg.selectAll("circle")
    .data(simsGamingObservations)
    .join("circle");

circles.attr("r", 5)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("cx", function (d) {
        return xScale(d.minutesPlayed);
    })
    .attr("cy", function (d) {
        return yScale(d.stressLevelAfter);
    });

/**** label the axes ****/

// X axis label including units
svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 15)
    .attr("text-anchor", "middle")
    .text("Time Playing The Sims 4 (Minutes)");

// Y axis label including measurement scale
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Final Stress Level (Scale 0-5)");

/**** value labels (Low and high end) ****/

// X axis value labels (0 and max)
svg.append("text")
    .attr("x", xScale(0))
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text("0");

svg.append("text")
    .attr("x", xScale(maxMinutes))
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text(maxMinutes);

// Y axis value labels (0 and 5)
svg.append("text")
    .attr("x", margin - 10)
    .attr("y", yScale(0))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .style("font-size", "12px")
    .text("0");

svg.append("text")
    .attr("x", margin - 10)
    .attr("y", yScale(5))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .style("font-size", "12px")
    .text("5");