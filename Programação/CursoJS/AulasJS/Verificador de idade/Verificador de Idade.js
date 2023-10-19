function verificar(){
var date = new Date()
var ano = date.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade <10){
            //Criança
            //2023
            img.setAttribute('src', 'fotomankid.png');
        }else if (idade <21){
            //Jovem
            //2010
            img.setAttribute('src', 'foto1.png');
        }else if (idade <50){
            //Adulto
            //1995
            img.setAttribute('src', 'fotoman.png');
        }else{
            //Idoso
            //1900
            img.setAttribute('src', 'fotomanold.png');
        }
        
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade <10){
                //Criança
                //2023
                img.setAttribute('src','fotowamankid.png');
            }else if (idade <21){
                //Jovem
                //2010
                img.setAttribute('src', 'foto2.png');
            }else if (idade <50) {
                //Adulto
                //1995
                img.setAttribute('src', 'fotowaman.png');
            }else {
                //Idoso
                //1900
                img.setAttribute('src', 'fotowamanold.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}






    

