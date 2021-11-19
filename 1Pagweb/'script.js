function carregar(){
    var aqui = document.getElementById('aqui')
    var data = new Date()
    var hora = data.getHours()
    if (hora > 0 && hora < 16){
        aqui.innerHTML = 'fechado'
        aqui.style.background = 'black'
        aqui.style.color = 'white'
        aqui.style.fontSize = '0.7em'
    } else {
        aqui.innerHTML = 'aberto'
        aqui.style.background = '#19d413'

    }
    }