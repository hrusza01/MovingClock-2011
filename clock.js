newclock()
setInterval(newclock, 1000)

function newclock()
{
	// Set current time.
	var currentTime = new Date()
	var second = currentTime.getSeconds()	
	var minute = currentTime.getMinutes()
	var hour = currentTime.getHours()

	//Create canvas.
	var canvas = document.getElementById("canvas").getContext("2d")
	canvas.save()
	canvas.translate(200, 200)
	canvas.clearRect(0, 0, 400, 400)
	canvas.scale(1, 1)
	canvas.rotate(-Math.PI / 2)
	canvas.lineWidth = 10
	canvas.strokeStyle = "white"
	canvas.fillStyle = "black"
	canvas.lineCap = "round"
	canvas.fillRect(-400,-400,800,800)

	//Set background image.
	var image = new Image()
        image.src = "http://i.imgur.com/iWwZKoH.png"
        image.onload = canvas.drawImage(image, -150, -150, 300, 300) 

	//Draw various parts of the clock.
	writeSecondTicks(canvas)
	writeMinuteTicks(canvas)
	canvas.strokeStyle = 'black'
	buildHourHand(canvas, hour, minute, second)
	buildMinuteHand(canvas, hour, minute, second)
	buildSecondHand(canvas, hour, minute, second)
	canvas.restore()
}

function writeSecondTicks(canvas)
{
	canvas.save()

	for (var hourNum = 0; hourNum < 12; hourNum++)
	{
		canvas.beginPath()
		canvas.rotate(Math.PI / 6)
		canvas.moveTo(100, 0)
		canvas.lineTo(125, 0)
		canvas.stroke()
	}

	canvas.restore()
}

function writeMinuteTicks(canvas)
{
	canvas.save()
	canvas.lineWidth = 10

	for (hourNum = 0; hourNum < 60; hourNum++)
	{
		if (hourNum % 5 != 0) 
		{
			canvas.beginPath()
			canvas.moveTo(120, 0)
			canvas.lineTo(120, 0)
			canvas.stroke()
		}

		canvas.rotate(Math.PI / 30)
	}

	canvas.restore()
}

function buildHourHand(canvas, hour, minute, second)
{
	canvas.save()
	canvas.rotate(hour * (Math.PI / 6) + (Math.PI / 360) * minute + (Math.PI / 21600) * second)
	canvas.lineWidth = 10
	canvas.beginPath()
	canvas.moveTo(0, 0)
	canvas.lineTo(70, 0)
	canvas.stroke()
	canvas.restore()
}

function buildMinuteHand(canvas, hour, minute, second)
{
	canvas.save()
	canvas.rotate((Math.PI / 30) * minute + (Math.PI / 1800) * second)
	canvas.lineWidth = 10
	canvas.beginPath()
	canvas.moveTo(0, 0)
	canvas.lineTo(125, 0)
	canvas.stroke()
	canvas.restore()
}

function buildSecondHand(canvas, hour, minute, second)
{
	canvas.save()
	canvas.rotate(second * Math.PI / 30)
	canvas.lineWidth = 5
	canvas.beginPath()
	canvas.moveTo(0, 0)
	canvas.lineTo(125, 0)
	canvas.stroke()
	canvas.restore()
}

clearInterval(newclock)
