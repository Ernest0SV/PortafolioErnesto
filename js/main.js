// efecto de borrado de frases
document.addEventListener('DOMContentLoaded', function() {
    var phrases = ["Web Developer", "Java Fullstack", "Tech Geek"]; // Lista de frases a mostrar
    var index = 0; // Índice actual de la frase
    var fraseElement = document.getElementById('frase');

    function writeAndErase() {
        var phrase = phrases[index];
        var chars = phrase.split('');
        fraseElement.textContent = '';

        // Escribir la frase
        chars.forEach(function(char, i) {
            setTimeout(function() {
                fraseElement.textContent += char;
            }, 100 * i);
        });

        // Borrar la frase después de un tiempo
        setTimeout(function() {
            erase();
        }, 100 * chars.length + 1000); // Espera 1 segundo después de escribir toda la frase
    }

    function erase() {
        var text = fraseElement.textContent;
        var chars = text.split('');

        // Borrar la frase
        chars.forEach(function(char, i) {
            setTimeout(function() {
                chars.pop();
                fraseElement.textContent = chars.join('');
            }, 50 * (chars.length - i));
        });

        // Mostrar la siguiente frase después de un tiempo
        setTimeout(function() {
            index = (index + 1) % phrases.length;
            writeAndErase();
        }, 50 * chars.length + 500); // Espera 0.5 segundos después de borrar toda la frase
    }

    // Iniciar el ciclo de escribir y borrar frases
    writeAndErase();
});