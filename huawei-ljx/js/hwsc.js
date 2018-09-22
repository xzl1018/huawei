/**
 * Created by lenovo on 2018/6/21.
 */
function $(id){
    return document.getElementById(id);
}
window.onload= function () {
    function getStyle(o, key) {
        if (o.currentStyle) {
            return o.currentStyle[key];
        } else {
            return getComputedStyle(o, false)[key];
        }
    }
    var more=$("more");
    var gdjc=$("gdjc");
    var gwc=$("gwc");
    var fhdb=$("fhdb");
    var sy=$("sy");
    var sya=document.querySelector(".sya");
    var bIlis=document.querySelectorAll(".bIli");
    var gwcli=document.querySelector(".gwcli");
    var morei=document.querySelector("#more i");
    var c_C_script=document.querySelector(".c_C_script");
    var logolis=document.querySelectorAll(".logoli");
    var logop=document.querySelector(".logop");
    var lgi3=document.querySelector(".lgi3");


    sya.onclick= function () {
        sy.style.display="none";
    }

    //更多精彩
    more.onmouseover= function () {
        gdjc.style.display="block";
        /*more.style.border="1px solid #ccc";
         more.style.borderBottom="1px solid #ccc";*/
        morei.style.background="url('imgs/icon1.png') no-repeat 0px -70px";
    }
    more.onmouseout= function () {
        gdjc.style.display="none";
        morei.style.background="url('imgs/icon1.png') no-repeat 0px -76px";
    }
    gdjc.onmouseover= function () {
        gdjc.style.display="block";
    }
    gdjc.onmouseout= function () {
        gdjc.style.display="none";
    }

    //购物车
    gwcli.onmouseover=function(){
        gwc.style.display="block";
    }
    gwcli.onmouseout=function(){
        gwc.style.display="none";
    }
    gwc.onmouseover=function(){
        gwc.style.display="block";
    }
    gwc.onmouseout=function(){
        gwc.style.display="none";
    }

    //大图的li
    var bIlis=document.querySelectorAll(".bIli");
    for(let i=0;i<6;i++){
        bIlis[i].onmouseover= function () {
            $("bI_ul_li"+(i+1)).style.display="block";
        }
        bIlis[i].onmouseout= function () {
            $("bI_ul_li"+(i+1)).style.display="none";
        }
        $("bI_ul_li"+(i+1)).onmouseover= function () {
            $("bI_ul_li"+(i+1)).style.display="block";
        }
        $("bI_ul_li"+(i+1)).onmouseout= function () {
            $("bI_ul_li"+(i+1)).style.display="none";
        }
    }

    //滚动的li
    var liInterval=setInterval(function () {
        showli();
    },3000);
    var i=1;
    function showli(){
        $("cctrlis"+i).style.display="none";
        i++;
        if(i>5){
            i=1;
        }
        $("cctrlis"+i).style.display="block";
    }

    //返回顶部
    c_C_script.onmouseover= function () {
        fhdb.style.display="block";
    }
    fhdb.onclick= function () {
        fhdb.style.display="none";
    }

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


}

    //大图轮转
    var myInterval=setInterval(function () {
        autoPlay();
    },3000);
    var index=1;
    function autoPlay(id){
        if( Number(id)){
            index=id;
            clearInterval(myInterval);
        }else{
            index++;
            if(index==9){
                index=1;
            }
        }
        var headDian=document.querySelectorAll("#head_dian li");
        for(let j=0;j<headDian.length;j++){
            $("head"+(j+1)).style.display="none";
            headDian[j].style.backgroundPosition="-38px center";
            if(j==(index-1)){
                $("head"+(j+1)).style.display="block";
                headDian[j].style.backgroundPosition="-24px center";
            }
        }
    }
    function start(){
        myInterval=setInterval(function () {
            autoPlay();
        },3000);
    }

    //中间图片轮转
    var imgInterval=setInterval(function () {
        showimg();
    },3000);
    var k=1;
    function showimg(num){
        if( Number(num)){
            k=num;
            clearInterval(imgInterval);
        }else{
            k++;
            if(k==6){
                k=1;
            }
        }
        var imgDian=document.querySelectorAll("#img_dian li");
        for(let i=0;i<imgDian.length;i++){
            $("imgs"+(i+1)).style.display="none";
            imgDian[i].style.backgroundPosition="-38px center";
            if(i==(k-1)){
                $("imgs"+(i+1)).style.display="block";
                imgDian[i].style.backgroundPosition="-24px center";
            }
        }
    }
    function startimg(){
        imgInterval=setInterval(function () {
            showimg();
        },3000);
    }

    //智能家居点击
    var prev=document.querySelector(".c_C_b_prev");
    var next=document.querySelector(".c_C_b_next");

    var m=0;
    var n=1;
    var a=1;
    var b=1;
    var g=0;
    var h=1;

    next.onclick=prev.onclick=function(){
        var timer=window.setInterval(function(){
            m++;
            document.querySelector(".c_cul").style.left="-"+m+"%";
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
                     document.querySelector(".c_cul").style.left="0px";
                }

            }
        },10);
    }
//??
//    prev.onclick=function(){
//        var timer1=window.setInterval(function(){
//            m++;
//            document.querySelector(".c_cul").style.left="-"+m+"%";
//            //滚动了整个屏幕之后，清除定时器，不要动了
//            if(m==(100*n)){
//                clearInterval(timer1);
//                //目的：可以继续向左移动
//                n++;
//                a++;
//                //意味着已经点了2次
//                if(n==4){
//                    //重新将我们的div给还原成网页刚进来的样子
//                    n=1;
//                    m=0;
//                    document.querySelector(".c_cul").style.left="0px";
//                }
//
//            }
//        },10);
//    }

