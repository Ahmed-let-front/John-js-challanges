# Challenge #2: BMI Comparison with Template Literals

### 🚀 Overview
Building upon the BMI calculator challenge by adding `if/else` logic and formatting the output using **ES6 Template Literals**.

### 💻 Code Implementation

```javascript
// Data 1
const massMark = 78;
const heightMark = 1.69;
const bmiMark= massMark / (heightMark * heightMark);
const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark);
console.log(bmiJohn)

/* Write your code below. Good luck! 🙂 */
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}