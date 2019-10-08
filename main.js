var btnConvertir = document.querySelector('#btnConvertir')
var btnSueldo = document.querySelector('#btnSueldo')
var btnBoletos = document.querySelector('#btnBoletos')

btnBoletos.addEventListener('click', () => {
  const GENERAL = 500
  const PLATA = 750
  const ORO = 1000
  const VIP = 1500

  let num = Number(document.querySelector('#boletos').value)
  let sec = document.querySelector('#seccion').value.toLowerCase()
  let gen = document.querySelector('#genero').value.toLowerCase()
  let res = document.querySelector('#resultado3')

  res.value = ''

  let costo = 0

  switch (sec) {
    case 'general':
      costo = num * GENERAL
      break
    case 'plata':
      costo = num * PLATA
      break
    case 'oro':
      costo = num * ORO
      break
    case 'vip':
      costo = num * VIP
      break
    default:
      res.value = 'Sección no válida'
  }

  let desc = 0

  if (gen === 'femenino' && num >= 5) {
    desc = costo * 0.15
  } else if (gen === 'masculino' && num >= 3) {
    desc = costo * 0.1
  } else {
    desc = 0
  }

  if (res.value === '') {
    res.value = '$' + (costo - desc)
  }
})

btnSueldo.addEventListener('click', () => {
  const HORA_SRV = 75
  const HORA_ADM = 125

  let usr = document.querySelector('#usuario').value
  let psw = document.querySelector('#clave').value
  let hrs = Number(document.querySelector('#horas').value)
  let res = document.querySelector('#resultado2')

  if (usr === 'user' && psw === '12A34') {
    res.value = '$' + hrs * HORA_SRV
  } else if (usr === 'admin' && psw === '76Z64') {
    res.value = '$' + hrs * HORA_ADM
  } else {
    res.value = 'Datos incorrectos'
  }
})

btnConvertir.addEventListener('click', () => {
  const DOLAR = 19.91
  const EURO = 21.95

  let inpRes = document.querySelector('#resultado1')
  let pesos = Number(document.querySelector('#pesos').value)
  let resultado = 0

  if (pesos % 2 === 0) {
    resultado = pesos / DOLAR
    inpRes.value = '$' + resultado.toFixed(2) + ' dólares'
  } else {
    resultado = pesos / EURO
    inpRes.value = '$' + resultado.toFixed(2) + ' euros'
  }
})
