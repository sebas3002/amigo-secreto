// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let agregarNombreAmigos = document.getElementById(`amigo`).value; 
    if (agregarNombreAmigos == ``){
        alert("Por favor inserte un nombre");
    }
    else{
        amigos.push(agregarNombreAmigos);
        document.querySelector(`#amigo`).value =``;
        console.log(amigos);
    }
    listaAgregarNombre();

}

function listaAgregarNombre() {
    let listaNombres = document.getElementById(`listaAmigos`);
    listaNombres.innerHTML ="";
    for (let i =0; i < amigos.length; i++){
        let elementoNombreLista = document.createElement(`li`);
        elementoNombreLista.innerHTML = amigos[i]
        listaNombres.append(elementoNombreLista);
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Ingrese un minimo de amigos");
    }
    else {
        let sortedoAmigosAzar = Math.floor(Math.random()*amigos.length);
        console.log(sortedoAmigosAzar);
        let obtenerNombreAmigo = amigos[sortedoAmigosAzar];
        console.log(obtenerNombreAmigo);
        let mostrarAmigoSorteado = document.getElementById(`resultado`);
        mostrarAmigoSorteado.innerHTML = obtenerNombreAmigo

        
        

    }
}
