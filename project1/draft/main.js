"use strict"

let drawingWidth = 500;
let drawingHeight = 500;

let trumpeterx = drawingWidth;
let trumpetery = drawingHeight;


let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");//this is the colour

/* trumpeter girl or boy */

/* this is the 
trumpeter head */
let trumpeterHead = drawing.append("circle")
    .attr("cx", trumpeterx -425)//horizontal
    .attr("cy", trumpetery -450)//vertical
    .attr("r", 20)
    .attr("fill", "#ffc1c1");//This is the colour
  
/* this is the 
trumpeter body */
let trumpeterBody = drawing.append("polygon")
    .attr("points", closedPolygon(75,70,//up
                                    35,210,//leftdown
                                    75,200,//centerdown
                                    115,210,//rightdown
    ))
    .attr("fill", "#ffc3ff");//this is the colour

/* this is the 
trumpeter leg left */
let trumpeterLegLeft = drawing.append("line")
    .attr("x1", trumpeterx -425)//this is the position up
    .attr("y1", trumpetery -300)//this is the lenght of the object up
    .attr("x2", trumpeterx -425)//this is the position down
    .attr("y2", trumpetery -220)//this is the lenght of the object down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter leg right */ 
let trumpeterLegright = drawing.append("line")
    .attr("x1", trumpeterx -410)//this is the position up
    .attr("y1", trumpetery -300)//this is the lenght of the object up
    .attr("x2", trumpeterx -410)//this is the position down
    .attr("y2", trumpetery -220)//this is the lenght of the object down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter foot right */
let trumpeterFootRight = drawing.append("line")
    .attr("x1", trumpeterx -395)//this is the lengh of the foot horizontal
    .attr("y1", trumpetery -215)//this is the lengh of the foot vertical
    .attr("x2", trumpeterx -410)//this is the position horizontal
    .attr("y2", trumpetery -220)//this is the lenght of the object vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter foot left */
let trumpeterFootLeft = drawing.append("line")
    .attr("x1", trumpeterx -410)//this is the lengh of the foot horizontal
    .attr("y1", trumpetery -215)//this is the lengh of the foot vertical
    .attr("x2", trumpeterx -425)//this is the position horizontal
    .attr("y2", trumpetery -220)//this is the lenght of the object vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);  

/* this is the 
trumpeter arm down left */
let trumpeterArmDownLeft = drawing.append("line")
    .attr("x1", trumpeterx -380)//arm poistion horizontal up
    .attr("y1", trumpetery -410)//arm poistion vertical up
    .attr("x2", trumpeterx -420)//arm position horizontal down
    .attr("y2", trumpetery -400)//arm position vertical down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);  

/* this is the 
trumpeter arm down right */
let trumpeterArmDownRight = drawing.append("line")
    .attr("x1", trumpeterx -385)//arm poistion horizontal up
    .attr("y1", trumpetery -415)//arm poistion vertical up
    .attr("x2", trumpeterx -420)//arm position horizontal down
    .attr("y2", trumpetery -405)//arm position vertical down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);  

/* this is the 
trumpeter arm up left */
let trumpeterArmUpLeft = drawing.append("line")
    .attr("x1", trumpeterx -380)//arm poistion horizontal down
    .attr("y1", trumpetery -410)//arm poistion vertical down
    .attr("x2", trumpeterx -360)//arm position horizontal up
    .attr("y2", trumpetery -445)//arm position vertical down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1); 

/* this is the 
trumpeter arm right */
let trumpeterArmRight = drawing.append("line")
    .attr("x1", trumpeterx -385)//arm poistion horizontal up
    .attr("y1", trumpetery -415)//arm poistion vertical up
    .attr("x2", trumpeterx -390)//arm position horizontal up
    .attr("y2", trumpetery -445)//arm position vertical up
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter trumpet body */
let trumpeterTrumpBody = drawing.append("rect")
    .attr("x", 95)//position of the trumpetbody horizontal
    .attr("y", 50)//position of the trumpetbody Vertical
    .attr("width", 60)//Width of the trumpetbody horizontal
    .attr("height", 5)//Width of the trumpetbody vertical
    .attr("fill", "#e0ae00")//this is the colour

/* this is the 
trumpeter trumpet detail */
let trumpeterTrumpdetail = drawing.append("rect")
    .attr("x", 140)//position of the trumpetbody horizontal
    .attr("y", 50)//position of the trumpetbody Vertical
    .attr("width", 5)//width of the trumpetbody horizontal
    .attr("height", 5)//width of the trumpetbody vertical
    .attr("fill", "none")//this is the colour
    .attr("fill", "black");

/* this is the 
trumpeter Trumpet triangle */
let trumpeterTrumpet = drawing.append("polygon")
    .attr("points", closedPolygon (155,50, //leftup corner
                                    185,30, //rightup corner
                                    185,80, //rightdown corner
                                    155,55)) //leftdown corner
  .attr("fill", "#e0ae00")//this is the colour

  /* this is the 
trumpet Circle */
let trumpterTrumpetCircle = drawing.append("circle")
    .attr("cx", trumpeterx -320)//horizontal
    .attr("cy", trumpetery -445)//vertical
    .attr("r", 15)//radio
    .attr("fill", "none")
    .attr("fill", "#e0ae00")//this is the colour

/* this is the 
musical note circle up */
let trumpterNoteCircleUp = drawing.append("circle")
    .attr("cx", trumpeterx -290)//horizontal
    .attr("cy", trumpetery -455)//vertical
    .attr("r", 5)//Radio
    .attr("fill", "none")
    .attr("fill", "black");//this is the colour

/* this is the 
musical note circle down */
let trumpterNoteCircleDown = drawing.append("circle")
    .attr("cx", trumpeterx -275)//horizontal
    .attr("cy", trumpetery -450)//vertical
    .attr("r", 5)//Radio
    .attr("fill", "none")
    .attr("fill", "black");//this is the colour

/* this is the 
musical note line left */
let trumpeterNoteLineLeft = drawing.append("line")
    .attr("x1", trumpeterx -285)//this is the lengh of the note horizontal
    .attr("y1", trumpetery -455)//this is the lengh of the note vertical
    .attr("x2", trumpeterx -285)//this is the position horizontal
    .attr("y2", trumpetery -480)//this is the lenght of the object vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
musical note line right */
let trumpeterNoteLineRight = drawing.append("line")
    .attr("x1", trumpeterx -270)//this is the lengh of the Note horizontal
    .attr("y1", trumpetery -450)//this is the lengh of the Note vertical
    .attr("x2", trumpeterx -270)//this is the position horizontal
    .attr("y2", trumpetery -475)//this is the lenght of the Note rect vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
musical note line rect */
let trumpeterNoteLineRect = drawing.append("line")
    .attr("x1", trumpeterx -285)//this is the lengh of the Note Rect horizontal
    .attr("y1", trumpetery -480)//this is the lengh of the Note Rect vertical
    .attr("x2", trumpeterx -270)//this is the position horizontal
    .attr("y2", trumpetery -475)//this is the lenght of the Note Rect vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);