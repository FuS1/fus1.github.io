(function($) {
      
      $('q-option').on('click',function(){
        if($(this).data('answer')==='right'){
          $(this).parent().find('q-option').hide();
          $(this).parent().data('answered',true);
          $(this).show().addClass('text-emerald-700');

          if( checkAnswer()){
            Swal.fire({
              title: '全部正確!',
              showCancelButton: true,
              cancelButtonText: '再玩一次',
              confirmButtonText: '回上一頁',
              allowOutsideClick: false,
              allowEscapeKey:false,
              reverseButtons:true,
            }).then(function(result){
              if (result.isConfirmed) {
                window.location += "/../";
              }else{
                window.location.reload();
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