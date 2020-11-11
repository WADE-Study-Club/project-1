// select the to do element
const lists = document.querySelector('.to-do_container');
const toDoForm = document.querySelector('.to-do_left_input');
const toDoInput = document.querySelector('.to-do_left_input_text');

// select the timer element
const timerHeader = document.querySelector('.to-do_right_header');
const minutesLabel = document.querySelector("#minutes");
const secondsLabel = document.querySelector("#seconds");
let totalSeconds = 0;
const timerStartBtn = document.querySelector('.to-do_right_timer_start');
const timerFinishBtn = document.querySelector('.to-do_right_timer_finish');

// classes names
const CHECK = "fas";
const UNCHECK = "far";
const LINE_THROUGH = "lineThrough";

// variables
let LIST = [];

// add an item to the list(click button or enter key)
toDoForm.addEventListener("submit", handleSubmit);
toDoInput.addEventListener("keyup", (event)=>{
    if(event.keycode === 13){
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
            <span class="${UNCHECK} fa-check-square" id="checkBox">V</span>
            <span class="to-do_header" id="to-do-header">${toDo}</span>
            <span class="fas fa-times" id="deleteBtn">X</span>
        </div>
        <span class="to-do_left_lists_link">연동하기</span>
        <input type="checkbox" class="option_check_btn" id="link" name="option"/>
    </li>
    `;
    lists.insertAdjacentHTML(position, item);
}

// handle click evevt
lists.addEventListener("click", (event) => {
    const element = event.target;
    const elementId = element.attributes.id;

    if (elementId === null){
        return;
    }

    if(elementId.value === "checkBox"){
        completeToDo(element);
    }else if(elementId.value === "deleteBtn"){
        removeToDo(element);
    }else if(elementId.value === "link"){
        checkOptions(element);
    }else if(elementId.value === "to-do-header"){
        showTimer(element);
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
    const index = LIST.findIndex(element => element.id === listId);
    LIST[index].done = true;
}

// remove to do
function removeToDo(element){
    const lists = element.parentNode.parentNode.parentNode;
    const list = element.parentNode.parentNode;
    const listId = list.id
    const index = LIST.findIndex(element => element.id === listId);
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
    <form class="to-do_left_lists_options" method="post" action="/todo">
    <label for="index-color" class="to-do_left_lists_options_color">색 지정</label>
    <input type="color" id="index-color" name="tagColor">
    <div>
        <label for="" class="to-do_left_lists_options_time-text">시작시간</label>
        <input type="time" name="startTime" class="to-do_left_lists_options_time" id="time" />
        <label for="" class="to-do_left_lists_options_time-text">종료시간</label>
        <input type="time" name="finishTime" class="to-do_left_lists_options_time" id="time" />
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

let myInterval;

function showTimer(element){
    timerHeader.innerText = `${element.textContent}`;
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00:";
}

timerStartBtn.addEventListener("click", (event) => {
    myInterval = setInterval(setTime, 1000);
})

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = `${pad(parseInt(totalSeconds / 60))}:`;
}

function pad(time) {
  let timeString = time + "";
  if (timeString.length < 2) {
    return "0" + timeString;
  } else {
    return timeString;
  }
}

timerFinishBtn.addEventListener("click", (event) => {
    clearInterval(myInterval);
})

