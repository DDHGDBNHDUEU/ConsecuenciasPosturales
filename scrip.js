// Lista de frases y respuestas
const frases = [
    { texto: "Mantener una mala postura durante largos periodos puede causar dolores crónicos en la espalda y el cuello.", esVerdadero: true },
    { texto: "Una postura correcta no afecta la respiración ni la digestión.", esVerdadero: false },
    { texto: "Sentarse encorvado durante horas puede llevar a problemas circulatorios.", esVerdadero: true },
    { texto: "El uso de sillas ergonómicas elimina completamente el riesgo de problemas posturales.", esVerdadero: false },
    { texto: "Estar de pie por mucho tiempo sin moverse puede causar hinchazón en las piernas.", esVerdadero: true },
    { texto: "La postura no influye en la fatiga muscular.", esVerdadero: false }
];

let indiceFraseActual = 0;

// Función para mostrar la frase actual
function mostrarFrase() {
    document.getElementById("frase").innerText = frases[indiceFraseActual].texto;
    document.getElementById("resultado").innerText = "";
}

// Función para verificar la respuesta del usuario
function verificarRespuesta(respuestaUsuario) {
    const esCorrecto = respuestaUsuario === frases[indiceFraseActual].esVerdadero;
    const resultado = esCorrecto ? "¡Correcto!" : "Incorrecto. Inténtalo de nuevo.";
    
    document.getElementById("resultado").innerText = resultado;

    if (esCorrecto) {
        indiceFraseActual++;
        if (indiceFraseActual < frases.length) {
            setTimeout(mostrarFrase, 2000); // Muestra la siguiente frase después de 2 segundos
        } else {
            document.getElementById("resultado").innerText = "¡Felicidades! Has completado todas las preguntas.";
        }
    }
}

// Mostrar la primera frase al cargar la página
window.onload = mostrarFrase;
