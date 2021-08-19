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
    </select><br>
    <textarea id="letterInput" name="letterInput" cols="176" rows="10" style="max-width:100%"></textarea>
    <br>
    <h4>Topics</h4>
    <input type="radio" name="topic" id="topic" value="selectedTopic"/>
    <label class="label" for="business">Business</label>
    <input type="radio" name="topic" id="topic" value="selectedTopic"/>
    <label class="label" for="friendly">Friendly</label>
    <input type="radio" name="topic" id="topic" value="selectedTopic"/>
    <label class="label" for="family">Family</label>
    <input type="radio" name="topic" id="topic" value="selectedTopic"/>
    <label class="label" for="congratulations">Congratulations</label>
    <input type="radio" name="topic" id="topic" value="selectedTopic"/>
    <label class="label" for="condolences">Condolences</label>

    <h4>Recipient</h4>
    <select class="dropdown" id="recipientInput">
        <option value="">Choose</option>
        ${
            penPals.map(
                penPal => {
                    return `<option value="${penPal.id}">${penPal.name}</option>`
                }
            ).join("")
        }
    </select>
    <br>

    <button class="button" id="sendLetter">Send Letter</button>
    </div>
        `

    return html

}