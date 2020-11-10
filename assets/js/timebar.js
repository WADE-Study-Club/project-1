const timeList = document.querySelector(".daily .timebar ul");

var timeStart = 6,
    timeFinish = 24,
    timeInterval = 1;

function timetableSet(){
    for(var i=timeStart; i<=timeFinish; i=i+timeInterval){
        const li = document.createElement("li");
        li.innerHTML = `${i<10 ? `0${i}` : i}`;
        timeList.appendChild(li);
    }
}

function init(){
    timetableSet();
    
}

init();
