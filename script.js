//Caso base
const arreglo = [];
var contenedor = document.getElementById('div');
alert('La lista se registrará en un html despues de terminar de ingresar todos los nombres. La lista también se puede ver en la consola');
const texto0 = prompt('Escribe un nombre');

if (texto0 == ' ') {
    alert('Es una cadena vacía');
} else if (texto0 === null) {
    alert('Debes presionar la tecla espacio para salir del programa');
} else {
    arreglo.push('<h3> ' + texto0 + '</h3>');
    contenedor.innerHTML = arreglo
    console.log(arreglo);
}

//Caso n



//FUNCIONES

//Dice si el texto es un espacio
function textoVacio(texto) {
    let vacio = false;
    if (texto == ' ') {
        alert('Se terminó la lista');
        vacio = true;
    }
    return vacio;
}

//Dice si el nombre está repetido en el arreglo

function repetidos(arreglo, texton) {
    let nombreRep = "";
    let loop = true;
    let repetido = false;
    let i = 0;

    do {
        if (arreglo[i] == '<h3> ' + texton + '</h3>') {
            nombreRep = texton;
            alert('" ' + nombreRep + '"' + ' ya está en la lista');
            repetido = true
        } else if (i + 1 == arreglo.length) {
            loop = false;
        } else {
            i++;
        }
    } while (!repetido && loop);
    return repetido;
}

function listaNombres() {
    let loop = true;
    do {
        const texton = prompt('Escribe un nombre');
        const esVacio = textoVacio(texton);
        if (esVacio) {
            loop = false;
        } else if (texton === null) {
            alert('Debes presionar la tecla espacio para salir del programa');
        } else if (!repetidos(arreglo, texton)) {
            arreglo.push('<h3> ' + texton + '</h3>');
            contenedor.innerHTML = arreglo;
            arreglo.sort();
            console.log(arreglo);
        }

    }
    while (loop)

}

listaNombres();