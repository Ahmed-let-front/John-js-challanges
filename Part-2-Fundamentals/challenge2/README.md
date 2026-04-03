# Coding Challenge #2 - Tip Calculator (Arrays)

### 📌 Project Overview

In this challenge, we built a more advanced **Tip Calculator** using JavaScript fundamentals. The goal was to practice using **Arrow Functions**, **Ternary Operators**, and **Arrays** to manage multiple pieces of data efficiently.

---

### 💻 JavaScript Logic

The solution focuses on two main concepts:

1.  **Logical Branching:** Using a ternary operator to decide between 15% and 20% tips.
2.  **Data Structures:** Storing inputs, calculated tips, and final totals in separate arrays.

```javascript
"use strict";

// 1. Function to calculate the tip based on the bill value
// Rules: 15% if 50 <= bill <= 300, otherwise 20%
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Testing the function with a single value
const theTip = calcTip(100);
console.log(theTip); // Output: 15

// 2. Initializing the bills array with test data
const bills = [44, 555, 125];

// 3. Generating the tips array by calling the function for each bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 4. Calculating total values (Bill + Tip) and storing them in an array
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Final Output
console.log(bills, tips, totals);
```
