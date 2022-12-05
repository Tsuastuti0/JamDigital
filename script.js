const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function upClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if(h > 12){
        h = h- 12
        ampm = "PM"
    }

    h = h <10 ? "9" + h : h ;
    m = m <10 ? "0" + m : m ;
    s = s <10 ? "0" + s : s ;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        upClock(6)
    }, 1000);
    console.log upClock();
}

upClock();