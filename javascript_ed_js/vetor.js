//usando colchetes []
let modelos = ['Gol', 'Corsa', 'Fusca'];

//usando o construtor array ( )
let marcas = Array ('chevrolet', 'ford', 'fiat');

// definindo um valor fixo atraves da array
let acessorios = new Array(5);

// criando um vetor vazio
let cores = [];

// ou
let categoria = new Array();


// console.log(modelos)
// console.log(marcas)
// console.log(acessorios)

//exibindo ou recuperando o elemento do vetor
// console.log(modelos[0])
// console.log(modelos[1])
// console.log(modelos[2])

let nome_modelo = modelos[0];
// console.log(nome_modelo)

// adicionando um elemento no fim da array
modelos.push('Hb20')

//adicionando um elemento no inicio array
modelos.unshift('logan')

//exibindo o vetor
// console.log(modelos);

//removendo elementos no inicio de uma array
modelos.shift()
// console.log(modelos);

//removendo elementos no fim de uma array
modelos.pop()
// console.log(modelos);

let frutas = ['laranja', 'melancia', 'morango'];
let vegetais = ['batata doce', 'cenoura', 'milho'];
let feira = frutas.concat(vegetais);

// exibindo o vetor
//console.log(feira);

//funçao slice imprimi uma parte especifica da sua array, onde o primeiro numero é a da onde vai partir a impressão e o segundo digite limita a impressao 
let frutas_ = ['laranja', 'melancia', 'morango', 'uva', 'caju'];
let frutas_sel = frutas_.slice(1,5);

//console.log(frutas_sel)

//funcao pra alterar ou remover um elemento da array
frutas_.splice(1,1)
frutas_.splice(2,9,'manga','abacaxi');

let r = frutas_.includes('morango')
//console.log(existe)
let r1 = frutas_.includes('morangooo')
//console.log(frutas_)


let frutas2 = ['laranja', 'melância','morango', 'uva','caju'];
let texto = frutas2.join(',');

//exibindo o vetor

//console.log(texto);


let numeros = [1,2,3,4,5,6];
let dobra = numeros.map(x=> x*2)

//exibindo o vetor
console.log(dobra)

//exemplo de função
function teste(t){
    console.log(t)
}


let numeros1 = [1,2,3,4,5,6];
let pares = numeros1.filter(x => x%2 ==0);

//exibindo o vetor
console.log(pares)

//ternario (if-else simplificado em uma linha)
let nota = 6
let res = nota >=6 ? "aprovado":"reprovado"
console.log(res)

//ou

let res1 = 6;
if (res1 >= 6){
    console.log ("aprovado")
}else{
    console.log("reprovado")
}


//atraves da função find é retornado o valor do primeiro elemento que satisfaz a função fornecida
let numeros2 = [1,2,3,4,5,6];
let localiza_elemento = numeros2.find(x => x > 2);
let localiza_index = numeros2.findIndex(x => x > 2);

console.log('foi localizado o elemento' + localiza_elemento);
console.log('foi localizado o index'+ localiza_index);


let maior = numeros2.some(x=> x>2)
console.log(maior)

let maior1 = numeros2.every (x => x > 0);
console.log('atende a condição lógica: ' + maior1)

let R = numeros2.every (x=> x>0)
console.log('todos atendem a regra: ' + R)

// organizar os elementos
let n_aleatorio = [05,03,01,0,06,02,08,07]
console.log(n_aleatorio)
n_aleatorio.sort()
console.log(n_aleatorio)