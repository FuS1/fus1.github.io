
@extends('games.master')
@section('content')  
<div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] injwang-h-auto injwang-shadow-md" style="height:auto;">
  <div id="title-warp" class="injwang-pt-2 lg:injwang-pt-6">
    <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-[90%]">
      <div class="injwang-w-full injwang-relative injwang-ml-4">
        <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="../../public/imgs/games/title-fog.png">
        <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Where is the Insect ?</div>
        <div>
          Insects are everywhere. Do you know where they are ?<br>
          Look at the pictures below; then connect it to the correct word.
        </div>
      </div>
    </div>
  </div>
  <div id="app" class="injwang-w-[90%] injwang-mx-auto injwang-mt-[20px]"></div>
</div>
<script>
    var useComputerOrPadImgUrl = "{{ asset('/imgs/games/computerOrPad.png') }}",
        pleaseRotationImgUrl = "{{ asset('/imgs/games/pleaseRotation.png') }}";
        finishedDatas=[{
            img: "{{ asset('/imgs/games/finishImg1.png') }}",
            sound:"{{ asset('/sounds/games/finishSound1.mp3') }}",
          },{
            img: "{{ asset('/imgs/games/finishImg2.png') }}",
            sound:"{{ asset('/sounds/games/finishSound2.mp3') }}",
          },{
            img: "{{ asset('/imgs/games/finishImg3.png') }}",
            sound:"{{ asset('/sounds/games/finishSound3.mp3') }}",
          }
        ],
        finishedDataUrl = function(){
          return finishedDatas[Math.floor(Math.random()*finishedDatas.length)];
        };
  var config = {
    "questions": [
      [
        "{{ asset('/imgs/games/11-5/28/grasshopper.jpg')       }}, ,1,{{ asset('/imgs/games/11-5/28/empty.png')       }},on the leaf  ,4",
        "{{ asset('/imgs/games/11-5/28/stag_bettle.jpg')       }}, ,2,{{ asset('/imgs/games/11-5/28/empty.png')       }},on the ground,3",
        "{{ asset('/imgs/games/11-5/28/bee.jpg')               }}, ,3,{{ asset('/imgs/games/11-5/28/empty.png')       }},on the flower,2",
        "{{ asset('/imgs/games/11-5/28/stick_insect.jpg')      }}, ,4,{{ asset('/imgs/games/11-5/28/empty.png')       }},on the tree  ,1",
      ]
    ],
    "errorDuration": 3000,
    "gapX": 50,
    "onFinish":function(){
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

    },
    "onError":function(){
      setTimeout(function() {
        Swal.fire({
          title: '差一點點喔！請重新嘗試...',
          html:'',
          showCancelButton: false,
          confirmButtonText: '確認',
          allowOutsideClick: true,
          allowEscapeKey:false,
          reverseButtons:true,
        });  
      }, 2000);
    }
  };
</script> 
<script src="{{ asset('/js/games/dot-link-new.js') }}"></script>
@endsection



