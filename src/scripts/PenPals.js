import { Letters } from "./Letters.js";
import { Entries } from "./EntryForm.js";




export const PenPals = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="entries">
            ${Entries()}
        </section>
        <section class="letters">
            ${Letters()}
        </section>
    `
}