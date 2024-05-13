document.addEventListener("DOMContentLoaded", function () {
    function timeoutFunction(img, newSrc){
        let transition;
        switch(img){
            case jurassicImage:
                transition = jurassicTransition;
                break;
        }
        transition.style.opacity = 1;
        setTimeout(() => {
            img.setAttribute("src", newSrc);
            transition.style.opacity = 0;
        }, 150);
    }

    let jurassicLeft = document.getElementById("jurassicLeft");
    let jurassicRight = document.getElementById("jurassicRight");
    let jurassicImage = document.getElementById("jurassicImage") ;
    let jurassicTransition = document.getElementById("jurassicTransition");
    jurassicLeft.addEventListener("click", function(){
        switch (jurassicImage.getAttribute("src")){
            case "images/jurassic-two.png":
                jurassicLeft.style.backgroundColor = "#437aa1";
                timeoutFunction(jurassicImage, "images/jurassic-one.png");
                break;
            case "images/jurassic-three.png":
                timeoutFunction(jurassicImage, "images/jurassic-two.png");
                break;
            case "images/jurassic-four.png":
                timeoutFunction(jurassicImage, "images/jurassic-three.png");
                break;
            case "images/jurassic-five.png":
                timeoutFunction(jurassicImage, "images/jurassic-four.png");
                break;
            case "images/jurassic-six.png":
                timeoutFunction(jurassicImage, "images/jurassic-five.png");
                break;
            case "images/jurassic-seven.png":
                jurassicRight.style.backgroundColor = "#5091BF";
                timeoutFunction(jurassicImage, "images/jurassic-six.png");
                break;
        }
    });
    jurassicRight.addEventListener("click", function(){
        switch (jurassicImage.getAttribute("src")){
            case "images/jurassic-one.png":
                jurassicLeft.style.backgroundColor = "#5091BF";
                timeoutFunction(jurassicImage, "images/jurassic-two.png");
                break;
            case "images/jurassic-two.png":
                timeoutFunction(jurassicImage, "images/jurassic-three.png");
                break;
            case "images/jurassic-three.png":
                timeoutFunction(jurassicImage, "images/jurassic-four.png");
                break;
            case "images/jurassic-four.png":
                timeoutFunction(jurassicImage, "images/jurassic-five.png");
                break;
            case "images/jurassic-five.png":
                timeoutFunction(jurassicImage, "images/jurassic-six.png");
                break;
            case "images/jurassic-six.png":
                jurassicRight.style.backgroundColor = "#437aa1";
                timeoutFunction(jurassicImage, "images/jurassic-seven.png");
                break;
        }
    });
});