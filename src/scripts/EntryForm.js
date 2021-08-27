import { getTopics, getPenPals, sendLetter } from "./dataAccess.js"




// -------------  STILL CAN'T FIGURE OUT HOW TO CAPTURE THE VALUE OF THE RADIO BUTTON VALUE FOR THE TOPIC ID ---------------- //



const mainContainer = document.querySelector("#container")



const topicSelected = document.addEventListener("change", event => {
    const userSelect = event.target
    if (userSelect.name.startsWith("topicId--")) {
        let selectedTopicId = ""
        const [, topicId] = userSelect.value.split("--")
        parseInt(topicId) = topicId
        topicId = selectedTopicId

        
        return selectedTopicId
    }
    // mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
})




document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const selectedAuthor = document.querySelector("select[id='authorInput']").value
        const selectedRecipient = document.querySelector("select[id='recipientInput']").value
        // const selectedTopic = document.querySelector("input[value='topicId--']").value
        // const selectedTopic = document.getElementById("topicId--${topic.id}").value
        // const [, topicId] = selectedTopic.split("--")
        
        const letterObject = {
            authorId: parseInt(selectedAuthor),
            recipientId: parseInt(selectedRecipient),
            date: Date(),
            topicId: topicSelected
        }
        sendLetter(letterObject)
        
    }
})



export const Entries = () => {
    const topics = getTopics()
    const penPals = getPenPals()
    let html = `
    <div class="field">
    <h4>Author</h4>
    <div class="dropdown">
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
    </div><br>
    <div class="entryContainer">
    <h4>Letter</h4>
    <textarea id="letterInput" name="letterInput" cols="176" rows="10" style="max-width:100%"></textarea>
    </div>
    <br>
    <div class="topics">
    <h4>Topics</h4>
    <form id="topicSelection">
    
    ${
        topics.map(
            topic => {
                return `<input type="radio" name="topic__userSelect" value="topicId--${topic.id}"/>
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
    </div>
        `

    return html

}