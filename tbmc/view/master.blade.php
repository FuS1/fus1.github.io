<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="{{ asset('/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset('/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
  <script src="{{ asset('/js/games/jquery-3.7.0.min.js') }}"></script>
  <script src="{{ asset('/js/games/jquery-ui.min.js') }}"></script>
  <script src="{{ asset('/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('/js/games/sweetalert2.min.js') }}"></script>
  <script src="{{ asset('/js/games/tailwindcss.min.js') }}"></script>
  <script src="{{ asset('/js/games/check-orientation.js') }}"></script>
  <script src="{{ asset('/js/games/jquery.ui.touch-punch.min.js') }}"></script>
  @vite(['resources/scss/app.scss','resources/scss/variables.css','resources/js/app.js'])
<style>

body {
  font-family: monospace;  
  position: relative;
}

body::before{
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  background: url("{{ asset('/imgs/games/light_gray_concrete_wall.jpg')}} ") repeat 50% 50%;
  background-size: cover;
  position: absolute;
  opacity: 0.2;
  z-index: -9999;
}

</style>
</head>
@section('postition', 'guess who')<!--variable-->
@section('booktitle', 'Magic seeds')<!--variable-->
<body>
  @include('layouts.header')
  <main id="main" class="game">
  @include('layouts.breadcrumbs')

  @yield('content')    
  </main>
  @include('layouts.footer')
  @include('layouts.login')
</body>