// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const opcionTecla = document.getElementById("amigo");
opcionTecla.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
function agregarAmigo() {
    let agregarNombreAmigos = document.getElementById(`amigo`).value.trim(); 
    
    if (agregarNombreAmigos == ``){
        alert("Por favor inserte un nombre");
        return;
    }
    let recibirLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!recibirLetras.test(agregarNombreAmigos)){
        alert("Por favor ingrese un nombre valido")
        document.getElementById("amigo").value = "";
        return;
    }
    if (amigos.includes(agregarNombreAmigos)){
        alert("Este nombre ya esta agregado")
        document.getElementById("amigo").value = "";
        return;
    }
    amigos.push(agregarNombreAmigos);
    document.querySelector(`#amigo`).value =``;
    console.log(amigos);

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

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    console.log("Juego reiniciado");
}
