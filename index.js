// Lotofacil - max 20 numeros de 25

let teste = 0
function sortearNumeros() {
    const numerosSorteados = []
    const numerosDiferentes = []
    while (numerosSorteados.length <= 24) {
        numerosSorteados.push(Math.floor(Math.random() * 25) + 1)
    }    
    
    numerosDiferentes.push(...new Set(numerosSorteados))
    if(numerosDiferentes.length <= 20) {
        let ordenar = (a, b) => a - b
        teste = 1
        return numerosDiferentes.sort(ordenar)     
    } else {
        teste = 0
        return `Sorteando.... ${[].length}`
    }
    
}

let sortear;
let li = document.createElement('li')
let ul = document.querySelector('.lista')
ul.innerHTML = '<li class="list-group-item list-group-item-success"> :) Vamos lá!!! Que hoje é seu dia de Sorte. </li>'
function iniciar() {
    sortear = setInterval(() => {
        ul.innerHTML = ''
        const sorteio = sortearNumeros()
        ul.innerHTML += `
            <li class="list-group-item ">
                Numeros Sorteados [ ${sorteio.length} ] -
                ${sorteio.join(' - ')}
                </li>`
    }, 1 * 1000)
    
}
    
function parar() {
    if (teste == 0) {
        ul.innerHTML = ul.innerHTML + ' <li class="list-group-item list-group-item-warning"> Nenhum numero foi sorteado! </li>'
    } else {        
        clearInterval(sortear)
        ul.innerHTML = ul.innerHTML + ' <li class="list-group-item list-group-item-warning"> Agora é so apostar!!! ;D </li>'
    }
    
}
function limpar() {
    parar()
    teste = 0
    ul.innerHTML = ''
    ul.innerHTML = '<li class="list-group-item active"> Sortear novos Numeros?? </li>'
}

