import { Letters } from "./Letters.js";
import { Entries } from "./EntryForm.js";



const letters = Letters()
const entries = Entries()




export const PenPals = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="entries">
            ${Entries()}
        </section>
        
        <section class="letters">
            <h2>Letters</h2>
            ${Letters()}
        </section>
    `
}