const randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

function handleClick(event) {
    event.preventDefault()
    
    constinputNumber = document.querySelector("#inputNumber")
    

    if(Number(inputNumber.value) === randomNumber){
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");

        document
        .querySelector(".screen2 h2")
        .innerText = `Voce acretou em ${xAttemps} tentativas`;
    }

    xAttemps++
};


