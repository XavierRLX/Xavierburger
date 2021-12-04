function carregar(){
    var aqui = document.getElementById('aqui')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 16){
        aqui.innerHTML = 'fechado'
        aqui.style.background = 'black'
        aqui.style.color = 'white'
        aqui.style.fontSize = '0.7em'
        aqui.style.width = '70px'
    } else {
        aqui.innerHTML = 'aberto'
        aqui.style.background = '#19d413'
        aqui.style.width = '70px'

    }
    }
    

    var m = document.getElementById('menuf')
    var x = document.getElementById('menua')
    var mop = document.getElementById('menu')
    
    m.addEventListener('click', abrir)
    x.addEventListener('click', fechar)

    function abrir(){
        x.style.display = 'inline'
        mop.style.display = 'inline'
        mop.style.transition = '1s'
        m.style.display = 'none'
        

    }
    function fechar(){
        m.style.display = 'inline'
        x.style.display = 'none'
        mop.style.display = 'none'
        mop.style.transition = '1s'


    }