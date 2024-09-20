//declarando matriz vazia
let minha_matriz = [[],[]]
let minha_matriz2 = []

//declarando e inicializando a matriz
//[linha][coluna]
let minha_matriz3 = [[1,2],[3,4],[5,6]] //3x2

//console.log(minha_matriz3)

//matriz mista
let obj = {"nome":"lais", "idade":30}
let matriz_mista = [["higor", "25"],[1, 10.5], [true,false],[null,obj]] //4x2 - mista

//acessando valores
//console.log(matriz_mista[2][1])//ultimo elemento nesse exemplo
//console.log(matriz_mista[0][0]) //primeiro elemento

//aceesando mais de uma matriz no mesmo console.log
console.log(matriz_mista[2][1]+ " "+ matriz_mista[2][0])

//matriz com quantidade de colunas diferentes
let minha_matriz_tam_dif = [[1],[2,3,4,5,6],[7,8,9,10,11],[12,13],[14]]
//console.log(minha_matriz_tam_dif)

//verificar o tamanho da matriz
let qnt_linhas = minha_matriz_tam_dif.length
//console.log(qnt_linhas)

let qnt_colunas = minha_matriz_tam_dif[1].length
//console.log(qnt_colunas)

//adicionando elementos na matriz apos a sua criação
let minha_matriz4 = [[1,2],[3,4]] //2x2
minha_matriz4.splice (2,0, [5]) //adicionando no meio da matriz
minha_matriz4.splice (3,0, [6,7,8]) //adicionando no fim da matriz
minha_matriz4.push([9,10]) //adiciona elementos apenas no final da matriz

//adicionando elementos para uma linha específica
minha_matriz4[0].push(0)
minha_matriz4[4].push(11)

//exibindo valores 
//console.log(minha_matriz4)

//removendo uma determinada linha da matriz
minha_matriz_tam_dif.splice(0,0)
//console.log(minha_matriz_tam_dif)

//removendo a ultima linha da matriz
minha_matriz_tam_dif.pop()
//console.log(minha_matriz_tam_dif)

//removendo um elemento da matriz
minha_matriz4[0].pop()
//console.log(minha_matriz4)

//removendoo elemente de uma determinada linha da matriz
minha_matriz4[2].splice(2,1)
//console.log(minha_matriz4)

//interando uma matriz
//l = linha
for(let l=0;l< minha_matriz4.length; l++) {
    for (let c = 0; c<minha_matriz4[l].length; c++)
        console.log(minha_matriz4[l][c]+"")
}