function fix2len (e) {return Number(e) > 9 ? '' + e : '0' + e}
var El = document.querySelectorAll.bind(document)
function autoCall () {
    var n = new this.Date
    El('.mp-1')[0].innerText = 
        fix2len(n.getHours())
    El('.mp-2')[0].innerText = 
        fix2len(n.getMinutes())
    El('.mp-3 > span')[0].innerText = 
        fix2len(n.getSeconds())
    setTimeout(autoCall, 1000)
}
window.onload = autoCall