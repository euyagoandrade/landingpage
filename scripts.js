function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    html.classList.remove('light')
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando oculos transparente e jaqueta preta.")
  } else {
    html.classList.add('light')
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando oculos escuros e jaqueta preta.")
  }
  /* Pode colocar tambem da seguinte maneira: html.classList.toggle('light') */
}


