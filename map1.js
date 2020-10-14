//funçao map em um array 28/09/2020

const nums = [2, 4, 6, 8]

//map e um for com proposito
let result = nums.map(function(e){
    return e + 2
})

console.log(result);


const soma2 = e => e + 2 //somando o primeiro indice
const triplo = e => e * 3 //triplicando os indice
const grana = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')} Reais` //transformando numeros em valor monetario

result = nums.map(soma2).map(triplo).map(grana) //chamando as funçoes em um encadeamento
console.log(result);



//======================================================================================================

const num = [10, 20, 30, 40]

let resposta = num.map(function(a){
    return a * 10
})

console.log(resposta);