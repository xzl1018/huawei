/**
 * Created by lenovo on 2018/6/21.
 */
function $(id){
    return document.getElementById(id);
}
window.onload= function () {
    var topdiv=document.querySelector(".f_bottom");
    var topa=document.querySelector(".f_bottom a");
    var cccontent=document.querySelector(".c_c_content");
    var hli1=document.querySelector(".hli1");
    var hspan=document.querySelector(".h_c_left span i");
    var hlis=document.getElementsByClassName("h_li");
    var zx = document.getElementsByClassName("f_center")[0];
    var fright = $("fright");
    var sanheng=$("sanheng");
    var xiala1=$("xiala1");
    var xiala2=$("xiala2");
    var xiala3=$("xiala3");
    var xiala4=$("xiala4");
    var xiala5=$("xiala5");
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
        hlis[i].onmouseover= xiala4.onmouseover=function () {
            xiala4.style.display = "block";
            clearTimeout(timer4);
        }
        hlis[i].onmouseout=xiala4.onmouseout= function () {
            timer4=setTimeout(function () {
                xiala4.style.display = "none";
            },100);
        }
    }


    //中英文
    hli1.onmouseover=xiala5.onmouseover=function(){
        xiala5.style.display="block";
    }
    hli1.onmouseout=xiala5.onmouseout=function(){
        xiala5.style.display="none";
    }

    //返回顶部
    topa.onclick= function () {
        topdiv.style.display="none";
    }
    cccontent.onmouseover= function () {
        topdiv.style.display="block";
    }

    // 咨询
    zx.onmouseover = fright.onmouseover =function () {
        frru();
    }
    zx.onmouseout =fright.onmouseout = function () {
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
}

//大图轮转
var bimgInterval=setInterval(function () {
    showbimg();
},3000);
var index=1;
function showbimg(id){
    if( Number(id)){
        index=id;
        clearInterval(bimgInterval);
    }else{
        index++;
        if(index==6){
            index=1;
        }
    }
    var ollis=document.querySelectorAll("#olli li");
    var bIspans=document.querySelectorAll("#bigImg span");
    ollis[index-1].style.background="#FF0000";

    for(let i=0;i<ollis.length;i++){
        $("bIa"+(i+1)).style.display=$("bIli"+(i+1)).style.display=$("bspan"+(i+1)).style.display=$("bIh"+(i+1)).style.display="none";
        ollis[i].style.background="#999";
        if(i==(index-1)){
            $("bIa"+(i+1)).style.display="block";
            var timeout=setTimeout(function () {
                $("bIli"+(i+1)).style.display="block";

            },500);
            var tout=setTimeout(function () {
                $("bspan"+(i+1)).style.display="block";
            },600);
            var ttout=setTimeout(function () {
                $("bIh"+(i+1)).style.display="block";
            },700);
            ollis[i].style.background="#FF0000";
        }
    }
}
function start(){
    bimgInterval=setInterval(function () {
        showbimg();
    },3000);
}

//新鲜动态li
var liInterval=setInterval(function () {
    showli();
},3000);
var k=1;
function showli(index){
    if( Number(index)){
        k=index;
        clearInterval(liInterval);
    }else{
        k++;
        if(k==4){
            k=1;
        }
    }
    var hengli=document.querySelectorAll("#heng li");
    hengli[k-1].style.background="#FF0000";
    for(let i=0;i<hengli.length;i++){
        $("cc_c_li"+(i+1)).style.display="none";
        hengli[i].style.background="#999";
        if(i==(k-1)){
            $("cc_c_li"+(i+1)).style.display="block";
            hengli[i].style.background="#FF0000";
        }
    }
}
function startli(){
    liInterval=setInterval(function () {
        showli();
    },3000);
}

//解决方案li
function showfa(num){
    var jj_lis=document.querySelectorAll(".jj_li");
    var jj_c_rights=document.querySelectorAll(".jj_c_right");
    for(let i=0;i<jj_lis.length;i++){
        $("jj_c_li"+(i+1)).style.display="none";
        jj_lis[i].style.width="";
        jj_lis[i].style.background="";
        jj_lis[i].style.marginLeft="";
        if(i==(num-1)){
            $("jj_c_li"+(i+1)).style.display="block";
            jj_lis[i].style.width="270px";
            jj_lis[i].style.background="#F5716B";
            jj_lis[i].style.marginLeft=" -10px";
        }
    }
}



