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
            console.log(resultado);
            $("#nombre_producto").empty();
            $("#precio").empty();
            $("#stock").empty();
            $("#nombre_producto").append(resultado.nombre_producto);
            $("#precio").append('<span class="display-4">$ '+resultado.precio+'</span>');
            $("#stock").append('Stock disponible <b>'+resultado.stock+'</b>');
            $("#container-zoom").empty();
            $("#container-zoom").append('<img id="zoom_03" src="'+img[0].url_imagen+'" class="img-fluid" alt="..." ></img>');
            
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
            var img=resultado.descripcionesimg;
            $.each(resultado, function(i, obj){   
                i++;
            }); //termina foreach  
            /*
            $("#galeria_productos").empty();
            if(!$.isEmptyObject(img)){
                $.each(img, function(i, obj){   
                    $("#galeria_productos").append('<a href="#" data-image="'+obj.url_imagen+'" data-zoom-image="'+obj.url_imagen+'"><img id="img_01" class="img-thumbnail mb-2" src="'+obj.url_imagen+'"/></a>');
                    i++;
                }); //termina foreach  
            }//termina if de emptyobject
            //*/
        })
        .catch(error => console.error('Ups, ha ocurrido un error', error));  
});

$('#zoom_03').ezPlus({
    gallery: 'gal1', 
    cursor: 'pointer', 
    galleryActiveClass: 'active',
    imageCrossfade: false,
  //  zoomType: 'lens',
   //containLensZoom: true,
    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
  });

  $("#zoom_03").bind("click",function (e) {
    var ez = $('#zoom_03').data('ezPlus');
    $.fancyboxPlus(ez.getGalleryList());
    return false;
  });