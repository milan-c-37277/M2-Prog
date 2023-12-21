class App
{
    runApplication()
    {
        console.log("hello world!");
    }
}

class Greet
{
    constructor()
    {
        console.log("Greetings!");
    }
}

class GoodBye
{
    constructor()
    {
        console.log("Bye Bye!");
    }
}


let app = new App();
let greet = new Greet()
let bye = new GoodBye()
app.runApplication();