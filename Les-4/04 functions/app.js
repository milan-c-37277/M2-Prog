class App 
{
    anotherFunctionWithArguments(aArgument) 
    {
        console.log("Hello world")
    }

    MARIO() 
    {
        console.log("MARIO!!")
    }

    BWAHAHA()
    {
        let log = console.log("BWAHAHA!!!")
        return log;
    }

    plus()
    {
        let a = 3
        let b = 9
        let final = a + b;
        return final
    }
}

let app = new App()
app.anotherFunctionWithArguments("mijn argument is iets...")
app.MARIO()
app.BWAHAHA()
console.log(app.plus())


