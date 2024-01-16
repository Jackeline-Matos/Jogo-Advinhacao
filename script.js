const screen1 =  document.querySelector(".screen1");
const screen2 =  document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1; // variável de controle


//Funcao Callback
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao do comportamento do evento
    
    const inputNumber = document.querySelector("#inputNumber")
    

    if(Number(inputNumber.value) === randomNumber){
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        document
            .querySelector(".screen2 h2")
            .innerText = `Voce acertou em ${xAttemps} tentativas`;
    }

    inputNumber.value = "";
    xAttemps++
};


//eventos

const btnTry = document.querySelector("#bntTry");
const btnReset = document.querySelector("#bntReset");

//Funcao Callback

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function name() {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    xAttemps = 1;
});



