# 🚀 Developer Skills & Editor Setup | Challenge #1

This repository contains my solution for the first coding challenge in the **Developer Skills** section. The goal was to build a forecast string from an array of temperatures while handling potential data issues.

## 📝 Challenge Description

Create a function `printForecast` which takes an array (or multiple arrays) and logs a string to the console with the forecasted temperatures.

**Example Input:** `[17, 21, 23]`
**Example Output:** `... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...`

---

## 🛠️ Concepts Applied

In this challenge, I didn't just solve the basic requirement; I applied advanced JavaScript concepts to make the code robust and professional:

- **Rest Parameters (`...arrays`):** Allows the function to accept an unlimited number of arrays as arguments.
- **Array Flattening (`.flat()`):** Used to merge multiple nested arrays into a single, flat array for processing.
- **Data Validation:** Implemented `typeof` checks to ensure only numbers are processed, skipping any strings or invalid data.
- **Control Flow (`continue`):** Efficiently skips invalid elements without breaking the loop.
- **Template Literals:** Used for clean and readable string concatenation.
- **Debugging:** Used Chrome DevTools and breakpoints to trace the logic and monitor the `sum` variable.

---

## 💻 My Solution

```javascript
const printForecast = function (...arrays) {
  let newArr = arrays.flat();
  let sum = "";

  for (let i = 0; i < newArr.length; i++) {
    // Check if the current element is a valid number
    if (typeof newArr[i] !== "number") {
      console.log(
        `⚠️ Warning: The ${i + 1} element is not a number. Skipping...`,
      );
      continue;
    }

    // Accumulate the string
    sum += `... ${newArr[i]}ºC in ${i + 1} days `;
  }

  console.log(sum + "...");
};

// Testing with multiple arrays and invalid data
const temperatures1 = [17, 21, 23, "ddddd"];
const temperatures2 = [12, 5, -5, 0, 4, "60000"];
const temperatures3 = [7, 7, "Ahmed", 9];

printForecast(temperatures1, temperatures2, temperatures3);
```
