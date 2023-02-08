function $(id){
    return document.getElementById(id);
}

let caption="Ez a táblázat cime";
var fejlec_tomb=[
    "fejlec1", "fejlec2", "fejlec3"
];

var adatok=[
    ["adat11", "adat12", "adat13"],
    ["adat21", "adat22", "adat23"],
    ["adat31", "adat32", "adat33"],
    ["adat41", "adat42", "adat43"]
];

$("tablazat").innerHTML=
    createTable(
        caption,
        fejlec_tomb,
        adatok);

function my_click(input_id, output_id){
    let cap=$(input_id).value;
    $(output_id).innerHTML=
        createTable(
            cap,
            fejlec_tomb,
            adatok);
}