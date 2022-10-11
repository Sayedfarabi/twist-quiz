// Add to Local Storage
const addToDb = (question) => {

    localStorage.setItem("Question", JSON.stringify(question));
}

const getFromDb = () => {
    let data = {}

    //get the shopping cart from local storage
    const storeQuestion = localStorage.getItem('Question')
    if (storeQuestion) {
        data = JSON.parse(storeQuestion)
    }
    return data
}

export { addToDb, getFromDb }