

function insertarNombre(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    if (nombre == "")
        alert("Debes añadir tu nombre")
    let opcion = "<li> " + nombre + "</li>";
    let lista = document.getElementById("lista-nombres");
    lista.innerHTML += opcion;
    coders.push(nombre)
}

function resetearLista(event) {
    HTMLFormElement.reset()

    let resetear = document.getElementById(nombre).reset();
}

let asesinos = ["images/asesinos/abuelo.png", "images/asesinos/caminante.png", "images/asesinos/caroline.png", "images/asesinos/del-pozo.png", "images/asesinos/elon.png", "images/asesinos/fredy.png", "images/asesinos/patricio.png", "images/asesinos/planta.png", "images/asesinos/trump.png", "images/asesinos/vold.png"]
let muertes = ["images/Muertes/briefing.jfif", "images/Muertes/cosquillas.jfif", "images/Muertes/donunts.jfif", "images/Muertes/git.jfif", "images/Muertes/js.jfif", "images/Muertes/luz.jfif", "images/Muertes/maceta.jfif", "images/Muertes/montaña.jfif", "images/Muertes/platano.jfif", "images/Muertes/wc.jfif"]
let coders = []
let cadaveres = []

function checkNotRepeat(coder, lista) {
    return lista.includes(coder)
}

/* function eliminarMuerta(asesinada) {
    let lista_derecha = document.querySelectorAll("li");
    console.log(lista_derecha)
    for (let i in lista_derecha) {
        if (asesinada == muerta) {
            i.remove()
            /*         let lista = document.getElementById("lista-nombres");
                    lista.innerHTML -= opcion; */
//         }
//         else { }
//     }
// }  


function killSomeone(event) {
    event.preventDefault();

    let indiceAsesinos = Math.floor(Math.random() * 9);
    document.getElementById("asesinos").src = asesinos[indiceAsesinos]

    let indiceMuertes = Math.floor(Math.random() * 9);
    document.getElementById("muertes").src = muertes[indiceMuertes]

    let indiceCoders = Math.floor(Math.random() * coders.length);
    let muerta = coders[indiceCoders]

    muerta_repetida = checkNotRepeat(muerta, cadaveres)
    if (!muerta_repetida) {
        cadaveres.push(muerta)
        console.log(cadaveres)
        document.getElementById("coders").textContent = muerta

        let cadaver = document.getElementById("lista-muertas");
        let lista_muerta = "<li> " + muerta + "</li>";
        cadaver.innerHTML += lista_muerta
        //eliminarMuerta(muerta)
    }
    else { }
}  
