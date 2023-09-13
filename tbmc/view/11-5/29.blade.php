
@extends('games.master')
@section('content')  
<div class="container bg-white lg:text-2xl max-w-[1180px] lg:min-h-full lg:shadow-md">
  <div class="pt-1 lg:pt-2 lg:pt-6 mb-1 lg:mb-6">
    <div class="flex items-center mx-auto w-[90%]">
      <div class="w-5/6 relative">
        <img class="absolute left-[-2.5rem] top-1 h-8" src="{{ url('/imgs/games/title-fog.png') }}">
        <div class="text-orange-500 text-2xl lg:text-4xl border-b lg:pb-4 lg:mb-2">Guess Who</div>
        <div>
          Fill In the blanks complete the sentences.
        </div>
      </div>
      <div class="ml-5 w-1/6">
        <img class="w-full" src="{{ url('/imgs/games/11-5/29/child.jpg') }}">
      </div>
    </div>
  </div>
  <div class="droppable min-h-5 p-3 border-2 border-dashed border-amber-900 rounded flex my-2  lg:my-6 bg-slate-100 w-[90%] mx-auto ui-droppable" data-answer="stock">
    <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-slate-600 p-2 rounded ui-draggable ui-draggable-handle" data-value="sing" style="position: relative;">sing</div>
    <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-slate-600 p-2 rounded ui-draggable ui-draggable-handle" data-value="pretend" style="position: relative;">pretend</div>
    <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-slate-600 p-2 rounded ui-draggable ui-draggable-handle" data-value="jump" style="position: relative;">jump</div>
    <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-slate-600 p-2 rounded ui-draggable ui-draggable-handle" data-value="fight" style="position: relative;">fight</div>
  </div>
  <div class="" style="box-shadow: 11px 14px 1px 1px rgb(132 203 241);border-radius: 30px;padding: 22px; margin: 0 2.5rem;">
    <div class="border-l-4 border-orange-300 pl-3 py-1 lg:p-3 lg:mx-10 my-2 lg:my-6 leading-8 lg:leading-10">
      <div>I am a grasshopper.</div>
      <div class="flex">
        I know how to 
        <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10 ui-droppable" data-answer="jump"></div>
        .
      </div>
    </div>
    <div class="border-l-4 border-orange-300 pl-3 py-1 lg:p-3 lg:mx-10 my-2 lg:my-6 leading-8 lg:leading-10">
      <div>I am a cicada.</div>
      <div class="flex">
        I know how to 
        <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10 ui-droppable" data-answer="sing"></div>
        .
      </div>
    </div>
    <div class="border-l-4 border-orange-300 pl-3 py-1 lg:p-3 lg:mx-10 my-2 lg:my-6 leading-8 lg:leading-10">
      <div>I am a male stag bettle.</div>
      <div class="flex">
        I know how to 
        <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10 ui-droppable" data-answer="fight"></div>
        .
      </div>
    </div>
    <div class="border-l-4 border-orange-300 pl-3 py-1 lg:p-3 lg:mx-10 my-2 lg:my-6 leading-8 lg:leading-10">
      <div>I am a stick insect.</div>
      <div class="flex">
        I know how to 
        <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10 ui-droppable" data-answer="pretend"></div>
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