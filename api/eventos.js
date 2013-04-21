// EVENTOS
$(document).ready(function() {
	//document.addEventListener("deviceready",function(){
		
    $('#consultar').click(function(){
		//window.location.href='#login';
		
		
		var numreporte = $("#numRepor").val()
//	var datosPassword = $("#regEmail").val()
	
  	//archivoValidacion = "http://revolucion.mobi/ejemplos/phonegap/envioFormulario/validacion_de_datos.php?jsoncallback=?"
	archivoValidacion ="http://aplicacion.netai.net/index.php?jsoncallback=?"

	$.getJSON( archivoValidacion, {numRepor:numreporte})
	.done(function(respuestaServer) {
		
		//alert(respuestaServer.mensaje + "\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador)		
		alert(respuestaServer.Asegurador)
		
		//if(respuestaServer.validacion == "ok"){
			if(respuestaServer.Asegurador == "Ricardo Morales"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "home"
			$.mobile.changePage("#resultado")
		  document.getElementById('resuNom').value=respuestaServer.Asegurador;
		}else{
		  
		  /// ejecutar una conducta cuando la validacion falla
		}
		
	});
		/*
		
		
		
		var nom=$('#regNom').val();
		var email=$('#regEmail').val();
		var tel=$('#regTel').val();
		if (nom!='' && email !='' && tel!='') {
			alert('CORRECTO');	*/
		 /* navigator.notification.confirm("Nombre: "+nom+"\nMail: "+email+"\nTelefono"+tel,function(botones){
			switch(botones){
			 case 1:
			  navigator.notification.beep(5);
			  break;
		 	 case 2:
	   		  navigator.notification.vibrate(500);
			  break;		
			}
          },"Titulo","Beep,Vibrar,Salir");*/
		/*} 
		else{
				//navigator.notification.alert('Todos los campos son requeridos',null,'Error de Registro','Aceptar');
		alert('Todos los campos son requeridos');	
			
		}
	*/		
	});
	//},false);
	
});

