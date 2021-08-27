import { PenPals } from "./PenPals.js";
import { fetchPenPals, fetchLetters, fetchTopics } from "./dataAccess.js";


const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


const render = () => {
    fetchPenPals()
    .then(fetchTopics)
    .then(fetchLetters)
    .then(
        () => {
            mainContainer.innerHTML = PenPals()
        }
    )
}

render()