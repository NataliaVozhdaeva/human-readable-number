module.exports = function toReadable(number) {
  const numberToWork = number.toString();
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const findDozens = (numberToWork) => {
    let num = numberToWork.charAt(1);
    return num == 0 ? dozens[numberToWork.charAt(0) - 1] : dozens[numberToWork.charAt(0) - 1] + ' ' + digits[numberToWork % 10];
  };

  const findNumberLength = () => {
    if (numberToWork.length == 2) {
      return findDozens(numberToWork);
    } else if (numberToWork.length == 3) {
      if (numberToWork.slice(1) == '00') {
        return digits[numberToWork.charAt(0)] + ' hundred';
      } else if (numberToWork.slice(1) > 19 || numberToWork.slice(1) == 10) {
        return digits[numberToWork.charAt(0)] + ' hundred ' + findDozens(numberToWork.slice(1));
      } else {
        return digits[numberToWork.charAt(0)] + ' hundred ' + findUnicNamed(numberToWork.slice(1));
      }
    } else {
      return digits[number];
    }
  };

  const findUnicNamed = (num) => {
    return num > 10 ? teens[(num % 10) - 1] : num.toString().length == 1 ? digits[num] : digits[num.charAt(1)];
  };

  if (number % 10 === 0) {
    return findNumberLength();
  } else {
    return number > 19 ? findNumberLength() : findUnicNamed(number);
  }
};
