//Valida que sea minúscula o espacio.
var resaltarError = document.querySelector('#reglas');
function valida(texto){  
    var esminuscula = true;
    for(var i = 0; i<=texto.length; i++){
        if ((texto.codePointAt(i) <= 96) || (texto.codePointAt(i) >= 123)){
            if (texto.codePointAt(i) != 32){
            esminuscula = false;
            resaltarError.classList.add("error");
            break;
            }
        }
    }
    if(esminuscula){ resaltarError.classList.remove("error");}
    return esminuscula;
}
//Función Copiar.
var copiar = document.querySelector('#btn-copiar');

  copiar.addEventListener('click', function(){
    var texto = document.querySelector('#texto-encriptado').value;
    navigator.clipboard.writeText(texto);
});