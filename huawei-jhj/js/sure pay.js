window.onload=function(){
	
	var trigger=document.getElementById("trigger");
	var ordercon=document.querySelector(".order-show");
	var order2=document.querySelector(".order2");
	var right=document.querySelector(".right");
	var left1=document.querySelector(".left1");
	
	var flag=true;	//订单详情隐藏
	
	trigger.onclick=function(){
		if(flag){
			ordercon.style.display="inline-block";
			order2.style.display="none";
			trigger.style.bottom= -22 +"px";
		}else{
			ordercon.style.display="none";
			order2.style.display="block";
			trigger.style.bottom= 0 +"px";
			}
			flag=!flag;
		}
		
		right.onclick=function(){
			document.querySelector(".pay").style.display="none";
			document.querySelector(".pay1").style.display="block";
			ordercon.style.display="none";
			order2.style.display="block";
			trigger.style.bottom= 0 +"px"
				
			
		}
		left1.onclick=function(){
			document.querySelector(".pay").style.display="block";
			document.querySelector(".pay1").style.display="none";
		    ordercon.style.display="none";
			order2.style.display="block";
			trigger.style.bottom= 0 +"px"
				
		}
		
		var next=document.querySelector(".next");
		next.onclick=function(){
			alert("支付成功");
			}
		
			
}
	
	
	