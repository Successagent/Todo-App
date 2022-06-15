// Selectors

let button = document.querySelector(".form-btn")
let container = document.querySelector(".container")
let input = document.getElementById("form-input")



//Events
button.addEventListener("click", addItem)
container.addEventListener("click", deleteItem)



//Functions

function addItem(e) {
    //Prevent Form from submiting
    e.preventDefault()

    // create Div
    let itemDiv = document.createElement("div")

    //add class
    itemDiv.className = "item"

    //create li
    let li = document.createElement("li")

    //add class
    li.className = "list"

    //grap the input text and add it as a value to the li's
    let inputValue = document.getElementById("form-input").value

    // adding inputValue as text to li's
    li.innerText = inputValue

    //create Buttons
    let deleteBtn = document.createElement("button")

    //add class
    deleteBtn.className = "btn"
    deleteBtn.innerText = "X"
    //checkBtn
    let checkBtn = document.createElement("button")

    //add class
    checkBtn.className = "checkBtn"
    checkBtn.innerText = "C"
    //append li to itemDiv
    itemDiv.appendChild(li)

    // add deleteBtn to itemDiv
    itemDiv.appendChild(checkBtn)
    itemDiv.appendChild(deleteBtn)

    //add itemDiv to container

    container.appendChild(itemDiv)
    input.value = ""

}


function deleteItem(e) {
    let item = e.target
    if (e.target.className === "btn") {

        let todoList = item.parentElement
        // animation
        todoList.classList.add("animation")

        // after the animation the function will remove the todoList
        todoList.addEventListener('transitionend', function () {
            todoList.remove(item)
        })
    }

    let list = e.target
    if (e.target.className === "checkBtn") {
        let todoList = list.parentElement
        todoList.classList.toggle("anim")
    }
}