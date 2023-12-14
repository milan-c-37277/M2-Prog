class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasID-1")
        let g = canvas.getContext("2d")
        g.fillStyle = "#32a852";
        g.fillRect(0,0,canvas.width,canvas.height);    
        this.tekenHuis(g, 30, 30)
        this.tekenKerstBoom(g, 0, 0)
    }

    tekenHuis(g, x, y)
    {    
        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(300, 100);
        g.lineTo(200, 300);
        g.lineTo(600, 400);
        g.lineTo(700, 200);
        g.stroke()
        g.fill()
        g.closePath()
       
        g.beginPath()
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 600);
        g.lineTo(600, 400);
        g.fillStyle = "blue";
        g.stroke()
        g.fill()
        g.closePath()
        
        g.beginPath()
        g.moveTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(800, 500);
        g.lineTo(800, 300);
        g.fillStyle = "blue";
        g.stroke()
        g.fill()
        g.closePath()
        
        g.beginPath()
        g.moveTo(600, 400);
        g.lineTo(800, 300);
        g.lineTo(700, 200);
        g.fillStyle = "blue";
        g.stroke()
        g.fill()
        g.closePath()
        
        g.beginPath()
        // g.moveTo(400, 450)
        g.lineTo(500, 400);
        g.lineTo(500, 550);
        g.lineTo(300, 500);
        g.lineTo(300, 350);

        g.fillStyle = "white";
        g.stroke()
        g.fill()
        g.closePath()
    }

    tekenKerstBoom(g, x, y)
    {
        g.beginPath();
        g.moveTo(900 + x, 600 + y);
        g.lineTo(1300 + x, 600 + y);
        g.lineTo(1100 + x, 200 + y);
        g.lineTo(900 + x, 600) + y;
        g.stroke()
        g.fillStyle = "green";
        g.fill();
        g.closePath()

        g.beginPath();
        g.moveTo(1150 + x, 600 + y);
        g.lineTo(1150 + x, 700 + y);
        g.lineTo(1050 + x, 700 + y);
        g.lineTo(1050 + x, 600 + y);
        g.stroke()
        g.fillStyle = "brown";
        g.fill();
        g.closePath()

        g.beginPath()
        g.arc(1050, 400, 20, 0, 2 * Math.PI);
        g.arc(1200, 500, 20, 0, 2 * Math.PI);
        g.fillStyle = this.randomColor();   	
        g.fill()
        g.closePath()

        g.beginPath()
        g.arc(1100, 300, 20, 0, 2 * Math.PI);
        g.arc(1030, 500, 20, 0, 2 * Math.PI);
        g.fillStyle = this.randomColor();
        g.fill()
        g.closePath()

        g.beginPath()
        g.arc(1150, 400, 10, 0, 2 * Math.PI);
        g.arc(1050, 560, 10, 0, 2 * Math.PI);
        g.fillStyle = this.randomColor();
        g.fill()
        g.closePath()

        g.beginPath()
        g.arc(1110, 550, 10, 0, 2 * Math.PI);
        g.arc(1090, 460, 13, 0, 2 * Math.PI);
        g.fillStyle = this.randomColor();
        g.fill()
        g.closePath()

        g.beginPath()
        g.arc(1180, 570, 10, 0, 2 * Math.PI);
        g.arc(1090, 460, 13, 0, 2 * Math.PI);
        g.fillStyle = this.randomColor();
        g.fill()
        g.closePath()

        g.beginPath()
        g.arc(1240, 570, 10, 0, 2 * Math.PI);
        g.arc(1020, 450, 10, 0, 2 * Math.PI);
        g.fillStyle = this.randomColor();
        g.fill()
        g.closePath()

        g.beginPath()
        g.moveTo(1090, 200);
        g.lineTo(1110, 200);
        g.lineTo(1100, 120);
        g.lineTo(1090, 200);

        g.fillStyle = "gold";
        g.fill()
        g.stroke()
        g.closePath()



    }

    randomColor()
    {
        let array = ['brown', 'purple', 'gold', 'blue', 'grey', 'red'];
        const random = Math.floor(Math.random() * array.length);
        console.log(array[random])
        return array[random];

    }
}

let app = new App();
app.runApplication();

