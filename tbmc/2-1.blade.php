<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <script src="{{ url('public/js/games/jquery-3.7.0.min.js') }}"></script>
  <script src="{{ url('public/js/games/jquery-ui.min.js') }}"></script>
  <link rel="stylesheet" href="{{ url('public/css/games/bootstrap.min.css') }}">
  <script src="{{ url('public/js/games/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ url('public/js/games/sweetalert2.min.js') }}"></script>
  <script src="{{ url('public/js/games/tailwindcss.min.js') }}"></script>
  <script src="{{ url('public/js/games/check-orientation.js') }}"></script>
  <script src="{{ url('public/js/games/jquery.ui.touch-punch.min.js') }}"></script>
<style>

body {
  font-family: monospace;
}

body::before{
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  background: url({{ url('public/imgs/games/light_gray_concrete_wall.jpg') }}) repeat 50% 50%;
  background-size: cover;
  position: absolute;
  opacity: 0.2;
  z-index: -9999;
}

</style>
</head>
<body>
    <div class="container bg-white md:text-2xl max-w-[1180px] h-full shadow-md">
      <div class="pt-6 mb-6">
        <div class="flex items-center mx-auto w-[90%]">
          <div class="w-5/6 relative">
            <img class="absolute left-[-2.5rem] top-1 h-8" src="{{ url('public/imgs/games/title-fog.png') }}">
            <div class="text-orange-500 text-4xl border-b pb-2 mb-2">Guess Who</div>
            <div>
              Fill In the blanks complete the sentences.
            </div>
          </div>
          <div class="ml-5 w-1/6">
            <img class="w-full" src="{{ url('public/imgs/games/2-1/child.jpg')}}">
          </div>
        </div>
        
      <div class="droppable min-h-5 p-3 border-2 border-dashed border-amber-900 rounded flex my-2 md:mx-10 md:my-6 bg-slate-100 w-[90%] mx-auto" data-is_stock_area="yes">
          <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-orange-700 p-2 rounded" data-value="sing">sing</div>
          <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-orange-700 p-2 rounded" data-value="pretend">pretend</div>
          <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-orange-700 p-2 rounded" data-value="jump">jump</div>
          <div id="draggable-1" class="draggable-item m-2 cursor-grab bg-white border border-orange-700 p-2 rounded" data-value="fight">fight</div>
        </div>
      </div>


      <div class="" style="box-shadow: 11px 14px 1px 1px rgb(132 203 241);border-radius: 30px;padding: 22px; margin: 0 2.5rem;">
        <div class="border-l-4 border-orange-300 pl-3 py-1 md:p-3 md:mx-10 my-2 md:my-6 leading-8 md:leading-10">
          <div>I am a grasshopper.</div>
          <div class="flex">I know how to <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10" data-answer="jump"></div> .</div>  
        </div>
        
        <div class="border-l-4 border-orange-300 pl-3 py-1 md:p-3 md:mx-10 my-2 md:my-6 leading-8 md:leading-10">
          <div>I am a cicada.</div>
          <div class="flex">I know how to <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10" data-answer="sing"></div> .</div>  
        </div>
  
        <div class="border-l-4 border-orange-300 pl-3 py-1 md:p-3 md:mx-10 my-2 md:my-6 leading-8 md:leading-10">
          <div>I am a male stag bettle.</div>
          <div class="flex">I know how to <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10" data-answer="fight"></div> .</div>  
        </div>
  
        <div class="border-l-4 border-orange-300 pl-3 py-1 md:p-3 md:mx-10 my-2 md:my-6 leading-8 md:leading-10">
          <div>I am a stick insect.</div>
          <div class="flex">I know how to <div class="droppable question mx-2 border-b border-amber-700 w-28 h-10" data-answer="pretend"></div> .</div>  
        </div>
      </div>
      



    </div>
</body>



<script>
    /**
     * 串接系統設定值
     * backUrl 為遊戲完成時，要跳轉回的路由
     * useComputerOrPadImgUrl 為提示使用平板或電腦圖片路徑
     * pleaseRotationImgUrl 為提示使用將平板轉為橫式
     */
     var backUrl = "{{ $games_url }}",
        useComputerOrPadImgUrl = "{{ url('public/imgs/games/computerOrPad.png') }}",
        pleaseRotationImgUrl = "{{ url('public/imgs/games/pleaseRotation.png') }}";
</script>
<script src="{{ url('public/js/games/drag.js') }}"></script>