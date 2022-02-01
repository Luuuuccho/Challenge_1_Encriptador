var encriptar = document.querySelector('#btn-encriptar');

encriptar.addEventListener('click',function(){
    var texto = new String(document.querySelector('#input-texto').value);
    var encripta = new String("");
    var esminuscula = true;
    //Valida que sea minúscula o espacio.
    for(var i = 0; i<=texto.length; i++){
        if ((texto.codePointAt(i) <= 96) || (texto.codePointAt(i) >= 123)){
            if (texto.codePointAt(i) != 32){
            esminuscula = false;
            console.log("No es minúscula.");
            break;
            }
        }
    }
    //Función Encriptar.
    if (esminuscula){
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
//Función Desencriptar.
var desencriptar = document.querySelector('#btn-desencriptar');

desencriptar.addEventListener('click', function(){
    var texto = new String(document.querySelector('#input-texto').value);
    var desencripta = new String("");
    for(var i = 0; i<=texto.length; i++){
            switch (texto.charAt(i)){
                case 'a':
                    desencripta = desencripta.concat(texto.charAt(i));
                    i++;
                    break;
                case 'e':
                    desencripta = desencripta.concat(texto.charAt(i));
                    i = i+4;
                    break;
                case 'i':
                    desencripta = desencripta.concat(texto.charAt(i));
                    i = i+3;
                    break;
                case 'o':
                    desencripta = desencripta.concat(texto.charAt(i));
                    i = i+3;
                    break;
                case 'u':
                    desencripta = desencripta.concat(texto.charAt(i));
                    i = i+3;
                    break;
                default :
                    desencripta = desencripta.concat(texto.charAt(i));

            }
        }
        var desencripto = document.querySelector('#texto-encriptado');
        desencripto.value = desencripta;
});
//Función Copiar.
var copiar = document.querySelector('#btn-copiar');

  copiar.addEventListener('click', function(){
    var texto = document.querySelector('#texto-encriptado').value;
    navigator.clipboard.writeText(texto);
    alert('Copiado al portapapeles.');
});