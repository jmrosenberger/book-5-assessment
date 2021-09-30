const applicationState = {
    authors: [],
    recipients: [],
    topics: [[]],
    letters: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:3729"





  //  --------------------------  //
 //  ----  || FETCHERS ||  ----  //
//  --------------------------  //



export const fetchAuthors = () => {
    return fetch(`${API}/authors`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (author) => {
            // Store the external state in application state
            applicationState.authors = author
        })
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (recipient) => {
            // Store the external state in application state
            applicationState.recipients = recipient
        })
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (topic) => {
            // Store the external state in application state
            applicationState.topics = topic
        })
}


export const fetchLetters = () => {
    return fetch(`${API}/letters?_expand=author&_expand=recipient&_expand=topic`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (letters) => {
            // Store the external state in application state
            applicationState.letters = letters
        })
}





  //  -------------------------  //
 //  ----  || SENDERS ||  ----  //
//  -------------------------  //



// export const sendPenPal = (userEntry) => {
//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(userEntry)
//     }


//     return fetch(`${API}/penPals`, fetchOptions)
//         .then(response => response.json())
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })
// }




export const sendLetter = (userEntry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEntry)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}




  //  -------------------------  //
 //  ----  || GETTERS ||  ----  //
//  -------------------------  //



export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}





  //  ----------------------------------  //
 //  ----  || DELETE FUNCTIONS ||  ----  //
//  ----------------------------------  //



export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}