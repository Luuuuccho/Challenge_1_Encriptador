var encriptar = document.querySelector('#btn-encriptar');
encriptar.addEventListener('click',function(){
    var texto = new String(document.querySelector('#input-texto').value);
    var encripta = new String("");
    //Función Encriptar.
    valida(texto);
    if (valida(texto)){
    for(var i = 0; i<=texto.length; i++){
        var letra = texto.charAt(i);
            switch (letra){
                case 'a':
                    encripta = encripta.concat(letra,"i");
                    break;
                case 'e':
                    encripta = encripta.concat(letra,"nter");
                    break;
                case 'i':
                    encripta = encripta.concat(letra,"mes");
                    break;
                case 'o':
                    encripta = encripta.concat(letra,"ber");
                    break;
                case 'u':
                    encripta = encripta.concat(letra,"fat");
                    break;
                default :
                    encripta = encripta.concat(letra);

            }
        }
        var encripto = document.querySelector('#texto-encriptado');
        encripto.value = encripta;
    }
});