let boton = document.querySelector(".boton_logo")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "/audio/audioIndex.mp3")
      etiquetaAudio.play()
    })
