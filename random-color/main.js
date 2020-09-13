const button = document.querySelector('button')

function randomColor(){
  const options = '0123456789ABCDEF'
  let color = '#'

  for(let i = 0; i < 6; i++){
    color += options[Math.floor(Math.random() * 16)]
  }

  return color
}

function setColors(){
  let color = randomColor()

  document.body.style.backgroundColor = color
  button.innerText = color
  button.style.color = color
}

button.addEventListener('click', setColors)
