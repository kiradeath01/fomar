function cargar_colores(){
    var id = localStorage.getItem("key"); 
    if(id === ""){
        id=1;
    }
    var data= {                                    
        id: id,
        operation: 1,
     };
    axios.post(UriServicios, data, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            $("#color").empty();
            var colores=resultado.color;
            colores.forEach(function(elemento, indice, array) {
                //console.log(elemento, indice);
                $("#color").append('<option value="'+elemento+'">'+elemento+'</option>');
            }); //termina foreach           
    })
    .catch(function (error) {
                mensaje("Ups, verifique su conexión, "+error, 'danger');
      }
    );
}
$(document).ready(function(){   
    cargar_colores();
    var id = localStorage.getItem("key"); 
    if(id === ""){
        id=1;
    } 
    var url=UriServicios+"?id="+id;
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        console.log(resultado);
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
        
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject


        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

function cambio(id)
{
    var url=UriImagen+"?id="+id;
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+resultado.url_imagen+'" data-zoom-image="'+resultado.url_imagen+'" class="img-fluid" alt="..." ></img>');
        
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
}

$("#lena").click(function(){
    var url=UriServicios+"?id=1";
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        localStorage.setItem("key", 1);
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var i = 0;
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="row">'+obj.peso+'</th><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        cargar_colores();

        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

$("#hibrido").click(function(){
    var url=UriServicios+"?id=2";
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        localStorage.setItem("key", 2);
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var i = 0;
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        var colores=resultado.color;
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
        
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="row">'+obj.peso+'</th><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        cargar_colores();

        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

$("#plus").click(function(){
    var url=UriServicios+"?id=3";
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        localStorage.setItem("key", 3);
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var i = 0;
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        var colores=resultado.color;
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
        cargar_colores();
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="row">'+obj.peso+'</th><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject


        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

$("#minif").click(function(){
    var url=UriServicios+"?id=4";
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        localStorage.setItem("key", 4);
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var i = 0;
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        var colores=resultado.color;
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
        cargar_colores();
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="row">'+obj.peso+'</th><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject


        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

$("#minih").click(function(){
    var url=UriServicios+"?id=5";
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        localStorage.setItem("key", 5);
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var i = 0;
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        var colores=resultado.color;
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
        cargar_colores();
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="row">'+obj.peso+'</th><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject


        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

$('#color').on('change', function() {
    var id = localStorage.getItem("key"); 
    if(id === ""){
        id=1;
    }
    var url=UriServicios+"?id="+id+"&color="+this.value;
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        var img=resultado.descripcionesimg;
        var descripcion=resultado.descripciones;
        $("#nombre_producto").empty();
        $("#precio").empty();
        $("#stock").empty();
        $("#nombre_producto").append(resultado.nombre_producto);
        $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
        $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
        $("#container-zoom").empty();
        $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
        
        //*
        $("#gal1").empty();
        if(!$.isEmptyObject(img)){
            $.each(img, function(i, obj){   
                $("#gal1").append('<a onclick="cambio('+obj.id_imagen+')" class="btn" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject
        $("#descripcion").empty();
        if(!$.isEmptyObject(descripcion)){
            $.each(descripcion, function(i, obj){   
                $("#descripcion").append('<tr><th scope="col">'+obj.tipo+'</th><th scope="col">'+obj.dimencion+'</th><th scope="col">'+obj.descripcionproducto+'</th></tr>');
                i++;
            }); //termina foreach  
        }//termina if de emptyobject


        //*/
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));  
  });


$("#add").click(function(){
    var lista_productos=[];
    if(!(localStorage.getItem("cart")===null)){
        lista_productos=JSON.parse(localStorage.getItem("cart"));
        lista_productos.push({"key":localStorage.getItem("key"),"color":$("#color").val(),"cantidad":$("#cantidad").val()});
        localStorage.setItem("cart",JSON.stringify(lista_productos));
        alert("Añadido al carrito");
    }else{
        lista_productos.push({"key":localStorage.getItem("key"),"color":$("#color").val(),"cantidad":$("#cantidad").val()});
        localStorage.setItem("cart",JSON.stringify(lista_productos));
    }
    var id = localStorage.getItem("key"); 
    if(id === ""){
        id=1;
    }
    var precio_p=0;
    var nombre_p="";
    var url=UriServicios+"?id="+id+"&color="+$("#color").val();
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        nombre_p=resultado.nombre_producto;
        precio_p=resultado.precio * $("#cantidad").val();
        if(resultado.stock>$("#cantidad").val()){
            var data= {      
                operation: 2,
                nombre: nombre_p,
                cantidad: $("#cantidad").val(),
                monto: precio_p
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
            console.log("sin stock");
        }
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));
});

$("#add_cart").click(function(){    
    var id = localStorage.getItem("key"); 
    if(id === ""){
        id=1;
    }
    var precio_p=0;
    var nombre_p="";
    var url=UriServicios+"?id="+id+"&color="+$("#color").val();
    axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
        var resultado = JSON.parse(JSON.stringify(response.data)); 
        nombre_p=resultado.nombre_producto;
        precio_p=resultado.precio * $("#cantidad").val();
        if(resultado.stock>$("#cantidad").val()){
            var lista_productos=[];
            if(!(localStorage.getItem("cart")===null)){
                lista_productos=JSON.parse(localStorage.getItem("cart"));
                const found = lista_productos.find(element => element.key == localStorage.getItem("key"));
                if(!(found===null)){
                    alert("Ya se ha registrado en el carrito");
                }else{
                    lista_productos.push({"key":localStorage.getItem("key"),"color":$("#color").val(),"cantidad":$("#cantidad").val()});
                    localStorage.setItem("cart",JSON.stringify(lista_productos));
                    alert("Añadido al carrito");
                }
            }else{
                lista_productos.push({"key":localStorage.getItem("key"),"color":$("#color").val(),"cantidad":$("#cantidad").val()});
                localStorage.setItem("cart",JSON.stringify(lista_productos));
            }
        }else{
            alert("No hay suficientes productos");
        }
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));
    
});


function mensaje(mensaje, tipo){
    $("#cabeza").attr("class","modal-header bg-"+tipo+" text-white");
    $("#messaje").html(mensaje);
    $("#mensajito").modal('show');
}



 // [{1,1,"Tinto"},{2,1,"Tinto"},{3,1,"Tinto"}]