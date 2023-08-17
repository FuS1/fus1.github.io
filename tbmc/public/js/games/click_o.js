(function($) {
  
  $('q-option').on('click',function(){
    if($(this).data('answer')==='right'){
      $(this).parent().find('q-option').hide();
      $(this).parent().data('answered',true);
      $(this).show().addClass('tw-text-emerald-700');

      if( checkAnswer()){
        Swal.fire({
          title: '好棒唷！全部答對～',
          showCancelButton: false,
          confirmButtonText: '再玩一次',
          allowOutsideClick: true,
          allowEscapeKey:false,
          reverseButtons:true,
        }).then(function(result){
            if (result.isConfirmed) {
              window.location = backUrl;
            }
        });
      }

    }else{
      var _option = $(this);
      var nowColor = _option.css('color');
      console.log(nowColor);
      _option.animate({
        color: "#FF0000",
      }, 300, function() {
        setTimeout(function() {
          _option.animate({
            color: nowColor,
          }, 800);
        }, 700);
      });
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