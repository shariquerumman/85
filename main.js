//Create a reference for canvas 
canvas = document.getElementById(mycanvas);
//Give specific height and width to the car image
ctx = canvas.getContext("2d");

background_img = "parkingLot.jpg";
car_image = "car2.png";

car_hight = 100;
car_width = 75;


  
car_x=5;
car_y=225;
//Set initial position for a car image.

function add() {
background_img = new Image();
background_img.onload = uploadBackground;
background_img.src = background_img;

car_img = new Image();
car_img.onload = uploadgreencar;
car_img.src = greencar_img;

	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height)
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_img, car_x, car_y, car_width, car_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >= 0){
		car_y = car_y - 10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	if(car_y <= 500){
		car_y = car_y + 10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car downward
}

function left()
{
	if(car_x >= 0){
		car_x = car_x - 10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	if(car_x <= 900){
		car_x = car_x + 10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car right side
}
