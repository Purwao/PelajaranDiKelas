function coba(){
    alert("javascript");
}

// Arrow Function
const tes=()=>{
    alert("Belajra javaskrip");
}

function lingkaran(){
    const pi=3.14;
    let r=10;
    let luas= pi*r*r;
    // alert(luas);
    return luas;
}

const lingkaran2=()=>{
    const pi=3.14;
    let r=10;
    luas= pi*r*r;
//     alert(luas);
    return luas;    
}

function tampil(){
    console.log(lingkaran())
}

// btn.onclick=alert("wir");

btn.onclick= ()=>{
    let bulan=document.querySelector("#bln").value;
    let tanggal=document.querySelector("#tgl").value;
    const zodiak=document.querySelector("#h1");

    if(bulan==""&& tanggal==""){
        alert("tanggal atau bulan belum diisi");
    }
    else{
        if(bulan==1){
            if(tanggal>=1 && tanggal<=23){
                zodiak.innerHTML="aris";
            } 
            else if(tanggal>=24 && tanggal<=31){
                zodiak.innerHTML="aqua";
            }
        }
    }
}

btnhtml.onclick=()=>{
    const div=document.querySelector('div');
    let isi=document.createElement('h1');

    isi.textContent="javaskrip";

    div.appendChild(isi);

    
}

btncss.onclick=()=>{
    document.querySelector('div').style.backgroundColor='red';
}