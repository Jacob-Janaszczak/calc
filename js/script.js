{


   const formElement = document.querySelector(".js-form");
   const resultElement = document.querySelector(".js-result");


   const sumElement = document.querySelector(".js-sum");
   const option1Element = document.querySelector(".js-option1");
   const option2Element = document.querySelector(".js-option2");
   const sumShowElement = document.querySelector(".js-sumShow");
   const currencyFirstElement = document.querySelector(".js-currencyFirst");
   const currencySecondElement = document.querySelector(".js-currencySecond");



   formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const option1 = option1Element.value;
      const option2 = option2Element.value;
      const sum = sumElement.value;

      console.log("test pierwszy - ", option1, option2, sum);

      const currencycalc = () => {
         /**złoty:  */
         if (option1 === "zloty" && option2 === "zloty") {
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Polski złoty ";
            currencySecondElement.innerText = " Polskich złotych ";
            resultElement.innerText = sum;
         }
         else if (option1 === "zloty" && option2 === "euro") {
            const plneur = sum * 0.21;
            plneur.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Polski złoty ";
            currencySecondElement.innerText = " Euro ";
            resultElement.innerText = plneur;
         }
         else if (option1 === "zloty" && option2 === "dolar") {
            const plndol = sum * 0.19;
            plndol.toFixed(2);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Polski złoty ";
            currencySecondElement.innerText = " Dolarów ";
            resultElement.innerText = plndol;
         }

         else if (option1 === "zloty" && option2 === "jen") {
            const plnjen = sum * 30.17;
            plnjen.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Polski złoty ";
            currencySecondElement.innerText = " Jenów ";
            resultElement.innerText = plnjen;
         }
         /**Euro :   */
         else if (option1 === "euro" && option2 === "zloty") {
            const eurpln = sum * 4.67;
            eurpln.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Euro ";
            currencySecondElement.innerText = " Polski złoty ";
            resultElement.innerText = eurpln;
         }
         else if (option1 === "euro" && option2 === "euro") {
            currencyFirstElement.innerText = " Euro ";
            currencySecondElement.innerText = " Euro ";
            resultElement.innerText = sum;
         }
         else if (option1 === "euro" && option2 === "dolar") {
            eurdol = sum * 1.11;
            eurdol.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Euro ";
            currencySecondElement.innerText = " Dolar ";
            resultElement.innerText = eurdol;
         }
         else if (option1 === "euro" && option2 === "jen") {
            const eurjen = sum * 144.83;
            eurjen.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Euro ";
            currencySecondElement.innerText = " Jen ";
            resultElement.innerText = eurjen;
         }
         /**Dolar:  */

         else if (option1 === "dolar" && option2 === "zloty") {
            const dolpln = sum * 4.55;
            dolpln.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Dolar ";
            currencySecondElement.innerText = " Polski złoty ";
            resultElement.innerText = dolpln;
         }
         else if (option1 === "dolar" && option2 === "euro") {
            const doleur = sum * 0.89;
            doleur.toFixed(3);
            sumShowElement.innerText = sum;
            currencyFirstElement.innerText = " Dolar ";
            currencySecondElement.innerText = " Euro ";
            resultElement.innerText = doleur;
         }

      }

      currencycalc();


   }
   )


}