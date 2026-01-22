"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice;

function processForm() {
 
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);
   
    choice = document.getElementById("trumpeterPlay").value;

    drawing.selectAll('svg>*').remove(); 
    drawImage();
}

let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

function drawImage() {

    let trumpeterX = xInput;
    let trumpeterY = yInput;

    /* trumpeter girl or boy */

    /* this is the 
    trumpeter head */
    let trumpeterHead = drawing.append("circle")
        .attr("cx", trumpeterX-25)//horizontal, //original 75
        .attr("cy", trumpeterY-250)//vertical, // original 50
        .attr("r", 20)
        .attr("fill", "#ffc1c1");//This is the colour
  
  /* this is the 
    trumpeter leg left */
    let trumpeterLegLeft = drawing.append("line")
        .attr("x1", trumpeterX-25)//this is the position up, //original 75
        .attr("y1", trumpeterY-99)//this is the lenght of the object up, //original 201
        .attr("x2", trumpeterX-25)//this is the position down, //original 75
        .attr("y2", trumpeterY-21)//this is the lenght of the object down, //original 279
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter leg right */
    let trumpeterLegRight = drawing.append("line")
        .attr("x1", trumpeterX-10)//this is the position up, //original 90
        .attr("y1", trumpeterY-99)//this is the lenght of the object up, //original 201
        .attr("x2", trumpeterX-10)//this is the position down, //original 90
        .attr("y2", trumpeterY-21)//this is the lenght of the object down, //original 279
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter body */
    let trumpeterBody = drawing.append("polygon")
        .attr("points", closedPolygon(trumpeterX-25, trumpeterY-230,//up//original 75, 70
            trumpeterX-66, trumpeterY-89,//leftdown //up//original 34, 211
            trumpeterX-25, trumpeterY-99,//centerdown //up//original 75, 201
            trumpeterX+15, trumpeterY-89,//rightdown //up//original 115, 211
        ))
        .attr("fill", "#ffc3ff");//this is the colour

    /* this is the 
    trumpeter foot right */
    let trumpeterFootRight = drawing.append("line")
        .attr("x1", trumpeterX+5)//this is the lengh of the foot horizontal, //original 105
        .attr("y1", trumpeterY-16)//this is the lengh of the foot vertical, //original 284
        .attr("x2", trumpeterX-10)//this is the position horizontal, //original 90
        .attr("y2", trumpeterY-21)//this is the lenght of the object vertical, //original 279
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter foot left */
    let trumpeterFootLeft = drawing.append("line")
        .attr("x1", trumpeterX-10)//this is the lengh of the foot horizontal, //original 90
        .attr("y1", trumpeterY-16)//this is the lengh of the foot vertical, //original 284
        .attr("x2", trumpeterX-25)//this is the position horizontal, //original 75
        .attr("y2", trumpeterY-21)//this is the lenght of the object vertical, //original 279
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter arm down left */
    let trumpeterArmDownLeft = drawing.append("line")
        .attr("x1", trumpeterX+20)//arm poistion horizontal up, //original 120
        .attr("y1", trumpeterY-212)//arm poistion vertical up, //original 88
        .attr("x2", trumpeterX-20)//arm position horizontal down, //original 80
        .attr("y2", trumpeterY-201)//arm position vertical down, //original 99
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter arm down right */
    let trumpeterArmDownRight = drawing.append("line")
        .attr("x1", trumpeterX+15)//arm poistion horizontal up, //original 115
        .attr("y1", trumpeterY-216)//arm poistion vertical up, //original 84
        .attr("x2", trumpeterX-20)//arm position horizontal down, //original 80
        .attr("y2", trumpeterY-206)//arm position vertical down, //original 94
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter arm up left */
    let trumpeterArmUpLeft = drawing.append("line")
        .attr("x1", trumpeterX+20)//arm poistion horizontal down, //original 120
        .attr("y1", trumpeterY-212)//arm poistion vertical down, //original 88
        .attr("x2", trumpeterX+30)//arm position horizontal up, //original 130
        .attr("y2", trumpeterY-245)//arm position vertical down, //original 55
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    trumpeter arm right */
    let trumpeterArmRight = drawing.append("line")
        .attr("x1", trumpeterX+15)//arm poistion horizontal up, //original 115
        .attr("y1", trumpeterY-216)//arm poistion vertical up, //original 84
        .attr("x2", trumpeterX+5)//arm position horizontal up, //original 105
        .attr("y2", trumpeterY-245)//arm position vertical up, //original 55
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);
  /* this is the 
    trumpeter trumpet body */
  
    let trumpeterTrumpBody = drawing.append("rect")
        .attr("x", trumpeterX-5)//position of the trumpetbody horizontal, //original 95
        .attr("y", trumpeterY-250)//position of the trumpetbody Vertical, //original 50
        .attr("width", 60)//Width of the trumpetbody horizontal
        .attr("height", 5)//Width of the trumpetbody vertical
        .attr("fill", "#e0ae00")//this is the colour

    /* this is the 
    trumpeter trumpet detail */
    let trumpeterTrumpetDetail = drawing.append("rect")
        .attr("x", trumpeterX+30)//position of the trumpetbody horizontal, //original 130
        .attr("y", trumpeterY-250)//position of the trumpetbody Vertical, //original 50
        .attr("width", 5)//width of the trumpetbody horizontal
        .attr("height", 5)//width of the trumpetbody vertical
        .attr("fill", "none")//this is the colour
        .attr("fill", "black");

    /* this is the 
    trumpeter Trumpet triangle */
    let trumpeterTrumpet = drawing.append("polygon")
        .attr("points", closedPolygon(trumpeterX+45, trumpeterY-250, //leftup corner , //original 145, 50
            trumpeterX+70, trumpeterY-270, //rightup corner, //original 170, 30
            trumpeterX+70, trumpeterY-225, //rightdown corner, //original 170, 75
            trumpeterX+45, trumpeterY-245)) //leftdown corner, //original 145, 55
        .attr("fill", "#e0ae00")//this is the colour

    /* this is the 
  trumpet Circle */
    let trumpterTrumpetCircle = drawing.append("circle")
        .attr("cx", trumpeterX+65)//horizontal, //original 165
        .attr("cy", trumpeterY-247.5)//vertical, //original 52.5
        .attr("r", 11.5)//radio
        .attr("fill", "none")
        .attr("fill", "#e0ae00")//this is the colour
    /* this is the musical note circle up */

    /* I changed the musical note to make the trumpeter 
    play more intense music. I made a larger musical note 
    and added two more.*/
