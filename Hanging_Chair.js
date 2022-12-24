img ="";
status ="";
objects ="";

function back(){
    window.location ="index.html";
}

function preload(){
    img = loadImage('Hanging_chair.webp');
}

function setup(){
    canvas =createCanvas(640, 375); 
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects..."; 
}

function draw(){
    image(img,0,0,640,420);

    rect()
    if (status = true){
        for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status : Objects Detected :)";
        document.getElementById("amount#").innerHTML = "There are 3 main objects, CoCoSSD detected 2 objects!";

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent +"%", objects[i].x, objects[i].y);
        noFill(); 
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
        }
    }
}

function modelLoaded(){
    console.log("Model loaded!");
    status = true; 
    objectDetector.detect(img, gotResult); 
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results); 
        objects = results; 
    }
}