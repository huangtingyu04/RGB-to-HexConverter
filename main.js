; (function () {

  const inputs = document.querySelectorAll('input')
  const hexValue = document.querySelector('.hex-value')

  let red = '00'
  let green = '00'
  let blue = '00'

  function changeHandler(e) {
    if (e.target.name) {
      e.target.nextElementSibling.innerText = this.value
    }

    //RGB to hex
    let RGB2hex = Number(this.value).toString(16)
    if (RGB2hex.length < 2) {
      RGB2hex = '0' + RGB2hex
    }
    switch (this.name) {
      case 'red':
        red = RGB2hex
        break
      case 'green':
        green = RGB2hex
        break
      case 'blue':
        blue = RGB2hex
        break
    }
    let hexColor = '#' + red + green + blue
    document.documentElement.style.background = hexColor
    hexValue.innerText = hexColor
  }
  inputs.forEach(input => {
    input.addEventListener('input', changeHandler)
  })
})()