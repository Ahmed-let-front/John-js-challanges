const temperatures1 = [17, 21, 23, "ddddd"];
const temperatures2 = [12, 5, -5, 0, 4, "60000"];
const temperatures3 = [7, 7, "Ahmed", 9];
const printForecast = function printForecast(...arrays) {
  let newArr = arrays.flat();
  let sum = "";
  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] !== "number") {
      console.log(`The ${i + 1} element is not number`);
      continue;
    }
    sum += `${newArr[i]}C in ${i + 1} days `;
  }
  return console.log(sum);
};
printForecast(temperatures1, temperatures2, temperatures3);
