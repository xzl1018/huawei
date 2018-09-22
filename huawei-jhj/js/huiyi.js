window.onload=function(){
	
	var oWei1=document.getElementById("weixinp1");
	var oWei2=document.getElementById("weixinp2");
	var oWei3=document.getElementById("weixinp3");
	var oW1=document.querySelector(".weixin1");
	var oW2=document.querySelector(".weixin2");
	var oW3=document.querySelector(".weixin3");
	var oVary=document.getElementById("vary");
	
	var timer=null;
	
	
	 oW1.onmouseover=oWei1.onmouseover=function(){
		 clearInterval(timer);
		 timer=setTimeout(function(){
			  oWei1.style.display="block";
			 },100);
		
	};

	 oW1.onmouseout=oWei1.onmouseout=function(){
		 clearInterval(timer);
		 timer=setTimeout(function(){
			  oWei1.style.display="none";
			 },100);
	};
	
	 oW2.onmouseover=oWei2.onmouseover=function(){
		 clearInterval(timer);
		 timer=setTimeout(function(){
			  oWei2.style.display="block";
			 },100);
		
	};

	 oW2.onmouseout=oWei2.onmouseout=function(){
		 clearInterval(timer);
		 timer=setTimeout(function(){
			  oWei2.style.display="none";
			 },100);
	};
	 oW3.onmouseover=oWei3.onmouseover=function(){
		 clearInterval(timer);
		 timer=setTimeout(function(){
			  oWei3.style.display="block";
			 },100);
		
	};

	 oW3.onmouseout=oWei3.onmouseout=function(){
		 clearInterval(timer);
		 timer=setTimeout(function(){
			  oWei3.style.display="none";
			 },100);
	};
	
	
};
	
	


	