import { getEntries, getPenPals, sendEntry } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const entries = getEntries()


export const Entries = () => {
    const penPals = getPenPals()
    let html = `
    <div class="field">
    <h4>Author</h4>
    <select class="dropdown" id="authorInput">
        <option value="">Choose</option>
        ${
            penPals.map(
                penPal => {
                    return `<option value="${penPal.id}">${penPal.name}</option>`
                }
            ).join("")
        }
    </select>
        `

    return html

}