 window.onload =  function(){
	var canvas = document.getElementById('ben');
	var   c = canvas.getContext("2d");
	
	c.fillStyle= "black";
	c.fillRect(0, 0, canvas.width, canvas.height);
	
	


	c.strokeStyle = "#66FF99";
	c.lineWidth = "5";

	
	c.beginPath();
	c.moveTo(0, 350);
	c.lineTo(50, 350);
	c.lineTo(50, 250);
	c.lineTo(100, 250);
	c.lineTo(100, 350);
	c.lineTo(135, 350);
	c.lineTo(135, 200);
	c.lineTo(180, 200);
	c.lineTo(180, 350);
	c.lineTo(210, 350);
	c.lineTo(210, 300);
	c.lineTo(230, 300);
	c.lineTo(230, 350);
	c.lineTo(260, 350);
	c.lineTo(260, 100);
	c.lineTo(295, 100);
	c.lineTo(295, 350);
	c.lineTo(350, 350);
	c.lineTo(350, 230);
	c.lineTo(500, 230);
	c.lineTo(500, 350);
	c.lineTo(600, 350);
	c.moveTo(425, 225);
	c.lineTo(425, 170);
	c.moveTo(400, 200);
    c.lineTo(450, 200);
	c.moveTo(410, 180);
	c.lineTo(440, 180);
	c.moveTo(278, 100);
	c.lineTo(278, 80);
	c.closePath();
	c.stroke();
	
	
	c.fillStyle = "#7ec42c";
	c.font = "75px Helvetica";
	c.fillText("SkyLine" , 150 , 500);	
	
	
	
	 var posX = 0;	
	 setInterval (function(){
		
		posX += 1;
		c.fillStyle = "#7ec42c";
		//c.fillRect(0, 0, canvas.width, canvas.height);
		
		c.beginPath();
		c.arc(posX, 50, 15, 0, Math.PI * 2, false);
		c.fill();
	
	},30);
	
};	
