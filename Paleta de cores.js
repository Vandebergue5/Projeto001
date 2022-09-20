function Verificar1() {
    let a1 = document.querySelector('input.input1');
    

    let d1 = document.querySelector('div.div1');

    d1.innerHTML = `<b>O resultado da mistura ${a1.value} é igual a</b>  `

    switch (a1.value) {
        
        case  'preto + branco' :
        d1.innerHTML += '<b>cinza.</b>'
        document.body.style.background = 'gray'
        break

        case  'branco + preto' :
        d1.innerHTML += '<b>cinza.</b>'
        document.body.style.background = 'gray'
        break

        case  'azul + vermelho' :
        d1.innerHTML += '<b>roxo.</b>'
        document.body.style.background = 'purple'
        break

        case  'vermelho + azul' :
        d1.innerHTML += '<b>roxo.</b>'
        document.body.style.background = 'purple'
        break

        case  'vermelho + amarelo' :
        d1.innerHTML += '<b>laranja.</b>'
        document.body.style.background = 'orange'
        break

        case  'amarelo + vermelho' :
        d1.innerHTML += '<b>laranja.</b>'
        document.body.style.background = 'orange'
        break

        case  'laranja + amarelo' :
        d1.innerHTML += '<b>vermelho.</b>'
        document.body.style.background = 'red'
        break

        case  'amarelo + laranja' :
        d1.innerHTML += '<b>vermelho.</b>'
        document.body.style.background = 'red'
        break

        case  'amarelo + azul' :
        d1.innerHTML += '<b>verde.</b>'
        document.body.style.background = 'green'
        break

        case  'azul + amarelo' :
        d1.innerHTML += '<b>verde.</b>'
        document.body.style.background = 'green'
        break

        case  'amarelo + verde' :
        d1.innerHTML += '<b>azul.</b>'
        document.body.style.background = 'blue'
        break

        case  'verde + amarelo' :
        d1.innerHTML += '<b>azul.</b>'
        document.body.style.background = 'blue'
        break

        case  'vermelho + branco' :
        d1.innerHTML += '<b>rosa.</b>'
        document.body.style.background = 'pink'
        break

        case  'branco + vermelho' :
        d1.innerHTML += '<b>rosa.</b>'
        document.body.style.background = 'pink'
        break

        case  'laranja + branco' :
        d1.innerHTML += '<b>pele.</b>'
        document.body.style.background = '#fad2af'
        break

        case  'branco + laranja' :
        d1.innerHTML += '<b>pele.</b>'
        document.body.style.background = '#fad2af'
        break

        case  'vermelho + verde' :
        d1.innerHTML += '<b>marron.</b>'
        document.body.style.background = 'brown'
        break

        case  'verde + vermelho' :
        d1.innerHTML += '<b>marron.</b>'
        document.body.style.background = 'brown'
        break

        case  'laranja + roxo' :
        d1.innerHTML += '<b>marron escuro.</b>'
        document.body.style.background = '#655130'
        break

        case  'roxo + laranja' :
        d1.innerHTML += '<b>marron escuro.</b>'
        document.body.style.background = '#655130'
        break

        case  'roxo + branco' :
        d1.innerHTML += '<b>lilás.</b>'
        document.body.style.background = '#b9a9cd'
        break

        case  'branco + roxo' :
        d1.innerHTML += '<b>lilás.</b>'
        document.body.style.background = '#b9a9cd'
        break

        default: 
        d1.innerHTML = '<b>Nenhuma alternativa corresponde!</b>'
    
        
    }
}
