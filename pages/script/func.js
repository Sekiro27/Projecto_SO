document.addEventListener("DOMContentLoaded", function () {
    var text = "Arch Linux es una distribución GNU/Linux de propósito general, desarrollada independientemente para x86-64, que se esfuerza por proporcionar las últimas versiones estables de la mayoría del software, siguiendo un modelo de lanzamiento continuo (rolling-release).";
    var typedText = document.getElementById("typed-text");
    var index = 0;

    function typeText() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            // Añade la justificación a medida que se escribe
            typedText.style.textAlign = "justify";
            setTimeout(typeText, 10);
        }
    }

    typeText();
});

$(document).ready(function () {
    $('#image-carousel').carousel();
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })