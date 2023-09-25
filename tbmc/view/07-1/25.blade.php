
@extends('games.master')
@section('content')  
  <div class="container injwang-bg-[#fffbc7] lg:injwang-text-2xl injwang-max-w-[1180px] injwang-min-h-full lg:injwang-shadow-md" aria-hidden="true">
    <div class="injwang-pt-2 lg:injwang-pt-6">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-full sm:injwang-w-[90%]">
        <div class="injwang-w-5/6 injwang-relative injwang-ml-4">
          <img class="sm:injwang-absolute sm:injwang-left-[-2.5rem] sm:injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Getting to Know a Cat</div>
          <div>
            Match each card to the right part of the cat.
          </div>
        </div>
      </div>
    </div>
    <div class="droppable injwang-p-1 lg:injwang-p-3 injwang-border-2 injwang-border-dashed injwang-border-amber-900 injwang-rounded injwang-flex injwang-mt-4 xl:injwang-mx-10 xl:injwang-mt-6 injwang-bg-slate-100 sm:injwang-w-[90%] lg:injwang-min-h-2 lg:injwang-min-h-5 injwang-mx-auto ui-droppable" data-answer="stock">
      <div id="draggable-1" class="draggable-item injwang-m-[0.1rem] sm:injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded injwang-z-10 ui-draggable ui-draggable-handle" data-value="ear" style="position: relative;">ear</div>
      <div id="draggable-1" class="draggable-item injwang-m-[0.1rem] sm:injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded injwang-z-10 ui-draggable ui-draggable-handle" data-value="eye" style="position: relative;">eye</div>
      <div id="draggable-1" class="draggable-item injwang-m-[0.1rem] sm:injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded injwang-z-10 ui-draggable ui-draggable-handle" data-value="whisker" style="position: relative;">whisker</div>
      <div id="draggable-1" class="draggable-item injwang-m-[0.1rem] sm:injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded injwang-z-10 ui-draggable ui-draggable-handle" data-value="paw" style="position: relative;">paw</div>
      <div id="draggable-1" class="draggable-item injwang-m-[0.1rem] sm:injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded injwang-z-10 ui-draggable ui-draggable-handle" data-value="fur" style="position: relative;">fur</div>
      <div id="draggable-1" class="draggable-item injwang-m-[0.1rem] sm:injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-slate-600 injwang-p-2 injwang-rounded injwang-z-10 ui-draggable ui-draggable-handle" data-value="tail" style="position: relative;">tail</div>
    </div>
    <div class="injwang-relative injwang-w-full injwang-mx-auto injwang-mt-[-10px] lg:injwang-mt-[-15px] xl:injwang-ml-auto xl:injwang-mt-3" aria-hidden="true">
      <img class="injwang-mx-auto injwang-w-[300px] lg:injwang-w-[620px] lg:injwang-w-[550px]" src="{{ url('/imgs/games/07-1/25/cat.png') }}">
      <div class="droppable question injwang-mx-2 injwang-border-2 injwang-border-gray-500 injwang-w-24 injwang-h-12 lg:injwang-w-32 lg:injwang-h-14 injwang-bg-white injwang-absolute injwang-top-[18%] lg:injwang-top-[18%]   injwang-left-[-5%] sm:injwang-left-[8%] min-[880px]:injwang-left-[25%] lg:injwang-left-[14%] ui-droppable" data-answer="ear"></div>
      <div class="droppable question injwang-mx-2 injwang-border-2 injwang-border-gray-500 injwang-w-24 injwang-h-12 lg:injwang-w-32 lg:injwang-h-14 injwang-bg-white injwang-absolute injwang-top-[46%] lg:injwang-top-[49.5%] injwang-left-[-5%] sm:injwang-left-[8%] min-[880px]:injwang-left-[25%] lg:injwang-left-[14%] ui-droppable" data-answer="eye"></div>
      <div class="droppable question injwang-mx-2 injwang-border-2 injwang-border-gray-500 injwang-w-24 injwang-h-12 lg:injwang-w-32 lg:injwang-h-14 injwang-bg-white injwang-absolute injwang-top-[74%] lg:injwang-top-[74%]   injwang-left-[-5%] sm:injwang-left-[8%] min-[880px]:injwang-left-[25%] lg:injwang-left-[14%] ui-droppable" data-answer="paw"></div>
      <div class="droppable question injwang-mx-2 injwang-border-2 injwang-border-gray-500 injwang-w-24 injwang-h-12 lg:injwang-w-32 lg:injwang-h-14 injwang-bg-white injwang-absolute injwang-top-[18%] lg:injwang-top-[18%]   injwang-left-[70%] sm:injwang-left-[59%] min-[880px]:injwang-left-[59%] lg:injwang-left-[63%] ui-droppable" data-answer="tail"></div>
      <div class="droppable question injwang-mx-2 injwang-border-2 injwang-border-gray-500 injwang-w-24 injwang-h-12 lg:injwang-w-32 lg:injwang-h-14 injwang-bg-white injwang-absolute injwang-top-[49%] lg:injwang-top-[53%]   injwang-left-[70%] sm:injwang-left-[59%] min-[880px]:injwang-left-[59%] lg:injwang-left-[63%] ui-droppable" data-answer="whisker"></div>
      <div class="droppable question injwang-mx-2 injwang-border-2 injwang-border-gray-500 injwang-w-24 injwang-h-12 lg:injwang-w-32 lg:injwang-h-14 injwang-bg-white injwang-absolute injwang-top-[10%] lg:injwang-top-[18%]   injwang-left-[33%] sm:injwang-left-[35%] min-[880px]:injwang-left-[40%] lg:injwang-left-[36%] ui-droppable" data-answer="fur"></div>
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