class App
{
    runApplication()
    {
        console.log("hello world!");
        let appNaam = "MILAN"
        let versienummer = 1.0
        let versiedatum = new Date("2023-11-23")
        let autheur = "Milan C"
        let copyright = "Dit mag niet worden gecloned of worden gebruikt"
        let distributeur = "Niemand"
        let darkmode = false

        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();