let firstNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let secondNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {

  
    if (number < 10) {
        return firstNumber[number];
    } 
    else if (number < 100) {
        return twoValue(number);
    }
    else {
        return threeValue(number);
    }

}


const twoValue = function (number) {
    let decade = Math.trunc(number / 10);
    let lastNumber = number % 10;
  
    if (decade === 1) {
        return secondNumber[lastNumber];
    }
    else if (lastNumber === 0) {
        return dozens[decade];
    }
    else {
        return dozens[decade] + ' ' + firstNumber[lastNumber];
    }
  }

  const threeValue = function (number) {
    let hundredNumber = Math.trunc(number / 100);
    let decade = (Math.trunc(number / 10)) % 10;
    let lastNumber = number % 10;

    if ((lastNumber === 0) && (decade === 0)) {
        return firstNumber[hundredNumber]  + ' hundred';
    }
    else if (decade === 0) {
        return firstNumber[hundredNumber] + ' hundred ' + firstNumber[lastNumber];
    }
    else if (decade === 1) {
        return (firstNumber[hundredNumber] + ' hundred ' + secondNumber[lastNumber]);
    }
    else if (lastNumber === 0) {
        return (firstNumber[hundredNumber] + ' hundred ' + dozens[decade]);
    }
    else {
        return (firstNumber[hundredNumber] + ' hundred ' + dozens[decade] + ' ' + firstNumber[lastNumber]);
    }
  }