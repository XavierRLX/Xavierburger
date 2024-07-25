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
    let ab2 = document.querySelector('#modal-abrir2')
    let ab3 = document.querySelector('#modal-abrir3')
    let ab4 = document.querySelector('#modal-abrir4')
    let ab5 = document.querySelector('#modal-abrir5')
    let ab6 = document.querySelector('#modal-abrir6')
    let ab7 = document.querySelector('#modal-abrir7')
    let ab8 = document.querySelector('#modal-abrir8')
    let mt = document.querySelector('.modal-hamb')
    let mo = document.getElementById('modal-none')
    let xm = document.getElementById('modal-fechar')

    ab.addEventListener('click', clicar1)
    ab2.addEventListener('click', clicar2)
    ab3.addEventListener('click', clicar3)
    ab4.addEventListener('click', clicar4)
    ab5.addEventListener('click', clicar5)
    ab6.addEventListener('click', clicar6)
    ab7.addEventListener('click', clicar7)
    ab8.addEventListener('click', clicar8)
    xm.addEventListener('click', fecha)

    function fecha(){
        mo.style.display = 'none'
        mt.innerHTML = 'RELAXA, TÁ TRANQUILO'
    }
    function clicar1(){
        mo.style.display = 'inline'
    }
    function clicar2(){
        mo.style.display = 'inline'
        mt.innerHTML = 'RELAXA E ENGORDA'
    }
    function clicar3(){
        mo.style.display = 'inline'
        mt.innerHTML = 'RELAXA E GOSTA'
    }
    function clicar4(){
        mo.style.display = 'inline'
    }
    function clicar5(){
        mo.style.display = 'inline'
    }
    function clicar6(){
        mo.style.display = 'inline'
    }
    function clicar7(){
        mo.style.display = 'inline'
    }
    function clicar8(){
        mo.style.display = 'inline'
    }
