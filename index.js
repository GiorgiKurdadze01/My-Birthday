const cardEl = document.querySelector('.hb-card')
const wrongEl = document.querySelector('.hb-wrongTime')
const audio = document.querySelector('.hb-audio')
const cameraEl = document.querySelector('.hb-story')
const buttonEl = document.querySelector('.hb-button')
const inputEl = document.querySelector('.hb-inputName')
let nameEl = false

function congrats() {
    getValue()
    showHbdCard()
}
function getValue() {
    let val = document.querySelector('.hb-inputName').value
    let hbNameEl = document.querySelector('.hb-name')
    hbNameEl.innerHTML = val
    if (val != false) {
        nameEl = true;
    }
}
function showHbdCard() {
    if (new Date().getDate() === 8 && new Date().getMonth() + 1 === 12) {
        if (nameEl == true) {
            cardEl.classList.add('hb-open')
            cardEl.classList.remove('hb-card')
            audio.play();
            cameraEl.style.display = 'none'
            buttonEl.style.display = 'none'
            inputEl.style.display = 'none'
            wrongEl.style.display = 'none'
        } else {
            wrongEl.innerHTML = 'Pleas input your name first'
            wrongEl.style.display = 'flex'
        }

    } else {
        wrongEl.innerHTML = "It's Too early please wait until 8 December"
        wrongEl.style.display = 'flex'
    }

}



