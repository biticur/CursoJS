let lista = []
let res = document.querySelector('#res')

function adicionar() {
    let numtxt = document.querySelector('#num')
    let num = Number(numtxt.value)
    let tab = document.querySelector('#tab')

    if (lista.includes(num) || isNaN(num) || num < 1 || num > 100) {
        alert('Valor inválido ou já adicionado à lista!')
    } else {
        let item = document.createElement('option')

        lista.push(num)
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }

    numtxt.value = ''
    numtxt.focus()
}

function maiorMenor(maior, menor) {
    for (let i in lista) {
        if (lista[i] > maior) {
            maior = lista[i]
        } else if (lista[i] < menor) {
            menor = lista[i]
        }
    }
    return {maior, menor}
}

function somar() {
    let total = Number(0)
    for (let i in lista) {
        total += lista[i]
    }
    return total
}

function resultados() {
    res.innerHTML = ''

    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        //verifica o maior e o menor valor do array
        let {maior, menor} = maiorMenor(1, 100)

        //calcula o total dos valores do array
        let total = somar()

        let res = document.querySelector('#res')
        res.innerHTML += `<p>Quantidade de valores adicionados: ${lista.length}</p>`
        res.innerHTML += `<p>Maior valor adicionado: ${maior}</p>`
        res.innerHTML += `<p>Menor valor adicionado: ${menor}</p>`
        res.innerHTML += `<p>total dos valores adicionados: ${total}</p>`
        res.innerHTML += `<p>Média dos valores adicionados: ${total / lista.length}</p>`
    }
}