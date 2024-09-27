//criando uma pilha vazia
let pilha_prato = [];

//adiconando elementos
pilha_prato.push("prato laranja")
pilha_prato.push("prato verde")
pilha_prato.push("prato azul")
pilha_prato.push("prato vermelho")

//tamanho da pliha

let tam = pilha_prato.length;
console.log("o tamanho da pilha é: " + tam);

//verificando se a pilha esta vazia

let vazia = pilha_prato.length == 0;
console.log("a pilha esta vazia:  " + vazia);

//acessando o topo da pilha
let topo = pilha_prato[pilha_prato.length-1]
console.log('o element que esta no topo é: ' + topo);

//removendo o elemento da pilha
let rem = pilha_prato.pop()
console.log('o elemento no topo é: '+ rem);

//percorrendo uma pilha
for (let i=pilha_prato.length-1;i>=0;i--){
    console.log(pilha_prato[i]);
}