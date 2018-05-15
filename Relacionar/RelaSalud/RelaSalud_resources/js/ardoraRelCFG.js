//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Century Gothic, sans-serif";
var fActi="Century Gothic, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=3; messageOk="¡Felicidades!"; messageTime="Se nos acabó el tiempo"; messageError="Aún hay algo mal"; messageErrorG="Aún hay algo mal"; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsYVNhbHVk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Lavarse los dientes ...</p>","<p>Si tomamos agua del grifo  se puede limpiar con ..</p>","<p>Debemos tomar ...</p>","<p>El virus de la influeza A(H1N1) sobrevive hasta ...</p>","<p>Algunos de los síntomas del H1N1 son ...</p>"];
var iL=["<div  align='center'><img src='RelaSalud_resources/media/cepillo-de-dientes__1_.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/grifo.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/vaso-de-agua.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/germenes.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/germenes__1_.png'></div>"];
var order=["","","","",""]; orderR=["","","","",""];indexR=0; indexL=0;
var cR=["<p>... Fiebre mayor a 38°, Dolor de cabeza, Dolor de garganta, Escurrimiento nasal</p>","<p>... 3 veces al día después de cada comida</p>","<p>... cloro o hirviéndola</p>","<p>... 2 Litros de agua al día</p>","<p>... 3 horas en las manos y 72 en superficies lisas contaminadas por saliva de personas infectadas</p>"]; ansRL=["MQ","Mg","Mw","NA","MA"];
var iR=["<div  align='center'><img src='RelaSalud_resources/media/enfermo.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/cepillo-de-dientes.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/soda.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/el-agua-potable.png'></div>","<div  align='center'><img src='RelaSalud_resources/media/restaurante.png'></div>"];
