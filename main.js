// variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleEnterKeydown);

// callback function
function handleTryClick(event) {
  event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerText = `You got it right in \n ${xAttempts} attempts`
  } else if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
    inputNumber.value = ''
     xAttempts++
  }
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleEnterKeydown(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide'))
    handleTryClick();
}