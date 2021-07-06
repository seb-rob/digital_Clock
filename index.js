function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hours", "minutes", "seconds", "period"];
    var values = [weeks[dname], months[mo], dnum, yr, hou, min, sec, pe];
        
    for (let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];           //to go through all the ids
    }

    // document.getElementById("dayname").innerHTML = dname;
    // document.getElementById("month").innerHTML = mo;
    // document.getElementById("daynum").innerHTML = dnum;
    // document.getElementById("year").innerHTML = yr;
    // document.getElementById("hours").innerHTML = hou;
    // document.getElementById("minutes").innerHTML = min;
    // document.getElementById("seconds").innerHTML = sec;
    // document.getElementById("period").innerHTML = pe;
}
function initClock() {
    window.setInterval("updateClock()", 1000);
}