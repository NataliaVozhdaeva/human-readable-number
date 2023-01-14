module.exports = function toReadable(number) {
  const numberToWork = number.toString();
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const findDozens = (num) => {
    return dozens[num - 1];
  };

  if (number % 10 === 0) {
    if (numberToWork.length === 2) {
      return findDozens(numberToWork.charAt(0));
    } else {
      return numberToWork.charAt(1) == 0
        ? digits[numberToWork.charAt(0)] + ' hundred'
        : digits[numberToWork.charAt(0)] + ' hundred ' + findDozens(numberToWork.charAt(1));
    }
  }
};
