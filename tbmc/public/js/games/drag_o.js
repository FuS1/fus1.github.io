(function($) {

    //初始化問題是否已回答
    var questionIsAnswered={};
    $(".question").each(function(){
        questionIsAnswered[$(this).data('answer')]=false;
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
            return $(this).data('answer') === $item.data('value') || $(this).data('is_stock_area')=='yes';
        },
        drop: function(event, ui) {
            if($(this).data('is_stock_area')==='yes'){
                questionIsAnswered[$(this).data('answer')]=false;
            }else{
                $(this).centerOnDrop(ui);
                questionIsAnswered[$(this).data('answer')]=true;
            }

            if(checkAnswer()){
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

        }
    });

    function checkAnswer(){
        var result = true;
        for (var i in questionIsAnswered) {
        if(i!=='undefined' && questionIsAnswered[i] === false){
            result = false;
        }
        
        }
        return result;
    }

})(jQuery);
