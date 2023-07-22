

if (
    navigator.userAgent.match(/Android/i) || 
    navigator.userAgent.match(/webOS/i)   || 
    navigator.userAgent.match(/iPhone/i)  || 
    navigator.userAgent.match(/iPod/i)    || 
    navigator.userAgent.match(/BlackBerry/i) || 
    navigator.userAgent.match(/Windows Phone/i)
) {

    alert('請使用平板或電腦進行遊戲');
}


window.onresize = function (event) {
    applyOrientation();
}
  
function applyOrientation() {
    if (window.innerHeight > window.innerWidth) {
        alert("請將畫面變更為橫式");
    }
}