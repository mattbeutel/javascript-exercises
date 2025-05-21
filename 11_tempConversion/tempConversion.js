const convertToCelsius = function(temp) {
  let res = (temp-32)*(5/9);
  res *= 10;
  res -= (res%1);
  if (res % 10 >= 5) {
    res += 1;
  }
  res /= 10;
  return res;
};

const convertToFahrenheit = function(temp) {
  let res = temp*(9/5)+32;
  res *= 10;
  res -= (res%1);
  if (res % 10 >= 5) {
    res += 1;
  }
  res /= 10;
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
