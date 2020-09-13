const text = 'Estou estudando javascript'
let index = 0

function writeText(){
  let writedText = text.slice(0, index)
  document.body.innerHTML = `<p>${writedText}_</p>`

  index++

  if (index > text.length) {
    index = 0
  }
}

setInterval(writeText, 100)