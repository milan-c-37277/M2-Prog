class App
{
    runApplication()
    {
        console.log("hello world!");
        let dino = new Dino("T-Rex",true,20);;
        console.log("De naam van deze " + dino.name + " is: " + dino.leeftijd);
        console.log("en deze " + dino.name + " eet vlees " + dino.meateter)
    }
}

class Dino
{
    constructor(naam, age, vleeseter)
    {
        this.name = naam;
        this.leeftijd = age;
        this.meateter = vleeseter;
    }
}

let app = new App();
app.runApplication();
