(function($) {
  
  $('q-option').on('click',function(){
    
    $(this).parent().find('q-option').hide();
    $(this).show();
    $(this).parent().attr('now-answer',$(this).attr("data-option-answer"));
    
    let result = checkAnswer();

    if(result['allAnswered']){
        if(result.wrong.length<=0){
            Swal.fire({
                title: '好棒唷！全部答對～',
                imageUrl: finishedImgUrl(),
                imageWidth:250,
                showCancelButton: false,
                confirmButtonText: '再玩一次',
                allowOutsideClick: true,
                allowEscapeKey:false,
                reverseButtons:true,
            }).then(function(result){
                if (result.isConfirmed) {
                    window.location.reload()
                }
            });
        }else{
            result.wrong.forEach(function(wrongItem){
                $("[data-answer="+wrongItem+"] q-option").addClass('!injwang-text-red-500');
                setTimeout(function() {
                    $("[data-answer="+wrongItem+"]").attr('now-answer','');
                    $("[data-answer="+wrongItem+"] q-option").removeClass('!injwang-text-red-500'); 
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