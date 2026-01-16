"use strict"

let drawingWidth = 500;
let drawingHeight = 500;

let trumpeterx = 100;//original 75
let trumpetery = 125;//original 50

/* I made my first drawing project with a lot of 
variables, so at the beginning everything was 
moving around. I had to make the numbers positive, 
and at that moment everything changed to normal.
I used my character’s head as the center of the 
coordinates, and it was the object I moved.
*/

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
    .attr("cx", trumpeterx)//horizontal
    .attr("cy", trumpetery)//vertical
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
    .attr("x1", 75)//this is the position up
    .attr("y1", 200)//this is the lenght of the object up
    .attr("x2", 75)//this is the position down
    .attr("y2", 280)//this is the lenght of the object down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter leg right */ 
let trumpeterLegRight = drawing.append("line")
    .attr("x1", 90)//this is the position up
    .attr("y1", 200)//this is the lenght of the object up
    .attr("x2", 90)//this is the position down
    .attr("y2", 280)//this is the lenght of the object down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter foot right */
let trumpeterFootRight = drawing.append("line")
    .attr("x1", 105)//this is the lengh of the foot horizontal
    .attr("y1", 285)//this is the lengh of the foot vertical
    .attr("x2", 90)//this is the position horizontal
    .attr("y2", 280)//this is the lenght of the object vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
trumpeter foot left */
let trumpeterFootLeft = drawing.append("line")
    .attr("x1", 90)//this is the lengh of the foot horizontal
    .attr("y1", 285)//this is the lengh of the foot vertical
    .attr("x2", 75)//this is the position horizontal
    .attr("y2", 280)//this is the lenght of the object vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);  

/* this is the 
trumpeter arm down left */
let trumpeterArmDownLeft = drawing.append("line")
    .attr("x1", 120)//arm poistion horizontal up
    .attr("y1", 90)//arm poistion vertical up
    .attr("x2", 80)//arm position horizontal down
    .attr("y2", 100)//arm position vertical down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);  

/* this is the 
trumpeter arm down right */
let trumpeterArmDownRight = drawing.append("line")
    .attr("x1", 115)//arm poistion horizontal up
    .attr("y1", 85)//arm poistion vertical up
    .attr("x2", 80)//arm position horizontal down
    .attr("y2", 95)//arm position vertical down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);  

/* this is the 
trumpeter arm up left */
let trumpeterArmUpLeft = drawing.append("line")
    .attr("x1", 120)//arm poistion horizontal down
    .attr("y1", 90)//arm poistion vertical down
    .attr("x2", 140)//arm position horizontal up
    .attr("y2", 55)//arm position vertical down
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1); 

/* this is the 
trumpeter arm right */
let trumpeterArmRight = drawing.append("line")
    .attr("x1", 115)//arm poistion horizontal up
    .attr("y1", 85)//arm poistion vertical up
    .attr("x2", 110)//arm position horizontal up
    .attr("y2", 55)//arm position vertical up
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
let trumpeterTrumpetDetail = drawing.append("rect")
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
    .attr("cx", 180)//horizontal
    .attr("cy", 55)//vertical
    .attr("r", 15)//radio
    .attr("fill", "none")
    .attr("fill", "#e0ae00")//this is the colour

/* this is the 
musical note circle up */
let trumpterNoteCircleUp = drawing.append("circle")
    .attr("cx", 210)//horizontal
    .attr("cy", 45)//vertical
    .attr("r", 5)//Radio
    .attr("fill", "none")
    .attr("fill", "black");//this is the colour

/* this is the 
musical note circle down */
let trumpterNoteCircleDown = drawing.append("circle")
    .attr("cx", 225)//horizontal
    .attr("cy", 50)//vertical
    .attr("r", 5)//Radio
    .attr("fill", "none")
    .attr("fill", "black");//this is the colour

/* this is the 
musical note line left */
let trumpeterNoteLineLeft = drawing.append("line")
    .attr("x1", 215)//this is the lengh of the note horizontal
    .attr("y1", 45)//this is the lengh of the note vertical
    .attr("x2", 215)//this is the position horizontal
    .attr("y2", 20)//this is the lenght of the object vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
musical note line right */
let trumpeterNoteLineRight = drawing.append("line")
    .attr("x1", 230)//this is the lengh of the Note horizontal
    .attr("y1", 50)//this is the lengh of the Note vertical
    .attr("x2", 230)//this is the position horizontal
    .attr("y2", 25)//this is the lenght of the Note rect vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);

/* this is the 
musical note line rect */
let trumpeterNoteLineRect = drawing.append("line")
    .attr("x1", 215)//this is the lengh of the Note Rect horizontal
    .attr("y1", 20)//this is the lengh of the Note Rect vertical
    .attr("x2", 230)//this is the position horizontal
    .attr("y2", 25)//this is the lenght of the Note Rect vertical
    .attr("stroke", "black")//this is the colour
    .attr("stroke-width", 1);