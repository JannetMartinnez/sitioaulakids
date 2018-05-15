//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
paintButtonUp("bUpLCanvas",colorButton,colorSele);paintButtonUp("bUpRCanvas",colorButton,colorSele);paintButtonDown("bDownLCanvas",colorButton,colorSele);paintButtonDown("bDownRCanvas",colorButton,colorSele);paintGame();
$("#bUpLCanvas").bind('click',function(e) { if (indexL>0){indexL--;paintGame();}});
$("#bUpLCanvas").mouseenter(function() {if (indexL>0){paintButtonUp("bUpLCanvas",colorSele,colorButton);}});
$("#bUpLCanvas").mouseleave(function() {if (indexL>0){paintButtonUp("bUpLCanvas",colorButton,colorSele);}});
$("#bUpRCanvas").bind('click',function(e) {if (indexR>0){indexR--;paintGame();}});
$("#bUpRCanvas").mouseenter(function(){if (indexR>0){paintButtonUp("bUpRCanvas",colorSele,colorButton);}});
$("#bUpRCanvas").mouseleave(function() {if (indexR>0){paintButtonUp("bUpRCanvas",colorButton,colorSele);}});
$("#bDownLCanvas").bind('click',function(e) {if (indexL<order.length-1){indexL++;paintGame();}});
$("#bDownLCanvas").mouseenter(function() {if (indexL<order.length-1){paintButtonDown("bDownLCanvas",colorSele,colorButton);}});
$("#bDownLCanvas").mouseleave(function() {if (indexL<order.length-1){paintButtonDown("bDownLCanvas",colorButton,colorSele);}});
$("#bDownRCanvas").bind('click',function(e) {if (indexR<order.length-1){indexR++;paintGame();}});
$("#bDownRCanvas").mouseenter(function() {if (indexR<order.length-1){paintButtonDown("bDownRCanvas",colorSele,colorButton);}});
$("#bDownRCanvas").mouseleave(function() {if (indexR<order.length-1){paintButtonDown("bDownRCanvas",colorButton,colorSele);}});
}
function paintGame(){document.getElementById("contenL").innerHTML = iL[order[indexL]] + cL[order[indexL]];document.getElementById("contenR").innerHTML = iR[orderR[indexR]] + cR[orderR[indexR]];
if (indexL==0){clearCanvasButton("bUpLCanvas")} else {paintButtonUp("bUpLCanvas", colorButton, colorSele);}
if (indexR==0){clearCanvasButton("bUpRCanvas")} else {paintButtonUp("bUpRCanvas", colorButton, colorSele);}
if (indexL==order.length-1){clearCanvasButton("bDownLCanvas")} else {paintButtonDown("bDownLCanvas", colorButton, colorSele);}
if (indexR==order.length-1){clearCanvasButton("bDownRCanvas")} else {paintButtonDown("bDownRCanvas", colorButton, colorSele);}
}
function clearCanvasButton(canvasId){var canvas = document.getElementById(canvasId);canvas.width = canvas.width;}
function paintButtonUp(divUp,colorStroke, colorFill){var canvas = document.getElementById(divUp);canvas.width = canvas.width;var context = canvas.getContext("2d");
var wDiv=$("#"+divUp).width();var hDiv=$("#"+divUp).height();var padd=5;context.lineWidth=2;context.beginPath();context.strokeStyle=colorStroke;context.fillStyle=colorFill;
var grd = context.createLinearGradient(wDiv/2, padd, wDiv/2,hDiv-padd);
grd.addColorStop(0, colorBack);grd.addColorStop(1, colorFill);context.fillStyle = grd;
context.moveTo(padd,hDiv-padd);context.lineTo(wDiv-padd,hDiv-padd);context.lineTo(wDiv/2,padd);
context.lineTo(padd,hDiv-padd);context.fill();context.stroke();}
function paintButtonDown(divUp,colorStroke, colorFill){var canvas = document.getElementById(divUp);canvas.width = canvas.width;
var context = canvas.getContext("2d");var wDiv=$("#"+divUp).width();var hDiv=$("#"+divUp).height();var padd=5;
context.lineWidth=2;context.beginPath();context.strokeStyle=colorStroke;context.fillStyle = colorFill;
var grd = context.createLinearGradient(wDiv/2,hDiv-padd,wDiv/2, padd);
grd.addColorStop(0, colorBack);grd.addColorStop(1, colorFill);context.fillStyle = grd;
context.moveTo(padd,padd);context.lineTo(wDiv-padd,padd);context.lineTo(wDiv/2,hDiv-padd);context.lineTo(padd,padd);context.fill();context.stroke();
}
function randomSort(){
for (i = 0; i < order.length; i++) {
var randN = Math.floor(Math.random() * order.length);
while (order[randN]!=""){randN++;if (randN==order.length){randN=0;}}
order[randN]=i.toString();orderR[randN] = i.toString();}indexR=Math.floor(Math.random() * order.length);indexL=Math.floor(Math.random() * order.length);
}
function isCorrect(){
if(parseInt(relWords(ansRL[order[indexL]]))===parseInt(orderR[indexR])){document.getElementById("contenL").innerHTML = "";
document.getElementById("contenR").innerHTML = "";order.splice(indexL, 1 );orderR.splice(indexR, 1 );
if (indexL>order.length-1){indexL=order.length-1;}if (indexR>orderR.length-1){indexR=orderR.length-1;}successes++;score = score + scoreInc;
timeAct=timeAct+timeBon;if (successes == iL.length) {showMessage("Ok");} else {$("#contenL").slideUp();$("#contenR").slideUp();
paintGame();$("#contenL").slideDown("slow");$("#contenR").slideDown("slow");}}
else{attempts++;score = score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
document.getElementById("contenL").innerHTML = iL[order[indexL]] + cL[order[indexL]];
document.getElementById("contenR").innerHTML = iR[parseInt(relWords(ansRL[order[indexL]]))] + cR[parseInt(relWords(ansRL[order[indexL]]))];
}
function paintBack(){}
function relWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
