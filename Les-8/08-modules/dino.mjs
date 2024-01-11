export class Dino
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

export class Plant
{
    constructor(naam, leeft)
    {
        this.name = naam;
        this.alive = leeft;
    }
}
