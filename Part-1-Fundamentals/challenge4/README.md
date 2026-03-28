# 💸 JavaScript Fundamentals: Part 1 — Coding Challenge #4

This is the final challenge of the first section of the course. The objective was to build a **Tip Calculator** using the **Conditional (Ternary) Operator** to write cleaner, more concise logic.

---

## 📝 Challenge Description

The task was to calculate the tip based on the following rules:
* If the bill value is between **50 and 300**, the tip is **15%**.
* If the bill is any other value (less than 50 or more than 300), the tip is **20%**.

### ⚠️ Constraints:
* **I am not allowed to use `if/else` statements** for this challenge.
* Use a **Ternary Operator** instead.
* Output must be a single string in the console.

---

## 💻 The Solution (Challenge #4)

```javascript
const bill = 430;

/**
 * Using the Ternary Operator:
 * Condition ? Value_If_True : Value_If_False
 */
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);