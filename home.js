document.addEventListener("DOMContentLoaded", function(){

    let heading = document.getElementById("homeHeading");
    headingAnimation();
    setInterval(headingAnimation, 4000);
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
    }
})