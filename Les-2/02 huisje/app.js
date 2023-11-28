class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasID-1")
        let g = canvas.getContext("2d");
        g.fillStyle = "#32a852";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "blue";
        g.beginPath()
        g.moveTo(300, 100);
        g.lineTo(200, 300);
        g.lineTo(600, 400);
        g.lineTo(700, 200);
        g.fill()
        g.closePath()
        g.beginPath()
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 600);
        g.lineTo(600, 400);
        g.fillStyle = "grey";
        g.fill()
        g.closePath()
        g.beginPath()
        g.moveTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(800, 500);
        g.lineTo(800, 300);
        g.fillStyle = "green";
        g.fill()
        g.closePath()
        g.beginPath()
        g.moveTo(600, 400);
        g.lineTo(800, 300);
        g.lineTo(700, 200);
        g.fillStyle = "white";
        g.fill()
        g.closePath()
        console.log(canvas)
        
    }
}

let app = new App();
app.runApplication();
