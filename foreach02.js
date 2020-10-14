//forEach2 31/08/2020 implementando
Array.prototype.forEach2 = function(callback){
    for(let i =0; i, this.length; i++){
        callback(this[i], i, this) //tres parametros de uma callback
    }
}

const aprovados = ['ana', 'zeca', 'joao', 'renton']


//usando forEach com funçao tradicional
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})