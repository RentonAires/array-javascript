const pilotos = ["renato", "joao", "ana", "pedro"]

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos);

pilotos.push("zeca") // adiciona um elemento a ultima posiçao
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("juca") //adiciona um elemento a primeiro indice do array
console.log(pilotos);

//splice adiciona ou remove elementos do um arrauy

//adicionar
pilotos.splice(2, 0, 'tico', 'teco') //apartir do indice dois elementos
console.log(pilotos);

//remover
pilotos.splice(3, 1) //apartir do indice trez remover um elemento
console.log(pilotos);

//slice pega pedaços do array e retorna um novo array
const novospilotos = pilotos.slice(2) //pegando elementos apartir do indice dois
console.log(novospilotos);


const novospilotos1 = pilotos.slice(1, 4)//pegar do indice 1 ate indice 3
console.log(novospilotos1);

