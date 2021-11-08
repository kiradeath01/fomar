function dashboard(){
	$.ajax({
		url: 'paginas/dashboard.php',
		type: 'POST',
		data: {param1: 'value1'},
		beforeSend: function(){	
			$("#contenido").html("<strong>Cargando...</strong>");		
		},
		success: function(response){
			$("#contenido").html(response);
		}
	});
	
}

function wireless(){
	$.ajax({
		url: 'paginas/wireless.php',
		type: 'POST',
		data: {param1: 'value1'},
		beforeSend: function(){
			$("#contenido").html("<strong>Cargando...</strong>");		
		},
		success: function(response){
			$("#contenido").html(response);
		}
	});
	
}

/*
	$("#dashboard").click(function(){
		$("#contenido").load("paginas/dashboard.php");
	});

	$("#wireless").click(function(){
		$("#contenido").load("paginas/wireless.php");
	});

	$("#capsman").click(function(){
		$("#contenido").load("paginas/sistemaip.php");
	});

	$("#terminal").click(function(){
		$("#contenido").load("paginas/terminal.php");
	});*/
