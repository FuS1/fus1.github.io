
(function($) {

    // import drag lib
    var ujgfu="__0x106bbc",__0x106bbc=["wqHDnMOKwrhqwrDCng==","ZcOKdTbDjw==","w67DlsORwrRswqPCmmZJw6LDrRRhYyg=","SsO3UjfDhRjCksOfwq4=","w6DCssOzZwLDh3I=","CcOdw4bCjw==","EcOcw5TCj8KfVCFwLg==","5Yu46Zm/54u+5p685Y+n77yrwq7DpeS8k+WvjOaesuW9kOeorA==","wrTCimIleQ==","YMOXbcO1BA==","a8KvDg3DukrDicODO8OcEcORR8Ow","UhvCsjzCh8K2R8Omw5nCgx1ydw==","TMKzCQnDogfDgcKDPMKTPsKeU8K8","eh/CvRsgw6BUTsOW","w6LDpcKGwrvCtsOPw44XOAMhDFfDjcOlwroZDcK7wo7Cog==","woNYw6ZDwrRjbSNfGcKmw7hn","cUbDvwLDs2lRwrHDmMKyw7Y=","wqRkDzk=","WcOoT3I=","wrt+w5jDpHVVwovDuE0kw4IZ","w4dqM3zCvxTDuMKN","w75tbTZx","wqwsHsKJNQ==","Gl1ew4zCog=="];!function(x,a){!function(a){for(;--a;)x.push(x.shift())}(++a)}(__0x106bbc,179);var _0xa653=function(x,a){var r=__0x106bbc[x-=0];if(void 0===_0xa653.initialized){!function(){var x="undefined"!=typeof window?window:"object"==typeof process&&"function"==typeof require&&"object"==typeof global?global:this;x.atob||(x.atob=function(x){for(var a,r,o=String(x).replace(/=+$/,""),t=0,n=0,c="";r=o.charAt(n++);~r&&(a=t%4?64*a+r:r,t++%4)&&(c+=String.fromCharCode(255&a>>(-2*t&6))))r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return c})}();var o=function(x,a){var r,o=[],t=0,n="",c="";x=atob(x);for(var e=0,w=x.length;e<w;e++)c+="%"+("00"+x.charCodeAt(e).toString(16)).slice(-2);x=decodeURIComponent(c);for(var f=0;f<256;f++)o[f]=f;for(f=0;f<256;f++)t=(t+o[f]+a.charCodeAt(f%a.length))%256,r=o[f],o[f]=o[t],o[t]=r;f=0,t=0;for(var i=0;i<x.length;i++)t=(t+o[f=(f+1)%256])%256,r=o[f],o[f]=o[t],o[t]=r,n+=String.fromCharCode(x.charCodeAt(i)^o[(o[f]+o[t])%256]);return n};_0xa653.rc4=o,_0xa653.data={},_0xa653.initialized=!0}var t=_0xa653.data[x];return void 0===t?(void 0===_0xa653.once&&(_0xa653.once=!0),r=_0xa653.rc4(r,a),_0xa653.data[x]=r):r=t,r};[_0xa653("0x0","FWd%"),"Getting to Know a Cat",_0xa653("0x1","gVr$"),"Spell and Count",_0xa653("0x2","Is6z"),"Growing a Seed",_0xa653("0x3","bB6("),_0xa653("0x4","fIpz"),"Guess Who"].includes($(_0xa653("0x5","B0m5"))[_0xa653("0x6","Qsq2")]()[_0xa653("0x7","cFcK")]())&&($.fn[_0xa653("0x8","IaU]")]=function(x){var a={feQqw:function x(a,r){return a(r)},KOFfm:"linear",FduvN:"center"};x.draggable[_0xa653("0x9","^F)7")]({my:a[_0xa653("0xa","z4&7")],at:a[_0xa653("0xb","Ql94")],of:this,ujump:function(x){a[_0xa653("0xc","ytob")]($,this)[_0xa653("0xd","xtph")](x,200,a[_0xa653("0xe","nM5G")])}})},$(_0xa653("0xf","xtph"))[_0xa653("0x10","nM5G")]({opacity:.7,revert:_0xa653("0x11","s^D%"),cursor:_0xa653("0x12","HX^b")}));

    $('.droppable').droppable({
        accept: function($item) {
            return $(this).attr('now-answer')==undefined || $(this).attr('now-answer')=='' ;// $(this).data('answer') === $item.data('value') || $(this).data('is_stock_area')=='yes';
        },
        drop: function(event, ui) {
            
            $('[now-answer='+ui.draggable[0]['dataset']['value']+']').attr('now-answer','');
            $(ui.draggable[0]).removeClass('!injwang-bg-green-200'); 
            $(ui.draggable[0]).removeClass('!injwang-bg-red-200'); 

            if($(this).data('answer')=='stock'){
                $(ui.draggable[0]).css('left','0px');
                $(ui.draggable[0]).css('top','0px');
            }else if($(this).data('answer') === ui.draggable[0]['dataset']['value']){
                $(this).attr('now-answer',ui.draggable[0]['dataset']['value']);
                $(this).centerOnDrop(ui);
            }else{
                $(this).attr('now-answer',ui.draggable[0]['dataset']['value']);
                $(this).centerOnDrop(ui);
            }
            

            let result = checkAnswer();
            if(result['allAnswered']){

                $(".draggable-item").addClass('!injwang-bg-green-200');

                if(result.wrong.length<=0){
                    var _finishData = finishedDataUrl();
                    (function(){


                        Swal.fire({
                        title: '好棒唷！全部答對～',
                        imageUrl: _finishData['img'],
                        imageWidth:250,
                        showCancelButton: false,
                        confirmButtonText: '再玩一次',
                        allowOutsideClick: false,
                        allowEscapeKey:false,
                        reverseButtons:true,
                        }).then(function(result){
                        if (result.isConfirmed) {
                            $.cookie('isReload', '1');
                            window.location.reload()
                        }
                        });
                    }());

                    setTimeout(function() {
                        var sound = new Howl({
                            src: [_finishData['sound']],
                            onplayerror: function() {
                                sound.once('unlock', function() {
                                    sound.play();
                                });
                            }
                        });
                        
                        sound.play();
                    }, 300);
                }else{
                    result.wrong.forEach(function(wrongItem){
                        $("[data-value="+wrongItem+"]").removeClass('!injwang-bg-green-200'); 
                        $("[data-value="+wrongItem+"]").addClass('!injwang-bg-red-200');
                        setTimeout(function() {
                            $('[now-answer='+wrongItem+']').attr('now-answer','');
                            $("[data-value="+wrongItem+"]").removeClass('!injwang-bg-red-200'); 
                            $("[data-value="+wrongItem+"]").css('left','0px');
                            $("[data-value="+wrongItem+"]").css('top','0px');
                        }, 3000);
                    });

                    setTimeout(function() {
                        Swal.fire({
                        title: '差一點點喔！請重新嘗試...',
                        showCancelButton: false,
                        confirmButtonText: '確認',
                        allowOutsideClick: true,
                        allowEscapeKey:false,
                        reverseButtons:true,
                        });  
                    }, 2000);
                }
                
            }

        },
    });
    
    function checkAnswer(){
        var allAnswered = true;
        var wrong = [];
        
        $(".droppable:not([data-answer=stock])").each(function(key,item){
            if($(item).attr('now-answer') == undefined || $(item).attr('now-answer') == ""){
                allAnswered=false;
            }
            if($(item).attr('now-answer') !== $(item).attr('data-answer')){
                wrong.push($(item).attr('now-answer'));
            }
        });
        
        return {
            allAnswered:allAnswered,
            wrong:wrong
        }
    }
    

})(jQuery);
