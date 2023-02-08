function create_td(adat){
    let start_tag="<td>";
    let end_tag="</td>";
    let tartalom=adat;
    return start_tag+tartalom+end_tag;
}

function create_body(adatok){
    let start_tag="<body>";
    let end_tag="</body>";
    let tartalom="";
    for(let i =0; i<adatok.length;i++){
        tartalom+=create_tr(adatok[i]);
    }
    return start_tag+tartalom+end_tag;
}


function create_th(fejlec){
    let start_tag="<th>";
    let end_tag="</th>";
    let tartalom=fejlec;
    return start_tag+tartalom+end_tag;
}

function create_tr(adat_tomb,td_vagy_th){
    let start_tag="<tr>";
    let end_tag="</tr>";
    let tartalom="";
    for(let i = 0; i<adat_tomb.length;i++){
        if(td_vagy_th=="th"){
            tartalom+=create_th(adat_tomb[i]);
        }else{
            tartalom+=create_td(adat_tomb[i]);
        }
    }
    return start_tag+tartalom+end_tag;
}

function create_thead(fejlec_tomb){
    let start_tag="<thead>";
    let end_tag="</thead>";
    let tartalom=create_tr(fejlec_tomb, "th");
    return start_tag+tartalom+end_tag;
}

function create_caption(cap){
    let start_tag="<caption>";
    let end_tag="</caption>";
    let tartalom=cap;
    return start_tag+tartalom+end_tag;
}

function createTable(cap, fejlec_tomb, adatok){
    let start_tag="<table>";
    let end_tag="</table>";
    let tartalom=
        create_caption(cap)
        +create_thead(fejlec_tomb)
        +create_body(adatok);
    return start_tag+tartalom+end_tag;
}