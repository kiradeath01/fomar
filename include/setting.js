//url de api rest
var Uri="http://localhost";
var UriProductos=Uri+"/api_fomar/productos.php";
var UriLogin=Uri+"/api_fomar/login.php";
const RAPIDAPI_REQUEST_HEADERS = {
    "Authorization": "Bearer "+getCookie("STASA")
    , 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : '*'
  };