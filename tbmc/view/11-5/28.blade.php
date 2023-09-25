
@extends('games.master')
@section('content')  
  <div class="container injwang-relative injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] lg:injwang-min-h-full lg:injwang-shadow-md">
    <div class="injwang-pt-2 lg:injwang-pt-4">
      <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-[90%]">
        <div class="injwang-w-full injwang-relative injwang-ml-4">
          <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
          <div class="game-title injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Growing a Seed </div>
          <div class="lg:injwang-flex">
            <div>
            Do you know how a seed grows ?<br>
            See the pictures and click the correct answer. 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="injwang-w-[360px] injwang-max-w-full lg:injwang-w-[85%] injwang-mx-auto injwang-pt-2 injwang-grid injwang-grid-cols-1 lg:injwang-grid-cols-2 injwang-gap-2 injwang-text-lg injwang-pb-16">
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/1.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>1.Plant a</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="seed">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="seed">seed</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="flower">flower</q-option>
          </question>
          <span>into a hole.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/2.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>2.Cover the seed with</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="soil">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="water">water</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="soil">soil</q-option>
          </question>
          <span>.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/3.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>3.Sprinkle the seed with a little</span>
            <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="water">
              <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="water">water</q-option>
              <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="sand">sand</q-option>
            </question>
            <span>.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/4.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>4.Bake the seed in the</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="sun">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="snow">snow</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="sun">sun</q-option>
          </question>
          <span>.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/5.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>5.The little seed is ready to</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="grow">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="grow">grow</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="flow">flow</q-option>
          </question>
          <span>.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/6.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>6.Little</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="stem">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="stem">stem</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="flower">flower</q-option>
          </question>
          <span>grows every day.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/7.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>7.The stem</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="climbs">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="jump">jump</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="climbs">climbs</q-option>
          </question>
          <span>up to pole.</span>
        </div>
      </div>
      <div class="injwang-border">
        <img class="injwang-w-full injwang-h-[300px] injwang-object-cover injwang-border" src="{{ url('/imgs/games/07-3/28/8.jpg') }}">
        <div class="injwang-w-fulltext-center injwang-flex injwang-flex-wrap injwang-items-center injwang-h-20 injwang-pl-2">
          <span>8.The flower bud is ready to</span>
          <question class="injwang-mx-1 injwang-border-slate-400 injwang-grid" data-answer="open">
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="open">open</q-option>
            <q-option class="injwang-px-2 injwang-text-slate-600 injwang-cursor-pointer hover:injwang-bg-slate-200 injwang-rounded injwang-text-center" data-option-answer="close">close</q-option>
          </question>
          <span>up.</span>
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
<script src="{{ asset('/js/games/click.js') }}"></script>