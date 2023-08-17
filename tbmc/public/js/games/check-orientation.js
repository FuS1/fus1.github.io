var haveGetUsePadNotice = false;
var haveGetUseRurnNotice = false;
function applyDeviceCheck() {

    if (
        (navigator.userAgent.match(/Android/i) || 
        navigator.userAgent.match(/webOS/i)   || 
        navigator.userAgent.match(/iPhone/i)  || 
        navigator.userAgent.match(/iPod/i)    || 
        navigator.userAgent.match(/BlackBerry/i) || 
        navigator.userAgent.match(/Windows Phone/i))
        && !haveGetUsePadNotice
    ) {
        setTimeout(function(){
            Swal.fire({
                title: '建議使用平板或電腦獲得最佳體驗',
                width: '90%',
                imageUrl: useComputerOrPadImgUrl,
                imageWidth:250,
                showCancelButton: false,
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey:false,
                reverseButtons:true,
            }).then(function(result) {
                if (result.isConfirmed) {
                    haveGetUsePadNotice=true;
                    applyDeviceCheck();
                }
            });
        }, 100);
    }else if (window.innerHeight > window.innerWidth) {
        Swal.fire({
            title: '請使用橫式畫面操作',
            width: '90%',
            imageUrl: pleaseRotationImgUrl,
            imageWidth:250,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey:false,
            reverseButtons:true,
        }).then(function(result) {
            if (result.isConfirmed) {
                haveGetUseRurnNotice=true;
                applyDeviceCheck();
            }
        });
    }else{
        Swal.close();
    }
}

window.onresize = function (event) {
    applyDeviceCheck();
}
  
setTimeout(function(){
    applyDeviceCheck();
},100);

