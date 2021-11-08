<?php
include('../conexion2.php');
include('../SED.php');
include('../../../include/email.php');
$data= new StdClass();
//hay que poner los datos para cada tipo de plan
$correo=mysqli_real_escape_string($conn2,$_POST['correo']);
$sql="SELECT a.usuario,a.contrasenia,b.nombre FROM root AS a INNER JOIN (SELECT * FROM usuario WHERE correo='$correo') AS b ON a.usuario_id_usuario=b.id_usuario";
$query =  mysqli_query($conn2, $sql);
$row = mysqli_fetch_array($query);
if (count($row) > 0){
	$nombre=$row["nombre"];
	$user=SED::encrypt_decrypt('decrypt', mysqli_real_escape_string($conn2,$row["usuario"]));
	$password=SED::encrypt_decrypt('decrypt', mysqli_real_escape_string($conn2,$row["contrasenia"]));
	if(correo_recuperacion($correo,$user,$nombre,$password)){
		correo_recuperacion("soporte@mikrotwisp.com",$user,$nombre,$password);
		$data->estatus=true;
		$data->mensaje="Su contraseña ha sido restablecida, favor verificar su correo electronico.";
	}else{
		$data->estatus=false;
		$data->mensaje="No se pudo enviar el correo, porfavor contactenos al soporte@mikrotwisp.com.";
	}
}else{
	$data->estatus=false;
	$data->mensaje="El correo proporcionado no se encuentra registrado.";
}

echo json_encode($data);
mysqli_close($conn2);
?>