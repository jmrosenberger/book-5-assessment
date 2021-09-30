import { getTopics, getAuthors, getRecipients, sendLetter } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

let date = new Date();
var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];



//  ----------------------------------------  //
//  ----  || CREATING LETTER OBJECT ||  ----  //
//  ----------------------------------------  //
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const selectedAuthor = document.querySelector("select[id='authorInput']").value
        const letterBody = document.querySelector("textarea[id='letterInput']").value
        const selectedRecipient = document.querySelector("select[id='recipientInput']").value
        const selectedTopic = document.querySelector("input[name='topic__userSelect']:checked").value

        const letterObject = {
            authorId: parseInt(selectedAuthor),
            recipientId: parseInt(selectedRecipient),
            topicId: parseInt(selectedTopic),
            letterBody: letterBody,
            date: [month, day, year].join("/")
        }
        sendLetter(letterObject)

    }
})




export const Entries = () => {
    const topics = getTopics()
    const authors = getAuthors()
    const recipients = getRecipients()


    let html = `
    <div class="field">
    <h4>Author</h4>
    <div class="dropdown">
    <select class="dropdown" id="authorInput">
        <option value="">Choose</option>
        ${authors.map(
        author => {
            return `<option value="${author.id}">${author.name}</option>`
        }
    ).join("")
        }
    </select>
    </div><br>
    <div class="entryContainer">
    <h4>Letter</h4>
    <textarea id="letterInput" name="letterInput" cols="176" rows="10" style="max-width:100%"></textarea>
    </div>
    <br>
    <div class="topics">
    <h4>Topics</h4>
    <form id="topicSelection">
    
    ${topics.map(
            topic => {
                return `<input type="radio" name="topic__userSelect" value="${topic.id}"/>
                        <label class="label" for="topicId--${topic.id}">${topic.name}</label>`
            }
        ).join("")
        }
    
    
    </form> 
    </div>
    <div class="dropdown">
    <h4>Recipient</h4>
    <select class="dropdown" id="recipientInput">
        <option value="">Choose</option>
        ${recipients.map(
            recipient => {
                return `<option value="${recipient.id}">${recipient.name}</option>`
            }
        ).join("")
        }
    </select>
    <br>
    
    <button class="button" id="sendLetter">Send Letter</button>
    </div>
    </div>
        `

    return html

}