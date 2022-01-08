<!--  
      Autor: J. Manuel 
      Para: FOMA en colaboración de cocuyodev.com
      correo: jesusmanueldl@gmail.com
-->
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
  <body class="bg-body">
    

    <div class="container-fluid">

      <div class="row" id="menu"> 
      </div>

      <div class="row">
        
        <div class="col-md-8 my-3" id="listado_carrito"> 

       

        </div>

        <div class="col-md-4 my-3">
          <div class="card my-2 shadow-sm rounded-3 p-0">
            <div class="card-body px-4">
               <div class="row">
                      <table class="table table-borderless table-sm">                     
                      <tbody id="subtotal">

                      </tbody>
                    </table>                      
                </div>             
            </div>
          </div>
          * Losprecios estan sujetos a sadaiosjdas
          <div class="d-grid gap-2 my-3">
            <button class="btn btn-primary" type="button" id="add">Comprar</button>
            <button type="button" class="btn btn-secondary" id="continuar">Seguir comprando</button>  
            <button type="button" class="btn btn-success" id="actualizar" disabled>Actulizar</button>               
          </div> 
        </div>
        
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
    <script src="include/db_carrito/managerBD.js"></script>

   
  </body>
</html>