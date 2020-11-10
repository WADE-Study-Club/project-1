const dailyDate = document.querySelector(".daily .date");

function setDate(){
    const now = new Date();
    const year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        day = now.getDay();
    const dayKor = ['월요일', '화요일', '수요일', '목요일', '금요일',
        '토요일', '일요일'];
    dailyDate.innerHTML = `${year}.${month+1}.${date} ${dayKor[day]}`;
}

function datePaint(){

}

function init(){
    setDate();
    datePaint();
}

init();
