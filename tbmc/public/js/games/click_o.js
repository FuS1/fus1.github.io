(function($) {

  $('q-option').on('click',function(){
    
    $(this).parent().find('q-option').hide();
    $(this).show();
    $(this).parent().attr('now-answer',$(this).attr("data-option-answer"));
    $(this).removeClass('!injwang-bg-red-400'); 
    $(this).removeClass('!injwang-text-red-800'); 
    $(this).addClass('!injwang-text-orange-400');

    
    let result = checkAnswer();

    if(result['allAnswered']){
        
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
                $("[data-answer="+wrongItem+"] .\\!injwang-text-orange-400").addClass('!injwang-bg-red-400');
                $("[data-answer="+wrongItem+"] .\\!injwang-text-orange-400").addClass('!injwang-text-red-800'); 
                setTimeout(function() {
                    $("[data-answer="+wrongItem+"]").attr('now-answer','');
                    $("[data-answer="+wrongItem+"] q-option").removeClass('!injwang-bg-red-200'); 
                    $("[data-answer="+wrongItem+"] q-option").show(''); 
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
    console.log(checkAnswer());
  });

})(jQuery);


function checkAnswer(){
  var allAnswered = true;
  var wrong = [];
  
  $("question").each(function(key,item){
      if($(item).attr('now-answer') == undefined || $(item).attr('now-answer') == ""){
          allAnswered=false;
      }
      if($(item).attr('now-answer') !== $(item).attr('data-answer')){
          wrong.push($(item).attr('data-answer'));
      }
  });

  return {
      allAnswered:allAnswered,
      wrong:wrong
  }

}