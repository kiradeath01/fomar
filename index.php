<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet"  type="text/css" href="css/slick/foma.css">
    <title>FOMA</title>
  </head>
  <body>
  <!--<div class="loader"></div>-->
    <!--PRIMER DIV-->
    <div class="container-fluid bg-body">
      <div class="row" id="menu">
      </div>
      <!--slider-->
      <div id="carouselExampleControls" class="carousel slide m-2 bg-body" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/INDEX/SLIDER1.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/INDEX/SLIDER2.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/INDEX/SLIDER3.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/INDEX/SLIDER4.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!--slider-->
      <div class="m-2 button-container">
        <img src="img/INDEX/GASLENA1.png" class="d-block w-100" alt="...">
        <a class="btn bg-primary button-cont" id="hibrido">Comprar</a>
      </div>
      <div class="row m-2 bg-body">
        <div class="col-md-6 button-container">
          <img src="img/INDEX/FOGONLENA1.png" class="d-block w-100" alt="...">
        <a class="btn bg-primary button-cont2" id="lena">Comprar</a>
        </div>
        <div class="col-md-6">
          <img src="img/INDEX/FOGONLENATEXTO.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <div class="row m-2 bg-body">
        <div class="col-md-6">
          <img src="img/INDEX/ESTUFAMINI1.png" class="d-block w-100" alt="...">
        </div>
        <div class="col-md-6">
          <img src="img/INDEX/COLORES.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <div class="m-2 bg-body">
        <img src="img/INDEX/nosotros.png" class="d-block w- bg-body" alt="...">
      </div>
    </div><!--CIERRE PRIMER DIV-->
      
      

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/menu.js"></script>
    <script src="include/db_index/managerBD.js"></script>
    <!--
    <script type="text/javascript">
    $(window).load(function() {
        $(".loader").fadeOut("slow");
    });
    </script>
  -->
  </body>
</html>