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

        this.classBool = true
        this.classString = "class"
        this.classNumber = 19

        let localBool = true
        let localString = "local"
        let localNumber = 21

        console.log(localBool)
        console.log(localString)
        console.log(localNumber)
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

console.log(`classBool: ${app.classBool}`)
console.log(`classString: ${app.classString}`)
console.log(`classNumber: ${app.classNumber}`)