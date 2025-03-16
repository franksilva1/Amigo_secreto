// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

// Esta es la función para agregar nombres

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    // Validación para el botón "Agregar amigo"
    if (!nombreAmigo) {
        alert('Debes introducir un nombre.');
        return;
    }

    // Verificar si el nombre contiene números
    let contieneNumeros = /\d/.test(nombreAmigo);
    if (contieneNumeros) {
        alert('El nombre no puede contener números.');
        return;
    }

    // Verificar si el nombre contiene caracteres especiales

    let contieneCaracteresEspeciales = /[^a-zA-Z\s]/.test(nombreAmigo);
    if (contieneCaracteresEspeciales) {
        alert('El nombre no puede contener caracteres especiales.');
        return;
    }

    // Verificar si el nombre ya está repetido

    if (amigo.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista de amigos.');
        return;
    }

    // Agregar nombres a la lista
    amigo.push(nombreAmigo);
    console.log(amigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    mostrarAmigos();

};

// Muestra la lista 
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
};

// Función de sorteo 
function sortearAmigo() {
    let botonSorteo = document.getElementById('botonSorteo');

    if (amigo.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El Amigo Sorteado es: ${amigoSorteado}.`;

    // Eliminar el amigo sorteado de la lista
    amigo = amigo.filter(amigo => amigo !== amigoSorteado);

    // Mostrar mensaje cuando no queden más amigos secretos
    if (amigo.length === 0) {
        resultado.innerHTML += '<br>Ya no quedan más amigos secretos.';
        // Configurar la acción del botón a reiniciar el juego
        botonSorteo.onclick = reiniciarJuego;
    }

    // Limpiar la lista de amigos
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
};

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar la lista de amigos
    amigo = [];
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Limpiar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';  // Limpiar campo de entrada
}
