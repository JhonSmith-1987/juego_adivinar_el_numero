document.getElementById('btn_iniciar').addEventListener('click', iniciar);

function iniciar() {
    let vidas = 8;
    let adivinar = Math.round(Math.random()*100+1);
    console.log(adivinar);
    while (vidas > 0) {
        numero = parseInt(prompt('Te quedan ' + vidas + 'vidas, ingresa un numero del 1 al 100'));
        if (numero === adivinar) {
            alert('Felicidades has ganado con el numero ' + adivinar);
            break;
        }
        if (numero < adivinar) {
            alert('Lo siento el numero que pese es mayor al tuyo, vuele a intentarlo');
        }
        if (numero > adivinar) {
            alert('Lo siento el numero que pese es menor al tuyo, vuele a intentarlo');
        }
        vidas--
    }
    if (vidas === 0) {
        alert('Lo siento has perdido, el numero que pense era' + adivinar + 'en otra ocasion sera');
    }
}