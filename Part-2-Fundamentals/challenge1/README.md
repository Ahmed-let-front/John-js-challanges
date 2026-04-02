# 🏆 JavaScript Fundamentals – Part 2

## Challenge #1: Gymnastics Teams (Dolphins vs. Koalas)

***

## 📑 Description

This is the first challenge of **Part 2** in the JavaScript course. The goal was to practice **Arrow Functions**, **Parameters**, and **Function-to-Function communication**.

The logic determines a winner based on whether one team's average score is at least **double** the other team's average.

***

## 🛠️ Concepts Covered

* **Arrow Functions:** Used for the concise `calcAverage` logic.
* **Data Flow:** Passing results from one function as arguments to another.
* **Comparison Logic:** Implementing the "Double Score" victory condition.
* **Dynamic Strings:** Using Template Literals for the console output.

***

## 💻 Code Implementation

```javascript
// Function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// --- TEST DATA 1 ---
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// Optional: Console log for testing/debugging purposes (Not part of the actual solution logic)
console.log(scoreDolphins, scoreKoalas);

/**
 * Function to check the winner based on the "Double Score" rule
 */
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

// Check winner for Data 1
checkWinner(scoreDolphins, scoreKoalas);

// --- TEST DATA 2 ---
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

// Check winner for Data 2
checkWinner(scoreDolphins, scoreKoalas);
