//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120;timeIni=120; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=8;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Century Gothic, sans-serif";
var fActi="Century Gothic, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades!"; messageTime="Se agotó el tiempo"; messageError=""; messageErrorG=""; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="Wm9uYXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Zona Huasteca","Zona Media","Zona Centro","Zona Altiplano","","","",""];im1=["","","","","","","",""];mp31=["","","","","","","",""];
var wo2=["","","","Cascadas Micos","Media Luna","Catedral","Desierto",""];im2=["","","","huasteca.jpg","Media.jpg","centro.jpg","altiplano.jpg",""];mp32=["","","","","","","",""];
var cols=4; rows=2; items=4; itp=["MTA","MTE","MTI","MTM","MTQ","MTU","MTY","MTc"]; pos=["MjM","MjQ","MjU","MjY","LTE","LTE","LTE","LTE"];
var boardGame=[["","","",""],["","","",""]]; dirMedia="Zonas_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
