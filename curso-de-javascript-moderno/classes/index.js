class Device {
  constructor(name){
    this.name = name
    this.on = false
  }

  turnOn(){
    if(this.on){
      console.log(`${this.name} Já está ligado`)
      return
    }

    this.on = true
  }

  turnOff(){
    if(!this.on){
      console.log(`${this.name} Já está desligado`)
      return
    }

    this.on = false
  }
}

class Smartphone extends Device{
  constructor(name, model, system){
    super(name)
    this.model = model
    this.system = system
    this.fullName = `${name} ${this.model}`
  }
}

const smartphone = new Smartphone('Galaxy', 'S10', 'Android')
console.log(smartphone)