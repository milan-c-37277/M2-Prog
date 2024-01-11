import {Dino} from "./dino.mjs"
import {Plant} from "./dino.mjs"
class App
{
    runApplication()
    {

        let dino = new Dino("modulosaurus")
        console.log(dino.name)

        let plant = new Plant("modulobloem")
        console.log(plant.name)
    }
}
let app = new App();
app.runApplication();
