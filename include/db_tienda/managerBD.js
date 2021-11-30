$(document).ready(function(){   
    var id = localStorage.getItem("key"); 
    if(id === ""){
        id=1;
    } 
    var url=UriServicios+"?id="+id;
        axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
        .then(response => {
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
            $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" data-zoom-image="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
            
            //*
            $("#gal1").empty();
            if(!$.isEmptyObject(img)){
                $.each(img, function(i, obj){   
                    $("#gal1").append('<a href="#" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
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

$(document).ready(function(){   
    var url=UriServicios;
        axios.get(url, { headers: RAPIDAPI_REQUEST_HEADERS })
        .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            var i = 0;
            $("#galeria_productos").empty();
            if(!$.isEmptyObject(resultado)){
                $.each(resultado, function(i, obj){   
                    $("#galeria_productos").append('<div class="d-flex justify-content-center p-1"><div class="col p-0 m-0 text-center"><img class="rounded img-fluid " src="'+obj.urlimg+'" alt="Third slide"><p style="font-size:11px;"><strong>'+obj.nombre_producto+'</strong></p></div></div>');
                    i++;
                }); //termina foreach  
            }//termina if de emptyobject
            //*/
        })
        .catch(error => console.error('Ups, ha ocurrido un error', error));  
});


$('#zoom_03').ezPlus({
    gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active',
    imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
});

//pass the images to Fancybox
$('#zoom_03').bind('click', function (e) {
    var ez = $('#zoom_03').data('ezPlus');
    $.fancyboxPlus(ez.getGalleryList());
    return false;
});