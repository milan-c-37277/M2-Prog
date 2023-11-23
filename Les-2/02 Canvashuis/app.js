class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasID-1")
        let g = canvas.getContext("2d");
        g.fillStyle = "#32a852";
        g.fillRect(0,0,canvas.width,canvas.height);

        console.log(canvas)
        
    }
}

let app = new App();
app.runApplication();
