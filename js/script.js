let zl_zl = document.querySelector(".js-zlzl");
zl_zl = 1;

let zl_eur = document.querySelector(".js-zleur");
zl_eur = 0.21;

let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");


let sumElement = document.querySelector(".js-sum");
let option1Element = document.querySelector(".js-option1");
let option2Element = document.querySelector(".js-option2");
let sumShowElement = document.querySelector(".js-sumShow");
let currencyFirstElement = document.querySelector(".js-currencyFirst");
let currencySecondElement = document.querySelector(".js-currencySecond");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let option1 = option1Element.value;
    let option2 = option2Element.value;
    let sum = sumElement.value;

    console.log("test pierwszy - ", option1, option2, sum);
 
 /**złoty:  */
 if (option1 === "zloty" && option2 === "zloty"){
    sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Polski złoty ";
            currencySecondElement.innerText = " Polskich złotych ";
            resultElement.innerText = sum;
 }
 else if (option1 === "zloty" && option2 === "euro"){
    let plneur = sum * 0.21;
            plneur.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Polski złoty ";
            currencySecondElement.innerText = " Euro ";
            resultElement.innerText = plneur;
 }
 else if (option1 === "zloty" && option2 === "dolar"){
    let plndol = sum * 0.19;
    plndol.toFixed(2);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Polski złoty ";
    currencySecondElement.innerText = " Dolarów ";
    resultElement.innerText = plndol;
 }

 else if (option1 === "zloty" && option2 === "jen"){
    let plnjen = sum * 30.17;
    plnjen.toFixed(3);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Polski złoty ";
    currencySecondElement.innerText = " Jenów ";
    resultElement.innerText = plnjen;
 }
 /**Euro :   */
 else if (option1 === "euro" && option2 === "zloty"){
    let eurpln = sum * 4.67;
    eurpln.toFixed(3);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Euro ";
    currencySecondElement.innerText = " Polski złoty ";
    resultElement.innerText = eurpln;
 }
 else if (option1 === "euro" && option2 === "euro"){
    currencyFirstElement.innerText = " Euro ";
    currencySecondElement.innerText = " Euro ";
    resultElement.innerText = sum;
 }
 else if (option1 === "euro" && option2 === "dolar"){
    eurdol = sum * 1.11;
    eurdol.toFixed(3);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Euro ";
    currencySecondElement.innerText = " Dolar ";
    resultElement.innerText = eurdol;
 }
 else if (option1 === "euro" && option2 === "jen"){
    let eurjen = sum * 144.83;
    eurjen.toFixed(3);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Euro ";
    currencySecondElement.innerText = " Jen ";
    resultElement.innerText = eurjen;
 }
/**Dolar:  */ 

else if (option1 === "dolar" && option2 === "zloty"){
    let dolpln = sum * 4.55;
    dolpln.toFixed(3);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Dolar ";
    currencySecondElement.innerText = " Polski złoty ";
    resultElement.innerText = dolpln;
 }
 else if (option1 === "dolar" && option2 === "euro"){
    let doleur = sum * 0.89;
    doleur.toFixed(3);
    sumShowElement.innerText = sum;
    currencyFirstElement.innerText = " Dolar ";
    currencySecondElement.innerText = " Euro ";
    resultElement.innerText = doleur;
 }
    
 



}
)

