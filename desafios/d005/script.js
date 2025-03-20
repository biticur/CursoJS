function converter() {
    let metros = Number(prompt('Digite uma distância em metros'))

    if (isNaN(metros)) {
        alert('Digite números!')
    } else {
        let res = document.querySelector('#res')

        res.innerHTML = `<h2>A distância de ${metros.toLocaleString("pt-BR")} metros corresponde a:</h2>`
        res.innerHTML += `<p>${(metros / 1000).toLocaleString("pt-BR")} quilômetros (Km)</p>`
        res.innerHTML += `<p>${(metros / 100).toLocaleString("pt-BR")} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${(metros / 10).toLocaleString("pt-BR")} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${(metros * 10).toLocaleString("pt-BR")} decímetros (dm)</p>`
        res.innerHTML += `<p>${(metros * 100).toLocaleString("pt-BR")} centímetros (cm)</p>`
        res.innerHTML += `<p>${(metros * 1000).toLocaleString("pt-BR")} milímetros (mm)</p>`
    }
}