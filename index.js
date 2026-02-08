const titleElement = document.getElementById("title-text")
const textElement = document.getElementById("text_area")
const buttonElement = document.getElementById("add-btn")

let notes = JSON.parse(localStorage.getItem("notes")) || []

buttonElement.addEventListener('click',() => {
    let title = titleElement.value
    let text = textElement.value

    if (title === "") {
        window.alert("Please add title")
    } else if(text === "") {
        window.alert("Please add a text")
    } else{
        notes.push({
            id: Math.floor(Math.random() * 10000),
            date: new Date(),
            title: title,
            text: text
        })

        localStorage.setItem("notes",JSON.stringify(notes))

        textElement.value = ""
        titleElement.value = ""
    }
})