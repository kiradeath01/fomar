$( document ).ready(function() {
   $("#menu").html(' <nav class="navbar navbar-expand-lg navbar-light bg-navbar border-bottom">'+
          '<div class="container-fluid">'+
            '<a class="navbar-brand" href="index.php"><img src="img/LOGO.png" class="img-tam"> </a>'+
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">'+
              '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
            '<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">'+
              '<div class="navbar-nav">'+
                '<a class="nav-link active text-white" aria-current="page" href="index.php" >Inicio</a> <span class="lvert"></span>' +
                '<a class="nav-link text-white" href="lena.php">Fogón Leña  </a> <span class="lvert"></span>'+
                '<a class="nav-link text-white" href="hibrido.php">Fogón Hibrido</a> <span class="lvert"></span>'+
                '<a class="nav-link text-white" href="plus.php">Fogón Hibrido Plus</a> <span class="lvert"></span>'+
                '<a class="nav-link text-white" href="mini.php">Fogón Estufa Small</a> <span class="lvert"></span>'+
                '<a class="nav-link text-white" href="tienda.php">Tienda</a> <span class="lvert"></span>'+
                '<a class="nav-link text-white" href="carrito.php">Carrito</a> '+           
              '</div>'+
            '</div>'+
          '</div>'+
        '</nav>   ');
});