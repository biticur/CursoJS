function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = "imagens/manha.png"
        document.body.style.background = "#87ceeb"
    } else if(hora >= 12 && hora < 18){
        img.src = "imagens/tarde.png"
        document.body.style.background = "#f0bd00"
    } else{
        img.src = "imagens/noite.png"
        document.body.style.background = "#00001f"
    }
}