class App
{
    runApplication()
    {
       console.log("hello world!")
       
       
    let magickaarten ={
        atk:3,
        def:2,
        name: 'basic creature',
        cost: ["1R" , "1B "],
        text: "this basic creture is better in attaking"
    };
    console.log("you play: " + magickaarten.name ,"and " + magickaarten.text , "it's atk =" + magickaarten.atk , "it's def =" + magickaarten.def , "you have to pay " + magickaarten.cost)
   
 
    let spotifyPlayList = {
        acountName: "Milan",
        song: [{
            Artist: "IcePice",
            Title: "ThatBoiALiar",
            Album: "locationbar",
            TrackNumber: 2,
            Genre: "Rap"
        }
        ,
        {
            Artist: "BrunMars",
            Title: "Magic",
            Album: "MAgicion",
            TrackNumber: 3,
            Genre: "pop"
        }
        ,
        {
            Artist: "JustinBieber",
            Title: "Baby",
            Album: "bbg",
            TrackNumber: 1,
            Genre: "Love"
        }],
 
        favArtiest: {
            Name: "JustinBieber",
            Age: 24,
            Grammy: 2,
            Num1Hits: 5,
            genre: "Pop",
 
            Name2: "IceSpice",
            Age2: 20,
            Grammy2: 0,
            Num1Hits2: 2,
            Genre2: "rap",
 
 
 
            Name3: "BrunoMars",
            Age3: 30,
            Grammy3: 3,
            Num1Hits3: 4,
            gener3: "pop"
        }
    }
    console.log(spotifyPlayList.song) 
 
    console.log(magickaarten)
    let dataToSend  = JSON.stringify(magickaarten)
    console.log(dataToSend)
 
    console.log(spotifyPlayList.song)
    let dataToSendSPot = JSON.stringify(spotifyPlayList.song)
    console.log(dataToSendSPot)
 
    fetch("lego.json")
    .then((httpResponse)=>{
        console.log("From the net=============");
        console.log(httpResponse);
        return httpResponse.json();
    })
    .then((json)=>
    {
        console.log(json)
    });


    fetch("nope.json")
    .then((httpResponse)=>{
        console.log("From the net=============");
        console.log(httpResponse);
        if(httpResponse.status != 200)
        {
            throw new Error("Er is een fout opgetreden")
        }
        return httpResponse.json();
    })
    .then((json)=>
    {
        console.log(json)
    })
    .catch((error)=>
    {
        console.log("Error: " + error)
    })
}
 
}  
 
let app = new App()
app.runApplication()