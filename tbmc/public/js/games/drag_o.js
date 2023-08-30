
(function($) {

    $.fn.centerOnDrop = function(ui) {
        ui.draggable.position({
            my: 'center',
            at: 'center',
            of: this,
            ujump: function(pos) {
                $(this).animate(pos, 200, 'linear');
            }
        });
    };


    $('.draggable-item').draggable({ 
        opacity: 0.7,      
        revert: 'invalid',//是否可以隨意托拽
        cursor: "move"
    });

    $('.droppable').droppable({
        accept: function($item) {
            console.log($(this).attr('now-answer'));
            return $(this).attr('now-answer')==undefined || $(this).attr('now-answer')=='' ;// $(this).data('answer') === $item.data('value') || $(this).data('is_stock_area')=='yes';
        },
        drop: function(event, ui) {
            
            $('[now-answer='+ui.draggable[0]['dataset']['value']+']').attr('now-answer','');

            if($(this).data('answer')=='stock'){
                $(ui.draggable[0]).removeClass('injwang-text-red-500'); 
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
                        $("[data-value="+wrongItem+"]").addClass('injwang-text-red-500');
                        setTimeout(function() {
                            $('[now-answer='+wrongItem+']').attr('now-answer','');
                            $("[data-value="+wrongItem+"]").removeClass('injwang-text-red-500'); 
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
