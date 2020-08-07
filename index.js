const input = document.querySelector("#text");
const enter = document.querySelector("button");
const liAll = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const span = document.querySelectorAll("span");


function inputLength(){
    return input.value.length;
}
function executeKeypressEvent(event){
    if (inputLength() > 0 && event.which === 13){
        addNewList()
    }
}
function executeClickEvent(){
    if (inputLength() > 0){
        addNewList()
    }
}

function addNewList(){
    newListListener();
    input.value = "";
}

function newListListener(){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const fa = document.createElement("i");
    fa.classList.add("fa", "fa-trash-o");
    span.appendChild(fa);
    span.addEventListener("click", function(){
        this.parentElement.remove();
    })
    li.appendChild(span);
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    })
    ul.appendChild(li);
}

liAll.forEach(function (li){
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    })
})

span.forEach(function (item){
    item.addEventListener("click", function(){
        this.parentElement.remove();
    })
})

input.addEventListener("keypress", executeKeypressEvent)


enter.addEventListener("click", executeClickEvent)

const deleteTodo = () => {
    span.forEach((it, i) => {
        it.addEventListener('click', () => {
            todoList.splice(i, 1)
            it.parentElement.remove()
            displayTodo()
            console.log(todoList)
        })
    })
}

input.addEventListener('change', e => {
    todoTitle = e.target.value;
})



