<?php

	function isNull($nombre, $usuario,$email, $password, $con_password){
		if (strlen(trim($nombre))< 1 || strlen(trim($usuario)) < 1 || strlen(trim($password)) < 1 || strlen(trim($con_password)) < 1 || strlen(trim($email)) < 1 ) {
			return true;
		} else {
			return false;
		}
	}

	function isEmail($email){
		if(filter_var($email,FILTER_VALIDATE_EMAIL)){
			return true;
		} else {
			return false;
		}

	}

	function validaPassword ($var1, $var2){
		if (strcmp ($var1, $var2) !== 0){
			return false;
		} else {
			return true;
		}
	}

	function minMax($min, $max, $valor){
		if(strlen(trim($valor)) < $min){
			return true;
		} else if (strlen(trim($valor)) > $max) {
			return true;
		} else {
			return false;
		}
	}

	function usuarioExiste($usuario){
		global $mysqli;

		$stmt = $mysqli->prepare("SELECT id FROM usuarios WHERE usuario = ? LIMIT 1");
		$stmt->bind_param("s", $usuario);
		$stmt->execute();
		$stmt->store_result();
		$num = $stmt->num_rows;
		$stmt->close();

		if ($num > 0) {
			return true;
		} else {
			return false;
		}
	}

	function emailExiste($email){
		global $mysqli;

		$stmt = $mysqli->prepare("SELECT id FROM usuarios WHERE correo = ? LIMIT 1");
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$stmt->store_result();
		$num = $stmt->num_rows;
		$stmt->close();

		if ($num > 0) {
			return true;
		} else {
			return false;
		}
	}

	function hashPassword($password){
		$hash = password_hash($password, PASSWORD_DEFAULT);
		return $hash;
	}

	function generateToken(){
		$gen = md5(uniqid(mt_rand(), false));
		return $gen;
	}

	function registraUsuario($usuario, $pass_hash, $nombre, $email, $activo, $token, $tipo_usuario){

		global $mysqli;
		$stmt = $mysqli->prepare("INSERT INTO usuarios(usuario, nombre, password, correo, activacion, token, id_tipo)VALUES(?,?,?,?,?,?,?)");
		$stmt->bind_param('ssssisi', $usuario, $pass_hash, $nombre, $email, $activo, $token, $tipo_usuario);

		if ($stmt->execute()){
			return $mysqli->insert_id;
		} else {
			return 0;
		}
			
	}
	

?>