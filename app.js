/* contador inicial */
let contador = 0
const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const style = e.currentTarget.classList
    if (style.contains('decrease')) {
      contador--
    } else if (style.contains('increase')) {
      contador++
    } else {
      contador = 0
    }
    if (contador > 0) {
      value.style.color = 'green'
    }
    if (contador < 0) {
      value.style.color = 'red'
    }
    if (contador === 0) {
      value.style.color = '#222'
    }
    value.textContent = contador
  })
})
