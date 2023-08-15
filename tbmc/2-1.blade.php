
@extends('games.master')
@section('content')  
  <div class="container tw-bg-white md:tw-text-2xl tw-max-w-[1180px] tw-h-full tw-shadow-md">
      <div class="tw-pt-6 tw-mb-6">
        <div class="tw-flex tw-items-center tw-mx-auto tw-w-[90%]">
          <div class="tw-w-5/6 tw-relative">
            <img class="tw-absolute tw-left-[-2.5rem] tw-top-1 tw-h-8" src="{{ url('/imgs/games/title-fog.png') }}">
            <div class="tw-text-orange-500 tw-text-4xl tw-border-b tw-pb-2 tw-mb-2">Guess Who</div>
            <div>
              Fill In the blanks complete the sentences.
            </div>
          </div>
          <div class="tw-ml-5 tw-w-1/6">
            <img class="tw-w-full" src="{{ url('/imgs/games/2-1/child.jpg')}}">
          </div>
        </div>
        
      <div class="droppable tw-min-h-5 tw-p-3 tw-border-2 tw-border-dashed tw-border-amber-900 tw-rounded tw-flex tw-my-2 md:tw-mx-10 md:tw-my-6 tw-bg-slate-100 tw-w-[90%] tw-mx-auto" data-is_stock_area="yes">
          <div id="draggable-1" class="draggable-item tw-m-2 tw-cursor-grab tw-bg-white tw-border tw-border-orange-700 tw-p-2 tw-rounded" data-value="sing">sing</div>
          <div id="draggable-1" class="draggable-item tw-m-2 tw-cursor-grab tw-bg-white tw-border tw-border-orange-700 tw-p-2 tw-rounded" data-value="pretend">pretend</div>
          <div id="draggable-1" class="draggable-item tw-m-2 tw-cursor-grab tw-bg-white tw-border tw-border-orange-700 tw-p-2 tw-rounded" data-value="jump">jump</div>
          <div id="draggable-1" class="draggable-item tw-m-2 tw-cursor-grab tw-bg-white tw-border tw-border-orange-700 tw-p-2 tw-rounded" data-value="fight">fight</div>
        </div>
      </div>


      <div class="" style="box-shadow: 11px 14px 1px 1px rgb(132 203 241);border-radius: 30px;padding: 22px; margin: 0 2.5rem;">
        <div class="tw-border-l-4 tw-border-orange-300 tw-pl-3 tw-py-1 md:tw-p-3 md:tw-mx-10 tw-my-2 md:tw-my-6 tw-leading-8 md:tw-leading-10">
          <div>I am a grasshopper.</div>
          <div class="tw-flex">I know how to <div class="droppable question tw-mx-2 tw-border-b tw-border-amber-700 tw-w-28 tw-h-10" data-answer="jump"></div> .</div>  
        </div>
        
        <div class="tw-border-l-4 tw-border-orange-300 tw-pl-3 tw-py-1 md:tw-p-3 md:tw-mx-10 tw-my-2 md:tw-my-6 tw-leading-8 md:tw-leading-10">
          <div>I am a cicada.</div>
          <div class="tw-flex">I know how to <div class="droppable question tw-mx-2 tw-border-b tw-border-amber-700 tw-w-28 tw-h-10" data-answer="sing"></div> .</div>  
        </div>
  
        <div class="tw-border-l-4 tw-border-orange-300 tw-pl-3 tw-py-1 md:tw-p-3 md:tw-mx-10 tw-my-2 md:tw-my-6 tw-leading-8 md:tw-leading-10">
          <div>I am a male stag bettle.</div>
          <div class="tw-flex">I know how to <div class="droppable question tw-mx-2 tw-border-b tw-border-amber-700 tw-w-28 tw-h-10" data-answer="fight"></div> .</div>  
        </div>
  
        <div class="tw-border-l-4 tw-border-orange-300 tw-pl-3 tw-py-1 md:tw-p-3 md:tw-mx-10 tw-my-2 md:tw-my-6 tw-leading-8 md:tw-leading-10">
          <div>I am a stick insect.</div>
          <div class="tw-flex">I know how to <div class="droppable question tw-mx-2 tw-border-b tw-border-amber-700 tw-w-28 tw-h-10" data-answer="pretend"></div> .</div>  
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