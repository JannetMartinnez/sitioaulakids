//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
$(".txtCell_txt").mousedown(function() { var valueZ=giveZindex("img")+1; if (giveZindex("div")>valueZ){valueZ=giveZindex("div")+1} var cssObj = {"z-index" : valueZ}; $(this).css(cssObj); texSel=$(this).attr("id").substring(3,5);});
$(".txtCell_txt").draggable({ containment: "document", revert: "invalid", cursor: "move", start: function(){}, drag: function(event, ui){}, stop: function(){} });
$(".txtCell").droppable({ accept:".txtCell_txt", drop: function() { changeTxt(texSel,parseInt($(this).attr("id").substring(3,5))); var cssObj = { "border-color" : "black", "border-style": "dotted", "border-width": "1px",};$(this).css(cssObj);},
over: function() { var cssObj = {"border-color" : colorSele,"border-style": "solid","border-width": "2px",}; $(this).css(cssObj);},
out: function() { var cssObj = { "border-color" : "black", "border-style": "dotted", "border-width": "1px",}; $(this).css(cssObj);}});
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}}
function changeTxt(fromSrc,toSrc){ var srcTo; var srcFrom; var celTo; var celFrom; var nameDivTo="txt"+toSrc+"_txt"; var nameDivFrom="txt"+fromSrc+"_txt";
celTo=document.getElementById(nameDivTo);celFrom=document.getElementById(nameDivFrom);srcTo=document.getElementById(nameDivTo).getElementsByTagName("p")[0].innerHTML; srcFrom=document.getElementById(nameDivFrom).getElementsByTagName("p")[0].innerHTML;
$(celFrom).fadeOut("fast"); document.getElementById(nameDivFrom).getElementsByTagName("p")[0].innerHTML=srcTo;$(celFrom).fadeIn("slow");
$(celTo).fadeOut("fast"); document.getElementById(nameDivTo).getElementsByTagName("p")[0].innerHTML=srcFrom; $(celTo).fadeIn("slow"); $(celFrom).animate({ "left": "0px", "top": "0px"});}
function randomSort(){var mat=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var mat2=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];var count=0;var nameDiv;var cel;var rand=0;
for (i=0; i <4; i++){for (j=0; j <4; j++){if (board[i][j]!="0"){mat[i][j]="1"; mat2[i][j]="1";count+=1;}}} var countTxt=count;var count1=0;
for (i=0; i <4; i++){for (j=0; j <4; j++){if (board[i][j]!="0"){rand=Math.floor(Math.random()*count);count1=0;
var isA=false;for (i1=0; i1<4; i1++){ for (j1=0; j1<4; j1++){if (!isA){ if (mat[i1][j1]!="0"){if (parseInt(rand)==parseInt(count1)){
mat[i1][j1]="0"; nameDiv="ima"+(i1+1).toString()+(j1+1).toString()+"_img";cel=document.getElementById(nameDiv).getElementsByTagName("img")[0];
$(cel).attr("src",board[i][j]);count-=1;count1+=1;isA=true;} else{count1+=1;}}}}}}}}
count1=0;count=countTxt;
for (i=0; i <4; i++){ for (j=0; j <4; j++){ if (board[i][j]!="0"){ rand=Math.floor(Math.random()*count);count1=0; isA=false;for (i1=0; i1<4; i1++){for (j1=0; j1<4; j1++){
if (!isA){ if (mat2[i1][j1]!="0"){ if (parseInt(rand)==parseInt(count1)){mat2[i1][j1]="0"; nameDiv="txt"+(i1+1).toString()+(j1+1).toString()+"_txt"; document.getElementById(nameDiv).getElementsByTagName("p")[0].innerHTML=answers[i][j];
count-=1;count1+=1;isA=true;}else{count1+=1;}}}}}}}}
}
function paintButtonTime(){if (tiTime || tiAttempts || tiScore || tiSuccesses ){clearInterval(timeInterval);}
var canvas = document.getElementById("ardoraActCanvas"); var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.10;contexto.fillStyle = colorButton; contexto.fillRect(0,0,canvas.width,canvas.height);
contexto.font="15px " + fMenssage; var metricsW = contexto.measureText(textButtonTime).width; var x=(canvas.width / 2)-(metricsW / 2); var y=(canvas.height / 2); contexto.beginPath();
contexto.globalAlpha = 1; contexto.lineWidth = 2; contexto.fillStyle = colorBack; var xAnim=canvas.width/2; var wAnim=0;
interval = setInterval(function () { contexto.strokeStyle = colorText; roundedRect(contexto,xAnim,y-20,wAnim,30,5,colorBack);xAnim-=1;wAnim+=2;
if (wAnim>metricsW+30){clearInterval(interval); contexto.shadowColor = "black"; contexto.shadowBlur = 20; contexto.shadowOffsetX = 10; contexto.shadowOffsetY = 10;contexto.stroke();contexto.beginPath();
contexto.textAlign = "left"; contexto.fillStyle = colorText; contexto.fillText(textButtonTime,x,y);contexto.lineWidth = 5;contexto.stroke();}},1);
$("#ardoraActCanvas").mousedown(function(e){ if (tiTime || tiAttempts || tiScore || tiSuccesses ){ timeInterval=setInterval("paintTab()",1000); $("#ardoraActCanvas").css("cursor", "default"); $("#ardoraActCanvas").unbind("mousedown"); }});}
function isCorrect(){ var correct=true;
if ((typeGame==0) || (typeGame==1)){successes=0;
  for (i=0; i <4; i++){
    for (j=0; j <4; j++){
      var nameDiv="ima"+(i+1).toString()+(j+1).toString()+"_img";
      if (board[i][j]!="0"){
      var cel=document.getElementById(nameDiv).getElementsByTagName("img")[0];
      for (z=0; z<4; z++){for (t=0; t<4; t++){if (board[z][t]==$(cel).attr("src")){
      var nameDiv="txt"+(i+1).toString()+(j+1).toString()+"_txt";
      var respu=$.trim(document.getElementById(nameDiv).innerHTML.replace("<p>","").replace("</p>",""));
      if ($.trim(answers[z][t]).replace("&#39;","'") !=respu){correct=false;}else{successes++;}}}}}}}}
if (typeGame==2){successes=0;for (i=0; i <4; i++){for (j=0; j <4; j++){var nameDiv="ima"+(i+1).toString()+(j+1).toString()+"_img";
if (board[i][j]!="0"){var cel=document.getElementById(nameDiv).getElementsByTagName("img")[0];for (z=0; z<4; z++){for (t=0; t<4; t++){
if (board[z][t]==$(cel).attr("src")){var nameDiv="inputTxt"+(i+1).toString()+(j+1).toString();var respu=$.trim(document.getElementById(nameDiv).value);
if (tiUD){if ($.trim(answers[z][t]).replace("&#39;","'").toUpperCase()!=respu.toUpperCase()){correct=false;}else{successes++;}}
else {if ($.trim(answers[z][t]).replace("&#39;","'")!=respu){correct=false;}else{successes++;}}}}}}}}}
      if (typeGame==3) {successes=0;for (i=0; i <4; i++){for (j=0; j <4; j++){var nameDiv="ima"+(i+1).toString()+(j+1).toString()+"_img";
      if (board[i][j]!="0"){var cel=document.getElementById(nameDiv).getElementsByTagName("img")[0];var nameDiv="txt"+(i+1).toString()+(j+1).toString()+"_txt";
      var respu=$.trim(document.getElementById(nameDiv).innerHTML.replace("<p>","").replace("</p>",""));
      if ((board[i][j]!=$(cel).attr("src")) || ($.trim(answers[i][j]).replace("&#39;","'") !=respu)){correct=false;}else{successes++;}}}}}
      if (correct){ score=score+scoreInc;showMessage("Ok");}else{ attempts++; score=score-scoreDec; if (tiAttempts){
      if (attempts>attemptsMax){ showMessage("Attempts");}else{showMessage("Error");
      }}else{showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ if (oldTypeGame==0){ for (i=0; i <4; i++){for (j=0; j <4; j++){var nameDiv="ima"+(i+1).toString()+(j+1).toString()+"_img";
if (board[i][j]!="0"){var cel=document.getElementById(nameDiv).getElementsByTagName("img")[0];for (z=0; z<4; z++){
for (t=0; t<4; t++){if (board[z][t]==$(cel).attr("src")){var nameDiv="txt"+(i+1).toString()+(j+1).toString()+"_txt";document.getElementById(nameDiv).innerHTML="<p>"+answers[z][t]+"</p>";}}}}}}}
var canvas = document.getElementById("ardoraActCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.20;contexto.fillStyle = colorBack;contexto.fillRect(0,0,canvas.width,canvas.height);}
function paintBack(){}
function albumWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
