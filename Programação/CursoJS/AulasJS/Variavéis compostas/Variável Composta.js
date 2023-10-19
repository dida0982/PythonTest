let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() //coloca em ordem
console.log(num) //vai no elemento específico.
console.log(`Quntos elementos? ${num.length}`) //número de elementos.
console.log(`Primiro valor é ${num[0]}`) 
let pos = num.indexOf(8) // se der negativo, é pq o valor não foi encontrado.
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

/*
let num = [5,8,4]
num[3] =                                                         num                     
num.push(7)  (já coloca no final)                                5   8   6   7    
num.length   (númedo de elementos, cumprimentos)                 0   2   3   4 
num.sort()   (coloca os elementos em ordem crescente)
num.indexOf(3) = se esse valor existe                                 
*/