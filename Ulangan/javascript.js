alert("Javascript");


btn.onclick= function(){
    const suhu = document.querySelector("#suhu");
    const konversi = document.querySelector("#hasil");
    let hasil=(9/5*suhu.value)+32;

    konversi.innerHTML=hasil;
}

btn.onclick=function(){
    const meter= document.querySelector("#meter");
    const hasil= document.querySelector("#hasil");

    hasil.innerHTML=meter.value/1000;
}

btn.onclick=function () {
    const meter= document.querySelector("#meter");
    const hasil=document.querySelector("#hasil");

    hasil.innerHTML=meter.value*meter.value*meter.value;
}

btn.onclick=function () {
    document.querySelector("h1").style.backgroundColor="red";
}

btn.onclick= function(){
    document.querySelector("h2").style.fontSize="200px";
}

btn.onclick= function(){
    const div=document.querySelector("div");
    const para=document.createElement("p");

    para.textContent="belajar javascript";
    div.appendChild(para);
}

btn.onclick=function(){
    const div=document.querySelector("div");
    const h=document.createElement("h1");

    h.textContent="Belajar Javaskrip";
    div.appendChild(h);

}

