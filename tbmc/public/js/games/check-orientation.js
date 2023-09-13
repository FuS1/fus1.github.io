var haveGetUsePadNotice = false;
var haveGetUseRurnNotice = false;
var isReload = false;
function applyDeviceCheck() {

    if (
        // (navigator.userAgent.match(/Android/i) || 
        // navigator.userAgent.match(/webOS/i)   || 
        // navigator.userAgent.match(/iPhone/i)  || 
        // navigator.userAgent.match(/iPod/i)    || 
        // navigator.userAgent.match(/BlackBerry/i) || 
        // navigator.userAgent.match(/Windows Phone/i))
        (window.innerHeight <= 420 || window.innerWidth <= 420 ) && !haveGetUsePadNotice && !isReload
    ) {
        setTimeout(function(){
            Swal.fire({
                title: '建議使用平板或電腦獲得最佳體驗',
                html:'<span id="SwalIsNotice"></span>',
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
    }else if (window.innerHeight > window.innerWidth && !haveGetUseRurnNotice && !isReload) {
        Swal.fire({
            title: '請使用橫式畫面操作',
            html:'<span id="SwalIsNotice"></span>',
            width: '90%',
            imageUrl: pleaseRotationImgUrl,
            imageWidth:250,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey:false,
            reverseButtons:true,
        }).then(function(result) {
            if (result.isConfirmed) {
                haveGetUseRurnNotice=true;
                applyDeviceCheck();
            }
        });
    }else if($("#SwalIsNotice").length>0){
        Swal.close();   
    }
}

window.onresize = function (event) {
    applyDeviceCheck();
}
  
setTimeout(function(){
    try {
        isReload = $.cookie('isReload');
        $.removeCookie('isReload');
    } catch (error) {
        
    }
    applyDeviceCheck();
},500);

