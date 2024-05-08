document.addEventListener("DOMContentLoaded", function(){

    let heading = document.getElementById("homeHeading");
    setInterval(headingAnimation, 4000);
    function headingAnimation(){
        switch(heading.innerText){
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
    }
})