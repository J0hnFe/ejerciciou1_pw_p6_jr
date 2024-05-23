// Obtener referencias a los botones y al elemento de mensaje
let mensaje = document.getElementById('mensaje');
let imagenPoke = document.getElementById('imagenPoke');
let txtPuntaje = document.getElementById('txtPuntaje');
let txtIntentos = document.getElementById('txtIntentos');

let intentos = 0;
let puntaje = 0;

function verificar(event) {
    intentos++;
    txtIntentos.innerText = `Intentos: ${intentos}`;

    if (event.target.id === 'btn4') {
        mensaje.innerText = 'Felicitaciones, has seleccionado la opción correcta';
        imagenPoke.src = '../img/pcolor.jpg';
        mensaje.style.background = 'blue'
        mensaje.style.border = 'solid'

        if (intentos === 1) {
            puntaje += 5;
        } else if (intentos === 2) {
            puntaje += 3;
        } else if (intentos === 3) {
            puntaje += 1;
        }

        txtPuntaje.innerText = `Puntaje: ${puntaje}`;

        if (intentos > 3) {
            reiniciar();
        }

    } else {
        mensaje.innerText = 'Incorrecto';
        imagenPoke.src = '../img/pnegro.jpg';
        mensaje.style.background = 'red'
        mensaje.style.border = 'solid'

        if (intentos === 3 || intentos > 3) {
            reiniciar();
        }
    }
}

function reiniciar() {
    mensaje.innerText = '';
    imagenPoke.src = '../img/pnegro.jpg';
    intentos = 0;
    puntaje = 0;
    txtIntentos.innerText = `Intentos: ${intentos}`;
    txtPuntaje.innerText = `Puntaje: ${puntaje}`;
}