if (choice === "play"){

    let trumpterNoteCircleUp = drawing.append("circle")
        .attr("cx", trumpeterX+90)//horizontal, //original 190
        .attr("cy", trumpeterY-255)//vertical, //original 45
        .attr("r", 5)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour

    /* this is the 
    musical note circle down */
    let trumpterNoteCircleDown = drawing.append("circle")
        .attr("cx", trumpeterX+105)//horizontal, //original 205
        .attr("cy", trumpeterY-250)//vertical, //original 50
        .attr("r", 5)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour
 
    /* this is the 
    musical note line left */
    let trumpeterNoteLineLeft = drawing.append("line")
        .attr("x1", trumpeterX+95)//this is the lengh of the note horizontal//original 195
        .attr("y1", trumpeterY-255)//this is the lengh of the note vertical, //original 45
        .attr("x2", trumpeterX+95)//this is the position horizontal, //original 195
        .attr("y2", trumpeterY-280)//this is the lenght of the object vertical, //original 20
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line right */
    let trumpeterNoteLineRight = drawing.append("line")
        .attr("x1", trumpeterX+110)//this is the lengh of the Note horizontal, //original 210
        .attr("y1", trumpeterY-250)//this is the lengh of the Note vertical, //original 50
        .attr("x2", trumpeterX+110)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-275)//this is the lenght of the Note rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line rect */
    let trumpeterNoteLineRect = drawing.append("line")
        .attr("x1", trumpeterX+95)//this is the lengh of the Note Rect horizontal, //original 195
        .attr("y1", trumpeterY-280)//this is the lengh of the Note Rect vertical, //original 20
        .attr("x2", trumpeterX+110)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-275)//this is the lenght of the Note Rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);
}else {
/* Big musical note */
    let trumpterNoteCircleUp = drawing.append("circle")
        .attr("cx", trumpeterX+90)//horizontal, //original 190
        .attr("cy", trumpeterY-200)//vertical, //original 45
        .attr("r", 15)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour

    /* this is the 
    musical note circle down */
    let trumpterNoteCircleDown = drawing.append("circle")
        .attr("cx", trumpeterX+130)//horizontal, //original 205
        .attr("cy", trumpeterY-195)//vertical, //original 50
        .attr("r", 15)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour
 
    /* this is the 
    musical note line left */
    let trumpeterNoteLineLeft = drawing.append("line")
        .attr("x1", trumpeterX+105)//this is the lengh of the note horizontal//original 195
        .attr("y1", trumpeterY-260)//this is the lengh of the note vertical, //original 45
        .attr("x2", trumpeterX+105)//this is the position horizontal, //original 195
        .attr("y2", trumpeterY-200)//this is the lenght of the object vertical, //original 20
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line right */
    let trumpeterNoteLineRight = drawing.append("line")
        .attr("x1", trumpeterX+145)//this is the lengh of the Note horizontal, //original 210
        .attr("y1", trumpeterY-250)//this is the lengh of the Note vertical, //original 50
        .attr("x2", trumpeterX+145)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-195)//this is the lenght of the Note rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line rect */
    let trumpeterNoteLineRect = drawing.append("line")
        .attr("x1", trumpeterX+105)//this is the lengh of the Note Rect horizontal, //original 195
        .attr("y1", trumpeterY-260)//this is the lengh of the Note Rect vertical, //original 20
        .attr("x2", trumpeterX+145)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-250)//this is the lenght of the Note Rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

 if (choice === "superPlay"){

    let trumpterNoteCircleUp = drawing.append("circle")
        .attr("cx", trumpeterX+190)//horizontal, //original 190
        .attr("cy", trumpeterY-120)//vertical, //original 45
        .attr("r", 5)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour

    /* this is the 
    musical note circle down */
    let trumpterNoteCircleDown = drawing.append("circle")
        .attr("cx", trumpeterX+210)//horizontal, //original 205
        .attr("cy", trumpeterY-110)//vertical, //original 50
        .attr("r", 5)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour
 
    /* this is the 
    musical note line left */
    let trumpeterNoteLineLeft = drawing.append("line")
        .attr("x1", trumpeterX+195)//this is the lengh of the note horizontal//original 195
        .attr("y1", trumpeterY-120)//this is the lengh of the note vertical, //original 45
        .attr("x2", trumpeterX+195)//this is the position horizontal, //original 195
        .attr("y2", trumpeterY-145)//this is the lenght of the object vertical, //original 20
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line right */
    let trumpeterNoteLineRight = drawing.append("line")
        .attr("x1", trumpeterX+215)//this is the lengh of the Note horizontal, //original 210
        .attr("y1", trumpeterY-110)//this is the lengh of the Note vertical, //original 50
        .attr("x2", trumpeterX+215)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-140)//this is the lenght of the Note rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line rect */
    let trumpeterNoteLineRect = drawing.append("line")
        .attr("x1", trumpeterX+195)//this is the lengh of the Note Rect horizontal, //original 195
        .attr("y1", trumpeterY-145)//this is the lengh of the Note Rect vertical, //original 20
        .attr("x2", trumpeterX+215)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-140)//this is the lenght of the Note Rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);
 }      
