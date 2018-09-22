/**
 * Created by lenovo on 2018/6/21.
 */
function $(id){
    return document.getElementById(id);
}

//window.onload= function () {
    function getStyle(o, key) {
        if (o.currentStyle) {
            return o.currentStyle[key];
        } else {
            return getComputedStyle(o, false)[key];
        }
    }

    var more = $("more");
    var gdjc = $("gdjc");
    var logolis=document.querySelectorAll(".logoli");
    var logop=document.querySelector(".logop");
    var lgi3=document.querySelector(".lgi3");
    var vam=document.querySelector(".vam");
    var after=document.querySelector(".after");
    var before=document.querySelector(".before");
    var dza=document.querySelector(".operate a");
    var dz=document.querySelector(".dz");
    var jzp=document.querySelector(".jz_top p i");
    var cclis=document.querySelectorAll(".ccli");
    var ccas=document.querySelectorAll(".cca");
    var ccl_a=document.querySelector(".ccl_a");
    var fli=document.querySelector(".fli");
    var cC_r_bottom=document.querySelector(".cC_r_bottom");
    var cculis=document.querySelectorAll(".cculi");
    var cC_r_centers=document.querySelectorAll(".cC_r_center ul li");
    var taspans=document.querySelectorAll(".taspan");
    var cC_right=document.querySelector(".cC_right");
    var shgl=document.querySelector(".shgl");
    var add=document.querySelector(".add");
    var form=document.querySelector(".form");
    var qk=document.querySelector(".qk");
    var qrsh=document.querySelector(".qrsh");
    var liajf=document.querySelectorAll(".liajf");
    var inps=document.querySelectorAll(".inp");
    var timer1;

    //更多精彩
    more.onmouseover = gdjc.onmouseover =function () {
        gdjc.style.display = "block";
    }
    more.onmouseout = gdjc.onmouseout = function () {
        gdjc.style.display = "none";
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
                ru();
            }
        }

    }
    function ru(){
        timer1=setTimeout(function () {
            for(let i=0;i<logolis.length;i++){
                logolis[i].style.display="none";
                logop.style.display="none";
            }
        },100);

    }

    //确认收货
    qrsh.onclick= function () {
        alert("订单完成！");
        $("jz").style.display="none";
        cC_r_bottom.style.display="block";
    }
    //选中
    var flag=true;
    vam.onclick= function () {
        if(flag){
            vam.style.background="url('imgs/icon-header.2e284b2.png') no-repeat 0px -129px" ;
        }else{
            vam.style.background="" ;
        }
        flag=!flag;
    }

    //六个月
    before.onmouseover= function () {
        after.style.borderBottom="none";
        before.style.borderBottom="1px solid #444";
        $("jz").style.display="none";
        cC_r_bottom.style.display="block";
    }
    after.onmouseover= function () {
        before.style.borderBottom="none";
        after.style.borderBottom="1px solid #444";
        $("jz").style.display="block";
        cC_r_bottom.style.display="none";
    }

    //删除
    dza.onclick= function () {
        dz.style.display="none";
    }

    //收货管理
    shgl.onclick= function () {
        cC_right.style.display=$("jf").style.display="none";
        $("shdz").style.display="block";
        shgl.style.color="#CA151E";
    }
