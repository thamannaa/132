img="";
status_object="";
function preload(){
img=loadImage("dog and cat.jpg");
}

function setup(){
canvas=createCanvas(640,320);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting object";
}

function modelLoaded(){
    console.log("model loaded!");
    status_object=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}

function draw(){
image(img,0,0,640,320);
fill("black");
text("dog",45,75);
noFill();
stroke("black");
rect(30,60,450,350);
fill("black");
text("cat",320,150);
noFill();
stroke("black");
rect(310,130,450,350);
}
