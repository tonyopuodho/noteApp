const titleElement = document.getElementById("title-text")
const textElement = document.getElementById("text_area")
const buttonElement = document.getElementById("add-btn")
const noteContainerElement = document.querySelector(".notes-container")

let notes = JSON.parse(localStorage.getItem("notes")) || []

buttonElement.addEventListener('click',() => {
    let title = titleElement.value
    let text = textElement.value

    if (title === "") {
        window.alert("Please add title")
    } else if(text === "") {
        window.alert("Please add text")
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

    displayNotes()
})

let displayNotes = () => {
    if ( notes.length !== 0) {
            notes.map((x) => {
            const { id, date, title, text} = x
            noteContainerElement.innerHTML += `
            <div class="notes" id=${id}>
                        <i class="fa-solid fa-trash trash"></i>
                        <div class="text">
                            <h3 id="title">${title}</h3>
                                <p id="paragraph">
                                ${text}
                                </p>
                        </div>
                <div class="date" id="date">${date}</div>                   
            </div>
            `
        })
    }
}

displayNotes()