//MENU

var MENU = "chiuso";
var menu = document.getElementById("menu")

function apriMenu(){
    if(MENU == "chiuso"){
        menu.style.display = "flex";
        MENU = "aperto";
    }

    else{
        menu.style.display = "none";
        MENU = "chiuso";
    }    
}
