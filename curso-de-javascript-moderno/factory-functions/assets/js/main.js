function setupCalculator(){
  return {
    display: document.querySelector('.display'),

    setup(){
      this.keyPressed()
    },

    clearDisplay(){
      this.display.value = ''
    },
    
    clearOneValue(){
      this.display.value = this.display.value.slice(0, -1)
    },
    
    updateDisplay(value){
      this.display.value += value
    },

    equal(){
      try{
        const result = eval(this.display.value)
        this.display.value = result
      } catch(error){
        alert('Conta inválida')
        this.display.value = ''
      } 
    },

    keyPressed(){
      document.addEventListener('click', function(event) {
        const element = event.target;

        if(element.classList.contains('btn-num')) this.updateDisplay(element.innerText)
        
        if(element.classList.contains('btn-clear')) this.clearDisplay()
        
        if(element.classList.contains('btn-del')) this.clearOneValue()
        
        if(element.classList.contains('btn-eq')) this.equal()
        
      }.bind(this))
    },

  }
}

const calculator = setupCalculator()
calculator.setup()