function yokeissa(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = correctTime(m);
    s = correctTime(s);
    document.getElementById('relojyokeissa').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(yokeissa, 1000);
}

// Adding the zero if needed
function correctTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}