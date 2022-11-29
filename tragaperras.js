

function insertarNombre(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if(nombre == "")
        alert("Debes añadir tu nombre")
    let opcion = "<li> " + nombre + "</li>";

    let lista = document.getElementById("lista-nombres");
    
    lista.innerHTML += opcion;

}

function resetearLista(event){
    HTMLFormElement.reset()

    let resetear = document.getElementById(nombre).reset();
}