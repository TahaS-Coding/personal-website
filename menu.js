document.addEventListener("DOMContentLoaded", function(){
    let menuButton = document.getElementById("menuButton");
    let dropDown = document.querySelector(".site-nav");
    menuButton.addEventListener("click", function(){
        if(menuButton.getAttribute("src") == "images/menu.svg"){
            dropDown.style.width = "100vw";
            menuButton.setAttribute("src", "images/close.svg");
            for(anchor of document.querySelectorAll(".site-nav a")){
                anchor.style.opacity = 1;
            }
        }
        else{
            dropDown.style.width = "0";
            menuButton.setAttribute("src", "images/menu.svg");
            for(anchor of document.querySelectorAll(".site-nav a")){
                anchor.style.opacity = 0;
            }
        }
    })
})