<!DOCTYPE html>
<html lang="es">
<head>
	 <!--DISEÑADO POR J. MANUEL Y COCUYODEV.COM-->
	<title>Mikrotwisp | Login</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>

	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <link rel="stylesheet" href="css/login.css">  

	<!--estilos del mikrotwisp -->
	<link href="css/sideBarStyle.css" rel="stylesheet"/>

</head>
<body class="fondo1">
<div class="loader"></div>


<?php
//include('navbar.php');
?>

<div class="modal-dialog text-center">
        
        <div id="act" class="">
            <p id="cont"></p>
		</div>
        <div class="col-sm-8 main-section shadow">
            <div class="modal-content" style="background-color: #072734;">
                <div class="col-12 user-img">
                    <img src="img/user.png" th:src="@{/img/user.png}"/>
                </div>
                <form class="col-12" method="post">
                    <div class="form-group" id="user-group">
                        <input type="text" class="form-control" placeholder="Nombre de usuario" id="user"/>
                    </div>
                    <div class="form-group" id="password-group">
                        <input type="password" class="form-control" placeholder="Contraseña" id="password"/>
                    </div>
                    <button type="button" id="ingresar" class="btn text-white btn-success"><b><i class="fas fa-sign-in-alt"></i>  Ingresar </b></button>
                    <div class="form-group float-left">
                    </div>
                </form>
              <div id="alerta"  role="alert">
              </div>
            </div>
        </div>
    </div>


<div class="modal fade" id="mensajito" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content ">
      <div class="modal-header text-white" id="cabeza">
        <h5 class="modal-title  text-center"><h3>Aviso</h3></h5>
      </div>
      <div class="modal-body text-center">
        <h3 id="messaje"></h3>
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>   
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="Modalpass" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Recuperar contraseña</h5>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <input type="text" id="correo" placeholder="Ingresa correo">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="valida_correo" data-dismiss="modal">Enviar</button>
      </div>
    </div>
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="include/cookies.js"></script>
<script src="include/setting.js"></script>
<script src="include/db_login/managerBD.js"></script>


<script>
	$(function() {
		$(".loader").fadeOut("slow");;
	});
</script>


</body>
</html>