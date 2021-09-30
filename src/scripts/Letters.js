import { getLetters } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")



export const Letters = () => {
    const letters = getLetters()


    let html= `
        <div class="letters__container">
        <h2 class="letters__heading">Letters</h2>
        ${
            letters.map( 
                (letter) => {
                    return `<div class="letter__object" id="${letter.id}">
                    <div class="letter__recipient">To: ${letter.recipient.name} (${letter.recipient.email})</div>
                    <div class="letter__body">${letter.letterBody}</div>
                    <div class="letter__author">From: ${letter.author.name} (${letter.author.email})</div>
                    <div class="letter__date">Sent on ${letter.date}</div>
                    <button class="letter__topic">${letter.topic.name}</button>
                    </div>
                    <hr class="solid"></hr>`
                }
            ).join("")
        }
           
        </div>
    `
    return html



}