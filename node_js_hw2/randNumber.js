const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generator(length) {
  let kit = "";
  for (let i = 0; i < length; i++) {
    const max = new Date().getTime();
    const randomNumber = random(0, max);
    const randIndex = random(0, randomNumber.toString().length - 1);
    kit += randomNumber.toString()[randIndex];
  }
  return kit;
}

const replaceFirstZero = (value) => {
  if (value.charAt(0) === "0") {
    value = value.replace(0, random(1, 9).toString());
  }
  return value;
};

function getRandomNumber(length, type = false) {
  if (!type) {
    return generator(length);
  } else if (length <= 16) {
    return Number(replaceFirstZero(generator(length)));
  } else {
    return BigInt(replaceFirstZero(generator(length)));
  }
}

module.exports = { getRandomNumber };
