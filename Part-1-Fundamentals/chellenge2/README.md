# Challenge #2: BMI Comparison with Template Literals

### 🚀 Overview
Building upon the BMI calculator challenge by adding `if/else` logic and formatting the output using **ES6 Template Literals**.

### 💻 Code Implementation

```javascript
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBmi = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (markHigherBmi) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} 
else {
  console.log(`"John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!"`)
}
