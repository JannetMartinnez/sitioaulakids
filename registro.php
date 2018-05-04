<?php

	$email=$_POST['correo'];
	$password1=$_POST['password'];
	$password2=$_POST['pass'];
	require_once'funcs/conexion.php';

	if(filter_var($email, FILTER_VALIDATE_EMAIL)){
		if ($password1 == $password2){
			$validacion ="SELECT email FROM registrousuarios WHERE email='$email";
			$resultado= $db->query($validacion);
			if ($resultado->num_rows>0) {
				echo "Ya existe un usuario con ese email";
			}

			$hash=password_hash($password1,PASSWORD_DEFAULT);

			$query = "INSERT INTO registrousuarios (email,password) VALUES ('$email', '$hash')";

			if ($db->query($query)) {
				header("login2.php");
				//echo "Usuario Registrado Correctamente";

			} else {
				echo "Error al registrar usuario";
			}

		} else {
			echo "Passwords no coinsiden";
		}
	} else {
		echo "El email no es valido";
	}
?>