

if (
    navigator.userAgent.match(/Android/i) || 
    navigator.userAgent.match(/webOS/i)   || 
    navigator.userAgent.match(/iPhone/i)  || 
    navigator.userAgent.match(/iPod/i)    || 
    navigator.userAgent.match(/BlackBerry/i) || 
    navigator.userAgent.match(/Windows Phone/i)
) {
    setTimeout(function(){
        Swal.fire({
            title: '請使用平板或電腦',
            width: '90%',
            imageUrl: 'image/computerOrPad.png',
            imageWidth:250,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey:false,
            reverseButtons:true,
        });
    }, 100);
}


window.onresize = function (event) {
    applyOrientation();
}
  
function applyOrientation() {
    if (window.innerHeight > window.innerWidth) {
        Swal.fire({
            title: '請使用橫式畫面操作',
            width: '90%',
            imageUrl: 'image/rotation.png',
            imageWidth:250,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey:false,
            reverseButtons:true,
        });
    }else{
        Swal.close();
    }
}

setTimeout(function(){
    applyOrientation();
},100);

