class App
{
    runApplication()
    {
        let uiButton = document.getElementById('clickable');
        uiButton.addEventListener("click",(e)=>
        {
            console.log("Click!")
        })
    }
}

let app = new App();
app.runApplication();