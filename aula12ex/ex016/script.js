function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var idade = ano - Number(fAno.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        if (fsex[0].checked) {
            genero = 'homem'        
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-h.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-h.jpg')
            }   
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}