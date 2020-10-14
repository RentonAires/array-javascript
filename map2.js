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
const resultado = carrinho.map(paraObjeto).map(soPreco)

console.log(resultado);