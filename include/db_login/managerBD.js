
function mensaje(mensaje, tipo){
        $("#cabeza").attr("class","modal-header bg-"+tipo+" text-white");
        $("#messaje").html(mensaje);
        $("#mensajito").modal('show');
}

$("#ingresar").click(function(){
    var data= {
        operation: 'login',
        user: $("#user").val(),
        password: $("#password").val()
    };
    console.log(data);
    //*
    axios.post(UriLogin, data, { headers: RAPIDAPI_REQUEST_HEADERS })
    .then(response => {
            var resultado = JSON.parse(JSON.stringify(response.data)); 
            console.log(resultado);
            if(resultado.estatus == true){ 
                $("#alerta").attr("class","");
                document.getElementById('alerta').innerHTML = '<p><p/>';
                setCookie('SUN', resultado.SUN,1);
                setCookie('STASA', resultado.STASA,1);
                setCookie('SUID', resultado.SUID,1);
                setCookie('SSL', true,1);
                location.href="cpanel.php"; 
            }else{
                $("#alerta").attr("class","alert alert-danger");
                document.getElementById('alerta').innerHTML = '<p>El usuario no se encuentra registrado o la contraseña es incorrecta<p/>';
            }     
    })
    .catch(error => console.error('Ups, ha ocurrido un error', error));
});

$(document).ready(function(){     
    $("#password").keypress(function(e) {
      if(e.which == 13) {   
        var data= {
            operation: 'login',
            user: $("#user").val(),
            password: $("#password").val()
        };
        //*
        axios.post(UriLogin, data, { headers: RAPIDAPI_REQUEST_HEADERS })
        .then(response => {
                var resultado = JSON.parse(JSON.stringify(response.data)); 
                console.log(resultado);
                if(resultado.status == true){ 
                    $("#alerta").attr("class","");
                    document.getElementById('alerta').innerHTML = '<p><p/>';
                    setCookie('SUN', resultado.SUN,1);
                    setCookie('STASA', resultado.STASA,1);
                    setCookie('SUID', resultado.SUID,1);
                    setCookie('SSL', true,1);
                    location.href="cpanel.php"; 
                }else{
                    $("#alerta").attr("class","alert alert-danger");
                    document.getElementById('alerta').innerHTML = '<p>El usuario no se encuentra registrado o la contraseña es incorrecta<p/>';
                }                   
        })
        .catch(error => console.error('Ups, ha ocurrido un error', error));  
      }
   });
});


function mensaje(mensaje, tipo){
        $("#cabeza").attr("class","modal-header bg-"+tipo+" text-white");
        $("#messaje").html(mensaje);
        $("#mensajito").modal('show');
}

function limpiar_campos(){         
    $("#user").val(""); 
    $("#password").val("");
}