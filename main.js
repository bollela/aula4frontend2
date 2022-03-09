var carrinhos = document.querySelector("#carrinho");
var B = document.createElement("ul");
B.classList.add("lista");
carrinhos.appendChild(B);
var primeiroItem = document.createElement("li");
var segundoItem = document.createElement("li");
var terceiroItem = document.createElement("li");
var quartoItem = document.createElement("li");
var quintoItem = document.createElement("li");

primeiroItem.classList.add("lista__item");
segundoItem.classList.add("lista__item");
terceiroItem.classList.add("lista__item");
quartoItem.classList.add("lista__item");
quintoItem.classList.add("lista__item");

var carro = document.createTextNode("carro");
var bike = document.createTextNode("bike");
var patinete = document.createTextNode("patinete");
var celular = document.createTextNode("celular");
var carregador = document.createTextNode("carregador");

primeiroItem.appendChild(carro);
segundoItem.appendChild(bike);
terceiroItem.appendChild(patinete);
primeiroItem.appendChild(celular);
primeiroItem.appendChild(carregador);




// Moises Bollela
// Victoria Dias 
// Nicholas Viegas
// Jadson Santos
// gustavo toffetti

