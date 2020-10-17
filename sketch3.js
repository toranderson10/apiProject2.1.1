//let apiKey = 'pneeaLb2j2r8ZYdARlmzRaZGp6DG8ocO'
let myPlayer, myPlayername1, myPlayerteam1, myPlayerlname1, myPlayerposition1= [];
let myPlayer2, myPlayername2, myPlayerteam2, myPlayerlname2, myPlayerposition2= [];
// let myPlayer3, myPlayername3, myPlayerteam3, myPlayerlname3, myPlayerposition3= [];
// let myPlayer4, myPlayername4, myPlayerteam4, myPlayerlname4, myPlayerposition4= [];
// let myPlayer5, myPlayername5, myPlayerteam5, myPlayerlname5, myPlayerposition5= [];
// let myPlayer6, myPlayername6, myPlayerteam6, myPlayerlname6, myPlayerposition6= [];
let x;
let y;


function setup() {

  httpGet('https://www.balldontlie.io/api/v1/players', 'json', myCallback);
  createCanvas(1400, 600);
  background(249, 224, 205);
}

function myCallback(result) {
  console.log(result.data[1]);
  console.log(result.data[2]);


//   for(let i=0; i<6; i++){
//     players.push(new Player(result.data[i+1]));
// }
//i will make a parent class later in time

  myPlayer1= result.data[1]
  myPlayername1 = result.data[1].first_name;
  myPlayerlname1 = result.data[1].last_name;
  myPlayerteam1 = result.data[1].team.full_name;
  myPlayerposition1 = result.data[1].position;

  // myPlayer2
  myPlayername2 = result.data[2].first_name;
  myPlayerteam2= result.data[2].team.full_name;
  myPlayerlname2 = result.data[2].last_name;
  myPlayerposition2 = result.data[2].position;
}




function draw(){

    fill(100, 102, 153);
    textSize(20);
    textFont('TimesNewRoman');
    text('as they say:', 10, 20);
    text('ball dont lie',10, 40);

    fill(100,300,200);
    textSize(15);
    textFont('TimesNewRoman');
    textSize(10);
    fill(100,200,300);
    text('find your playerz position!', 10, 135);
    textSize(18);
    fill(100,400,100);
    text('key', 10, 150);
    textSize(14);
    fill(2);
    noStroke();
    text('F = forward', 10, 170);
    text('G = guard', 10, 185);
    text('C = center', 10, 200);
    text('PG = point guard', 10, 215);

    textH = 20
    textSize(textH);
    fill(255, 0, 0, 255);

    //make a grid
    for (let z = 0; z < width; z += width / 10) {
    for (let m = 0; m < height; m += height / 5) {
    stroke(0);
    strokeWeight(1);
    line(z, 0, z, height);
    line(0, m, width, m);
              }
      textH = 19
      textSize(textH);

      fill(65,105,225);
      textSize(textH);
      text([myPlayername1], 282, 135);
      text([myPlayerlname1], 315, 135);
      text([myPlayerteam1], 282, 155);
      //textExpand1('yay','no', 300, 150);
      textSize(textH);

//intervals for boxes at 140 + 120
    if ((mouseX > 275) && (mouseX < 415) &&
        (mouseY > 130) && (mouseY < 233)) {
      text([myPlayerposition1], mouseX, mouseY);
      // mouseX, mouseY, 200, 200;

    if (mouseIsPressed) {
      noFill();
      stroke(0,255,0);
      rect(mouseX, mouseY, 145, 115)

      fill(0,122,51);
      textSize(textH);
      text([myPlayername2], 420, 135);
      text([myPlayerlname2], 480, 135);
      text([myPlayerteam2], 420, 155);
}



       //intervals for boxes at 140 + 120
       // if ((mouseX > 415) && (mouseX < 560) &&
       //   (mouseY > 255) && (mouseY < 375)) {
       // text([myPlayerposition2], mouseX, mouseY);
       //
       // if (mouseIsPressed) {
       // noFill();
       // stroke(0,255,0);
       // rect(mouseX, mouseY, 145, 115)
       // }
       //  }



  // if ((mouseX > 250) && (mouseX < 400) &&
  //     (mouseY > 200) && (mouseY < 400)) {
  //     text("fix me")
  //   mouseX, mouseY, 200, 200;
  // if (mouseIsPressed) {
  //   noFill();
  //   stroke(0, 255, 0);
  //   rect(mouseX, mouseY, 145, 115);



      //create hover function 2
      // function textExpand1(textMain, textAdd, textX, textY, textH){
      // textSize(textH);
      // text(textMain, textAdd, textX, textY);
      // //textW = textWidth(textMain)
      // if (mouseX > textX && mouseX < textX && mouseY < textY && mouseY > textY-textH) {
      // text(textAdd, textX, textY+5+textH);



    //  displayPosition();

//create a hover function to show the position of the players
 // if ((mouseX > 250) && (mouseX < 400) &&
 //     (mouseY > 200) && (mouseY < 400)) {
 //    fill(100);
 //
 // } else {
 //     fill(0,200,300);
 //   }
 //   rect(300, 190, 100, 50);
 // }

 //create hover function 2
 // function textExpand(textMain, textAdd, textX, textY, textH){
 //     textSize(25);
 //     text(textMain, textAdd, textX, textY);
 //     //textW = textWidth(textMain)
 //   if (mouseX > textX && mouseX < textX && mouseY < textY && mouseY > textY-textH) {
 //     text(textAdd, textX, textY+5+textH);
 //         }





// displayPosition(){
//    if ((mouseX > 250) && (mouseX < 400) &&
//       (mouseY > 200) && (mouseY < 400)) {
//     fill(10);
//     textSize(10);
//     text(myPlayerposition1)}
//
//   else {
//     textSize(15);
//     text('ball dont lie', 200, 30)
//   }




}
}
}
