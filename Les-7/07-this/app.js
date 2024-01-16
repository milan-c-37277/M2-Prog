class App
{
    runApplication()
    {
        let user1 = new User("Milan")
        let user2 = new User("Jay")
        let user3 = new User("Olgun")
        let user4 = new User("Wessel")
        let user5 = new User("Lars")
        let user6 = new User("Daniel")

        user1.wieBenIk();//dit is Milan
        user2.wieBenIk();//dit is Jay
        user3.wieBenIk();//dit is Olgun
        user4.wieBenIk();//dit is Wessel
        user5.wieBenIk();//dit is Lars
        user6.wieBenIk();//dit is Daniel
    }
}

class User
{
    constructor(naam)
    {
        this.name = naam;
    }
    wieBenIk()
    {
        console.log(this.name)
    }
}

let app = new App();
app.runApplication();