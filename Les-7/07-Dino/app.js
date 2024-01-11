class App
{
    runApplication()
    {
        let dino = new Dino("T-Rex",20,true,"Nederland",500,);
        let plantDino = new Dino("Triceratops",23,false,"Duitsland",300);
        let gras = new plant("gras", true);
        let struik = new plant("struik", true);
        console.log(gras)
        console.log(struik)
        console.log(dino);
        console.log(plantDino);

        dino.eatFood(plantDino)
        console.log("leeft " + plantDino.name + "? " + plantDino.leeft)
        console.log("De naam van deze " + dino.name + " is: " + dino.leeftijd + " jaar oud. Hij is zo'n " + dino.hoogte + "cm groot");
        console.log("en deze " + dino.name + " eet vlees " + dino.meateter)
        console.log("Is de dino nog levend?: " + dino.alive + ". Heeft de dino honger?: " + dino.hunger)
    }
}

class Dino
{
    constructor(naam, age, vleeseter, region, height)
    {
        this.name = naam;
        this.leeftijd = age;
        this.meateter = vleeseter;
        this.regio = region;
        this.hoogte = height;
        this.alive = true;
        this.hunger = true
    }

    eatFood(foodToEat) 
    {
        foodToEat.leeft = false;
        this.honger = false;
        console.log("Ik ben een " + this.name)
        console.log("Mijn honger " + this.honger)
        console.log("Ik eet nu " + foodToEat.name)
    }
}

class plant
{
    constructor(naam, leeft)
    {
        this.name = naam;
        this.alive = leeft;
    }
}

let app = new App();
app.runApplication();
