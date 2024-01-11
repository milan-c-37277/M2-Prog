import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"

export function maakDino() {
    return new Dino("Gemaakte modulosaurus")
}

export function maakPlant() {
    return new Plant("Gemaakte modulobloem")
}