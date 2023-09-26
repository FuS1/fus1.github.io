
@extends('games.master')
@section('content')  
  <div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] injwang-h-auto injwang-shadow-md" style="height:auto;">
    <div id="title-warp" class="injwang-pt-2 lg:injwang-pt-6">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-[90%]">
        <div class="injwang-w-full injwang-relative injwang-ml-4">
          <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Matching Game</div>
          <div>
            Take a look at the pictures below; then connect to the correct word. 
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
        "{{ url('/imgs/games/11-5/25/stick_insect.jpg') }}, ,1,{{ url('/imgs/games/11-5/25/empty.png') }},stick insect,3",
        "{{ url('/imgs/games/11-5/25/grasshoppers.jpg') }}, ,2,{{ url('/imgs/games/11-5/25/empty.png') }},grasshoppers,1",
        "{{ url('/imgs/games/11-5/25/cicada.jpg')       }}, ,3,{{ url('/imgs/games/11-5/25/empty.png') }},cicada      ,2",
        "{{ url('/imgs/games/11-5/25/bee.jpg')          }}, ,4,{{ url('/imgs/games/11-5/25/empty.png') }},bee         ,4",
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



