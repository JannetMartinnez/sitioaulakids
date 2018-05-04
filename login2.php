<?php 
require 'funcs/conexion.php';
require 'funcs/funcs.php';
/*
$errors = array();
$nombre='';
$usuario='';
$email='';
$password='';
$con_password='';
if (!empty($_POST)) {
  $nombre = $mysqli->real_escape_string($_POST['nombre']);
  $usuario = $mysqli->real_escape_string($_POST['user']);
  $email = $mysqli->real_escape_string($_POST['correo']);
  $password = $mysqli->real_escape_string($_POST['password']);
  $con_password = $mysqli->real_escape_string($_POST['pass']);
}

$activo = 0;
$tipo_usuario = 2;

if(isNull($nombre, $usuario,$email, $password, $con_password)){
  $errors[]= "Debe llenar todos los campos";
}

if(!isEmail($email)){
  $errors[]= "Dirección de correo inválida";
}

if(!validaPassword($password, $con_password)){
  $errors[]= "Las contraseñas no coinciden"; 
}
 if(usuarioExiste($usuario)){
  $errors[]= "El nombre de usuario $usuario ya existe";
 }

 if(emailExiste($email)){
  $errors[]= "El correo electrónico $email ya existe";
 }

 if (count($errors)==0) {
  $pass_hash = hashPassword($password);
  $token = generateToken();
  $registro = registraUsuario($usuario, $pass_hash, $nombre ,$email, $activo, $token, $tipo_usuario);
  if ($registro > 0) {

  }else {
    $errors[]="Error al Registrar";
  }
 }*/
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
<style>
 footer {
    padding: 1em;
    color: white;
    background-color: #C03;
    clear: left;
    text-align: center;
    position:1000px;
  }
.mySlides {display:none}
.w3-left, .w3-right, .w3-badge {cursor:pointer}
.w3-badge {height:20px;width:20px;padding:0;}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/3w ww.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/estilos.css">
<link rel="icon" href="imagenes/icono.ico" type="image/x-icon">
<style type="text/css">


#apDiv2 {
  position: absolute;
  left: 80px;
  top: 7px;
  width: 497px;
  height: 36px;
  z-index: 1;
}
#apDiv3 {
  position: absolute;
  left: 1242px;
  margin-top: 8px;
  width: 154px;
  height: 41px;
  z-index: 2;
}
#divw3-mobile{
  position:inherit;
  width:100%;
  height:90px;
  background-image:url(imagenes/aves.jpg);
  border-color:solid black;
  border:inset;
}
#divImages{
  margin-left:13%;
  margin-right:1.5%; 
  text-align:justify;
  position:inherit;
  
}
</style>
	<title>
		Iniciar Sesión - AulaKidSM
	</title>
	<script type="text/javascript" src="js/funciones.js"></script>
</head>
<body>

 <!--banner -->
<header> 
<div class="w3-top">
<div class="w3-light-gray w3-mobile" id="divw3-mobile"></div>
<div id="apDiv2"> <img src="imagenes/logo aula.png" width="500" height="100"/></div>
<div id="apDiv3" ><img src="imagenes/colorful-childrens-school-backpack-free-clip-art.png"  width="80" height="75" /></div>
</div>
</header>
<!-- barra de inicio --> 
<div class="w3-top">
<div class="w3-bar w3-card-4 w3-blue-gray " style="position:fixed; top:90px;height:53px">
  <a href="Contacto.html" class="w3-bar-item w3-button w3-right w3-padding-16 w3-hover-pale-red" style="height:53px"><i class="fa fa-envelope w3-large "></i>     Contacto</a>
  <a href="AcercaDe.html" class="w3-bar-item w3-button w3-right w3-padding-16 w3-hover-pale-green" style="height:53px"><i class="fa fa-address-card  w3-large"></i>    Acerca de </a>
  <a href="index.html" class="w3-bar-item w3-button w3-pale-yellow w3-right  w3-text-pink w3-padding-16 w3-hover-pink" style="height:53px"><i class="fa fa-home  w3-large"></i> Home </a>
  <a href="login.html" class="w3-bar-item w3-button w3-hover-pale-green w3-right  w3-text-amber w3-padding-16 style="height:53px"><i  w3-large"></i> Iniciar Sesión </a>
</div>
</div> 
<!-- menu lateral-->
<div class="w3-sidebar w3-light-gray w3-bar-block w3-text-blue-grey " style="width:11%;position:fixed;top:80px">
  <h3 class="w3-bar-item w3-blue-gray  w3-card-4" style="height:53px;"> </h3>
  <a href="primero.html" class="w3-bar-item w3-button w3-hover-amber w3-text-amber"><i class="fa fa-graduation-cap  w3-large"></i>  Primero</a>
  <a href="segundo.html" class="w3-bar-item w3-button w3-hover-aqua w3-text-aqua"><i class="fa fa-graduation-cap  w3-large"></i>  Segundo</a>
  <a href="tercero.html" class="w3-bar-item w3-button w3-hover-deep-purple w3-text-deep-purple"><i class="fa fa-graduation-cap  w3-large"></i>   Tercero</a>
  <a href="cuarto.html" class="w3-bar-item w3-button w3-hover-cyan w3-text-cyan"><i class="fa fa-graduation-cap  w3-large"></i>    Cuarto</a>
  <a href="quinto.html" class="w3-bar-item w3-button w3-hover-brown w3-text-brown"><i class="fa fa-graduation-cap  w3-large"></i>   Quinto</a>
  <a href="sexto.html" class="w3-bar-item w3-button w3-hover-pink w3-text-pink"><i class="fa fa-graduation-cap  w3-large"></i>   Sexto</a>
</div>
<div>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>	
	<div class="contenedor-form">
    <h2>Bienvenido! Ahora Inicia Sesión</h2>
        <div class="toggle">
            <span> Crear Cuenta</span>
        </div>
        
        <div class="formulario">
            <h2>Iniciar Sesión</h2>
            <form action="loginin.php" method="POST">
                <input type="email" name="correo" placeholder="Correo" required>
                <input type="password" name="password" placeholder="Contraseña" required>
                <input type="submit" value="Iniciar Sesión">
            </form>
        </div>
        
        <div class="formulario">
            <h2>Crea tu Cuenta</h2>
            <form action="login.php" method="POST">

              <!--input type="text" name="nombre" placeholder="Nombre" required>

                <input type="text" name="user" placeholder="Usuario" required-->

                <input type="email" name="correo" placeholder="Correo Electrónico" required>
                
                <input type="password" name="password" placeholder="Contraseña" required>
                
                <input type="password" name="pass"  placeholder="Confirma tu contraseña" required>
                
                <input type="submit" value="Registrarse">
            </form>
        </div>
        <div class="reset-password">
            <a href="#">Olvide mi Contraseña?</a>
        </div>
    </div>
    <script src="js/jquery-3.1.1.min.js"></script>    
    <script src="js/main.js"></script>

    
</body>
</html>