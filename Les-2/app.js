class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasID-1")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        console.log(canvas)
        
    }
}

let app = new App();
app.runApplication();
