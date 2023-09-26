
@extends('games.master')
@section('content')  
  <div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] lg:injwang-min-h-full lg:injwang-shadow-md">
    <div class="injwang-pt-2 lg:injwang-pt-4">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-pl-6 injwang-w-[92%]">
        <div class="injwang-w-full injwang-relative injwang-ml-4">
          <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Word Scramble </div>
          <div>
            Look at the picture and circle the letter to spell the word correctly.
          </div>
        </div>
      </div>
    </div>
    <div class="injwang-w-[30%] injwang-min-w-[300px] injwang-mx-auto injwang-pt-6 lg:injwang-w-[70%] injwang-grid injwang-grid-cols-1 lg:injwang-grid-cols-2 injwang-gap-2">
      <div class="injwang-border injwang-min-w-[300px] injwang-max-w-full ">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/05-2/27/stone.jpg') }}">
        <div class="injwang-text-4xl injwang-flex injwang-h-28">
          <div class="injwang-w-full injwang-h-[100px] injwang-text-center injwang-py-2 injwang-flex injwang-items-center injwang-justify-center">
              st<question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="o"><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="u">u</q-option><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="o">o</q-option></question>ne
          </div>
        </div>
      </div>
      <div class="injwang-border injwang-min-w-[300px] injwang-max-w-full ">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/05-2/27/waterweeds.jpg') }}">
        <div class="injwang-text-4xl injwang-flex injwang-h-28">
          <div class="injwang-w-full injwang-h-[100px] injwang-text-center injwang-py-2 injwang-flex injwang-items-center injwang-justify-center">
            water<question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="w"><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="w">w</q-option><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center injwang-pb-2" data-option-answer="y">y</q-option></question>eeds
          </div>
        </div>
      </div>
      <div class="injwang-border injwang-min-w-[300px] injwang-max-w-full ">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/05-2/27/twisting.jpg') }}">
        <div class="injwang-text-4xl injwang-flex injwang-h-28">
          <div class="injwang-w-full injwang-h-[100px] injwang-text-center injwang-py-2 injwang-flex injwang-items-center injwang-justify-center">
            <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="t"><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="s">s</q-option><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center"  data-option-answer="t">t</q-option></question>wisting
          </div>
        </div>
      </div>
      <div class="injwang-border injwang-min-w-[300px] injwang-max-w-full ">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/05-2/27/long_river.jpg') }}">
        <div class="injwang-text-4xl injwang-flex injwang-h-28">
          <div class="injwang-w-full injwang-h-[100px] injwang-text-center injwang-py-2 injwang-flex injwang-items-center injwang-justify-center">
            long<question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="r"><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="d">d</q-option><q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center"  data-option-answer="r">r</q-option></question>iver
          </div>
        </div>
      </div>
    </div>
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

  </script>
  <script src="{{ asset('/js/games/click.js') }}"></script>
@endsection


