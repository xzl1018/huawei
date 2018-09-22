function $(id){
	return document.getElementById(id);
}

var timer=null;
window.onload=function(){
	
	
	starMove();
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
}

function starMove(){
		var imgs1=document.querySelector(".ig1");
		var imgs2=document.querySelector(".ig2");
		
		clearInterval(timer);
		timer=setInterval(function(){
			imgs1.style.display="block";
			imgs2.style.display="block";
			if(imgs2.offsetTop=imgs1.offsetTop<20){
				clearInterval(timer);
			}else{
				imgs1.style.top=imgs1.offsetTop-5+"px";
				imgs2.style.top=imgs2.offsetTop-5+"px";
				}
			
			},50);
		
		}



window.onscroll=function(){
	
		$("nav1").style.display="none";
		$("nav2").style.display="block";
		$("nav2").style.top= 0+"px";
		$("nav2").style.position="fixed";
		$("nav2").style.zIndex=5;
		document.querySelector(".good").style.color="#DB1530";
		
		
}
	
