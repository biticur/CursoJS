function calcularTroco() {
    let produto = prompt('Que produto você está comprando?')
    let preco = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    let gasto = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    
    if (!produto || isNaN(preco) || isNaN(gasto)) { //checa validade dos dados
        alert('[ERRO] Tente novamente!')
    } else if (gasto < preco) { //checa se o valor gasto paga o produto
        alert ('O valor pago é insuficiente!')
    } else {
        alert(`Produto: ${produto}\tPreço: R$${preco.toFixed(2)}\nValor entregue: R$${gasto.toFixed(2)}\tTroco: R$${(gasto - preco).toFixed(2)}`)
    }
}