if (choice === "superPlay"){

    let trumpterNoteCircleUp = drawing.append("circle")
        .attr("cx", trumpeterX+120)//horizontal, //original 190
        .attr("cy", trumpeterY-120)//vertical, //original 45
        .attr("r", 5)//Radio
        .attr("fill", "none")
        .attr("fill", "black");//this is the colour

    /* this is the 
    musical note line left */
    let trumpeterNoteLineLeft = drawing.append("line")
        .attr("x1", trumpeterX+125)//this is the lengh of the note horizontal//original 195
        .attr("y1", trumpeterY-120)//this is the lengh of the note vertical, //original 45
        .attr("x2", trumpeterX+125)//this is the position horizontal, //original 195
        .attr("y2", trumpeterY-145)//this is the lenght of the object vertical, //original 20
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);

    /* this is the 
    musical note line rect */
    let trumpeterNoteLineRect = drawing.append("line")
        .attr("x1", trumpeterX+125)//this is the lengh of the Note Rect horizontal, //original 195
        .attr("y1", trumpeterY-145)//this is the lengh of the Note Rect vertical, //original 20
        .attr("x2", trumpeterX+140)//this is the position horizontal, //original 210
        .attr("y2", trumpeterY-140)//this is the lenght of the Note Rect vertical, //original 25
        .attr("stroke", "black")//this is the colour
        .attr("stroke-width", 1);
 }    
}
   
    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}
