<h1 align="center">📁 Challenge #1: BMI Calculator & Comparison</h1>

<p align="center">
  Goal: Calculate BMI for Mark and John and compare who has a higher value.
</p>

---

## 📝 Problem Description

The objective is to practice basic operators and variables by calculating the **Body Mass Index (BMI)** using the formula:
`BMI = mass / height ** 2`

## 🛠️ Key Concepts Applied

- **Variable Declaration:** Used `const` for fixed values (mass, height) to ensure data integrity.
- **Arithmetic Operators:** Implemented the exponentiation operator (`**`) for calculations.
- **Boolean Logic:** Created logical comparisons (`>`) to determine the result.
- **Data Testing:** Validated logic across multiple data sets (Data 1 & Data 2).

## 💻 Full Solution Code

```javascript
// Data 1
const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;
const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

// BMI Mark & John (Data 1)
console.log(bmiMark, bmiJohn);
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// Data 2
const massMark2 = 95;
const heightMark2 = 1.88;
const bmiMark2 = massMark2 / heightMark2 ** 2;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

// BMI Mark & John (Data 2)
console.log(bmiMark2, bmiJohn2);
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);
```
