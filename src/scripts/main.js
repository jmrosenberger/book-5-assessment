import { PenPals } from "./PenPals.js";
import { fetchLetters, fetchTopics, fetchRecipients, fetchAuthors } from "./dataAccess.js";


const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


const render = () => {
    fetchAuthors()
    .then(fetchRecipients)
    .then(fetchTopics)
    .then(fetchLetters)
    .then(
        () => {
            mainContainer.innerHTML = PenPals()
        }
    )
}

render()