let numbers = [3, 3, 2, 1, 3, 2, 1];

const OrderArray = (arrayNumbers) => {
  const l = arrayNumbers.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arrayNumbers[j] > arrayNumbers[j + 1]) {
        [arrayNumbers[j], arrayNumbers[j + 1]] = [
          arrayNumbers[j + 1],
          arrayNumbers[j],
        ];
      }
    }
  }

  return arrayNumbers;
};

console.log(OrderArray(numbers));
