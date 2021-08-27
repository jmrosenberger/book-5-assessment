const applicationState = {
    penPals: [],
    topics: [],
    letters: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:3000"





  //  --------------------------  //
 //  ----  || FETCHERS ||  ----  //
//  --------------------------  //



export const fetchPenPals = () => {
    return fetch(`${API}/penPals`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (person) => {
            // Store the external state in application state
            applicationState.penPals = person
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
    return fetch(`${API}/letters`)    // Fetch from the API
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



export const getPenPals = () => {
    return applicationState.penPals.map(penPal => ({ ...penPal }))
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