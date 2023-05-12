// -> Encriptar
var soloLetras = /^[a-z \s\n]+$/; 
function encriptar (){
    var texto = document.querySelector("#textoValor").value;
    soloLetras = /^[a-z \s\n]+$/; 
    if (soloLetras.test(texto)) { 
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#textoFinal").value = textoCifrado;
        document.querySelector("#textoValor").value;
    }else{
        $('.orange-alert').addClass("orange-show");
        $('.orange-alert').removeClass("orange-hide");
        $('.orange-alert').addClass("orange-showAlert");
        setTimeout(function(){
            $('.orange-alert').removeClass("orange-show");
            $('.orange-alert').addClass("orange-hide");
            },3000);
        $('.orange-close-btn').click(function(){
            $('.orange-alert').removeClass("orange-show");
            $('.orange-alert').addClass("orange-hide");
            });
    }
}
var btn_Encriptar = document.getElementById("btnEncriptar");
btn_Encriptar.onclick = encriptar;

// -> Desencriptar
function desencriptar (){ 
  var texto = document.querySelector("#textoValor").value;
  soloLetras = /^[a-z \s\n]+$/; 
  if (soloLetras.test(texto)) { 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#textoFinal").value = textoCifrado; document.querySelector("#textoValor").value;
  }else{
      $('.orange-alert').addClass("orange-show");
      $('.orange-alert').removeClass("orange-hide");
      $('.orange-alert').addClass("orange-showAlert");
      setTimeout(function(){
          $('.orange-alert').removeClass("orange-show");
          $('.orange-alert').addClass("orange-hide");
          },3000);
      $('.orange-close-btn').click(function(){
          $('.orange-alert').removeClass("orange-show");
          $('.orange-alert').addClass("orange-hide");
          });
  }
}

var btn_Desencriptar = document.getElementById("btnDesencriptar");
btn_Desencriptar.onclick = desencriptar;

// -> Copiar
function copiar(){
        $('.green-alert').addClass("green-show");
        $('.green-alert').removeClass("green-hide");
        $('.green-alert').addClass("green-showAlert");
        setTimeout(function(){
          $('.green-alert').removeClass("green-show");
          $('.green-alert').addClass("green-hide");
        },3000);
      ;
      $('.green-close-btn').click(function(){
        $('.green-alert').removeClass("green-show");
        $('.green-alert').addClass("green-hide");
      });
    var texto = document.getElementById("textoFinal");
    navigator.clipboard.writeText(texto.value);
}
var btn_Copiar = document.getElementById("btnCopiar");
btn_Copiar.onclick = copiar;

// -> Borrar
function borrar(){
    formInput.reset();
    formOutput.reset();
}
var btn_Borrar = document.getElementById("btnBorrar");
var formInput = document.getElementById("form-input");
var formOutput = document.getElementById("form-output");
btn_Borrar.onclick = borrar;