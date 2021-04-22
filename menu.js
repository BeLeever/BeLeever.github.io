var canvas = document.getElementById("mainMenu");
var context = canvas.getContext("2d");

canvas.height = window.innerHeight - 20;
canvas.width = window.innerWidth - 10;


var width = canvas.width;
var height = canvas.height;

var frames = 60;
var timerId = 0;

var backgroundY = 0;
var speed = 1;

var backgroundImage = new Image();

backgroundImage.src = "images/backgroundCompleteLowq.jpg";


var timerId = setInterval("update()", 1000/frames);


var mouseX;
var mouseY;

// X and Y positioning
// [0] = Space Scrappers
// [1] = Start Game
// [2] = Instructions
// [3] = About
var buttonX = [(width/2),(width/2),(width/2),(width/2)];
var buttonY = [(height/5),(height * 2/5),(height * 3/5),(height * 4/5)];

// Button sizes
var buttonWidth = [730,400,416,207];
var buttonHeight = [121,97,97,97];


var actualButtonX = [width/2 - (0.5*buttonWidth[0]),width/2 - (0.5*buttonWidth[1]),width/2 - (0.5*buttonWidth[2]),width/2 - (0.5*buttonWidth[3])];
var actualButtonY = [height/5 - (0.5*buttonHeight[0]),height * 2/5 - (0.5*buttonHeight[1]),height * 3/5 - (0.5*buttonHeight[2]),height * 4/5 - (0.5*buttonHeight[3])];



canvas.addEventListener("mousemove", mousePos); 
canvas.addEventListener("click", checkClick);


function mousePos(mouseEvent)
{
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

}











backgroundImage.onload = function()
{
    context.drawImage(backgroundImage, 0, backgroundY)

}
function checkPos()
{

    mouseX = MouseEvent.pageX;
    mouseY = MouseEvent.pageY;

}


function update()
{
    clear();
    move();
    if(window.location.pathname == "/index.html")
    {
        draw();
    }
    else if (window.location.pathname == "/instructions.html")
    {
        drawBackgroundInstruction();

        context.font = "5vw Tahoma";
        context.textAlign = "center";
        context.fillStyle = "#9818c5";

        context.fillText("This is a story based game", buttonX[0], buttonY[0]);
        context.fillText("Just select one of the options to progress", buttonX[0], buttonY[1]);
        context.fillText("Your Score is displayed in the top left", buttonX[0], buttonY[2]);
        context.fillText("Click to return to previous page", buttonX[0], buttonY[3]);




    }
    else if(window.location.pathname == "/about.html")
    {
        drawBackgroundAbout();

        context.font = "3vw Tahoma";
        context.textAlign = "center";
        context.fillStyle = "#9818c5";
        context.fillText("This game was created for the Web Tech module", buttonX[0], buttonY[0]);

        context.fillText("Even more features to be added soon", buttonX[0], buttonY[1]);
        context.fillText("By Lee Beaver 22/04/21", buttonX[0], buttonY[2]);
        context.fillText("Click to return to previous page", buttonX[0], buttonY[3]);

    }
}


function clear()
{
    context.clearRect(0, 0, width, height)
}



function move()
{
    backgroundY -= speed;
    if(backgroundY == -1 * height)
    {
        backgroundY = 0;
    }
}


    
function draw()
{

    context.drawImage(backgroundImage, 0, backgroundY);


    context.font = "9vw Tahoma";
    context.textAlign = "center";
    context.fillStyle = "#9818c5";
    context.fillText("Space Scrappers", buttonX[0], buttonY[0]);
    // 100px is 727.7 width and 121 height for space scrappers

    

    
    context.font = "6vw Tahoma";
    context.textAlign = "center";
    context.fillStyle = "#9818c5";
    context.fillText("Start Game", buttonX[1], buttonY[1]); 
    //80 px is 400 width and 97 height for start game


    context.fillText("Instructions", buttonX[2] , buttonY[2])
    // 80px is 416 width and 97 height for instructions

    
    
    context.fillText("About", buttonX[3], buttonY[3]);

    //var metrics = context.measureText("About");
    // 80px is 207 width and 97 height for about

    /*
    Code to find out the size of the font
    var actualWidth = metrics.width;
    var actualHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent

    console.log(actualWidth);
    console.log(actualHeight);
    */
}

function drawBackgroundInstruction()
{
    context.drawImage(backgroundImage, 0, backgroundY);

    // Insert the text here

}

function drawBackgroundAbout()
{
    context.drawImage(backgroundImage, 0, backgroundY);

    // Add the text here
}



function checkClick(mouseEvent){
    
    if (window.location.pathname == "/index.html")
    {
        for(i = 1; i < buttonX.length; i++){
            if(mouseX > actualButtonX[i] && mouseX < (actualButtonX[i] + buttonWidth[i])){
                if(mouseY > actualButtonY[i] && mouseY < (actualButtonY[i] + buttonHeight[i])){
    
    
                    
                    clearInterval(timerId);
                    canvas.removeEventListener("mouseup", mousePos);
                    canvas.removeEventListener("click", checkClick);
    
                    switch(i)
                    {
                        case 1:
                            window.location = "pages/game.html";
                            break;
    
                        case 2:
                            window.location = "pages/instructions.html";
                            break;
    
                        
                        case 3:
                            window.location = "pages/about.html";
                            break;
                            
                    
    
    
    
    
                    }
                    
    
                     
                }
            }
        }

    }

    else
    {
        goBack();
    }
    

    function goBack()
    {
        window.history.back();
    }
    
}