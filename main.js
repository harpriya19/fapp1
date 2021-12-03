lipX = 0;
lipY = 0;
function preload()
{
lips = "https://i.postimg.cc/NfzzxNZs/ef812dbaddc7fec1821fda4584d379a4-removebg-preview.png";
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
    {
        console.log('Posenet Is intialized');
    }

function gotPoses(results)
    {
if(results.length > 0)
{
    console.log(results);
    lipX = results[0].pose.nose.x+50;
    lipY = results[0].pose.nose.y+50;
    console.log("lips x = " + results[0].pose.nose.x+50);
    console.log("lips y = " + results[0].pose.nose.y+50);
  }
}

function draw() {
   image(video,0, 0, 300, 300);
   image(lips, lipX, lipY, 30, 30);
}
function take_snapshot()
{
    save('myfilteredimg.png');
}