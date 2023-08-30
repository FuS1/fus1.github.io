
(function($) {
    var questionIsAnswered = {};
    //初始化問題是否已回答
    $(".question").each(function(){
        questionIsAnswered[$(this).data('answer')]='stock';
    });

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
            return true ;// $(this).data('answer') === $item.data('value') || $(this).data('is_stock_area')=='yes';
        },
        drop: function(event, ui) {

            $(this).droppable('option', 'accept', ui.draggable);//一格僅接受一個物件
            
            if($(this).data('answer')=='stock'){
                questionIsAnswered[ui.draggable[0]['dataset']['value']]='stock';
            }else if($(this).data('answer') === ui.draggable[0]['dataset']['value']){
                questionIsAnswered[$(this).data('answer')]='right';
                $(this).centerOnDrop(ui);
            }else{
                questionIsAnswered[$(this).data('answer')]='wrong';
                $(this).centerOnDrop(ui);
            }
            
            let result = checkAnswer();
            if(result['allAnswered']){
                if(result.result){
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
                    for (var i in questionIsAnswered) {
                        if(questionIsAnswered[i]=='wrong'){

                            $("[data-value="+i+"]").addClass('injwang-text-red-500');
                            setTimeout(function() {
                                for (var i in questionIsAnswered) {
                                    if(questionIsAnswered[i]=='wrong'){
                                        questionIsAnswered[i]='stock';
                                        $("[data-value="+i+"]").removeClass('injwang-text-red-500'); 
                                        $("[data-value="+i+"]").css('left','0px');
                                        $("[data-value="+i+"]").css('top','0px');
                                    }
                                }
                            }, 3000);
                        }
                    }
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
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.draggable-item');//一格僅接受一個物件
        }   
    });
    
    function checkAnswer(){
        var allAnswered = true;
        var result = true;
        for (var i in questionIsAnswered) {
            if(questionIsAnswered[i] === 'stock'){
                allAnswered=false;
            }else if(questionIsAnswered[i] === 'wrong' ){
                result = false;
            }
        }
        return {
            allAnswered:allAnswered,
            result:result
        }
    }

})(jQuery);
