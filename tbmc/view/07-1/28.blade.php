
@extends('games.master')
@section('content')  
  <div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] lg:injwang-min-h-full lg:injwang-shadow-md">
    <div class="injwang-pt-2 lg:injwang-pt-4">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-ml-6 injwang-w-[92%]">
        <div class="injwang-w-full injwang-relative injwang-ml-4">
          <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-4">Spell and Count </div>
          <div>
            Click the right letter to complete each word, then click the number correctly. 
          </div>
        </div>
      </div>
    </div>
    <div class="injwang-w-[30%] injwang-min-w-[300px] injwang-mx-auto injwang-pt-6 lg:injwang-w-[75%] injwang-grid injwang-grid-cols-1 lg:injwang-grid-cols-2 injwang-gap-2 injwang-justify-items-center">
      <div class="injwang-border injwang-w-[300px] lg:injwang-min-w-[369px]">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/07-1/28/butterfly.jpg') }}">
        <div class="injwang-text-3xl injwang-flex injwang-items-center">
          <div class="injwang-w-3/4 injwang-h-[95px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center injwang-flex injwang-items-center">
            <div class="injwang-w-fit injwang-mx-auto injwang-flex injwang-items-center">
              butterfly            
            </div>
          </div>
          <div class="injwang-w-1/4 injwang-h-[95px] injwang-min-w-[85px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center">
            <div class="injwang-flex injwang-items-center injwang-mx-auto">
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="1-6">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="1-6">6</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="1-7">7</q-option>
              </question>
            </div>
          </div>
        </div>
      </div>
      <div class="injwang-border injwang-w-[300px] lg:injwang-min-w-[369px]">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/07-1/28/chick.jpg') }}">
        <div class="injwang-text-3xl injwang-flex injwang-items-center">
          <div class="injwang-w-3/4 injwang-h-[95px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center">
            <div class="injwang-w-fit injwang-mx-auto injwang-flex injwang-items-center">
              <span>ck</span>
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="2-i">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="2-i">i</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="2-e">e</q-option>
              </question>
              <span>ck</span>
            </div>
          </div>
          <div class="injwang-w-1/4 injwang-h-[95px] injwang-min-w-[85px] injwang-text-center injwang-py-2 injwang-flex injwang-items-center">
            <div class="injwang-flex injwang-items-center injwang-mx-auto">
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="2-3">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="2-4">4</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="2-3">3</q-option>
              </question>
            </div>
          </div>
        </div>
      </div>
      <div class="injwang-border injwang-w-[300px] lg:injwang-min-w-[369px]">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/07-1/28/puppy.jpg') }}">
        <div class="injwang-text-3xl injwang-flex injwang-items-center">
          <div class="injwang-w-3/4 injwang-h-[95px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center">
            <div class="injwang-w-fit injwang-mx-auto injwang-flex injwang-items-center">
              <span>p</span>
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="u">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="a">a</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="u">u</q-option>
              </question>
              <span>ppy</span>
            </div>
          </div>
          <div class="injwang-w-1/4 injwang-h-[95px] injwang-min-w-[85px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center">
            <div class="injwang-flex injwang-items-center injwang-mx-auto">
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="3-3">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="3-3">3</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="3-2">2</q-option>
              </question>
            </div>
          </div>
        </div>
      </div>
      <div class="injwang-border injwang-w-[300px] lg:injwang-min-w-[369px]">
        <img class="injwang-w-full injwang-h-[180px] injwang-object-cover" src="{{ url('/imgs/games/07-1/28/tadpole.jpg') }}">
        <div class="injwang-text-3xl injwang-flex injwang-items-center">
          <div class="injwang-w-3/4 injwang-h-[95px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center">
            <div class="injwang-w-fit injwang-mx-auto injwang-flex injwang-items-center">
              <span>t</span>
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="4-1-a">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="4-1-a">a</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="4-1-o">o</q-option>
              </question>
              <span>dp</span>
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="4-o">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="4-o">o</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="4-e">e</q-option>
              </question>
              <span>le</span>
            </div>
          </div>
          <div class="injwang-w-1/4 injwang-h-[95px] injwang-min-w-[85px] injwang-text-center injwang-py-2 injwang-border injwang-flex injwang-items-center">
            <div class="injwang-flex injwang-items-center injwang-mx-auto">
              <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="4-8">
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="4-8">8</q-option>
                <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-mt-1 injwang-text-center" data-option-answer="4-5">5</q-option>
              </question>
            </div>
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



