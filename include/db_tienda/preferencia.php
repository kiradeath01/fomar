<?php
$_POST=file_get_contents('php://input',true);
//echo $_POST;
$obj=json_decode($_POST);
//*
$nombre  = $obj->{"nombre"};
$cantidad  = $obj->{"cantidad"};
$monto  = $obj->{"monto"};
$data = new StdClass();
// SDK de Mercado Pago
require __DIR__ .  '/../vendor/autoload.php';
// Agrega credenciales
MercadoPago\SDK::setAccessToken('TEST-1928247304842098-121702-4c34916707700a3367e85bd3556a35f6-259735522');
// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();
// Crea un ítem en la preferencia
$item = new MercadoPago\Item();
$item->title = $nombre;
$item->quantity = $cantidad;
//$item->currency_id= "MXN";
$item->unit_price = $monto;
$preference->items = array($item);
$preference->save();
$data->id=$preference->id;
echo json_encode($data);
//*/
?>
