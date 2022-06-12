function setup(){
    canvas=createCanvas(350,350)
    canvas.position(800,120)
    video=createCapture(VIDEO)
    video.size(350,350)
    video.position(300,120)

    //initializing a model
    poseNet=ml5.poseNet(video,modelloaded)

    //code to execute a model
    poseNet.on("pose",gotposes)
}

function modelloaded(){
    console.log("poseNet model is intialized")
}

function gotposes(results){
    if(results.length>0){
    console.log(results)
}
}