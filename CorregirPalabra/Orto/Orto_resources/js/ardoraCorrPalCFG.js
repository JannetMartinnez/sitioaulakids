//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
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
var timeOnMessage=3; messageOk="¡Felicidades!"; messageTime="Se nos acabó el tiempo"; messageError="Ups! Aún falta algo"; messageErrorG="Ups! Aún falta algo"; messageAttempts="Agotaste tus intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var c=[2,5,6,4,2,3,5,2,3,1,6,3,5,2,4,2,4,7,2,2,6,1,2,6,2,3,5,5,3,2,3,7,7,3,10,7,2,5,1,7,9,3,7,6,9,2,3,6,9,1,8,4,2,5,2,3,12,1,2,9,7,2,5,8,2,5,5,1,9,3,8,2,9,12,9,4,6,11,3,6,2,2,6,2,8];
var wordsGame="T3J0bw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["VW4","YWJhcm8","dmVuZGnz","dG9kbw","bG8","cXVl","dGVu7WE","ZGU","beFz","eQ","Y29tcHLz","dW5h","cGllemE","ZGU","b3JvLA","bGE","Y3VhbA","ZW50ZXJy8w","ZW4","bGE","dGllcnJh","YQ","bGE","b3JpbGxh","ZGU","dW5h","dmllamE","Y3J1ei4","VW5v","ZGU","c3Vz","dmVjaW5vcw","b2JzZXJ28w","c3Vz","ZnJlY3VlbnRlcw","dmlzaXRhcw","YWw","bHVnYXI","eQ","ZGVjaWRp8w","YXZlcmlndWFy","cXXp","cGFzYWJhLg","UHJvbnRv","ZGVzY3Vicmnz","bG8","ZGVs","dGVzb3Jv","ZXNjb25kaWRv","eQ","Y2FiYW5kbyw","dG9t8w","bGE","cGllemE","ZGU","b3Jv","cm9i4W5kb3NlbGEu","QQ","c3U","c2lndWllbnRl","dmlzaXRhLA","ZWw","YWJhcm8","ZW5jb250cvM","ZWw","aHVlY28","dmFj7W8","eQ","dG9j4W5kb3Nl","c3Vz","Y2FiZWxsb3M","c2U","bGFtZW50YWJh","YW1hcmdhbWVudGUu","RW50b25jZXMs","b3Rybw","dmVjaW5v","ZW50ZXLhbmRvc2U","ZGVs","bW90aXZv","ZGU","c3U","cXVlamEs","bG8","Y29uc29s8y4"];
