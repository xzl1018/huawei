function $(id){
	return document.getElementById(id);
	}
window.onload=function(){
	var weixin=document.querySelector(".weixin");
	var wxo=document.querySelector(".wxo");
	var wxt=document.querySelector(".wxt");
	var weikefu=document.querySelector(".weikefu");
	var aboutW1=document.querySelector(".aboutW1");
	var aboutW2=document.querySelector(".aboutW2");
	
	weixin.onmouseover=function(){
		weikefu.style.display="block";
	}
	weixin.onmouseout=function(){
		weikefu.style.display="none";
	}
	
	wxo.onmouseover=function(){
		aboutW1.style.display="block";
	}
	wxo.onmouseout=function(){
		aboutW1.style.display="none";
	}
	
	wxt.onmouseover=function(){
		aboutW2.style.display="block";
	}
	wxt.onmouseout=function(){
		aboutW2.style.display="none";
	}

	var rn=document.querySelector(".rn");
	var xx=document.querySelector(".xx");
	
	
	rn.onclick=xx.onclick=function(){
		$("content").style.display="none";
		$("banner1").style.display="block";
		$("banner2").style.marginTop= 105+"px";
	}
	
	
	var login=document.querySelector(".login");
	var pp=document.querySelector(".pp");
	var timer=null;
	
	pp.onmouseover=login.onmouseover=function(){
		clearInterval(timer);
		timer=setTimeout(function(){
			login.style.display="block";
			},1000);
		
		}
	pp.onmouseout=login.onmouseout=function(){
		clearInterval(timer);
		timer=setTimeout(function(){
		login.style.display="none";
		},1000);
	}
	
	var comsite=document.querySelector(".comsite");
	var xl=document.querySelector(".xl");
	var downup=document.querySelector(".downup");
	
	var flag=true;
	comsite.onclick=function(){
		if(flag){
			xl.style.display="block";
			$("nav").style.top= 175+"px";
			$("content").style.top= 247+"px";
			$("banner1").style.top= 247+"px";
			$("banner2").style.marginTop= 255+"px";
			downup.style.backgroundPositionX= -33+"px";
			downup.style.backgroundPositionY= -227+"px";
		}else{
			xl.style.display="none";
			$("nav").style.top= 28+"px";
			$("content").style.top= 100+"px";
			$("banner1").style.top= 100+"px";
			$("banner2").style.marginTop= 110+"px";
			downup.style.backgroundPositionX= -53+"px";
			downup.style.backgroundPositionY= -229+"px";
			}
		flag=!flag;
		}
		
	var pc=document.querySelectorAll(".pc");
	var qx=document.querySelectorAll(".qx");
	var comtitle=document.querySelector(".comtitle");
	var combodyEm=document.querySelectorAll(".combody em");
	var coms=document.querySelector(".coms");
	var onoff=true;//当前为产品比较
	
	for(let i=0;i<pc.length;i++){
		pc[i].onclick=qx[i].onclick=combodyEm[i].onclick=function(){
		if(onoff){
			visible();
		}else{
			hide();
		}
		 onoff=!onoff;
	 }
	 
	 function visible(){
			 $("qx"+i).style.display="block";
			 $("pc"+i).style.display="none";
			 comtitle.style.display="block";
			 $("com"+i).style.display="block";
			 coms.style.display="block";
		 }
	function hide(){
			 $("qx"+i).style.display="none";
			 $("pc"+i).style.display="block";
			 comtitle.style.display="none";
			 $("com"+i).style.display="none";
			 coms.style.display="none";
			 
		}
	
	
 	window.onscroll=function(){
		 move(10,873);
}	
  
   
   var loadmore=document.querySelector(".loadmore");
   var pics=document.querySelector(".pics");
   var la1=document.querySelector(".la1");
   var la2=document.querySelector(".la2");
   
   loadmore.onclick=function(){
	   la1.style.display="block";
	   loadmore.onclick=function(){
			 la2.style.display="block";
			 pics.style.display="none";
		}	   
	}
}
 
  
	var timer=null;	
    function move(speed,value){
	var comtitle=document.querySelector(".comtitle");
	var combody=document.querySelector(".combody");
	var coms=document.querySelector(".coms");
	clearInterval(timer);
	timer=setInterval(function(){
	if(combody.offsetTop>value && comtitle.offsetTop>value &&coms.offsetTop>value){
	   clearInterval(timer);
	}else{
	  combody.style.top=combody.offsetTop+speed+"px";
	  comtitle.style.top=comtitle.offsetTop+speed+"px";
	  coms.style.top=coms.offsetTop+speed+"px";
	}
	 },100);
 }  
  }	