
@extends('games.master')
@section('content')  
  <div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] injwang-h-auto injwang-shadow-md" style="height:auto;">
    <div id="title-warp" class="injwang-pt-2 lg:injwang-pt-6">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-[90%]">
        <div class="injwang-w-full injwang-relative injwang-ml-4">
          <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Mommy and Baby </div>
          <div>
            Help each baby to find its mommy, and connect them correctly. 
          </div>
        </div>
      </div>
    </div>
    <div id="app" class="injwang-w-[90%] injwang-mx-auto injwang-mt-[10px]" style="margin-top: 10px;"></div>
  </div>
@endsection



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

  var option = [
    [
      "{{ asset('/imgs/games/07-1/26/puppy.png')       }},puppy      ,1,{{ asset('/imgs/games/07-1/26/dog.png')       }},dog      ,3",
      "{{ asset('/imgs/games/07-1/26/kitten.png')      }},kitten     ,2,{{ asset('/imgs/games/07-1/26/cat.png')       }},cat      ,4",
      "{{ asset('/imgs/games/07-1/26/chick.png')       }},chick      ,3,{{ asset('/imgs/games/07-1/26/hen.png')       }},hen      ,1",
      "{{ asset('/imgs/games/07-1/26/tadpole.png')     }},tadpole    ,4,{{ asset('/imgs/games/07-1/26/frog.png')      }},frog     ,2",
    ],
    [
      "{{ asset('/imgs/games/07-1/26/chick.png')       }},chick      ,1,{{ asset('/imgs/games/07-1/26/hen.png')       }},hen      ,2",
      "{{ asset('/imgs/games/07-1/26/tadpole.png')     }},tadpole    ,2,{{ asset('/imgs/games/07-1/26/frog.png')      }},frog     ,1",
      "{{ asset('/imgs/games/07-1/26/caterpillar.png') }},caterpillar,3,{{ asset('/imgs/games/07-1/26/butterfly.png') }},butterfly,3",
      "{{ asset('/imgs/games/07-1/26/baby.png')        }},baby       ,4,{{ asset('/imgs/games/07-1/26/mommy.png')     }},mommy    ,4"
    ],
    [
      "{{ asset('/imgs/games/07-1/26/puppy.png')       }},puppy      ,1,{{ asset('/imgs/games/07-1/26/dog.png')       }},dog      ,3",
      "{{ asset('/imgs/games/07-1/26/chick.png')       }},chick      ,2,{{ asset('/imgs/games/07-1/26/hen.png')       }},hen      ,1",
      "{{ asset('/imgs/games/07-1/26/tadpole.png')     }},tadpole    ,3,{{ asset('/imgs/games/07-1/26/frog.png')      }},frog     ,2",
      "{{ asset('/imgs/games/07-1/26/baby.png')        }},baby       ,4,{{ asset('/imgs/games/07-1/26/mommy.png')     }},mommy    ,4"
    ],
    [
      "{{ asset('/imgs/games/07-1/26/kitten.png')      }},kitten     ,1,{{ asset('/imgs/games/07-1/26/cat.png')       }},cat      ,4",
      "{{ asset('/imgs/games/07-1/26/chick.png')       }},chick      ,2,{{ asset('/imgs/games/07-1/26/hen.png')       }},hen      ,1",
      "{{ asset('/imgs/games/07-1/26/tadpole.png')     }},tadpole    ,3,{{ asset('/imgs/games/07-1/26/frog.png')      }},frog     ,2",
      "{{ asset('/imgs/games/07-1/26/caterpillar.png') }},caterpillar,4,{{ asset('/imgs/games/07-1/26/butterfly.png') }},butterfly,3",
    ],
    [
      "{{ asset('/imgs/games/07-1/26/kitten.png')      }},kitten     ,1,{{ asset('/imgs/games/07-1/26/cat.png')       }},cat      ,4",
      "{{ asset('/imgs/games/07-1/26/caterpillar.png') }},caterpillar,2,{{ asset('/imgs/games/07-1/26/butterfly.png') }},butterfly,3",
      "{{ asset('/imgs/games/07-1/26/baby.png')        }},baby       ,3,{{ asset('/imgs/games/07-1/26/mommy.png')     }},mommy    ,2",
      "{{ asset('/imgs/games/07-1/26/chick.png')       }},chick      ,4,{{ asset('/imgs/games/07-1/26/hen.png')       }},hen      ,1",
    ]
  ]


  var config = {
    "prologue": "",
    "questions": [
      option[Math.floor(Math.random()*option.length)]
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