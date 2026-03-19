"use strict"

//-------------------------------//
/* DEFINE THE WIDTH AND HEIGHT */
//-------------------------------//

let svgWidth = 1200
let svgHeight = 900

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
/* DEFINE THE CANVAS */
//-------------------------------//

let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

svg.append("rect")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", "none")
    .attr("stroke", "black")

//-----------------------------------------------------------------------------//
/* CANVAS OF THE CALENDARY SCALE */ //I USE THE INFORMATION OF THE BASIC DRAWING
//-----------------------------------------------------------------------------//

//DEFINE THE SPACE OF THE GRID BASED IN THE SIZE OF THE CANVAS
let gridWidth = 400;// WIDTH BASED TO THE CANVAS
let gridHeight = 100;// HEIGHT BASED TO THE CANVAS
let gridX = (svgWidth / 2) - (gridWidth / 2); // HORIZONTAL CENTER
let gridY = (svgHeight / 2) - (gridHeight / 2); // VERTICAL CENTER

// HORIZONTAL LINE UP
svg.append("line")
    .attr("x1", gridX - 100) //HORIZONTAL LEFT
    .attr("y1", gridY) //VERTICAL LEFT
    .attr("x2", gridX + gridWidth + 100) //HORIZONTAL RIGHT
    .attr("y2", gridY) //HORIZONTAL LEFT
    .attr("stroke", "black")
    .attr("stroke-width", 3);
// HORIZONTAL LINE DOWN
svg.append("line")
    .attr("x1", gridX - 100)
    .attr("y1", gridY + gridHeight)
    .attr("x2", gridX + gridWidth + 100)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);
// VERTICAL LINES
svg.append("line")
    .attr("x1", gridX)
    .attr("y1", gridY)
    .attr("x2", gridX)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);

svg.append("line")
    .attr("x1", gridX + 80)
    .attr("y1", gridY)
    .attr("x2", gridX + 80)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);

svg.append("line")
    .attr("x1", gridX + 160)
    .attr("y1", gridY)
    .attr("x2", gridX + 160)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);

svg.append("line")
    .attr("x1", gridX + 240)
    .attr("y1", gridY)
    .attr("x2", gridX + 240)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);

svg.append("line")
    .attr("x1", gridX + 320)
    .attr("y1", gridY)
    .attr("x2", gridX + 320)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);

svg.append("line")
    .attr("x1", gridX + 400)
    .attr("y1", gridY)
    .attr("x2", gridX + 400)
    .attr("y2", gridY + gridHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 3);


//--------------------------------------------//
/* LOADING OF DATA BASE IN THE JSON AND FLOW  */ // I learn How to use it in the class of lab in the framework week 09
//--------------------------------------------//

(async function () {
    // LOADING OF DATA BASE JSON AND LOADING THE FUNTIONS 
    let data = await d3.json("data.json").then(simsGamingObservations);
    console.log("data loaded and labels placed");
})();

function simsGamingObservations(data) {
    let renderData = organizeData(data);
    buildScales(renderData);
    drawVisualization(renderData, svg);
    return data;
}

//--------------------------------------//
/*-----  CREATE A SCALE AND FUNTIONS---*/ // I learn How to use it in the class of lab in the framework week 09
//--------------------------------------//

/*-----  DAY ---*/
function organizeData(data) {
    /* FILTER THE JASON FOR USING USE THE OBJECTS THAT HAVE THE PROPERTY "DAY".*/
    let organized = data.filter(function(value) {
        // Returns only if the property exists if not it delet it     
        return value["day"] !== undefined; 
    });

    return organized;
}


/*-----  TIME OF THE DAY ---*/

function organizeData(data) {
    /* FILTER THE JASON FOR USING USE THE OBJECTS THAT HAVE THE PROPERTY "Time of day".*/
    let organized = data.filter(function(value) {
        // Returns only if the property exists if not it delet it     
        return value["Time of day"] !== undefined; 
    });

    return organized;
}

/*-----  My stress level after playing The Sims 4 ---*/

function organizeData(data) {
    /* FILTER THE JASON FOR USING USE THE OBJECTS THAT HAVE THE PROPERTY "My stress level....".*/
    let organized = data.filter(function(value) {
        // Returns only if the property exists if not it delet it     
        return value["My stress level after playing The Sims 4 level 😌 0-1 = 😐 Relax 2-3 = 😵 Tense 4-5= Very Stressed"]; 
    });

    return organized;
}
// I use this site for the emojis: https://stackoverflow.com/questions/18416749/adding-fontawesome-icons-to-a-d3-graph
/*-----  TEMPERATURE ---*/

function organizeData(data) {
    /* FILTER THE JASON FOR USING USE THE OBJECTS THAT HAVE THE PROPERTY "Temperature".*/
    let organized = data.filter(function(value) {
        // Returns only if the property exists if not it delet it     
        return value["Daily temperature °C"] !== undefined; 
    });

    return organized;
}

/*-----  MINUTES ---*/

function organizeData(data) {
    /* FILTER THE JASON FOR USING USE THE OBJECTS THAT HAVE THE PROPERTY "Minutes".*/
    let organized = data.filter(function(value) {
        // Returns only if the property exists if not it delet it     
        return value["Minutes (0–60 minutes)"] !== undefined; 
    });

    return organized;
}


function buildScales(data) { //I build the scale of the data
}

//-------------------------------//
/*--- DRAWING THE INFORMATION ---*/
//-------------------------------//

