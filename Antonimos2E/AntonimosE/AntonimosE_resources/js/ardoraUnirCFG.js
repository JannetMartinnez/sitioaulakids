//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=10; scoreDec=1
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
var timeOnMessage=3; messageOk="¡Eres Genial! "; messageTime="Se te acabó el tiempo :c"; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts="Se acabaron tus intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QW50b25pbW9zRQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["QWx0bw", "QmFqbw"],["TGVqb3M", "Q2VyY2E"],["Q2FsaWVudGU", "RnJpbw"],["THV6", "T2JzY3VyaWRhZA"],["VG9kbw", "TmFkYQ"],["UnVpZG8", "U2lsZW5jaW8"],["QXBhZ2Fkbw", "RW5jZW5kaWRv"],["TGltcGlv", "U3VjaW8"],["QXJyZWdsYXI", "RGVzY29tcG9uZXI"],["Q3JlYXI", "RGVzdHJ1aXI"]];
var c=[[4,4],[5,5],[8,4],[3,10],[4,4],[5,8],[7,9],[6,5],[8,11],[5,8]];
var con1=["Alto","Lejos","Caliente","Luz","Todo","Ruido","Apagado","Limpio","Arreglar","Crear"];
var con2=["Destruir","Nada","Descomponer","Bajo","Obscuridad","Encendido","Cerca","Frio","Silencio","Sucio"];
var sel1=""; join1=[]; join2=[];
