document.addEventListener("DOMContentLoaded", function () {
    var text = "Arch Linux es una distribución de sistema operativo basada en Linux creada por Judd Vinet en 2002. Se diferencia de otras distribuciones en su enfoque minimalista y su diseño orientado a usuarios avanzados.";
    var typedText = document.getElementById("typed-text");
    var index = 0;

    function typeText() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 30);
        }
    }

    typeText();
});

$(document).ready(function () {
    $('#image-carousel').carousel();
});
