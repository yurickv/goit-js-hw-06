const changeRangeEl = document.querySelector('#font-size-control')
const textSizeEl = document.querySelector('#text')

changeRangeEl.addEventListener('input', changer)

function changer() {
    textSizeEl.style.fontSize = `${changeRangeEl.value}px`
}