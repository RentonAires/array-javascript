
/**
 * 29/09/2020
 * prototype de map como funciona por dentro da funçao "MAP"
 * 1 - map gera um novo array  newArray
 * 
 * 2 - passamdo para um novo  newArray passando
 * this[i] elemento atual
 * i  indice 
 * this array original
 * 
 * 3 - retonando resultado para um novo array
 * 
 */

Array.prototype.map3 = function(callback) {
    const newArray = [] // 1
    for(let i =0; i< this.length; i++) { // precorrendo todo o array 
        newArray.push(callback(this[i], i, this)) //2 
    }
    return newArray //3
}

//retornando um array de preço de um json
const carrinho = [

    '{"nome": "Borracha", "preco": 1.30}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit lapis", "preco": 41.22}',
    '{"nome": "Caderno", "preco": 7.50}'
]

//passando de json para objeto
const paraObjeto = json => JSON.parse(json)


//funçao para pegar apenas o preço de produto
const soPreco = produto => produto.preco


//mapeando o objeto para pegao so preço
const resultado = carrinho.map3(paraObjeto).map3(soPreco)

console.log(resultado);