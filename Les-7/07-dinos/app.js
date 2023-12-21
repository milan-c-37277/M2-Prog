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
        this.greeting = "Greetings!"
    }
    
    showGreeting()
    {
        console.log("greeting van binnen: " + this.greeting)
    }
}

class GoodBye
{
    constructor()
    {
        this.bye = "Bye Bye Bye!"
    }

    showBye()
    {
        console.log("greeting van binnen: " + this.bye)
    }
}



let greet = new Greet();
let bye = new GoodBye();

console.log("greeting van buiten: " + greet.greeting)
console.log("goodbye van buiten: " + bye.bye)


let app = new App();
app.runApplication();