<?php
session_start();
	$email=$_POST['correo'];
	$password=$_POST['password'];

	require_once'funcs/conexion.php';

	$query = "SELECT email, password FROM registrousuarios WHERE email = '$email'AND password = '$password'";

	if ($resultado = $db->query($query)) {

		if ($resultado->num_rows>0) {
			/*$row=$resultado->fetch_assoc();
			if(password_verify($password,$row['password'])){*/
				
		header("Location:index2.html");
			}else {
				echo "<script> alert('Datos incorrectos')</script>";
				
			}
		}
	
?>






















