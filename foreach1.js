//forEach 31/08/2020

const aprovados = ['ana', 'zeca', 'joao', 'renton']


//usando forEach com funçao tradicional
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

//usando forEach com funçao tradicional usando os tres parametro
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array);
})


//usando funçao arrow
aprovados.forEach(nome => console.log(nome))


//atributindo valor a uma variavel 
const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)

/**
 * ForEach pode receber ate tres parametro de um array
 * nome, indice, array
 */