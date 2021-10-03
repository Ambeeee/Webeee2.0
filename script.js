//MENU

var MENU = 0
var menu = document.getElementById("Tab")

function ApriMenu(){
    if(MENU == "0"){
        menu.style.display = "flex";
        MENU = MENU+1;
    }

    else{
        menu.style.display = "none";
        MENU = MENU-1;
    }    
}

