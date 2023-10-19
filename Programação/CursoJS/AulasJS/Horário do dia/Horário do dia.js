function carregar() {
    var msg = window.document.getElementById('msg');
    var divImagens = window.document.getElementById('imagens');
    var imgManha = window.document.getElementById('img-manha');
    var imgTarde = window.document.getElementById('img-tarde');
    var imgNoite = window.document.getElementById('img-noite');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`;
    if (hora >= 0 && hora < 12) {
      //Bom Dia!
      imgManha.style.display = 'block';
      imgTarde.style.display = 'none';
      imgNoite.style.display = 'none';
      document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18) {
      //Boa Tarde!
      imgManha.style.display = 'none';
      imgTarde.style.display = 'block';
      imgNoite.style.display = 'none';
      document.body.style.background = '#b9846f';
    } else {
      //Boa Noite!
      imgManha.style.display = 'none';
      imgTarde.style.display = 'none';
      imgNoite.style.display = 'block';
      document.body.style.background = '#515154';
    }
  }