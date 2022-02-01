//Valida que sea minúscula o espacio.
function valida(texto){  
    var esminuscula = true;
    for(var i = 0; i<=texto.length; i++){
        if ((texto.codePointAt(i) <= 96) || (texto.codePointAt(i) >= 123)){
            if (texto.codePointAt(i) != 32){
            esminuscula = false;
            break;
            }
        }
    }
    return esminuscula;
}
//Función Copiar.
var copiar = document.querySelector('#btn-copiar');

  copiar.addEventListener('click', function(){
    var texto = document.querySelector('#texto-encriptado').value;
    navigator.clipboard.writeText(texto);
    alert('Copiado al portapapeles.');
});