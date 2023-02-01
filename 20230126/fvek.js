function $(id){
    return document.getElementById(id);
}

function caption_create(cap){
    let start_tag= "<caption>";
    let end_tag= "</caption>";
    let tartalom=cap;
    return start_tag+tartalom+end_tag;
}

function th_create(col_name){
    let start_tag= "<th>";
    let end_tag= "</th>";
    let tartalom=col_name;
    return start_tag+tartalom+end_tag;

}

function tr_create(col_num, col_names){
    let start_tag= "<tr>";
    let end_tag= "</tr>";
    let tartalom="";
    for(let i=0; i< col_num; ++i){
        tartalom+=th_create(col_names[i]);
    }
    return start_tag+tartalom+end_tag;
}

function thead_create(col_num, col_names){
    let start_tag= "<thead>";
    let end_tag= "</thead>";
    let tartalom=tr_create(col_num, col_names);
    return start_tag+tartalom+end_tag;
}

function tablazat_create(col_num, row_num, cap, col, data){
    let start_tag= "<table>";
    let end_tag= "</table>";



    let tartalom=caption_create(cap);
    tartalom+=thead_create(col_num, col);


    return start_tag+tartalom+end_tag;
}

/*
<table>
    <caption>Táblázat</caption>
    <thead>
        <tr>
            <th>oszlop1</th>
            <th>oszlop2</th>
            <th>oszlop3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>sor1oszlop1</td>
            <td>sor1oszlop2</td>
            <td>sor1oszlop3</td>
        </tr>
        <tr>
            <td>sor2oszlop1</td>
            <td>sor2oszlop2</td>
            <td>sor2oszlop3</td>
        </tr>
    </tbody>
</table>
*/

function tablazat_visible(id, col_num, row_num, cap, col, data){
    $(id).innerHTML=tablazat_create(col_num, row_num, cap, col, data);
}