function drawVisualization(data, drawing) {
    let gridWidth = 500; // WIDTH BASED TO THE CANVAS
    let gridHeight = 100; // HEIGHT BASED TO THE CANVAS
    let gridX = (svgWidth / 2) - (gridWidth / 2); // HORIZONTAL CENTER
    let gridY = (svgHeight / 2) - (gridHeight / 2); // VERTICAL CENTER

    // I DEFINE THE SCALE OF THE RADIO FOR THE CIRCLES BASED ON THE TEMPERATURED
    let rScale = d3.scaleLinear()
        .domain([-1, 16]) // TEMPERATURE SCALE
        .range([20, 20]);  // SIZE OF THE CIRCLE

    /* --- Drawing labels and circles --- */
    data.forEach(function(d, i) {
        // conditional
        if (i <= 6) {
            let xPos = gridX + (i * 83.2); // define the space between the days, defined the x position


        // DAY
            drawing.append("text")
                .attr("x", xPos)
                .attr("y", gridY - 60)
                .attr("text-anchor", "middle")
                .attr("font-family", "sans-serif")
                .attr("font-size", "12px")
                .attr("font-weight", "bold")
                .text(d.day);

        //MINUTES
            drawing.append("text")
            .attr("x", xPos )
            .attr("y", gridY - 21)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .text(d["Minutes (0–60 minutes)"]);

         //TIME OF THE DAY
            drawing.append("text")
            .attr("x", xPos )
            .attr("y", gridY + 80)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .text(d["Time of day"]);

        //TEMPERATURE
            drawing.append("circle")
                .attr("cx", xPos)
                .attr("cy", gridY + (gridHeight / 3)) // VERTICAL CENTER IN THE CANVA
                .attr("r", rScale(d["Daily temperature °C"])) // RADIO OF THE CIRCLE OF TEMPERATURE
                .attr("fill", function() {
                    // FUNTION OF COLOR FOR TEMPERATURE
                    let temp = d["Daily temperature °C"];
                    if (temp <= 5) {
                        return "#001affff"; // BLUE
                    } if (temp <= 10) {
                        return "#ff8000ff"; // ORANGE
                    } else {
                        return "#ff0004ff"; //RED
                    }
                })

        // STRESS LEVEL AFTER PLAYING THE SIMS 4
        // I use this site for the emojis: https://stackoverflow.com/questions/18416749/adding-fontawesome-icons-to-a-d3-graph

            let stressVal = d["My stress level after playing The Sims 4 level 😌 0-1 = 😐 Relax 2-3 = 😵 Tense 4-5= Very Stressed"];

            drawing.append("text")
                .attr("x", xPos)
                .attr("y", gridY + (gridHeight / 3) + 7) // +7 FOR CENTER THE EMOGY
                .attr("text-anchor", "middle")
                .attr("font-size", "22px")
                .text(function() {
                    // IF AND RETURN LOGIC
                    if (stressVal <= 1) {
                        return "😌"; 
                    } if (stressVal <= 3) {
                        return "😐"; 
                    } else {
                        return "😵"; 
                    }
                });
        }
        
        
    });
}


//----------------------------------
//------------ legends -------------
//----------------------------------

let timeOfDay = svg.append("g")
    .attr("transform", "translate(290, 80)"); /* TECHNICAL REFLECTION (Lab 8):
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
    .attr("stroke", "#020202ff") // Color gris claro para el borde
    .attr("rx", 5); // Bordes redondeados opcionales

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
    .text("Morning (10:00 a.m. - 12:00 p.m.)");

//---------------- Afternoon  ---------------------

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 65)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Afternoon (12:00 p.m. - 5:00 p.m.)");

//---------------- Evening  ---------------------

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 95)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Evening (5:00 p.m. - 8:00 p.m.)");

timeOfDay.append("text")
    .attr("x", 0)
    .attr("y", 120)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Not playing: ");

let temperature = svg.append("g")
.attr("transform", "translate(535, 80)"); /* TECHNICAL REFLECTION (Lab 8):
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
    .attr("width", 190)
    .attr("height", 160)
    .attr("fill", "none")
    .attr("stroke", "#020202ff")
    .attr("rx", 5);

temperature.append("line")
    .attr("x1", -10)
    .attr("y1", 8)
    .attr("x2", 180)
    .attr("y2", 8)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

//---------------- Cold day (blue) ---------------------

temperature.append("text")
    .attr("x", 40)
    .attr("y", 35)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Cold Days (>=-1°C).");

temperature.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 30)
    .attr("fill", "blue")

//---------------- Moderate (Orange) ---------------------

temperature.append("text")
    .attr("x", 40)
    .attr("y", 65)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Moderate (=<10°C).");

temperature.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 60)
    .attr("fill", "orange")

//---------------- Hot day (Red) ---------------------

temperature.append("text")
    .attr("x", 40)
    .attr("y", 95)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("Hot Days (=<16°C).");

temperature.append("circle")
    .attr("r", 8)
    .attr("cx", 10)
    .attr("cy", 90)
    .attr("fill", "red")
    

let stressLevelAfter = svg.append("g")
.attr("transform", "translate(750, 80)"); /* TECHNICAL REFLECTION (Lab 8):
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
    .text("😌");

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
    .text("😐");

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
    .text("😵");

stressLevelAfter.append("text")
    .attr("x", 40)
    .attr("y", 92)
    .style("font-size", "12px")
    .style("font-family", "sans-serif")
    .text("4-5 (Very Stressed)");
    