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
        m.style.display = 'none'
        

    }
    function fechar(){
        m.style.display = 'inline'
        x.style.display = 'none'
        mop.style.display = 'none'
    }

    let ab = document.querySelector('#modal-abrir')
    let mo = document.getElementById('modal-none')
    let xm = document.getElementById('modal-fechar')

    ab.addEventListener('click', clicar)
    xm.addEventListener('click', fecha)

    function clicar(){
        mo.style.display = 'inline'
    }
    function fecha(){
        mo.style.display = 'none'
    }