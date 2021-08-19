const applicationState = {
    penPals: [],
    entries: [],
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
            // What should happen when we finally have the array?
            applicationState.penPals = person
        })
}


export const fetchEntries = () => {
    return fetch(`${API}/entries`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (entries) => {
            // What should happen when we finally have the array?
            applicationState.entries = entries
        })
}


export const fetchLetters = () => {
    return fetch(`${API}/letters`)    // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(
            (letters) => {
            // What should happen when we finally have the array?
            applicationState.letters = letters
        })
}





  //  -------------------------  //
 //  ----  || SENDERS ||  ----  //
//  -------------------------  //



export const sendPenPal = (userEntry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEntry)
    }


    return fetch(`${API}/penPals`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



export const sendEntry = (userEntry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEntry)
    }


    return fetch(`${API}/entries`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



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

export const getEntries = () => {
    return applicationState.entries.map(entry => ({ ...entry }))
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