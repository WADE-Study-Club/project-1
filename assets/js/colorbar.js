import {tagList} from "./tagList.js";

let pos2 = 0, pos4 = 0; 
    // 해당 기능 전체에서 사용할 변수를 초기화 합니다. 
let element, whenMouseHover, colorBarTooltip,
    setPlanPopUp, setPlanTagColor, setPlanTagSelect; 

const COLORBAR_HEIGHT = 630;


function setPlanOnLoad() {
    console.log("win.window.onload!!");
    
    setPlanTagColor = setPlanPopUp.document.querySelector(".setPlan form .tagColor");
    setPlanTagSelect = setPlanPopUp.document.querySelector(".setPlan form select");

    const value = setPlanTagSelect.value;
    setPlanTagColor.style.backgroundColor = tagList[`${value}`].color;
    
    setPlanTagSelect.addEventListener("change", optionChange);

}

function optionChange(){
    console.log("option changed");
    const value = setPlanTagSelect.value;
    setPlanTagColor.style.backgroundColor = tagList[`${value}`].color;
}

function tooltipTime(valueY){
    const unitMinute = COLORBAR_HEIGHT / 19 / 6 ; // 5.52...px(10분)
    let hour=6, minute=0;

    if(valueY >= 6){
        const time = 360 + Math.round(valueY/unitMinute) * 10;
        hour = Math.floor(time/60);
        minute = time%60;
        return `${hour<10 ? `0${hour}` : hour}:${
            minute<10 ? `0${minute}` : minute}`;    
    } else {
        return `06:00`;
    }
}

function hoverMove(e) { // mouse hover & move
    console.log("do hoverMove");
    
    e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
    e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
    whenMouseHover.style.top = `${e.offsetY}px`;
    pos2 = pos4 - e.offsetY; // 기존의 마우스 위치값을 비교하여 움직인 새로운 y좌표를 구하여 pos2에 저장합니다. 
    pos4 = e.offsetY; // 다시 새로운 y좌표를 pos3에 저장합니다. 
    // element.style.top = (element.offsetTop - pos2) + "px"; // 요소의 y위치를 변경합니다. (마우스에 따라 요소가 y방향으로 움직입니다) 
    // element.style.left = (element.offsetLeft - pos1) + "px"; // 요소의 x위치를 변경합니다. (마우스에 따라 요소가 x방향으로 움직입니다) 
    colorBarTooltip.innerHTML = tooltipTime(e.offsetY);
    console.log(`y = ${pos4}`);
} 

function dragPainting(){

}

function clickedDrag(e) { // mouse clicked drag
    // console.log(`do clickedDrag & offsetY = ${e.offsetX}`);
    
    e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
    e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
    whenMouseHover.style.top = `${e.offsetY}px`;
    const movedPos = e.offsetY - pos4; // 기존의 마우스 위치값을 비교하여 움직인 새로운 y좌표를 구하여 pos2에 저장합니다. 
    console.log(`${movedPos} moved`);
    // pos4 = e.offsetY; // 다시 새로운 y좌표를 pos3에 저장합니다. 
    // element.style.top = (element.offsetTop - pos2) + "px"; // 요소의 y위치를 변경합니다. (마우스에 따라 요소가 y방향으로 움직입니다) 
    colorBarTooltip.innerHTML = tooltipTime(e.offsetY);
    console.log(`offsetY = ${e.offsetY}`);
} 

function closeDragElement() { 
    console.log("do closeDragElement");

    element.onmouseup = null; // onmouseup을 초기화 시킴니다. 
    // element.onmousemove = null; // onmousemove을 초기화 시킴니다. 
    // console.log("현재 요소의 위치 y는 " + element.top +", x는" + element.left + "입니다."); 
    const option = "width= 310px, height = 100px, top=200px, left=200px";
    setPlanPopUp = window.open("setPlan", "setPlan",option);
    setPlanPopUp.onload = setPlanOnLoad;
    element.onmouseover = null;

    var setPlanExitInterval = window.setInterval(function(){
        try{
            if(setPlanPopUp.closed){
                window.clearInterval(setPlanExitInterval);
                element.onmouseover = onMouseOver;

                // closeCallback(setPlanPopUp);
            }
        }
        catch(e){}
    }, 1000);
}   

function mouseLeave(e){
    console.log("mouse leavedssssssssssssss");
    e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
    e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
    element.onmouseup = null; // onmouseup을 초기화 시킴니다. 
    element.onmousemove = null; // onmousemove을 초기화 시킴니다. 
    element.onmouseleave = null;
    whenMouseHover.style.top = `${e.offsetY}px`;
    whenMouseHover.classList.remove("showing");
}

function dragMouseDown(e){ // 요소를 마우스로 눌렀을 경우
    console.log("do dragMouseDown");

    e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 
        //  없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음)
    e.preventDefault();     // 일단 e의 기본 수행을 막습니다. 
    pos4 = e.offsetY; // 마우스 이벤트가 발생할 떄 마다 당시의 마우스 y좌표를 pos4에 저장합니다.
    console.log(`pos4 = ${pos4}`)
    element.onmouseup = closeDragElement; // 마우스 클릭을 해제 했을 떄 closeDragElement()을 호출합니다
    element.onmousemove = clickedDrag; // 마우스를 움직일때 clickedDrag()을 호출합니다.
    element.onmouseleave = mouseLeave;
}

function onMouseOver (e){
    console.log("onMouseOver!!!");

    e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 
        //  없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음)
    e.preventDefault(); 

    colorBarTooltip.innerHTML = tooltipTime(e.offsetY);

    whenMouseHover.style.top = `${e.offsetY}px`;
    whenMouseHover.classList.add("showing");
    // element.style.after.backgroundColor = "blue";
    element.onmousemove = hoverMove;
    element.onmouseleave = mouseLeave;
}

function dragElement(element) {
    console.log("do dragElement fn");

    element.onmouseover = onMouseOver;
    element.onmousedown = dragMouseDown; 
    // 요소를 마우스로 눌렀을 경우 dragMouseDown()을 실행 시키게 됩니다 
}

function colorbarLinePainting(){
    const unitSize = COLORBAR_HEIGHT / 19 ; // 33.157...px(1시간)

    for(let i=1; i<19; ++i){
        const line = document.createElement("span");
        line.classList.add("line");
        line.style.top = `${unitSize*i}px`;
        line.id = `line${i}`;
        element.appendChild(line);
    }
}

function init(){
    element = document.querySelector(".daily .planner .colorbar");
    whenMouseHover = document.querySelector(".daily .planner .colorbar .whenMouseHover");
    colorBarTooltip = document.querySelector(".daily .planner .colorbar .tooltip");    

    dragElement(element);
    colorbarLinePainting();

}

window.onload = init;
