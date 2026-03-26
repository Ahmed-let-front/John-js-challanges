# 🏆 Coding Challenge #3: Gymnastics Competition

This challenge focuses on using **Arithmetic Operators**, **Template Literals**, and **Conditional Statements (if/else)** in JavaScript to determine the winner of a gymnastics competition.

---

## 📝 Challenge Description
Two teams, the **Dolphins** and the **Koalas**, compete against each other in 3 rounds. The winner is determined by calculating the average score of each team and comparing them.

### Skills Applied:
* **Arithmetic Operators**: Calculating the mean score.
* **Method Handling**: Using `.toFixed(1)` for precision and the unary plus `+` for type conversion.
* **Control Flow**: Implementing `if`, `else if`, and `else` logic.
* **Comparison Operators**: Using `>` and `===` to evaluate results.

---

## 🚀 The Solution

```javascript
// 1. Calculate average scores for both teams
// Use .toFixed(1) to round to one decimal place and (+) to convert back to Number
const scoreDolphins = +((96 + 108 + 89) / 3).toFixed(1);
const scoreKoalas = +((88 + 91 + 110) / 3).toFixed(1);

console.log(`Dolphins average: ${scoreDolphins}`);
console.log(`Koalas average: ${scoreKoalas}`);

// 2. Compare scores to determine the winner
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy 🤝");
}