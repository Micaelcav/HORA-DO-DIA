function atualizar(){ 
    var mens = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var seg = data.getSeconds()
    mens.innerHTML = `Nesse momento, são exatamente ${hora}:${minuto}:${seg}`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#f1d7c0'
    } else if (hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#fa933b'
    } else {
        img.src = 'noite.png'
        document.body.style.backdrop = '#262e41'
    }
}