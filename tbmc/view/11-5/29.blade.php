
@extends('games.master')
@section('content')  
<div class="container injwang-bg-white lg:injwang-text-2xl injwang-max-w-[1180px] lg:injwang-min-h-full lg:injwang-shadow-md">
  <div class="injwang-pt-1 lg:injwang-pt-2 lg:injwang-pt-6 injwang-mb-1 lg:injwang-mb-6">
    <div class="injwang-flex injwang-items-center injwang-mx-auto injwang-w-[90%]">
      <div class="injwang-w-5/6 injwang-relative">
        <img class="injwang-absolute injwang-left-[-2.5rem] injwang-top-1 injwang-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
        <div class="injwang-text-orange-500 injwang-text-2xl lg:injwang-text-4xl injwang-border-b lg:injwang-pb-4 lg:injwang-mb-2">Guess Who</div>
        <div>
          Fill In the blanks complete the sentences.
        </div>
      </div>
      <div class="injwang-ml-5 injwang-w-1/6">
        <img class="injwang-w-full" src="{{ url('/imgs/games/11-5/29/child.jpg') }}">
      </div>
    </div>
  </div>
  <div class="droppable injwang-min-h-5 injwang-p-3 injwang-border-2 injwang-border-dashed injwang-border-amber-900 injwang-rounded injwang-flex injwang-my-2  lg:injwang-my-6 injwang-bg-slate-100 injwang-w-[90%] injwang-mx-auto ui-droppable" data-is_stock_area="yes">
    <div id="draggable-1" class="draggable-item injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-orange-700 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="sing" style="position: relative;">sing</div>
    <div id="draggable-1" class="draggable-item injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-orange-700 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="pretend" style="position: relative;">pretend</div>
    <div id="draggable-1" class="draggable-item injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-orange-700 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="jump" style="position: relative;">jump</div>
    <div id="draggable-1" class="draggable-item injwang-m-2 injwang-cursor-grab injwang-bg-white injwang-border injwang-border-orange-700 injwang-p-2 injwang-rounded ui-draggable ui-draggable-handle" data-value="fight" style="position: relative;">fight</div>
  </div>
  <div class="" style="box-shadow: 11px 14px 1px 1px rgb(132 203 241);border-radius: 30px;padding: 22px; margin: 0 2.5rem;">
    <div class="injwang-border-l-4 injwang-border-orange-300 injwang-pl-3 injwang-py-1 lg:injwang-p-3 lg:injwang-mx-10 injwang-my-2 lg:injwang-my-6 injwang-leading-8 lg:injwang-leading-10">
      <div>I am a grasshopper.</div>
      <div class="injwang-flex">
        I know how to 
        <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="jump"></div>
        .
      </div>
    </div>
    <div class="injwang-border-l-4 injwang-border-orange-300 injwang-pl-3 injwang-py-1 lg:injwang-p-3 lg:injwang-mx-10 injwang-my-2 lg:injwang-my-6 injwang-leading-8 lg:injwang-leading-10">
      <div>I am a cicada.</div>
      <div class="injwang-flex">
        I know how to 
        <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="sing"></div>
        .
      </div>
    </div>
    <div class="injwang-border-l-4 injwang-border-orange-300 injwang-pl-3 injwang-py-1 lg:injwang-p-3 lg:injwang-mx-10 injwang-my-2 lg:injwang-my-6 injwang-leading-8 lg:injwang-leading-10">
      <div>I am a male stag bettle.</div>
      <div class="injwang-flex">
        I know how to 
        <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="fight"></div>
        .
      </div>
    </div>
    <div class="injwang-border-l-4 injwang-border-orange-300 injwang-pl-3 injwang-py-1 lg:injwang-p-3 lg:injwang-mx-10 injwang-my-2 lg:injwang-my-6 injwang-leading-8 lg:injwang-leading-10">
      <div>I am a stick insect.</div>
      <div class="injwang-flex">
        I know how to 
        <div class="droppable question injwang-mx-2 injwang-border-b injwang-border-amber-700 injwang-w-28 injwang-h-10 ui-droppable" data-answer="pretend"></div>
        .
      </div>
    </div>
  </div>
</div>
@endsection

<script>
    /**
     * 串接系統設定值
     * backUrl 為遊戲完成時，要跳轉回的路由
     * useComputerOrPadImgUrl 為提示使用平板或電腦圖片路徑
     * pleaseRotationImgUrl 為提示使用將平板轉為橫式
     */
     var backUrl = "{{ $games_url }}",
        useComputerOrPadImgUrl = "{{ asset('/imgs/games/computerOrPad.png') }}",
        pleaseRotationImgUrl = "{{ asset('/imgs/games/pleaseRotation.png') }}";
</script>
<script src="{{ asset('/js/games/drag.js') }}"></script>