const mp = new MercadoPago(SPK, {
    locale: 'es-AR'
});
var cont=0;
var monto=0;
$( document ).ready(function() {
    var preference_id=localStorage.getItem("preference_id");
    mp.checkout({
        preference: {
            id: preference_id
        },
        render: {
              container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
              label: 'Pagar', // Cambia el texto del botón de pago (opcional)
        }
  });
    var carrito = JSON.parse(localStorage.getItem("cart"));
    $.each(carrito, function(i, obj) { 
        var url=UriServicios+"?id="+obj.key+"&color="+obj.color;
        axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
        .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            nombre_p=resultado.nombre_producto;
            precio_p=resultado.precio;
            var monto_p=resultado.precio*obj.cantidad;
            monto+=monto_p;
            if((carrito.length-1)==cont){
                $("#monto").val('$'+monto);
            }else{
                cont++;
            }
        })
        .catch(error => console.error('Ups, ha ocurrido un error', error));  
        i++;
     });
    var d = new Date();
    var today =  d.getDate()+ "/" + (d.getMonth()+1) + "/" +d.getFullYear() ;
    $('#fecha').val(today);
});

$("#pagar").click(function(){
    $("#guardar").prop('disabled', false);
    //$("#guardar")
});


$("#guardar").click(function(){
    var carrito = JSON.parse(localStorage.getItem("cart"));
    var data= {      
        operation: 3,
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        estado: $("#estado").val(),
        cp: $("#cp").val(),
        direccion: $("#direccion").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        fecha: $("#fecha").val(),
        monto: $("#monto").val(),
        productos:carrito,
        reference_id:localStorage.getItem("preference_id")
     };
     console.log(JSON.stringify(data));
    axios.post(UriServicios, data, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            console.log(resultado); 
            if(resultado.status=true){
                alert(resultado.mensaje);
            }else{
                alert(resultado.mensaje);
            }
            limpiar_campos();  
    })
    .catch(function (error) {
                console.log("Ups, verifique su conexión, "+error, 'danger');
      }
    );
});


function limpiar_campos(){    
    
    $("#nombre").val("");         
    $("#apellidos").val("");
    $("#correo").val("");
    $("#descripcion").val("");
    $("#monto").val("");  
    $("#telefono").val("");
}