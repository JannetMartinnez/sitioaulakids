<?php
$db= new mysqli("localhost", "root", "", "aulakids");


if(mysqli_connect_errno()){
	echo 'Conexion Fallida : ', mysqli_connect_error();
	exit();

}
/*
	$server='localhost';
	$username='root';
	$password='';
	$database = 'aulakids';

	try{
		$conn= new PDO("mysql:host=$server;dbname=$database;",$username,$password);
	} catch(PDOException $e){
		die('Connected failed: '.$e->getMessage());
	}


function conectar (){
	$s="localhost";
	$bd="aulakids";
	$u="root";
	$p="";

	$conexion = new mysqli($s, $u, $p, $bd);

	if ($conexion->connect_error){
	return "No Conectado";

	} else {
		return "Conectado";
	}
}*/
?>