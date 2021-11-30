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
    <link rel="stylesheet" type="text/css" href="css/slick/slick.css"/> 
    <link rel="stylesheet"  type="text/css" href="css/slick/foma.css"> 
    <link rel="stylesheet" type="text/css" href="css/slick/slick-theme.css"/> 

  

   
    

    <title>FOMA</title>
  </head>
  <body class="bg-body">
    

  <div class="container-fluid">
       
      
       <div class="row mt-2" id="menu">
       
     </div>
      

      <div class="row py-2">
        <div class="col-md-8">
          <div class="card shadow-sm rounded-3">
            <div class="card-body p-3">
              <div class="row"> 
                <!-- galeria de miniaturas-->
                <div class="col-md-2">
                  <div id="gal1">
                  </div> 
                </div>
                <!-- imagen principal-->
                <div class="col-md-10" id="container-zoom">                
                   
                </div>

                <div class="col-md-12">
                  <br>
                  <hr class="text-muted">          
                </div>

                <div class="col-md-12 text-center">
                  <h2>Otros productos</h2>

                  <div class="row">
                    <div class="card my-2 border-light">
                      <div class="card-body">
                   
                        <div class="autoplay " id="galeria_productos">
                          

                        </div>
                                           
                      </div>
                    </div> 
                                    
                  </div> 

                  <div class="row mt-5 p-3">
                     <h2>Especifiaciones del producto</h2>

                    <table class="table table-borderles">
                      <thead>
                        <tr>
                          <th scope="col">Peso</th>
                          <th scope="col">Tipo</th>
                          <th scope="col">Dimención</th>
                          <th scope="col">Descripción</th>
                        </tr>
                      </thead>
                      <tbody id="descripcion">
                      </tbody>
                    </table>
                    
                  </div>

                          
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- descripcion del producto-->
          <div class="col-md-4 px-4">
            <div class="row">
              <div class="card shadow-sm">
                <div class="card-body ">
                  <p class="text-muted">Nuevo | 6 Vendidos</p>
                 <h5 class="card-title" id="nombre_producto"></h5>
                 <p id="precio"></p>
                 <p><span class="badge bg-primary">OFERTA DEL DÍA</span></p>
                 <p><i class="bi bi-truck h4"></i> Envio a todo el país <br><span class="text-muted">Puedes calcular el tiempo de llegada</span></p>

                 <select class="form-select mb-4" aria-label="Default select example">
                  <option selected>Colores disponibles</option>
                  <option value="1">Negro</option>
                  <option value="2">Rojo</option>
                  <option value="3">Verde</option>
                </select>

                <p id="stock"></p>

                <select class="form-select mb-4" aria-label="Default select example">
                  <option selected>Cantidad</option>
                  <option value="1">1 Unidad</option>
                  <option value="2">2 Unidades</option>
                  <option value="3">3 Unidades</option>
                </select>
               
                <div class="row d-flex justify-content-center">
                 <button type="button" class="btn btn-primary btn-lg mb-2">Comprar ahora</button>
                 <button type="button" class="btn btn-outline-info btn-lg mb-2">Agregar al carrito</button>
                </div>
                 
                </div>
              </div>

              <div class="card p-3 my-3 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Información del vendedor</h5>
                </div>
              </div>


            </div>            
          </div>       
            
      </div>

  </div>
   



    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/igorlino/elevatezoom-plus@1.2.3/src/jquery.ez-plus.js"></script>
    <script src="js/menu.js"></script>
    <script src="include/db_tienda/managerBD.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="include/cookies.js"></script>
    <script src="include/setting.js"></script>
    <script type="text/javascript" src="css/slick/slick.min.js"></script>

    <script type="text/javascript">
      $('.autoplay').slick({
            
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
      });
    </script>

   

   
  </body>
</html>