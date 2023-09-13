
(function($) {

    // 第一期心眼
    if( new Date() > new Date("2023-11-11") || !['Word Scramble','Getting to Know a Cat','Mommy and Baby','Spell and Count','Guess Who','Growing a Seed','Where is the Insect ?','Matching Game','Guess Who'].includes($('.game-title').text().trim()) ){
        return ;
    }

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
                        allowOutsideClick: true,
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
