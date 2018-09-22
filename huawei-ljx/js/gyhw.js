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

    var ck=document.querySelector(".ck");
    var jta=document.querySelector(".a1");

    var jti=document.querySelector(".a1>i");
    var qyi=document.querySelector(".select>i");
    var qy=document.querySelector(".select");
    var endli=document.querySelector(".endli");
    var weixin=document.querySelector(".weixin");
    var sq=document.querySelector(".sq");


    // 查看更多
    ck.onclick= function () {
        $("ckgd").style.display="block";
        $("gyhw").style.display="none";
        $("hwss").style.display="none";
    }
    //收起
    sq.onclick= function () {
        $("ckgd").style.display="none";
        $("gyhw").style.display="block";
        $("hwss").style.display="block";
    }

    //集团网站
    var flag=true;
    jta.onclick= function () {

        if(flag){
            $("qyyy").style.display="none";
            onoff=!onoff;
            qyi.style.background="url('imgs/hxia.png') no-repeat right" ;
            $("jtwz").style.display="block";
            jti.style.background="url('imgs/hshang.png')  no-repeat right ";
        }else{
            $("jtwz").style.display="none";
            jti.style.background="url('imgs/hxia.png') no-repeat right" ;
        }
        flag=!flag;
    }

    //语言区域
    var onoff=true;
    qy.onclick= function () {

        if(onoff){
            $("jtwz").style.display="none";
            flag=!flag;
            jti.style.background="url('imgs/hxia.png') no-repeat right" ;
            $("qyyy").style.display="block";
            qyi.style.background="url('imgs/hshang.png')  no-repeat right ";
        }else{
            $("qyyy").style.display="none";
            qyi.style.background="url('imgs/hxia.png') no-repeat right" ;
        }
        onoff=!onoff;
    }

    //微信
    weixin.onmouseover= function () {
        $("weixin").style.display="block";
    }
    weixin.onmouseout= function () {
        $("weixin").style.display="none";
    }

    //返回顶部
    $("hwnb").onmouseover= function () {
        $("fhdb").style.display="block";
    }
    $("fhdb").onclick= function () {
        $("fhdb").style.display="none";
    }
}

// 笔记本 解决方案
var nas=document.querySelectorAll(".na1");
var nav=document.querySelectorAll(".nav");
var timer1;
for(let i=0;i<nas.length;i++){
    nas[i].onmouseover= function () {
        ru();
    }
    nas[i].onmouseout= function () {
        chu();
    }
    nav[i].onmouseover= function () {
        ru();
    }
    nav[i].onmouseout= function () {
        chu();
    }
    function ru(){

        nav[i].style.display="block";
        clearTimeout(timer1);
    }
    function chu(){
        timer1=setTimeout(function () {
            nav[i].style.display="none";
        },100);
    }
}

