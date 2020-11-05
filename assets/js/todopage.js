// select the element
const lists = document.querySelector('.to-do_container');
const toDoForm = document.querySelector('.to-do_left_input');
const toDoInput = document.querySelector('.to-do_left_input_text');

// classes names
const CHECK = "fas";
const UNCHECK = "far";
const LINE_THROUGH = "lineThrough";

// variables
let LIST = [];

// add an item to the list(click button or enter key)
toDoForm.addEventListener("submit", handleSubmit);
toDoInput.addEventListener("keyup", (event)=>{
    if(event.keycode == 13){
        handleSubmit(event);
    }
});

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    const id = Math.random()
    if(currentValue){
        LIST.push({
            name: currentValue,
            id: id,
            done: false
        })
        addToDo(currentValue, id);
        toDoInput.value = "";
    }
}

// add to do function
function addToDo(toDo, id) {
    const position = "beforeend";
    const item = `
    <li class="to-do_left_lists" id="${id}">
        <div class="to-do_left_lists_main">
            <i class="${UNCHECK} fa-check-square" id="checkBox"></i>
            <span class="to-do_header">${toDo}</span>
            <i class="fas fa-times" id="deleteBtn"></i>
        </div>
        <span class="to-do_left_lists_link">연동하기</span>
        <input type="checkbox" class="option_check_btn" id="link"/>
    </li>
    `;
    lists.insertAdjacentHTML(position, item);
}

// handle click evevt
lists.addEventListener("click", (event) => {
    const element = event.target;
    const elementId = element.attributes.id;

    if (elementId == null){
        return;
    }

    if( elementId.value == "checkBox"){
        completeToDo(element);
    }else if(elementId.value == "deleteBtn"){
        removeToDo(element);
    }else if(elementId.value == "link"){
        checkOptions(element);
    }
})

// complete to do
function completeToDo(element){
    // check box
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    // 취소선
    const toDoHeader = element.nextElementSibling;
    toDoHeader.classList.toggle(LINE_THROUGH);
    // LIST update
    const list = element.parentNode.parentNode;
    const listId = list.id
    const index = LIST.findIndex(element => element.id == listId);
    LIST[index].done = true;
}

// remove to do
function removeToDo(element){
    const lists = element.parentNode.parentNode.parentNode;
    const list = element.parentNode.parentNode;
    const listId = list.id
    const index = LIST.findIndex(element => element.id == listId);
    // LIST update
    LIST.splice(index, 1);
    lists.removeChild(list);
}

// check options
function checkOptions(element){
    const toDoList = element.parentNode;
    const optionCheckBtn = toDoList.querySelector(".option_check_btn");
    const toDoListHeader = toDoList.querySelector(".to-do_left_lists_main");
    const options = toDoList.querySelector(".to-do_left_lists_options");
    const position = "afterend";
    const item = `
    <form class="to-do_left_lists_options">
    <label for="index-color" class="to-do_left_lists_options_color">색 지정</label>
    <input type="color" id="index-color">
    <div>
        <label for="" class="to-do_left_lists_options_time-text">시작시간</label>
        <input type="text" class="to-do_left_lists_options_time" onKeyup="inputTimeColon(this);" placeholder="HH:MM" maxlength="5"/>
        <label for="" class="to-do_left_lists_options_time-text">종료시간</label>
        <input type="text" class="to-do_left_lists_options_time" onKeyup="inputTimeColon(this);" placeholder="HH:MM" maxlength="5"/>
    </div>
    </form>
    `;
    if(optionCheckBtn.checked){
        toDoListHeader.insertAdjacentHTML(position, item);
    }
    else {
        options.parentNode.removeChild(options);
    }
}



//     <progress value="22" max="100"></progress>
