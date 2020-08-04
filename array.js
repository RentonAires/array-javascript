/**Arrays
 * 1 - estruturas indecxadas atraves de indices
 * 2 - aumenta e diminui dinamicamente
 * 3 - sao objetos
 * 
 */


console.log(typeof Array, typeof new Array, typeof [] );

let aprovados = new Array('anna', 'jao', 'zeca') // modo nao convencional de fazer um array
console.log(aprovados);

aprovados = ['anna', 'jao', 'zeca'] // array de forma literal
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //indice que nao existe dar underfined

aprovados [3] = 'renato' //adicionando ou substituir um novo elemento no array 

console.log(aprovados);

aprovados.push('ada') //atribuindo um elemento a ultima posiçao do array 
console.log(aprovados.length); //ultima posiçao de um array
console.log(aprovados);

aprovados[9] = 'lala'
console.log(aprovados.length); 

console.log(aprovados[8] === undefined);

console.log(aprovados);

aprovados.sort() //altera o array para ordem alfabetica

console.log(aprovados);

delete aprovados[1] //deletou o elemento e atribuiu underfined para indice

console.log(aprovados);

aprovados = ['renato', 'nara', 'jose']
aprovados.splice(1, 1)//exclui ou adiciona elementos em determinad indice do array

console.log(aprovados);