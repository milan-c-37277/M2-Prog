class App 
{
    runApplication()
    {
        let canvas = document.getElementById("canvasID-1")
        let g = canvas.getContext("2d")
        g.fillStyle = "#32a852";
        g.fillRect(0,0,canvas.width,canvas.height);    
        let items = [ ['huis', 'blue', 1], ['boom', 'yellow', 1.8] ];
        items.push(['boom', 'green', 1.1])
        items.push(['huis', 'red', 1.9])
        items.push(['boom', 'green', 3.2])
        items.push(['boom', 'purple', 4.9])

        items.splice(2,1)
        console.log(items)

        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            console.log(element)
            if(element.includes("huis")) {
                let vergrotingFactor = element[2];
                let color = element[1];
                this.tekenHuis(g, vergrotingFactor , color)
            } else if(element.includes("boom")) {
                let vergrotingFactorBoom = element[2]
                let colorBoom = element[1];

                this.tekenKerstBoom(g, vergrotingFactorBoom, colorBoom)
            }
        }
    }

    tekenKerstBoom(g, vergrotingFactorBoom, colorBoom) 
    {
        g.beginPath();
        g.moveTo(90, 60 * vergrotingFactorBoom);
        g.lineTo(130, 60 * vergrotingFactorBoom);
        g.lineTo(110, 20 * vergrotingFactorBoom);
        g.lineTo(90, 60 * vergrotingFactorBoom);
        g.stroke()
        g.fillStyle = colorBoom;
        g.fill();
        g.closePath()

        g.beginPath();
        g.moveTo(115, 60 * vergrotingFactorBoom);
        g.lineTo(115, 70* vergrotingFactorBoom);
        g.lineTo(105, 70* vergrotingFactorBoom);
        g.lineTo(105, 60* vergrotingFactorBoom);
        g.stroke()
        g.fillStyle = colorBoom;
        g.fill();
        g.closePath()
    }

    tekenHuis(g, vergrotingFactor, color)
    {    
        g.beginPath()
        g.fillStyle = color;
        g.moveTo(30, 10 * vergrotingFactor);
        g.lineTo(20, 30 * vergrotingFactor);
        g.lineTo(60, 40 * vergrotingFactor);
        g.lineTo(70, 20* vergrotingFactor);
        g.stroke()
        g.fill()
        g.closePath()
       
        g.beginPath()
        g.moveTo(20, 30 * vergrotingFactor);
        g.lineTo(20, 50 * vergrotingFactor);
        g.lineTo(60, 60 * vergrotingFactor);
        g.lineTo(60, 40 * vergrotingFactor);
        g.fillStyle = color;
        g.stroke()
        g.fill()
        g.closePath()
        
        g.beginPath()
        g.moveTo(60, 40 * vergrotingFactor);
        g.lineTo(60, 60 * vergrotingFactor);
        g.lineTo(80, 50 * vergrotingFactor);
        g.lineTo(80, 30 * vergrotingFactor);
        g.fillStyle = color;
        g.stroke()
        g.fill()
        g.closePath()
        
        g.beginPath()
        g.moveTo(60, 40 * vergrotingFactor);
        g.lineTo(80, 30 * vergrotingFactor);
        g.lineTo(70, 20 * vergrotingFactor);
        g.fillStyle = color;
        g.stroke()
        g.fill()
        g.closePath()
        
        g.beginPath()
        // g.moveTo(400, 450)
        g.lineTo(50, 40* vergrotingFactor);
        g.lineTo(50, 55 * vergrotingFactor);
        g.lineTo(30, 50 * vergrotingFactor);
        g.lineTo(30, 35 * vergrotingFactor);

        g.fillStyle = "white";
        g.stroke()
        g.fill()
        g.closePath()
    }
}

let app = new App()
app.runApplication()

