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
    <link rel="stylesheet" type="text/css" href="css/slick/slick.css"/>  
    <link rel="stylesheet"  type="text/css" href="css/slick/foma.css"> 
    <link rel="stylesheet" type="text/css" href="css/slick/slick-theme.css"/> 

  

   
    

    <title>FOMA</title>
  </head>
  <body class="bg-body">
    

  
      <div class="row" id="menu"> 
      </div>

      <div class="row m-3"> 
        <div class="form-group col-md-2">
        </div> 
        <div class="form-group col-md-8">
          <div class="card text-center">
          <div class="card-header">
          Formato de Pago
          </div>
          <div class="card-body">
            <div class="row">
              <div class="form-group col-md-4">
                <label for="inputAddress">Nombre</label>
                <input type="text" class="form-control"  id="nombre" require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Apellidos</label>
                <input type="text" class="form-control"  id="apellidos" require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Estado</label>
                <input type="text" class="form-control"  id="estado" require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Codigo Postal</label>
                <input type="text" class="form-control"  id="cp" require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Dirección</label>
                <input type="text" class="form-control"  id="direccion" require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Correo</label>
                <input type="email" class="form-control"  id="correo" require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Monto</label>
                <input type="text" class="form-control"  id="monto" disabled>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Teléfono</label>
                <input type="tel" class="form-control"  id=telefono require>
              </div>
              <div class="form-group col-md-4">
                <label for="inputAddress">Fecha</label>
                <input type="text" class="form-control"  id="fecha" disabled>
              </div>
              <div class="col-md-12 m-3">
                  <div class="row">
                    <div class="form-group col-md-2">
                    </div>  
                    <div class="form-group col-md-3">
                      <button type="button" class="btn btn-danger" >Cancelar</button>
                    </div>      
                    <div class="form-group col-md-2">
                      <div class="cho-container" id="pagar"></div>
                    </div>  
                    <div class="form-group col-md-3">
                      <button type="button" class="btn btn-success" id="guardar" disabled>Terminar Proceso</button>
                    </div>     
                    <div class="form-group col-md-2">
                    </div> 
                  </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">
          </div>
        </div>
        </div> 
        <div class="form-group col-md-2">
        </div> 
      </div>

      
    

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/menu.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://sdk.mercadopago.com/js/v2"></script>
    <script src="include/cookies.js"></script>
    <script src="include/setting.js"></script>
    <script src="include/db_comprar/managerBD.js"></script>
    <script type="text/javascript" src="css/slick/slick.min.js"></script>


   
  </body>
</html>