/**
 * Created by lenovo on 2018/6/21.
 */
    function $(id){
        return document.getElementById(id);
    }

    var bclis= document.querySelectorAll(".bcli");
    var dimg= document.querySelectorAll(".dimg");
    var bts= document.querySelectorAll(".bt");
    var zx = document.getElementsByClassName("f_center")[0];
    var fright = $("fright");
    var hli1=document.querySelector(".hli1");
    var h_c_right=document.querySelector(".h_c_right");
    var hlis=document.getElementsByClassName("h_li");
    var topdiv=document.querySelector(".f_bottom");
    var topa=document.querySelector(".f_bottom a");
    var bCtext=document.querySelector(".bCtext");
    var bContent=document.querySelector(".bContent");
    var dxyw_img=document.querySelector(".dxyw_img img");
    var hspan=document.querySelector(".h_c_left span i");
    var hul=$("hul");
    var ccul=$("ccul");
    var sanheng=$("sanheng");
    var xiala1=$("xiala1");
    var xiala2=$("xiala2");
    var xiala3=$("xiala3");
    var xiala4=$("xiala4");
    var xiala5=$("xiala5");
    var c_cul=$("c_cul");
    var timer1;
    var timer2;
    var timer3;
    var timer4;
    var timer5;

    function getStyle(o, key) {
        if (o.currentStyle) {
            return o.currentStyle[key];
        } else {
            return getComputedStyle(o, false)[key];
        }
    }

    //三横
    sanheng.onmouseover= function () {
        xiala1.style.display="block";
        sanru();
        xiala1.onmouseover= function () {
            yiru();
            sanru();
        }
        xiala2.onmouseover=xiala3.onmouseover= function () {
            yiru();
            xiala3.style.display="block";
            sanru();
        }

    }
    sanheng.onmouseout= function () {
        xiala1.style.display="none";
        sanchu();
    }
    xiala1.onmouseout= function () {
        timer1=setTimeout(function () {
            xiala1.style.display="none";
        },120);
        xiala2.style.display="none";
        sanchu();
    }
    xiala2.onmouseout=xiala3.onmouseout= function () {
        xiaoshi();
        sanchu();
    }

    function xiaoshi(){
        xiala3.style.display="none";
        timer2=setTimeout(function () {
            xiala2.style.display="none";
        },120);
        timer3=setTimeout(function () {
            xiala1.style.display="none";
        },220);
    }
    function yiru(){
        xiala1.style.display="block";
        xiala2.style.display="block";
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    }
    function sanru(){
        hspan.style.transition="0.2s linear";
        hspan.style.transform="rotate(90deg)";
        hspan.style.marginLeft="20px";
    }
    function sanchu(){
        hspan.style.transition="0.2s linear";
        hspan.style.transform="";
        hspan.style.marginLeft="";
    }

    //头部li
    for(var i=0;i<hlis.length;i++){
        hlis[i].onmouseover= function () {
            xia4ru();
        }
        hlis[i].onmouseout= function () {
            xia4chu()
        }
    }
    xiala4.onmouseover=function(){
        xia4ru();
    }
    xiala4.onmouseout=function(){
        xia4chu();
    }
    function xia4ru(){
        xiala4.style.display = "block";
        clearTimeout(timer4);
    }
    function xia4chu(){
        timer4=setTimeout(function () {
            xiala4.style.display = "none";
        },100);
    }

    //头部语言
    hli1.onmouseover=function(){
        xiala5.style.display="block";
        xiala5.onmouseover=function(){
            xiala5.style.display="block";
        }
        xiala5.onmouseout=function(){
            xiala5.style.display="none";
        }
    }
    hli1.onmouseout=function(){
        xiala5.style.display="none";
    }

    // 咨询
    zx.onmouseover = function () {
        frru();
    }
    zx.onmouseout = function () {
        frchu();
    }
    fright.onmouseover = function () {
        frru();
    }
    fright.onmouseout = function () {
        frchu();
    }
    function frru(){
        fright.style.display = "block";
        clearTimeout(timer5);
    }
    function frchu(){
    timer5=setTimeout(function () {
        fright.style.display = "none";
    },100);
}


    // li 下划线
    function show(id){
        for (let i = 0; i <bclis.length; i++) {
            bclis[i].style.borderBottom = "none";
            if (i == (id - 1)) {
                bclis[i].style.borderBottom = "2px solid #E41F2B";
                //点击后固定在header
                ccul.style.left="35%";
                ccul.style.zIndex="4";

            }
        }

    }

    // 固定ul
    //获得div据上边框的距离，然后保存起来，因为这个距离会改变
    var realTop=ccul.getBoundingClientRect().top;
    window.onscroll = function(){
        //获得滚动条至顶部的距离
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        //当滚动条滚动的距离超过了div据上边框的距离，那么就说明div要被遮盖了
        if(t>=realTop){
            //这个时候就不要再往上移动，直接固定位置，据上为0
            ccul.style.position="fixed";
            ccul.style.top="10px";
            hul.style.display="none";
            h_c_right.style.display="none";
        }else{
            //否则，说明div据上还有距离，那么就取消固定布局，直接设大小
            ccul.style.position="position";
            ccul.style.top=(realTop-t)+"px";
            hul.style.display="block";
            h_c_right.style.display="block";
        }
    }

    //放大缩小图片
    var flag=true;
    for(let i=0;i<dimg.length;i++){
        dimg[i].onclick= function () {
            if(flag){
                dimg[i].style.width="1137px";
                dimg[i].style.height="500px";
                dimg[i].style.background="#666";
                dimg[i].style.position="fixed";
                dimg[i].style.top="120px";
                dimg[i].style.left="63px";
                dimg[i].style.cursor="w-resize";
            }else{
                dimg[i].style.width="";
                dimg[i].style.height="";
                dimg[i].style.background="";
                dimg[i].style.position="";
                dimg[i].style.top="";
                dimg[i].style.left="";
                dimg[i].style.cursor="";
            }
            flag=!flag;
        }
    }

    //返回顶部
    topa.onclick= function () {
        topdiv.style.display="none";
    }
