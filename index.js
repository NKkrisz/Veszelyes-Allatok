window.addEventListener("resize", function(uwu){
    menu = document.getElementsByClassName("menu")[0];
    if(window.innerWidth > 900){
        menu.style.visibility = "visible";
    }
    if(window.innerWidth <= 900){
        menu.style.visibility = "hidden";
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
    if (menu.style.visibility == "visible"){
        menu.style.visibility = "hidden";
    }else{
        menu.style.visibility = "visible";
    }
};
//haha javascript go brrr