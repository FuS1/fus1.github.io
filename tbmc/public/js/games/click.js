(function($) {
  
    $('q-option').on('click',function(){
      if($(this).data('answer')==='right'){
        $(this).parent().find('q-option').hide();
        $(this).parent().data('answered',true);
        $(this).show().addClass('!injwang-text-emerald-700');
  
        if( checkAnswer()){
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
        }
  
      }else{
        var _option = $(this);
        var nowColor = _option.css('color');
              
        _option.addClass('!injwang-text-red-700');
        setTimeout(function() {
            _option.removeClass('!injwang-text-red-700');
        }, 700);
  
      }
      
    });
  
  })(jQuery);
  
  
  function checkAnswer(){
    var result = true;
    $('question').each(function(){
      if($(this).data('answered') !== true){
        result=false;
      }
    });
    return result;
  }