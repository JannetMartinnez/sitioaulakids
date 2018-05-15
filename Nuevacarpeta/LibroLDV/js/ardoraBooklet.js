$(document).ready(function(){
   $.fn.booklet.defaults = {
      name:"El Lugar Donde Vivo",
      width:1200,height:800,speed:1000,direction:"LTR",
      startingPage:1,easing:"easeInOutQuad",easeIn:"easeInQuad",easeOut:"easeOutQuad",
      closedFrontTitle:"Beginning",closedFrontChapter:"Beginning of Book",closedBackTitle:"End",closedBackChapter:"End of Book",
      covers:true,
      closed:true,
      autoCenter:true,
      pagePadding:10,pageBorder:0,
	    pageNumbers:true,
	    manual:false,
      hovers:true,hoverWidth:50,hoverSpeed:500,hoverThreshold:0.25,overlays:true,tabs:false,tabWidth:60,tabHeight:20,
      nextControlText:"Next",previousControlText:"Previous",
      nextControlTitle:"Next",previousControlTitle:"Previous",
      arrows:false,
      arrowsHide:false,
      cursor:"pointer",hash:false,hashTitleText:" - Page ",
keyboard:true,
      next:null, prev:null, auto:false, delay:5000, pause:null, play:null, menu:null,pageSelector:false,chapterSelector:false,
      shadows:true,shadowTopFwdWidth:166,shadowTopBackWidth:166,shadowBtmWidth:50,before:function(){},after:function(){}
      }
 $("#mybook").booklet();
});
