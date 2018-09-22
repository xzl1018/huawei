
function $(id){
	return document.getElementById(id);
	}
	var logolis=document.querySelectorAll(".logoli");
    var logop=document.querySelector(".logop");
    var lgi3=document.querySelector(".lgi3");
	lgi3.onmouseover= function () {
        for(let i=0;i<logolis.length;i++){
            logolis[i].style.display="block";
            logop.style.display="block";
            logolis[i].onmouseover= function () {
                clearTimeout(timer1);
                logolis[i].style.display="block";
            }
            logolis[i].onmouseout= function () {
                ru();
            }
        }

    }
    lgi3.onmouseout= function () {
        ru();
    }
    function ru(){
        timer1=setTimeout(function () {
            for(let i=0;i<logolis.length;i++){
                logolis[i].style.display="none";
                logop.style.display="none";
            }
        },100);

    }

window.onload=function(){
	var jingcai=document.querySelector(".jingcai");
	var drop=document.querySelector(".drop");
	var fx=document.querySelector(".fx");
	var fs=document.querySelector(".fs");
	var timer=null;
	jingcai.onmouseover=drop.onmouseover=function(){
		
		
			drop.style.display="block";
			fx.style.display="none";
			fs.style.display="block";
			jingcai.style.border="1px solid #DEDEDE";
			jingcai.style.zIndex="5";
			
		
		}
	jingcai.onmouseout=drop.onmouseout=function(){
			fx.style.display="block";
			fs.style.display="none";
			jingcai.style.border="none";
			drop.style.display="none";
			
		
	}
	var shopcar=document.querySelector(".shopcar");
	
	shopcar.onmouseover=$("shoppingC").onmouseover=function(){
		
			shopcar.style.border="1px solid #DEDEDE";
			shopcar.style.borderBottom="none";
			$("shoppingC").style.display="block";
			$("shoppingC").style.zIndex="5";
			
		
		}
	shopcar.onmouseout=$("shoppingC").onmouseout=function(){
			$("shoppingC").style.display="none";
			shopcar.style.border="none";
			
		
	}
	var headerLi=document.querySelectorAll("#header li");
	var xLa=document.getElementsByClassName("xLa");
	
	var timer=null;
	for(let i=0;i<6;i++){
		headerLi[i].onmouseover=xLa[i].onmouseover=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				$("xiaLas"+i).style.display="block";
				$("header").style.borderBottom="none";
				},500);
		}
		headerLi[i].onmouseout=xLa[i].onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				$("xiaLas"+i).style.display="none";
				$("header").style.borderBottom="5px solid #EEEEEE";
				},500);
			
			}
		}
		
}	
	
	var cColora=document.querySelectorAll(".cColor a");
	for(let i=0;i<cColora.length;i++){
		cColora[i].onoff=true;
		cColora[i].index=i;
		cColora[i].onclick=function(){
				for(let i=0;i<cColora.length;i++){
					
					if(i!=this.index){
						cColora[i].className="";
						cColora[i].onoff=true;
						$("img"+i).style.display="none";
						}
				}
					if(this.onoff){
					this.className="seleted1";
					$("img"+i).style.display="block";
						
					
				}else{
					this.className="";
					$("img"+i).style.display="none";
					}
					this.onoff=!this.onoff;
			}
						
		}
			
		var cVersiona=document.querySelectorAll(".cVersion a");
		for(let i=0;i<cVersiona.length;i++){
		cVersiona[i].onoff=true;
		cVersiona[i].index=i;
		cVersiona[i].onclick=function(){
				for(let i=0;i<cVersiona.length;i++){
					
					if(i!=this.index){
						cVersiona[i].className="";
						cVersiona[i].onoff=true;
						}
				}
					if(this.onoff){
					this.className="seleted2";
					
						
					
				}else{
					this.className="";
					
					}
					this.onoff=!this.onoff;
			}
						
		}
	var le=document.querySelector(".selecte");	
	var ps=document.createElement("p");
	var seleted1=document.querySelector(".seleted1 span");
	var seleted2=document.querySelector(".seleted2");
	var seleted3=document.querySelector(".seleted3");
	ps.innerHTML=seleted1.innerHTML + '/' +seleted2.innerHTML + '/' +seleted3.innerHTML;
	le.appendChild(ps);
	var b1=document.querySelector(".b1");
	var b1l=document.querySelector(".b1l");
	
	b1.onmouseover=b1l.onmouseover=function(){
		
		b1l.style.display="block";
		b1l.style.border="1px solid #CA141D";
		b1.style.border="1px solid #CA141D";
		b1l.style.zIndex=555;
		}
	b1.onmouseout=b1l.onmouseout=function(){
		b1l.style.display="none";
		b1l.style.border="none";
		b1.style.border="1px solid #D6D6D6";
		}
	
	var servicexq=document.querySelectorAll(".b1l .servicexq");
	var b1lDiv=document.querySelectorAll(".b1l div");
	for(let i=0;i<b1lDiv.length;i++){
		b1lDiv[i].onmouseover=function(){
			servicexq[i].style.display="inline-block";
			}
		b1lDiv[i].onmouseout=function(){
		servicexq[i].style.display="none";
		}
		}
		
	var b2=document.querySelector(".b2");
	var b2l=document.querySelector(".b2l");
	
	b2.onmouseover=b2l.onmouseover=function(){
		
		b2l.style.display="block";
		b2l.style.zIndex=555;
		}
	b2.onmouseout=b2l.onmouseout=function(){
		b2l.style.display="none";
		}	
		
		
	var servicexqa=document.querySelectorAll(".b2l .servicexq");
	var b2lDiv=document.querySelectorAll(".b2l div");
	for(let i=0;i<b2lDiv.length;i++){
		b2lDiv[i].onmouseover=function(){
			servicexqa[i].style.display="inline-block";
			}
		b2lDiv[i].onmouseout=function(){
		servicexqa[i].style.display="none";
		}
		}	
	var	 ps1=document.querySelector(".ps1");
	var	 phide=document.querySelector(".p-support-hide");
	
	var t=null;
	
    ps1.onmouseover=phide.onmouseover=function(){
		clearInterval(t);
		t=setInterval(function(){
			phide.style.display="block";
			
			},500);
		}
	ps1.onmouseout=phide.onmouseout=function(){
		
		clearInterval(t);
		t=setInterval(function(){
			phide.style.display="none";
			},500);
		}
	var btn=document.querySelector(".btn");
	btn.onclick=function(){
		$("consult-add").style.display="block";
		$("i-consult").style.display="none";
	}
	
	
	$("hs").onclick=function(){
		$("consult-add").style.display="none";
		$("i-consult").style.display="block";
	}
	
	$("show").onclick=function(){
		$("part3").style.height= 293+"px";
		$("part3").style.opacity= 1;
		$("mshow").style.display="none";
	}
	
	$("h2").onclick=function(){
		$("part3").style.height= 63+"px";
		$("part3").style.opacity=0.1;
		$("mshow").style.display="block";
		
	}
	var commentLi=document.querySelectorAll(".comment li");
	for(let i=0;i<commentLi.length;i++){
		commentLi[i].onoff=true;
		commentLi[i].index=i;
		commentLi[i].onclick=function(){
				for(let i=0;i<commentLi.length;i++){
					if(i!=this.index){
						commentLi[i].className="";
						commentLi[i].onoff=true;
						$("uls"+i).style.display="none";
					}
				}
					if(this.onoff){
					this.className="active";
					$("uls"+i).style.display="block";
						
				}else{
					this.className="";
					$("uls"+i).style.display="none";
					}
					this.onoff=!this.onoff;
			}
						
		}
			
	var pageLi=document.querySelectorAll(".page li");
		for(let i=0;i<pageLi.length;i++){
		pageLi[i].onmouseover=function(){
			pageLi[i].style.color="#CA141D";
		}
		pageLi[i].onmouseout=function(){
			pageLi[i].style.color="#A4A4A4";
		}	
	}
	
	var commenta=document.querySelectorAll(".consult-p a");
	
	
	for(let i=0;i<commenta.length;i++){
		commenta[i].onoff=true;
		commenta[i].index=i;
		commenta[i].onclick=function(){
				for(let i=0;i<commenta.length;i++){
					
					if(i!=this.index){
						commenta[i].className="";
						commenta[i].onoff=true;
						$("change"+i).style.display="none";
					}
				}
					if(this.onoff){
					this.className="th";
					$("change"+i).style.display="block";
						
					
				}else{
					this.className="";
					$("change"+i).style.display="none";
					}
					this.onoff=!this.onoff;
			}
						
		}
		
	var consultkindsa=document.querySelectorAll(".consult-kinds a");
	for(let i=0;i<consultkindsa.length;i++){
		consultkindsa[i].onoff=true;
		consultkindsa[i].index=i;
		consultkindsa[i].onclick=function(){
				for(let i=0;i<consultkindsa.length;i++){
					
					if(i!=this.index){
						consultkindsa[i].className="";
						consultkindsa[i].onoff=true;
						}
				}
					if(this.onoff){
					this.className="dq";
					
						
					
				}else{
					this.className="";
					
					}
					this.onoff=!this.onoff;
			}
						
		}
			
			
	
		
	//固定
	function ow(id){
		var detailsa=document.querySelectorAll(".xxq")
        for(let i=0;i<detailsa.length;i++) {
            detailsa[i].style.borderBottom ="none";
			detailsa[i].style.color="";
            if(i==id) {
                detailsa[i].style.borderBottom="2px solid #E41F2B";
                //点击后固定在header
				detailsa[i].style.color="#E41F2B";
                $("details").style.zIndex="45";
            }
        }

    }
	
	var realTop=$("details").getBoundingClientRect().top;
    window.onscroll = function(){
        
        var t=document.documentElement.scrollTop || document.body.scrollTop;
       
        if(t>=realTop){
           
            $("details").style.position="fixed";
            $("details").style.top="0px";
            
			
        }else{
           
            $("details").style.position="none";
            $("details").style.top=(realTop-t)+"px";
            $("nav").style.display="block";
            $("header").style.display="block";
			$("canshu").style.display="block";
			$("ds").style.display="block";
			$("p-relation").style.display="block";
        }
    }

   
		//计算
		var jian=document.querySelector(".jian");
		var jia=document.querySelector(".jia");
		var quantity=$("quantity");
		//减法
		jia.onclick=function(){
			quantity.value++;
			jian.style.cursor="pointer";
			quantity.innerHTML=quantity.value;
			}
		//加法
		jian.onclick=function(){
			quantity.value--;
			if(quantity.value<=1){
				quantity.value=1;
				jian.style.cursor="not-allowed";
			}
			
			quantity.innerHTML=quantity.value;
		}
	
		
		
	var box1=$("box1");
	var box2=$("box2");
	var x1=$("x1");
	var x2=$("x2");
	var b1l=document.querySelector(".b1l");
	function f1(){
		if(box1.checked){
			box2.disabled=true;
			x1.style.display="block";
			x2.style.display="none";
			}else{
				box2.disabled=false;
				x1.style.display="none";
				x2.style.display="block";
				}
			b1l.style.display="none";
		}
		
	function f2(){
		if(box2.checked){
			box1.disabled=true;
			x1.style.display="none";
			x2.style.display="block";
			}else{
				box1.disabled=false;
				x1.style.display="block";
			x2.style.display="none";
				}
			b1l.style.display="none";
		}
		
	//图片轮转
	var toLeft=document.querySelector(".toLeft");
    var toRight=document.querySelector(".toRight");

    var m=0;
    var n=1;
    var a=1;
    var b=1;
    var g=0;
    var h=1;

    toRight.onclick=function(){
        var timer=window.setInterval(function(){
            m++;
            document.querySelector(".rIcons ul").style.left="-"+m+"%";
            //滚动了整个屏幕之后，清除定时器，不要动了
            if(m==(100*n)){
                clearInterval(timer);
                //目的：可以继续向左移动
                n++;
                a++;
                //意味着已经点了2次
                if(n==4){
                    //重新将我们的div给还原成网页刚进来的样子
                    n=1;
                     m=0;
                    document.querySelector(".rIcons ul").style.left="0px";
                }

            }
        },10);
    }	
    	
						
	var  behind=document.querySelector(".behind");
	     behind.onclick=function(){
        var timer=window.setInterval(function(){
            m++;
            document.querySelector(".ul").style.left="-"+m+"%";
            //滚动了整个屏幕之后，清除定时器，不要动了
            if(m==(100*n)){
                clearInterval(timer);
                //目的：可以继续向左移动
                n++;
               
                //意味着已经点了2次
                if(n==4){
                    //重新将我们的div给还原成网页刚进来的样子
                     n=1;
                     m=0;
                    document.querySelector(".ul").style.left="0px";
                }

            }
        },10);
    }	
	
var ulas=document.querySelectorAll(".ula");
var lis=document.querySelectorAll(".Bigimage ul li");
var fk=document.querySelector(".fk");
var Bigimage=document.querySelector(".Bigimage");
var ul=document.querySelector(".Bigimage ul");
function show(id){
    for(let i=0;i<9;i++){
        if(i==(id-1)){
            fk.style.display="block";
            l=(i%3)*210;
            t=Math.floor(i/3)*210;
            fk.style.backgroundPosition="-"+l+"px"+" "+"-"+t+"px";
        }
    }
}
Bigimage.onmouseout= function () {
    fk.style.display="none";
}

function showimg(num){
    for(let i=0;i<6;i++){
        ulas[i].style.border="none";
        lis[i].style.display="none";
        if(i==(num-1)){
            lis[i].style.display="block";
            ulas[i].style.border="1px solid #a80000";
        }
    }
}

	//添加购物车
 var st1=document.querySelector(".st1");
 var scart=$("scart");
 st1.onclick=function(){
	 alert("成功加入购物车");
	 scart.innerHTML=parseInt(scart.innerHTML)+parseInt(quantity.value);
	 }
 