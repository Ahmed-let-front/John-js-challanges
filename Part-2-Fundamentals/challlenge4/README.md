# 🚀 JavaScript Fundamentals – Challenge #4 (The Final Boss)

## 📝 Project Description
This is the final challenge of the JavaScript Fundamentals (Part 2) section. The goal of this project is to consolidate all core programming concepts into a single, functional script: **Arrays**, **Objects**, **Functions**, **Loops**, and complex conditional logic.

## 🛠️ Concepts Applied
* **Function Expressions:** Implementing `calcTip` to determine the tip percentage based on the bill value.
* **Arrays Control:** Managing multiple data sets across `bills`, `tips`, and `totals`.
* **For Loops:** Automating data processing across arrays to adhere to the **DRY (Don't Repeat Yourself)** principle.
* **Accumulator Pattern:** Developing a robust `calcAverage` function using a local `sum` variable to handle mathematical operations dynamically.

---

## 💻 Full Script Execution

```javascript
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

const calcAverage = function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < bills.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const avgTotals = calcAverage(totals);
console.log(avgTotals);