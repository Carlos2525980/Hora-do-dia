


function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() //pega a data do sistema
    var hora = data.getHours() //pega a hora do sistema
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {

        img.src = 'fotomanha.gif' //muda a foto
        document.body.style.background = '#e2cd9f' // mudar fundo

    } else if (hora >= 12 && hora < 18) {

        img.src = 'fototarde.gif'
        document.body.style.background = '#b9846f'


    } else {

        img.src = 'fotonoite.gif'
        document.body.style.background = '#515154'




    }






}
