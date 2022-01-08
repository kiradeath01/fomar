
var monto=0; 
var cantidad_total=0;
$( document ).ready(function() {
    var carrito = JSON.parse(localStorage.getItem("cart"));
    $('#listado_carrito').empty();
    $("#subtotal").empty();
    $('#listado_carrito').append('<div class="card"><div class="card-header rounded-0" style="background: #76C7CB;"><h4 class="text-white">Artículos en su carrito</h4></div></div>');
    llenar(carrito);
    
    /*
    
     //*/
});

$("#pagar").click(function(){
    $("#guardar").prop('disabled', false);
    //$("#guardar")
});


$("#guardar").click(function(){
    var carrito = JSON.parse(localStorage.getItem("cart"));
    var data= {      
        operation: 4,
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        estado: $("#estado").val(),
        cp: $("#cp").val(),
        direccion: $("#direccion").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        fecha: $("#fecha").val(),
        monto: $("#monto").val(),
        producto:carrito,
        reference_id:localStorage.getItem("preference_id")
     };
    axios.post(UriServicios, data, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            console.log(resultado);     
            limpiar_campos();
    })
    .catch(function (error) {
                mensaje("Ups, verifique su conexión, "+error, 'danger');
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
var cont=0;
function llenar(carrito){
    $.each(carrito, function(i, obj) { 
        var url=UriServicios+"?id="+obj.key+"&color="+obj.color;
        axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
        .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            nombre_p=resultado.nombre_producto;
            precio_p=resultado.precio;
            var monto_p=resultado.precio*obj.cantidad;
            monto+=monto_p;
            $("#subtotal").append(
                '<tr>'+
                    '<td class="p-0">Subtotal: '+nombre_p+' ('+obj.cantidad+'productos)</td>'+ 
                    '<td class="text-end p-0">$'+monto_p+'</td>'+                                             
                '</tr>'
            );
            var descripcion=resultado.descripciones;
            $('#listado_carrito').append('<div class="card shadow-sm my-2 rounded-3">'+
            '<div class="card-body py-1">'+
              '<div class="row d-flex align-items-center">'+
                '<div class="col-md-4">'+
                  '<img class="rounded img-fluid" src="'+resultado.urlimg+'" alt="Third slide">'+ 
                '</div>'+
                '<div class="col-md-8 ">'+
                  '<div class="col-md-12 d-flex justify-content-end">'+
                    '<h4>$'+precio_p+'</h4>'+
                  '</div>'+
                  '<div class="col-md-10">'+
                    '<table class="table text-center table-borderless">'+
                      '<thead>'+
                        '<tr>'+                    
                          '<th scope="col" style="text-align: justify;">Producto: '+nombre_p+'</th>'+
                          '<th scope="col">Precio</th>'+
                          '<th scope="col">Cantidad</th> '+                         
                        '</tr>'+
                      '</thead>'+
                      '<tbody>'+
                        '<tr>'+
                          '<td style="text-align: justify;">'+descripcion[0].descripcionproducto+'</td>'+
                          '<td>$'+precio_p+'</td>'+
                          '<td>'+
                            '<input class="form-control" type="number" id="cantidad'+resultado.id+'" onclick="actualizar('+resultado.id+')" name="cantidad" min="1" value="'+obj.cantidad+'">'+
                          '</td>'+                                                  
                        '</tr>'+                       
                      '</tbody>'+
                    '</table>'+
                  '</div>'+
                  '<div class="col-md-12 d-flex justify-content-end">'+
                    '<button type="button" class="btn" onclick="eliminar('+resultado.id+')"><i class="bi bi-trash text-danger h3"></i><span class="text-danger"> Eliminar</span></button>'+                   
                  '</div>'+
                '</div>'+
              '</div> '+             
            '</div>'+
            '</div>');
            if((carrito.length-1)==cont){
                $("#subtotal").append(
                    '<tr>'+
                        '<td class="p-0">Costo de envio</td> '+ 
                        '<td class="text-end p-0">$0.00</td>'+                                             
                    '</tr>'
                );
                $("#subtotal").append(
                    '<tr>'+
                        '<td colspan="2"><hr></td>'+                                            
                    '</tr>'
                );
                $("#subtotal").append(
                   '<tr>'+
                       '<td><b>Total (IVA incluido)</b></td>'+ 
                       '<td class="text-end text-success">$'+monto+'</td>'+                                               
                   '</tr>'
                 );

            }else{
                cont++;
            }
        })
        .catch(error => console.error('Ups, ha ocurrido un error', error));  
        i++;
     });
}

function eliminar(index){
    var carrito = JSON.parse(localStorage.getItem("cart"));
    const found = carrito.find(element => element.key == index);
    var i = carrito.indexOf( found );
    carrito.splice( i, 1 );
    localStorage.setItem("cart",JSON.stringify(carrito));
    location.reload();
    //[{"key":"1","color":"Gris","cantidad":"1"},{"key":"2","color":"Gris","cantidad":"2"},{"key":"3","color":"Tinto","cantidad":"3"}]
}
var alerta=0;
function actualizar(id){
    var carrito = JSON.parse(localStorage.getItem("cart"));
    const found = carrito.find(element => element.key == id);
    var i = carrito.indexOf( found );
    found.cantidad=$("#cantidad"+id).val();
    carrito[i]=found;
    localStorage.setItem("cart",JSON.stringify(carrito));
    $("#actualizar").prop('disabled', false);
    alerta++;
    if(alerta  == 1){
        alert("Presione el boton actualizar para realizar los cambios");
    }
    //[{"key":"1","color":"Gris","cantidad":"1"},{"key":"2","color":"Gris","cantidad":"2"},{"key":"3","color":"Tinto","cantidad":"3"}]
}
$("#actualizar").click(function(){
    location.reload();
});
$("#continuar").click(function(){
    window.location.href ="tienda.php";
});

$("#add").click(function(){
  var cont1=0;
  console.log("entro al boton");
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
            cantidad_total+=parseInt(obj.cantidad);
            if((carrito.length-1)==cont1){
                var data= {      
                    operation: 2,
                    nombre: "Carrito de compras",
                    cantidad: cantidad_total,
                    monto: monto
                 };
                axios.post(UriServicios, data, { headers: RAPIDAPI_REQUEST_HEADERS })
                .then(response => {
                        var resultado = JSON.parse(JSON.stringify(response.data));
                        localStorage.setItem("preference_id",resultado.id);
                        location.href="comprar.php";       
                })
                .catch(function (error) {
                            mensaje("Ups, verifique su conexión, "+error, 'danger');
                  }
                );
            }else{
                cont1++;
            }
        })
        .catch(error => console.error('Ups, ha ocurrido un error', error));  
        i++;
     });
});