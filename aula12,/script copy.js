function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       
       img.setAttribute( 'id' , 'foto','width', '250')
       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >=0 && idade < 10) {
            // criança
           } else if (idade < 21) {
            // jovem
            img.setAttribute('src' ,  'jovem.png')
            img.setAttribute('width', '250')
           } else if (idade < 50 ) {
            // adulto
            img.setAttribute('src' , 'hadulto.png')
           } else {
            // isoso
            img.setAttribute('src' , 'idoso.png')
           }
       } else if (fsex[1].checked) {
         genero = 'Mulher'
         if (idade >=0 && idade < 10) {
            // criança
           } else if (idade < 21) {
            // jovem
            img.setAttribute('src' , 'mulherjovem.png')
           } else if (idade < 50 ) {
            // adulto
            img.setAttribute('src' , 'Mjovem.png')
           } else {
            // isoso
            img.setAttribute('src' , 'mulheridosa.jpg')
           }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
   }
}