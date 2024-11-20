const convertButton = document.querySelector(".convert-button") //Somente irei identifcar o elemento em que quero criar a funçao//

function convertValues () {

const inputConversorValues = document.querySelector(".input-conversor").value

const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real//

const currencyValueConverted = document.querySelector(".currency-value") //valor convertido//

const dolarToday = 5.7 //variavel onde criei o valor do "DOLAR" para ser dividido pelo valor que digitar no "INPUT"//

const convertedValues = inputConversorValues / dolarToday //aqui dividimos, para que quando for digitado no "INPUT"o numero ele aparecer o resultado como "DOLAR"//

currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
    style : "currency",
    currency : "BRL"
} ) .format (inputConversorValues) 

currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
    style : "currency",
    currency : "USD"
}).format (convertedValues)

console.log (convertedValues) 
}

convertButton.addEventListener("click", convertValues) // aqui eu crio um evente ex:click, e com isso crio uma funçao de quando eu criar no botão ele chamar essa funçao//