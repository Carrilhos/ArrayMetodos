// *** Array *** //

//// Array = Coleção de elementos ////

const frutas = ["banana", "maça", "tomate"]

const navers = [
  {
    nome: "Gabriel",
    cargo: "Estagiario",
    tecnologias: ["React", "React Native"]
  },
  {
    nome: "Lucas",
    cargo: "Desenvolvedor Frontend",
    tecnologias: ["React", "React Native"]
  },
  {
    nome: "Juquinha",
    cargo: "Desenvolvedor Frontend",
    tecnologias: ["React", "React Native"]
  }
]

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// navers.filter((item) => item.cargo === "Desenvolvedor Frontend")[1]
 
  

//frutas
//navers

//// Acessar um item (index) do Array ////

// const primeiro = frutas[0]
// primeiro
// const primeiraTecnologia = navers[0].tecnologias[0]
// primeiraTecnologia
// const ultimo = frutas[frutas.length - 1]
// ultimo


//// ForEach: executa uma função para cada elemento de um array ////

// const tabuadaDoNove = item => console.log(item*9)
// numeros.forEach(tabuadaDoNove)


//// map: Percorre um array ////

// const tabuadaDoNove2 = numeros.map(item => item * 9)
// tabuadaDoNove2

// const multiplosDeDois = numeros.map(item =>  item % 2 === 0 )
// multiplosDeDois


/// forEach x Map => forEach percorre um array e faz alguma coisa com os 
/// elementos, não necessariamente precisa retornar algo (similar a um for)
/// já o map por sua vez, faz uma operação com cada elemento e retorna outro
/// array 


//// Push: Adiciona um item ao final do array ////

// const adicionar = frutas.push('Melancia')
// frutas


//// Pop: Remover item do final do array ////

// frutas
// const removeUltimo = frutas.pop()
// frutas


//// shift: Remove item do incio do array ////
// frutas
// const removePrimeiro = frutas.shift()
// frutas


//// unshitft: Adiciona item no inicio do array ////
// frutas
// let fruta = 'morango'
// const adicionar = frutas.unshift(fruta)


//// indexOf: Procura o indice de um item no array ////

// const posicao = frutas.indexOf('banana')
// posicao


//// splice: remove um item pela posição do indice ////

// frutas
// const removeItem = frutas.splice(1,1)
// frutas
// removeItem


//// slice: Copiar um array ////

// const copia = frutas.slice()
// copia

//// ou ////

// const copia = [...frutas]
// copia


//// Filter: filtra o conteudo de um vetor ////

// const numerosPares = numeros.filter(item =>  item % 2 === 0)
// numerosPares


//// Reduce = Reduz um vetor em uma unica informação ////

// const somaDeTudo = numeros.reduce((acumulador, item) => acumulador + item)
// somaDeTudo

// const todasAsFrutas = frutas.reduce((acumulador, item) => acumulador + ", " +item)
// todasAsFrutas



//// Find: Encontra um item em um vetor ////

// const temDois = numeros.find((item) => item === 2)
// temDois
// const temBanana = frutas.find((item) => item === "banana")
// temBanana
// const temOnze = numeros.find((item) => item === 11)
// temOnze
// Boolean(temDois)
// Boolean(temBanana)
// Boolean(temOnze)


//// Some: Procura um item em um array e se encontrado retorna true ////

// const temDois = numeros.some((item) => item >= 2)
// temDois
// const temBanana = frutas.some((item) => item === "banana")
// temBanana
// const temOnze = numeros.some((item) => item === 11)
// temOnze


//// concat: Junta dois ou mais arrays ///

// const numerosEFrutas = frutas.concat(numeros)
// numerosEFrutas


//// Join: retorna uma string contendo todos os elementos ///

// const todosNumeros = numeros.join()
// todosNumeros
// const todasFrutas = frutas.join(" - ")
// todasFrutas


//// lastIndexOf: retorna a posição da ultima ocorrencia de um elemento ///

// const arrayComRepeticao = [0,1,2,3,4,1,8]
// var ultimaAparicao = arrayComRepeticao.lastIndexOf(1)
// ultimaAparicao


//// Reverse: Inverte todos elementos de um array ///

// numeros.reverse()


//// Sort: Ordena os elementos de um array ///

// const foraDeOrdem = [9,1,2,3,6]
// console.log(foraDeOrdem.sort())
// console.log(foraDeOrdem.sort().reverse())
// console.log(frutas.sort())

// const myFunction = (a, b) => {
//    if (a>b) {
//     return -1;
//   }
//   if (a<b) {
//     return 1;
//   }
// }
// foraDeOrdem.sort(myFunction)


