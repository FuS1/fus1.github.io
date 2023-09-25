<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <script src="{{ asset('../../public/js/games/jquery-3.7.0.min.js') }}"></script>
  <script src="{{ asset('../../public/js/games/jquery-ui.min.js') }}"></script>
  <link rel="stylesheet" href="{{ asset('../../public/css/games/tailwind.css') }}">
  <link rel="stylesheet" href="{{ asset('../../public/css/games/bootstrap.min.css') }}">
  <link rel="stylesheet" href="{{ asset('../../public/css/games/sweetalert2.min.css') }}">
  <script src="{{ asset('../../public/js/games/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('../../public/js/games/sweetalert2.min.js') }}"></script>
  <script src="{{ asset('../../public/js/games/jquery.ui.touch-punch.min.js') }}"></script>
  <script src="{{ asset('../../public/js/games/jquery.cookie.min.js') }}"></script>
  <script src="{{ asset('../../public/js/games/howler.min.js') }}"></script>
  <script src="{{ asset('../../public/js/games/check-orientation.js') }}"></script>

  <style>

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
      scrollbar-width: auto;
      scrollbar-color: #929292 #ffffff;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 12px;
    }

    *::-webkit-scrollbar-track {
      background: #ffffff;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #969696;
      border-radius: 10px;
      border: 3px solid #ffffff;
    }

    body {
      font-family: Verdana;
      overflow-y: auto;
    }

    .bg-img{
      display: flex;
      width: 100%;
      height: 100%;
      content: '';
      background: url("{{ asset('/imgs/games/light_gray_concrete_wall.jpg')}} ") repeat 50% 50%;
      background-size: cover;
      position: fixed;
      opacity: 0.2;
      z-index: -9999;
    }

</style>

</head>
<body>
  <div class="bg-img"></div>
  @yield('content')    
</body>