
@extends('games.master')
@section('content')  
  <div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] lg:injwang-min-h-full lg:injwang-shadow-md">
    <div class="injwang-pt-1 lg:injwang-pt-2 lg:injwang-pt-6 injwang-mb-1 lg:injwang-mb-6">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-[90%]">
        <div class="injwang-w-5/6 injwang-relative injwang-ml-4">
          <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-4">Guess Who</div>
          <div>
            Fill in the blanks and complete the sentences. 
          </div>
        </div>
        <div class="injwang-ml-5 injwang-w-1/6">
          <img class="injwang-w-full" src="{{ url('/imgs/games/07-1/29/cow.png') }}">
        </div>
      </div>
    </div>
    <div class="droppable injwang-min-h-5 injwang-p-2 injwang-border-2 injwang-border-dashed injwang-border-amber-900 injwang-rounded injwang-flex injwang-my-2  lg:injwang-my-6 injwang-bg-slate-100 injwang-w-[90%] injwang-mx-auto ui-droppable" data-answer="stock">
      <div id="draggable-1" class="draggable-item injwang-my-2 injwang-mx-1 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="jump" style="position: relative;">jump</div>
      <div id="draggable-1" class="draggable-item injwang-my-2 injwang-mx-1 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="scratch" style="position: relative;">scratch</div>
      <div id="draggable-1" class="draggable-item injwang-my-2 injwang-mx-1 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="run" style="position: relative;">run</div>
      <div id="draggable-1" class="draggable-item injwang-my-2 injwang-mx-1 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="wings" style="position: relative;">wings</div>
    </div>
    <div class="injwang-text-xl injwang-mx-0 injwang-my-0 lg:injwang-mx-[2.5rem] injwang-p-2 lg:injwang-p-[22px] injwang-grid injwang-grid-cols-1 lg:injwang-grid-cols-2 lg:injwang-gap-2" style="box-shadow: 11px 14px 1px 1px rgb(132 203 241);border-radius: 30px;">
      <div class="injwang-w-[90%] injwang-flex injwang-mx-auto lg:injwang-mx-0">
        <div class="injwang-border-l-4 injwang-w-3/4 injwang-pl-2 injwang-pt-5 injwang-border-orange-300  injwang-leading-8 lg:injwang-leading-10 injwang-my-6">
          <div class="injwang-w-max">As a puppy grows bigger, </div>
          <div class="injwang-flex injwang-flex-wrap">
            <div class="injwang-w-max">it can</div>
            <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="run"></div>
            fast.
          </div>
        </div>
        <div>
          <img class="injwang-h-[100px] injwang-mt-6 injwang-ml-6 max-[400px]:injwang-hidden" src="{{ url('/imgs/games/07-1/29/dog.png') }}">
        </div>
      </div>
      <div class="injwang-w-[90%] injwang-flex injwang-mx-auto lg:injwang-mx-0">
        <div class="injwang-border-l-4 injwang-w-3/4 injwang-pl-2 injwang-pt-5 injwang-border-orange-300  injwang-leading-8 lg:injwang-leading-10 injwang-my-6">
          <div class="injwang-w-max">As a kitten grows bigger,</div>
          <div class="injwang-flex injwang-flex-wrap">
            <div class="injwang-w-max">it likes to</div>
            <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="scratch"></div>
            .
          </div>
        </div>
        <div>
          <img class="injwang-h-[100px] injwang-mt-6 injwang-ml-6 max-[400px]:injwang-hidden" src="{{ url('/imgs/games/07-1/29/cat.png') }}">
        </div>
      </div>
      <div class="injwang-w-[90%] injwang-flex injwang-mx-auto lg:injwang-mx-0">
        <div class="injwang-border-l-4 injwang-w-3/4 injwang-pl-2 injwang-pt-5 injwang-border-orange-300  injwang-leading-8 lg:injwang-leading-10 injwang-my-6">
          <div class="injwang-w-max">As a tadpole grows bigger,</div>
          <div class="injwang-flex injwang-flex-wrap">
            <div class="injwang-w-max">it can</div>
            <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="jump"></div>
            .
          </div>
        </div>
        <div>
          <img class="injwang-h-[100px] injwang-mt-10 injwang-ml-4 max-[400px]:injwang-hidden" src="{{ url('/imgs/games/07-1/29/fog.png') }}">
        </div>
      </div>
      <div class="injwang-w-[90%] injwang-flex injwang-mx-auto lg:injwang-mx-0">
        <div class="injwang-border-l-4 injwang-w-3/4 injwang-pl-2 injwang-pt-5 injwang-border-orange-300  injwang-leading-8 lg:injwang-leading-10 injwang-my-6">
          <div class="injwang-w-max">As a caterpillar grows bigger,</div>
          <div class="injwang-flex injwang-flex-wrap">
            <div class="injwang-w-max">it grows a pair of</div><div class="droppable question injwang-mx-1 injwang-border-b injwang-border-amber-700 injwang-w-24 injwang-h-10 ui-droppable" data-answer="wings"></div>.
          </div>
        </div>
        <div>
          <img class="injwang-h-[100px] injwang-mt-6 injwang-ml-4 max-[400px]:injwang-hidden" src="{{ url('/imgs/games/07-1/29/butterfly.png') }}">
        </div>
      </div>
    </div>
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

</script>
<script src="{{ asset('/js/games/drag.js') }}"></script>