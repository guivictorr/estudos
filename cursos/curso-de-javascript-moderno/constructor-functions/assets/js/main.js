function Calculator(){
    this.display = document.querySelector('.display')

    this.setup = function(){
      this.keyPressed()
    }

    this.clearDisplay = function(){
      display.value = ''
    }
    
    this.clearOneValue = function(){
      display.value = display.value.slice(0, -1)
    }
    
    this.updateDisplay = function(value){
      display.value += value
    }

    this.equal = function(){
      try{
        const result = eval(display.value)
        display.value = result
      } catch(error){
        alert('Conta inválida')
        display.value = ''
      } 
    }

    this.keyPressed = function(){
      document.addEventListener('click', function(event) {
        const element = event.target;

        if(element.classList.contains('btn-num')) this.updateDisplay(element.innerText)
        
        if(element.classList.contains('btn-clear')) this.clearDisplay()
        
        if(element.classList.contains('btn-del')) this.clearOneValue()
        
        if(element.classList.contains('btn-eq')) this.equal()
        
      }.bind(this))
    }
}

const calculator = new Calculator();
calculator.setup()