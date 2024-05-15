document.addEventListener("DOMContentLoaded", function(){
    // menu.js code
    let menuButton = document.getElementById("menuButton");
    let dropDown = document.querySelector(".site-nav");
    menuButton.addEventListener("click", function(){
        if(menuButton.getAttribute("src") == "images/menu.svg"){
            dropDown.style.width = "100vw";
            menuButton.setAttribute("src", "images/close.svg");
            for(anchor of document.querySelectorAll(".site-nav a")){
                anchor.style.opacity = 1;
            }
            document.body.style.overflow = "hidden";
        }
        else{
            dropDown.style.width = "0";
            menuButton.setAttribute("src", "images/menu.svg");
            for(anchor of document.querySelectorAll(".site-nav a")){
                anchor.style.opacity = 0;
            }
            document.body.style.overflow = "";
        }
    });
    // heading animation
    let heading = document.getElementById("homeHeading");
    headingAnimation();
    // setInterval(headingAnimation, 4000);
    function headingAnimation(){
        heading.style.opacity = 0;
        // wait for heading to fade before switching title with setTimeout
        setTimeout(() => {
            switch(heading.innerText){
                case "Title":
                    heading.innerText = "High School Student";
                    break;
                case "High School Student":
                    heading.innerText = "Developer";
                    break;
                case "Developer":
                    heading.innerText = "Your Future Employee";
                    break;
                case "Your Future Employee":
                    heading.innerText = "High School Student";
                    break;
            }
            heading.style.opacity = 1;
        }, 500);
        setTimeout(() => {
            headingAnimation();
        }, 4500);
    }
})