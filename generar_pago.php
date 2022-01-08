<?php 
	//include('include/security.php');
  	//include('include/Type_user.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title>FOMA</title>    
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


</head>
<body>

<div class="container-fluid">	
	<div class="row">
			<div class="form-group col-md-1"></div>
			<div class="col-md-10 text-center">
				<div class="card shadow mt-4">
				  <div class="card-header text-center ">
				    <h2>GENERAR PAGO</h2> 
				  </div>
				  <div class="card-body">
				   <!-- <h5 class="card-title">Special title treatment</h5> -->
				    <form id="cargador"  method="post">
						<div class="row">
							<div class="form-group col-md-4">
								<label for="inputAddress">Nombre</label>
								<input type="text" class="form-control"  id="nombre" >
							</div>
							<div class="form-group col-md-4">
								<label for="inputAddress">Apellidos</label>
								<input type="text" class="form-control"  id="apellidos" >
							</div>
							<div class="form-group col-md-4">
								<label for="inputAddress">Correo</label>
								<input type="text" class="form-control"  id="correo" >
							</div>
							<div class="form-group col-md-2">
								<label for="inputAddress">Total a Pagar</label>
								<input type="text" class="form-control"  id="monto" >
							</div>
							<div class="form-group col-md-4">
								<label for="inputAddress">Paquete</label>
								<input type="text" class="form-control"  id="descripcion" >
							</div>
							<div class="form-group col-md-3">
								<label for="inputAddress">Fecha</label>
								<input type="date" class="form-control"  id="fecha" >
                            </div>
							<div class="form-group col-md-3">
								<label for="inputAddress">Telefono</label>
								<input type="text" class="form-control"  id=telefono >
                            </div>
                            <div class="col-md-12 m-3">
                                <div class="row">
                                    <div class="form-group col-md-12">
                                    	<div class="row">
	                                    	<div class="form-group col-md-4">
	                                    	</div>     
	                                    	<div class="form-group col-md-4">
	                                    		<button type="button" id="tarjeta" class="btn btn-primary"><i class="far fa-credit-card"></i>Pagar</button>
	                                    	</div>     
	                                    	<div class="form-group col-md-4">
	                                    	</div>  
                                    	</div>                 				
                                    </div>
                                </div>
                            </div>
						</div>					  
					  </form>
				  </div>
				  <div class="card-footer text-muted">
				    Pago de Servicio
				  </div>
				</div>
			</div>
			<div class="form-group col-md-1"></div>
		</div>		
</div>

<div class="modal fade" id="mensajito" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white" id="cabeza">
        <h5 class="modal-title  text-center"><h3>Aviso</h3></h5>
      </div>
      <div class="modal-body text-center">
        <h3 id="messaje"></h3>
        <embed src="" frameborder="0" width="100%" height="400px" id="pdf_modal" type="application/pdf">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>   
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/igorlino/elevatezoom-plus@1.2.3/src/jquery.ez-plus.js"></script>
<script src="js/menu.js"></script>
<script src="include/db_tienda/managerBD.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="include/cookies.js"></script>
<script src="include/setting.js"></script>
<script type="text/javascript" src="css/slick/slick.min.js"></script>
<script src="https://sdk.mercadopago.com/js/v2"></script>



</body>
</html>