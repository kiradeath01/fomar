//url de api rest
//var Uri="http://localhost";
var Uri="https://cocuyodev.com";
var UriProductos=Uri+"/api_fomar/productos.php";
var UriServicios=Uri+"/api_fomar/servicios.php";
var UriImagen=Uri+"/api_fomar/imagenes.php";
var UriLogin=Uri+"/api_fomar/login.php";
var SPK='TEST-409d58d3-3a2e-4ffb-82c0-0e0eef3bf642';
var preference_id="";
const RAPIDAPI_REQUEST_HEADERS = {
    "Authorization": "Bearer "+getCookie("STASA")
    , 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : '*'
  };