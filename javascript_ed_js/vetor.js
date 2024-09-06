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
//frutas_.splice(1,1)
//frutas_.splice(2,9,'manga','abacaxi');

let r = frutas_.includes('morango')
console.log(existe)
let r1 = frutas_.includes('morangooo')
console.log(frutas_)