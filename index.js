const sum = (num, num2) => {
  if(num < 5){
    return console.log('Please choose a higher number')
  }
  return `Your sum is ${num + num2}`
}

module.exports = sum