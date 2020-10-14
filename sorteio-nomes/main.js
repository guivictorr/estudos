const chkSection = document.querySelector('#names')
const button = document.querySelector('button')
const display = document.querySelector('p')
const names = ['Guilherme', 'Adélia', 'Ana Clara', 'Aryana', 'Beatriz Ferraz', 'Beatriz Viana', 'Clarisse', 'Daniela', 'Jane Flávia', 'Jeferson', 'Kaylane', 'Lucas', 'Mateus', 'Mayara', 'Pedro', 'Raquel', 'Sofia', 'Tiago', 'Erick', 'Davi', 'Kaio', 'João']

names.sort()

function renderCheckBox(text){
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = text;
  checkbox.value = text;
  checkbox.id = text;
  checkbox.checked = true

  if(checkbox.checked && !names.includes(text)){
    names.push(text)
  }

  checkbox.addEventListener('click', event => {
    const index = names.indexOf(checkbox.value)

    if(!checkbox.checked && index !== -1) {
      names.splice(index, 1)
      console.log(names , index)
      return
    } else {
      names.unshift(checkbox.value)
      console.log(names,index)
    }
  })

  var label = document.createElement('label')
  label.htmlFor = "id";
  label.appendChild(document.createTextNode(text));

  chkSection.appendChild(checkbox)
  chkSection.appendChild(label);
}

for(let name of names) {
  renderCheckBox(name)
}
display.innerHTML = names[Math.floor(Math.random()*names.length + 1)]

button.addEventListener('click', event => {

  if(names.length === 0) {
    display.innerHTML = 'Selecione um nome'
    return
  }

  display.innerHTML = names[Math.floor(Math.random()*names.length)]
  console.log(display.innerText)
})



