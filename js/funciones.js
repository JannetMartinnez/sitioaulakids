function validarUsuario() {
				  var username = document.getElementById("nombre").value;
				 var pass = document.getElementById("password").value;
				
				if (username == "admin" && pass == "12345") {
				window.location = "admin.html";
			}
				else{
					alert('Error en el nombre de Usuario o Password');
				}			
			}
	function mostrarImagen() {
	document.getElementById("back").src="imagenes/colorful-childrens-school-backpack-free-clip-art.png";
	}
	
	function cambiarImagen() {
		document.getElementById("back").src="imagenes/Mochila_de_Edición_Limitada_icono.png";
	}
