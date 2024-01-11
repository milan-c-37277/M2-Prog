import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"
import { maakDino, maakPlant } from "./fabriek.mjs";

let maakdino = maakDino();
let maakplant = maakPlant();

console.log(maakdino)
console.log(maakplant)
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
