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


    var logolis=document.querySelectorAll(".logoli");
    var logop=document.querySelector(".logop");
    var vam=document.querySelector(".vam");
    var vcd=document.querySelector(".vam.checked");
    var vc=document.querySelector(".vam.c");
    var fri=document.querySelector(".fwc_right i");
    var del=document.querySelectorAll(".del");
    var fwc_right=document.querySelector(".fwc_right");
    var lgi3=document.querySelector(".lgi3");
    var inp=document.querySelector(".p-stock-text");
    var jia=document.querySelector(".jia");
    var jian=document.querySelector(".jian");
    var xiaoji=document.querySelectorAll(".xiaoji em");
    var xj=document.querySelectorAll(".xj em");
    var ais=document.querySelectorAll(".ai");
    var jglis=document.querySelectorAll(".jgli");
    var jjguls=document.querySelectorAll(".jjgul");
    var deles=document.querySelectorAll(".dele");
    var pems=document.querySelectorAll(".pem em");
    var sems=document.querySelectorAll(".sem em");
    var inpi=document.querySelector(".inpi");
    var jsx=document.querySelector(".js");
    var hem=document.querySelector(".hem");

    //更多精彩
    $("more").onmouseover =$("gdjc").onmouseover = function () {
        gdjc.style.display = "block";
    }
    $("more").onmouseout = $("gdjc").onmouseout = function () {
        gdjc.style.display = "none";
    }

    //全选
    var flag=true;
    vam.onclick= vcd.onclick=vc.onclick=function () {
        if(flag){
            vam.className="vam checked";
            vcd.className="vam checked";
            vc.className="vam checked";
        }else{
            vam.className="vam";
            vcd.className="vam";
            vc.className="vam";
        }
        flag=!flag;
    }
    /*vcd.onclick=function () {
        if(flag) {
            vcd.className="vam checked";
        }else{
            vcd.className="vam";
        }
        flag=!flag;
    }*/

    //返回顶部
    $("xg").onmouseover=function(){
        fhdb.style.display="block";
    }
    $("fhdb").onclick= function () {
        fhdb.style.display="none";
    }

    //客服中心
    lgi3.onmouseover= function () {
        for(let i=0;i<logolis.length;i++){
            logolis[i].style.display="block";
            logop.style.display="block";
            logolis[i].onmouseover= function () {
                clearTimeout(timer1);
                logolis[i].style.display="block";
            }
            logolis[i].onmouseout=lgi3.onmouseout= function () {
                timer1=setTimeout(function () {
                    for(let i=0;i<logolis.length;i++){
                        logolis[i].style.display="none";
                        logop.style.display="none";
                    }
                },100);
            }
        }

    }

    // 延保
    fwc_right.onmouseover= function () {
        $("yb").style.display="block";
        fwc_right.style.background="#fff";
        fri.style.background="url('imgs/icon50.06df7e9.png') no-repeat -5px -26px";

    }
    fwc_right.onmouseout= function () {
        $("yb").style.display="none";
        fwc_right.style.background="";
        fri.style.background="url('imgs/icon50.06df7e9.png') no-repeat -5px -7px";
    }

    //删除
    for(let i=0;i<del.length;i++){
        del[i].onclick= function () {
            var flag=confirm("您确认要删除此商品吗？");
            if(flag){
                $("gwc").style.display=ljjs.style.display=$("jg").style.display="none";
                $("ljjs_gwc").style.display=$("rxtj").style.display="block";
            }
        }
    }

    //加法
    jia.onclick= function () {
        inp.value++;
        fun();
    }
    //减法
    jian.onclick= function () {
        inp.value--;
        if(inp.value<=1){
            inp.value=1;
        }
        fun();
    }
    function fun(){
        for(let i=0;i<2;i++){
            inpi.innerHTML=inp.value;
            xiaoji[i].innerHTML=inp.value*2599;
        }
    }

//获得div据上边框的距离，然后保存起来，因为这个距离会改变
    var realTop=jsx.getBoundingClientRect().top;
    window.onscroll = function(){
        //获得滚动条至顶部的距离
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if(t<realTop){
            $("ljjs").style.position="fixed";
            $("ljjs").style.bottom="0px";
            $("ljjs").style.background="#fff";

        }else{
            $("ljjs").style.position="";
            $("ljjs").style.float="left";
            $("ljjs").style.background="#f5f5f5";
        }
    }

    //加购

    var num=0;
    for(let i=0;i<ais.length;i++){
        ais[i].onclick= function () {
            jglis[i].style.display="none";
            $("jjg").style.display="block";
            jjguls[i].style.display="block";
            hem.innerHTML=parseInt(hem.innerHTML)+(parseInt(sems[i].innerHTML)-parseInt(pems[i].innerHTML));
            xiaoji[1].innerHTML=parseInt(xiaoji[1].innerHTML)+parseInt(xj[i].innerHTML);
            num++;
            if(num==7){
                $("jg").style.display="none";
            }
        }

    }
    //删除
    var n=0;
    for(let i=0;i<deles.length;i++){
        deles[i].onclick= function () {
            var flag=confirm("您确认要删除此商品吗？");
            if(flag){
                jjguls[i].style.display="none";
                jglis[i].style.display="block";
                $("jg").style.display="block";
                hem.innerHTML=parseInt(hem.innerHTML)-(parseInt(sems[i].innerHTML)-parseInt(pems[i].innerHTML));
                xiaoji[1].innerHTML=parseInt(xiaoji[1].innerHTML)-parseInt(xj[i].innerHTML);
                n++;
                if(n==7){
                    $("jjg").style.display="none";
                }
            }
        }
    }
}

var prev=document.querySelector(".c_C_b_prev");
var next=document.querySelector(".c_C_b_next");
var m=0;
var n=1;
next.onclick=prev.onclick=function(){
    var timer=window.setInterval(function(){
        m++;
        document.querySelector(".r_ul").style.left="-"+m+"%";
        //滚动了整个屏幕之后，清除定时器，不要动了
        if(m==(100*n)){
            clearInterval(timer);
            //目的：可以继续向左移动
            n++;
            //a++;
            //意味着已经点了2次
            if(n==3){
                //重新将我们的div给还原成网页刚进来的样子
                n=1;
                m=0;
                document.querySelector(".r_ul").style.left="0px";
            }
        }
    },10);
}

