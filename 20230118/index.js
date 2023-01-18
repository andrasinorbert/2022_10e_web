console.log("szevasz");

function kiir(x){
    console.log(x);
}

kiir("szia");
kiir(5);

function szamol(x){
    let str=""
    for(let i=0; i<x; ++i){
        str+=i;
    }
    return str;
}

document.getElementById("eztkeresem").innerHTML+="Cica";

function $(id){
    return document.getElementById(id);
}
$("eztkeresem").innerHTML+="!";


function click(){
    $("output").innerHTML=$("input").value;
}
