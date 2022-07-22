
    let data = new Date // parada nova
    let year = data.getFullYear() // parada nova
    let born = window.document.getElementById("nacimento");
    let manWaman = window.document.getElementsByName("sexo");
    let lastMsg = window.document.getElementById("msg-sexo");
    let genero = "";

function play(){
    if( born.value.length == 0 || born.value > year){
        alert("Erro Verifique os dados e tente novamente");
    } else {
        var img = document.createElement('img');// parada nova
        let age = year - Number(born.value);
        img.setAttribute('id','foto');  // parada nova

        if(manWaman[0].checked){ // parada nova
            genero = "homem";
            if(age > 0 && age <= 10){
                img.setAttribute('src','./imagens/kid-man.png');
            }else if(age <= 18){
                img.setAttribute('src','./imagens/Young-man.png');
            }else if(age <= 50){
                img.setAttribute('src','./imagens/adult-man.png');
            }else{
                img.setAttribute('src','./imagens/old-man.png');
            }
        } else if(manWaman[1].checked){
            genero = "feminino";

            if(age >0 && age <= 10){
                img.setAttribute('src','./imagens/kid-waman.png');
            }else if(age <= 18){
                img.setAttribute('src','./imagens/young-waman.png');
            }else if(age <= 50){
                img.setAttribute('src','./imagens/adult-waman.png');
            }else{
                img.setAttribute('src','./imagens/old-waman.png');
            }
        }
        lastMsg.innerHTML = `Detectamos <b>${genero}</b> com  ${age} anos de idade`;
        lastMsg.appendChild(img);
        img.style.marginTop = "20px";
    }
}