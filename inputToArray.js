
let todos = [];

const form = document.getElementById("inputForm")
const ul = document.getElementById('list')
const clear = document.getElementById('clear')
const retrive = document.getElementById('retrive')
const removeLine = document.getElementById('remove')


form.addEventListener('submit', function(event){
    event.preventDefault();
    toArr();
    display();
    saveToLocalStorage()
    form.reset();

})

retrive.addEventListener('mouseup', function(event){
    event.preventDefault();
    retriveLocalStorage()
})

clear.addEventListener('mouseup', function(){
    clearLocalStorage();
})

removeLine.addEventListener('mouseup', function(){
    deleteLine();
})


function toArr(){
    todos.push(nameInput.value);
}

function display(){
    const input = document.getElementById("nameInput").value
    const li = document.createElement("li")
    const button = document.createElement("input")
    const span = document.createElement('span')
    button.setAttribute("id", "remove")
    button.setAttribute("type", "button")
    button.setAttribute("value", "X")
    // li.setAttribute("id", {ID})

    
    span.append(input)
    li.append(span)
    li.append(button)
    ul.appendChild(li) 


}

function saveToLocalStorage(){
    localStorage.setItem("todo", JSON.stringify(todos))
}

function retriveLocalStorage(){
   let retrivedData = localStorage.getItem("todo")
   let test = JSON.parse(retrivedData)

   todos.push(test)
   console.log(todos)
};

function clearLocalStorage(){
    localStorage.clear();
};

function deleteLine(){
    removeLine.parentElement.remove();
}

function randomID(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

