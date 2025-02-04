let generate = document.querySelector("#gen");
let label1 = document.querySelector("#quote");
let label2 = document.querySelector("#quot");

generate.addEventListener('click', async function(){
       const response = await fetch("https://go-quote.azurewebsites.net/random-quote?format=json");
       const data = await response.json();
       if(response.ok){
        label1.textContent = '"' + data.text + '"' ;
        label2.textContent = data.author;
       }
        else{
            label1.textContent = "Error";
        }
    })