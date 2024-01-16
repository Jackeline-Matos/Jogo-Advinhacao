const screen1 =  document.querySelector(".screen1");
const screen2 =  document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 0; // variável de controle

//Eventos

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown',handleRestartTheGame);

//Funcao Callback
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao do comportamento do evento
    
    const inputNumber = document.querySelector("#inputNumber")
    if (!Number(inputNumber.value)) {
        return alert ("Digite um número de 1 a 10");

    } else if(Number(inputNumber.value) === randomNumber){
        //Funcao callback
       toggleScreen()

        document
            .querySelector(".screen2 h2")
            .innerText = `Voce acertou em ${xAttemps} tentativas`;

    } else if (inputNumber.value > 11 ||inputNumber.value < 0 ){
        return alert ("Digite um número de 1 a 10");
    }

    inputNumber.value = "";
    xAttemps++
};

//Funcao callback

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    xAttemps = 0;
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleRestartTheGame(e){
    if(e.key === 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}



