//Función Desencriptar.
var desencriptar = document.querySelector('#btn-desencriptar');

desencriptar.addEventListener('click', function(){
    var texto = new String(document.querySelector('#input-texto').value);
    var desencripta = new String("");
    if(valida(texto)){
        for(var i = 0; i<=texto.length; i++){
                switch (texto.charAt(i)){
                    case 'a':
                        desencripta = desencripta.concat(texto.charAt(i));
                        if(texto.substring(i, i+2) == "ai"){
                        i++;
                    }
                    break;
                    case 'e':
                        desencripta = desencripta.concat(texto.charAt(i));
                        if(texto.substring(i, i+5) == "enter"){
                        i = i+4;
                    }
                    break;
                    case 'i':
                        desencripta = desencripta.concat(texto.charAt(i));
                        if(texto.substring(i, i+4) == "imes"){
                        i = i+3;
                    }
                    break;
                    case 'o':
                        desencripta = desencripta.concat(texto.charAt(i));
                        if(texto.substring(i, i+4) == "ober" ){
                        i = i+3;
                    }
                    break;
                    case 'u':
                        desencripta = desencripta.concat(texto.charAt(i));
                        if(texto.substring(i, i+4) == "ufat"){
                        i = i+3;
                    }
                    break;
                    default :
                        desencripta = desencripta.concat(texto.charAt(i));

                }
            }
        }
        var desencripto = document.querySelector('#texto-encriptado');
        desencripto.value = desencripta;
});