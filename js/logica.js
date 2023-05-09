function encriptar (){
    var texto = document.querySelector("#textoValor").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    document.querySelector("#textoFinal").value = textoCifrado;
    document.querySelector("#textoValor").value;
    }

var btn_Encriptar = document.getElementById("btnEncriptar");
btn_Encriptar.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector("#textoValor").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
document.querySelector("#textoFinal").value = textoCifrado; document.querySelector("#textoValor").value;
}

var btn_Desencriptar = document.getElementById("btnDesencriptar");
btn_Desencriptar.onclick = desencriptar;

function copiar(){
    var texto = document.getElementById("textoFinal");
    texto.select();
    texto.setSelectionRange(0, 999999);
    document.execCommand("copy");
    alert("copiado");
}

var btn_Copiar = document.getElementById("btnCopiar");
btn_Copiar.onclick = copiar;