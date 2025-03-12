function mensagens() {
    let nome = prompt('Qual o seu nome?')

    let idade = prompt(`Olá, ${nome}! Quantos anos você tem?`)

    if (nome.length == 0 || idade.length == 0) {
        return
    }

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`) 
}