//// toString: Transforma vetor em string ///

// const numerosString = numeros.toString()
// numerosString




///// Exemplos /////

//// Find x Filter

// const clientes = [
//   {
//   nome: "Gabriel"
//   },
//   {
//   nome: "Lucas"
//   },
//   {
//   nome: "Fulano"
//   }
// ]

// const achaOGabriel = (cliente) => cliente.nome === 'Gabriel'
// const achaOJoao = (cliente) => cliente.nome === 'João' 

// console.log(clientes.find(achaOGabriel))
// console.log(clientes.filter(achaOGabriel))
// console.log(clientes.find(achaOJoao))
// console.log(clientes.filter(achaOJoao))


//// Map altera o array original em objetos

// const faturas = [
//     {
//     mes: 'janeiro',
//     valor: 30.45,
//     paga: false
//     }, 
//     {
//     mes: 'fevereiro',
//     valor: 20.10,
//     paga: false
//     },
//     {
//     mes: 'março',
//     valor: 60,
//     paga: false
//     }    
// ];

/* Errado */

// const taPago = fatura =>{
//   fatura.paga = true
//   return fatura
//   }

// let faturasPagas = faturas.map(taPago)

// console.log(faturasPagas)
// console.log(faturas)

/* Correto */

// const taPago = fatura => {
//   novaFatura = {...fatura}
//   novaFatura.paga = true
//   return novaFatura
// }

// let faturasPagas =  faturas.map(taPago)

// console.log(faturasPagas)
// console.log(faturas)


//// Quando usar Foreach

// const clientes = [
//   {
//   nome: 'Gabriel',
//   email: 'g@g.com'
//   },
//   {
//   nome: 'Lucas',
//   email: 'l@l.com'
//   },
// ]

// const enviarEmail = cliente => console.log(`Enviar email para ${cliente.nome} ${cliente.email}`)

// clientes.forEach(enviarEmail)

//* usado porque só é necessario fazer uma ação usando um array e não necessita de um novo modificado


//// Reduce caso de uso

// const faturas = [
//   {
//   mes: "abril",
//   valor: 130.20
//   },
//   {
//   mes: "maio",
//   valor: 120.70
//   },
//   {
//   mes: "junho",
//   valor: 330.05
//   },
// ]

// const somaTotal = (resultado, fatura) => resultado + fatura.valor

// const total = faturas.reduce(somaTotal)
// total


// const nomes = ["Gabriel", "João", "Lucas", "Gabriel"]

// const contador = (todosNomes, nome) => {
//   if(nome in todosNomes){
//   todosNomes[nome]++
//   }else{
//   todosNomes[nome] = 1
//   }
//   return todosNomes
// }

// let contagemNomes = nomes.reduce(contador, {})

// contagemNomes


////  FIND para pegar objetos com atributos diferentes(nome, cargo, tecnologia)
//// e o filter
/// Some e every o que retorna, quando ultilizar, 
//// splice e slice como ultilizar e diferença


//// Some X every

// const num = [10, 4, 6, 9, 15, 12]
// const maiorQueDez = num.some(item => item >= 10)
// maiorQueDez
// const maiorQueDez = num.every(item => item >= 10)
// maiorQueDez


//// Splice x slice

const num = [10, 4, 6, 9, 15, 12]

// const splice = num.splice(3)
// num
// splice

// const slice = num.slice(3)
// num

const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

// const somaIdades = colaboradores.reduce((soma, valorAtual) => {
//   return soma + valorAtual.idade
// }, 0)

// somaIdades


// const contador = (contador, valorAtual) => {
//   if(valorAtual.cargo in contador){
//   contador[valorAtual.cargo]++
//   }else{
//    contador[valorAtual.cargo] = 1
//   }
//   return contador
// }

// let contagemCargos = colaboradores.reduce(contador, {})

// contagemCargos



const installments = [
    {
      installment_number: 1,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 2,
      value: 139.88,
      status: 'Pago'
    },
    {
      installment_number: 3,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 4,
      value: 182.37,
      status: 'Aberto'
    },
    {
      installment_number: 5,
      value: 133.90,
      status: 'Aberto'
    }
  ]
  
//   const valorTotal = installments.reduce((total, valorAtual) => {
//     return total+=valorAtual.value
//   }, 0)
  
//   valorTotal


// const total = installments.reduce((saida, valorAtual) => {
//     if(valorAtual.status === "Aberto"){
//       saida.total_open+=valorAtual.value
//     }else{
//       saida.total_paid+=valorAtual.value
//     }
//     return saida
// }, {"total_paid": 0,  "total_open": 0 })


// total









