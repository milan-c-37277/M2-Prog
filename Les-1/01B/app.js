class App
{
    runApplication()
    {
        this.greeting = "hello world!"
        this.appNaam = "MILAN"
        this.versienummer = 1.1
        this.versiedatum = new Date("2023-11-23")
        this.autheur = "Milan C"
        this.copyright = "Dit mag niet worden gecloned of worden gebruikt"
        this.distributeur = "Niemand"
        this.darkmode = false
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting)
console.log(`appNaam: ${app.appNaam}`)
console.log(`versienummer: ${app.versienummer}`)
console.log(`versiedatum: ${app.versiedatum}`)
console.log(`autheur: ${app.autheur}`)
console.log(`copyright: ${app.copyright}`)
console.log(`distributeur: ${app.distributeur}`)
console.log(`darkmode: ${app.darkmode}`)