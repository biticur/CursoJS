function contar() {
    var inicio = Number(document.querySelector('#inicio').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo = Number(document.querySelector('#passo').value)
    var res = document.querySelector('#res')
    res.style.textAlign = 'center'
    
    //caso as entradas não sejam numéricas
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        res.innerHTML = 'As entradas precisam ser numéricas!'
        return
    }

    //verifica a validade do passo
    if (passo >= fim || passo <= 0 || (fim - inicio) % passo != 0) {
        res.innerHTML = 'Contagem impossível! Altere o valor do passo.'
        return
    }

    //verifica se os valores são coerentes
    if (inicio > fim) {
        res.innerHTML = 'O valor inicial deve ser menor ou igual ao valor final!'
        return
    }

    res.innerHTML = 'Contagem: '
    for (var i = inicio; i <= fim; i += passo) {
        res.innerHTML += `${i} `
    }
}