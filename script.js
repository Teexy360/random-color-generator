//RGB OR HEX OPTION

function buttonRgb() {
  let displayRgb = document.getElementById('displayRgb')
  displayRgb.style.display = 'block'

  let displayHex = document.getElementById('displayHex')
  displayHex.style.display = 'none'
}

function buttonHex() {
  let displayHex = document.getElementById('displayHex')
  displayHex.style.display = 'block'

  let displayRgb = document.getElementById('displayRgb')
  displayRgb.style.display = 'none'
}

// CODE RGB

function clickRgb() {
  let r = parseInt(Math.random() * 256)
  let g = parseInt(Math.random() * 256)
  let b = parseInt(Math.random() * 256)

  let  cor = document.querySelector('body')
  cor.style.backgroundColor = "Rgb(" + r +',' + g + ',' + b + ')'
  
  document.getElementById('codeRgb').innerHTML = "Rgb: " + "(" + r +', ' + g + ', ' + b + ')'
}

//CODE HEX

function clickHex(){
  let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
  let value = ''
  let i = 0

  while(i < 6){
    let random = parseInt(Math.random() * 16)
    value += hex[random]
    i++
  }

  let  cor = document.querySelector('body')
  cor.style.backgroundColor = "#" + value
  
  document.getElementById('codeRgb').innerHTML = "Hex: " + "#" + value
}