//}

    var data=new Date();
    jzp.innerHTML=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds();//当前时间
    /*
    for(let i=0;i<11;i++){
        var num=Math.floor(Math.random()*10)+1;
        str+=num;
    }
    jzspan.innerHTML=str;*/


    //其他点击
    function show(id){
        cC_right.style.display="block";
        $("jf").style.display=shgl.style.display="none";
        for(let i=0;i<cclis.length;i++){
            cclis[i].style.color=ccl_a.style.color="#3a3a3a";
            fli.style.color="#666";
            fli.style.background="#F2F2F2";
            if(i==(id-1)){
                cclis[i].style.color="#CA141D";
                cC_r_bottom.style.display="block";
                $("jz").style.display="none";
            }
        }
    }

    //积分
    function showjf(id){
        for(let i=0;i<liajf.length;i++){
            liajf[i].style.color="";
            cC_right.style.display=shgl.style.display="none";
            if(i==(id-1)){
                liajf[i].style.color="#a80000";
                $("jf").style.display="block";
            }
        }
    }

    function showli(num){
        for (let i=0;i<cC_r_centers.length;i++){
            cC_r_centers[i].style.color="";
            cC_r_centers[i].style.background="";
            if(i==(num-1)){
                cC_r_centers[i].style.color="#fff";
                cC_r_centers[i].style.background="#2d2d2d";
            }


        }
    }

    //
    for(let i=0;i<cculis.length;i++){
        cculis[i].onmouseover= function () {
            cculis[i].style.background="#2D2D2D";
            cC_r_bottom.style.display="block";
            $("jz").style.display="none";
        }
    }
    for(let j=0;j<ccas.length;j++){
        ccas[j].onmouseover= function () {
            ccas[j].style.color="#2D2D2D";
            cC_r_bottom.style.display="none";
            $("jz").style.display="block";
        }
    }






    //添加
    add.onclick= function () {
        var ob=document.createElement("table");
        ob.border=ob.cellPadding=ob.cellSpacing="0";
        ob.style.width="935px";
        ob.style.height="50px";
        ob.style.margin="0 3px";
        ob.insertRow(0);
        //input改变

        var x=0;
        for(let i=0;i<5;i++){
            ob.rows[0].insertCell(i);

            if(i<4){
                ob.rows[0].cells[i].appendChild(
                    document.createTextNode(inps[i].value)
                );

            }
            ob.rows[0].cells[i].style.textAlign="center";
            x++;
        }
        ob.rows[0].cells[4].appendChild(
            document.createTextNode("删除")
        );
        ob.rows[0].cells[0].style.width="90px";
        ob.rows[0].cells[1].style.width="110px";
        ob.rows[0].cells[2].style.width="215px";
        ob.rows[0].cells[3].style.width="97px";
        ob.rows[0].cells[4].style.width="140px";
        ob.rows[0].cells[4].style.color="#CA151E";
        ob.rows[0].cells[4].style.cursor="pointer";
        ob.rows[0].cells[4].onclick= function () {
            ob.style.display="none";
        }
        if(x==5){
            alert("添加成功！");
            clear();
            form.insertBefore(ob,dz);
        }


    }
    //清空
    qk.onclick= function () {
        clear();
    }
    function clear(){
        for(let i=0;i<inps.length;i++){
            inps[i].value="";
            taspans[i].innerHTML="";
        }
    }
//修改界面的正则表达式检测


//用户名
function checkuser(){
    var inputuser=document.getElementById("username");
    var spanuser=document.getElementById("userId");
    var usercontent=inputuser.value;
    var reguser=/^[\u0391-\uFFE5]+$/i;
    if(reguser.test(usercontent)){
        spanuser.innerHTML = "正确".fontcolor("green");
        return true;
    }else{
        spanuser.innerHTML = "必须填入中文".fontcolor("red");
        return false;
    }
}

//电话
function checkphone1(){
    var inputphone=document.getElementById("Phone1");
    var spanphone=document.getElementById("phoneId1");
    var phonecontent=inputphone.value;
    var regphone=/^(0?[1-9]{2,3}-?)?[1-9]\d{6,7}(-\d{1,4})?$/;
    if(regphone.test(phonecontent) && phonecontent.length=="11"){
        spanphone.innerHTML = "正确".fontcolor("green");
        return true;
    }else{
        spanphone.innerHTML = "格式不对".fontcolor("red");
        return false;
    }
}

//邮编
function checkyoubian(){
    var inputyb=document.getElementById("youbian");
    var spanyb=document.getElementById("youbianId1");
    var ybcontent=inputyb.value;
    var regyb=/\d/;
    if(regyb.test(ybcontent) && ybcontent.length=="6"){
        spanyb.innerHTML = "正确".fontcolor("green");
        return true;
    }else{
        spanyb.innerHTML = "格式不对".fontcolor("red");
        return false;
    }
}

//地址
function checkname1(){
    //姓名
    var inputname=document.getElementById("Name1");
    var spanname=document.getElementById("nameId1");
    var namecontent=inputname.value;
    var regname=/[\u4e00-\u9fa5]/;
    if(regname.test(namecontent)){
        spanname.innerHTML = "正确".fontcolor("green");
        return true;
    }else{
        spanname.innerHTML = "格式不对".fontcolor("red");
        return false;
    }
}