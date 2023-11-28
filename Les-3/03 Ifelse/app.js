class App
{
    runApplication()
    {
        let title = document.getElementById("newstitle")
        console.log(title)

        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem1)
        console.log(newsitem2)

        let random = Math.random();
        let random2 = Math.random();
        let random3 = Math.random();

        console.log("Random 1 + " + random)
        console.log("Random 2 + " + random2)
        console.log("Random 3 + " + random3) 
        if(random < 0.2) {
            title.style.backgroundColor = "#FF0000";
        } else if(random < 0.6) {
            title.style.backgroundColor = "#00FF00";
        } else if(random < 0.75) {
            title.style.backgroundColor = "#0000FF";
        } else {
            title.style.backgroundColor = "#0F0F0F";
        }

        if(random2 < 0.2) {
            newsitem1.style.backgroundColor = "#0000FF";
        } else if(random2 < 0.6) {
            newsitem1.style.backgroundColor = "#0F0F0F";
        } else if(random2 < 0.75) {
            newsitem1.style.backgroundColor = "#00FF00";
        } else {
            newsitem1.style.backgroundColor = "#FF0000";
        }

        if(random3 < 0.2) {
            newsitem2.style.backgroundColor = "#00FF00";
        } else if(random3 < 0.6) {
            newsitem2.style.backgroundColor = "#0F0F0F";
        } else if(random3 < 0.75) {
            newsitem2.style.backgroundColor = "#FF0000";
        } else {
            newsitem2.style.backgroundColor = "#0000FF";
        }
    }
}

let app = new App();
app.runApplication();