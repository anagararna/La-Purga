let logo = document.querySelector(".boton_logo")

    logo.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "/audio/audioIndex.mp3")
      etiquetaAudio.play()
    })

    

