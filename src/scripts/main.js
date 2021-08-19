import { PenPals } from "./PenPals.js";
import { fetchEntries, fetchPenPals, fetchLetters } from "./dataAccess.js";


const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


const render = () => {
    fetchPenPals()
    .then(fetchEntries)
    .then(fetchLetters)
    .then(
        () => {
            mainContainer.innerHTML = PenPals()
        }
    )
}

render()