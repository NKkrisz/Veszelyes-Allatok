window.addEventListener("resize", function(uwu){
    menu = document.getElementsByClassName("menu")[0];
    if(window.innerWidth > 900){
        menu.style.margin = "0px";
    }
    if(window.innerWidth <= 900){
        menu.style.margin = "0px 0px 0px -250px";
    }
});

function switchTo(num){
    menuBtns = document.getElementsByClassName("menu-btn");
    pages = document.getElementsByClassName("content");
    
    for (let btn of menuBtns){
        btn.setAttribute("class", "menu-btn");
    }
    menuBtns[num].setAttribute("class", "menu-btn menu-selected");

    for (let page of pages){
        page.hidden = true;
    }
    pages[num].hidden = false;
};

function toggleMenu(){
    menu = document.getElementsByClassName("menu")[0];
    if (menu.style.margin == "0px"){
        menu.style.margin = "0px 0px 0px -250px";
    }else{
        menu.style.margin = "0px";
    }
};

function bsod(){
    image = document.getElementsByClassName("bsod")[0];
    image.hidden = false;
}