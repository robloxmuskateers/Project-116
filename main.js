noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Model Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;

        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(0, 0, 0);
    //strokeWeight(1);
    //mustache(noseX, noseY, 20);
    image(mustache, noseX, noseY, 20, 20);
    fill(0, 0, 0);
    stroke(255, 255, 255);
}

function takeSnapshot() {
    save('myFilterImage.png');
}