document.addEventListener("DOMContentLoaded", function () {
    function timeoutFunction(img, newSrc){
        let transition;
        switch(img){
            case jurassicImage:
                transition = jurassicTransition;
                break;
            case calculatorImage:
                transition = calculatorTransition;
                break;
            case battleshipImage:
                transition = battleshipTransition;
                break;
        }
        transition.style.opacity = 1;
        setTimeout(() => {
            img.setAttribute("src", newSrc);
            transition.style.opacity = 0;
        }, 150);
    }

    // jurassic carousel
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

    //calculator carousel
    let calculatorLeft = document.getElementById("calculatorLeft");
    let calculatorRight = document.getElementById("calculatorRight");
    let calculatorImage = document.getElementById("calculatorImage") ;
    let calculatorTransition = document.getElementById("calculatorTransition");
    calculatorLeft.addEventListener("click", function(){
        switch (calculatorImage.getAttribute("src")){
            case "images/calculator-two.png":
                calculatorLeft.style.backgroundColor = "#437aa1";
                timeoutFunction(calculatorImage, "images/calculator-one.png");
                break;
            case "images/calculator-three.png":
                calculatorRight.style.backgroundColor = "#5091BF";
                timeoutFunction(calculatorImage, "images/calculator-two.png");
                break;
        }
    });
    calculatorRight.addEventListener("click", function(){
        switch (calculatorImage.getAttribute("src")){
            case "images/calculator-one.png":
                calculatorLeft.style.backgroundColor = "#5091BF";
                timeoutFunction(calculatorImage, "images/calculator-two.png");
                break;
            case "images/calculator-two.png":
                calculatorRight.style.backgroundColor = "#437aa1";
                timeoutFunction(calculatorImage, "images/calculator-three.png");
                break;
        }
    });

    //battleship carousel
    let battleshipLeft = document.getElementById("battleshipLeft");
    let battleshipRight = document.getElementById("battleshipRight");
    let battleshipImage = document.getElementById("battleshipImage") ;
    let battleshipTransition = document.getElementById("battleshipTransition");
    battleshipLeft.addEventListener("click", function(){
        switch (battleshipImage.getAttribute("src")){
            case "images/battleship-two.png":
                battleshipLeft.style.backgroundColor = "#437aa1";
                timeoutFunction(battleshipImage, "images/battleship-one.png");
                break;
            case "images/battleship-three.png":
                battleshipRight.style.backgroundColor = "#5091BF";
                timeoutFunction(battleshipImage, "images/battleship-two.png");
                break;
        }
    });
    battleshipRight.addEventListener("click", function(){
        switch (battleshipImage.getAttribute("src")){
            case "images/battleship-one.png":
                battleshipLeft.style.backgroundColor = "#5091BF";
                timeoutFunction(battleshipImage, "images/battleship-two.png");
                break;
            case "images/battleship-two.png":
                battleshipRight.style.backgroundColor = "#437aa1";
                timeoutFunction(battleshipImage, "images/battleship-three.png");
                break;
        }
    });
});