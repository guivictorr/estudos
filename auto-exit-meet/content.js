const timeout = setInterval(verifyPage, 8000)

function verifyPage(){
    const body = document.querySelector('.SSPGKf')
    if(!body.classList.contains('zKHdkd')) {
        createButton()
        clearInterval(timeout)
        console.log('Botão criado 🎉')
    }
}

function createButton(){
    const startBot = document.createElement('div')
    const buttonElement = document.createElement('button')
    const buttonText = document.createTextNode('INICIAR')

    buttonElement.appendChild(buttonText)
    buttonElement.classList.add('button')
    buttonElement.addEventListener('click', imSpleepingBot)

    startBot.classList.add('container')
    startBot.appendChild(buttonElement)

    document.querySelector('.NzPR9b').appendChild(startBot)
}

function imSpleepingBot(){
    const exitInput = prompt('Abaixo de quantas pessoas devo sair.')
    document.querySelector('.uArJ5e.UQuaGc.kCyAyd.kW31ib.foXzLb.IeuGXd').click()
    const disconnectButton = document.querySelector('.GaONte') 
    const members = document.querySelector('.TnISae.CnDs7d.hPqowe.crOkHf').childNodes
    
    const interval = setInterval(autoExit, 3000)
    function autoExit(){
        if(members.length < `${Number(exitInput) + 3}`){
            disconnectButton.click()
            clearInterval(interval)
            console.log('Desconectado automaticamente 🎉')
        }else{
            console.log(`Ainda temos ${members.length - 3} alunos na sala ⌛.`)
        }
    }
}

