function preload(){

}


function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6Xco02JCv/model.json", modelloaded);
}

function draw(){
image(video,0,0,300,300);
}

function modelloaded(){
console.log("model has been loaded");
classifier.classify(video,getresults);
}

function getresults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("personresult").innerHTML=results[0].label;
        document.getElementById("accuracyresult").innerHTML=results[0].confidence.toFixed(3);
    }
}

