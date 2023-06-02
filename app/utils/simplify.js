function simplify(number) {
  const persianDigits = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹'
  }

  const num = number / 1000000

  return String(num).replace(/\d/g, match => persianDigits[match])
}

export default simplify
