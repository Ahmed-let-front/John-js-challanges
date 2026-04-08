# ⏱️ Freelance Time Tracker Logic | Challenge #2

This challenge focuses on building an analytical function for a freelance application to process weekly work hours and return a comprehensive summary object.

## 📝 Challenge Description
The goal is to create a function `calcJobHoursInWeek` that can receive multiple arrays of daily work hours and calculate:
1. Total hours worked.
2. The maximum hours worked in a single day.
3. The minimum hours worked (excluding zero/off days).
4. Average daily hours.
5. Total count of days worked.
6. Full-time status (Total >= 35 hours).

---

## 🛠️ Concepts Applied

* **Rest Parameters (`...arrays`):** To handle any number of weekly arrays passed to the function.
* **Array Flattening (`.flat()`):** Merging all inputs into one linear array for processing.
* **Data Sanitization:** Using `typeof` to skip non-number values and ensure calculation accuracy.
* **Smart Conditionals:** Implementing a clean boolean check for the `fullTime` status.
* **Ternary Operators:** Used in the return object to handle default values and avoid `Infinity` results.

---

## 💻 My Implementation (With Logic Breakdown)

```javascript
const jobHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const jobHours2 = [8, 9, 10, 0, 9];

const calcJobHoursInWeek = function calcJobHoursInWeek(...arrays) {
  // 1. Merge all input arrays into one single flat array
  const newArr = arrays.flat();
  
  // 2. Initialize tracking variables
  let total = 0;
  let max = -Infinity; // Starting with the lowest possible value
  let min = Infinity;  // Starting with the highest possible value
  let dayesWorked = 0;

  for (let i = 0; i < newArr.length; i++) {
    const hours = newArr[i];
    
    // 3. Skip non-number values to prevent errors (Data Validation)
    if (typeof hours !== "number") continue;
    
    // 4. Update maximum hours worked in a single day
    if (hours > max) max = hours;
    
    // 5. Check if the day was an actual working day (hours > 0)
    if (hours > 0) {
      dayesWorked++;
      // Update minimum hours worked (excluding 0)
      if (hours < min) min = hours;
    }
    
    // 6. Accumulate total hours
    total += hours;
  }

  // 7. Determine Full-time status (True if total is 35 or more)
  const fullTime = total >= 35;
  
  // 8. Calculate average daily hours and round to 1 decimal place
  const avgDailyHours = Number((total / newArr.length).toFixed(1));

  // 9. Return all results in a clean, structured object
  return {
    totalJobHours: total,
    mostHoursWorked: max === -Infinity ? 0 : max, // Handle empty array cases
    minHoursWorked: min === Infinity ? 0 : min,  // Handle cases with no work hours
    avgDailyHours: avgDailyHours,
    dayesWorked: dayesWorked,
    isFullTime: fullTime,
  };
};

// 10. Log results to test the logic
const result = calcJobHoursInWeek(jobHours, jobHours2);
console.log(result.totalJobHours);
console.log(result.mostHoursWorked);
console.log(result.minHoursWorked);
console.log(result.avgDailyHours);
console.log(result.dayesWorked);
console.log(result.isFullTime);