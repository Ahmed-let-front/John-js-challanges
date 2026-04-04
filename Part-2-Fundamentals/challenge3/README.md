# 📊 Coding Challenge #3: Mark vs. John BMI (Object Edition)

## 📝 Project Overview
This project is a refined version of the BMI comparison challenge. Instead of using independent variables, we implement **Object-Oriented** principles in JavaScript to group data (mass, height) and functionality (BMI calculation) together.

## 🛠️ Concepts Applied
* **JavaScript Objects:** Organizing data using key-value pairs.
* **Methods:** Defining functions inside objects to manipulate their data.
* **The `this` Keyword:** Accessing object properties dynamically from within its methods.
* **The `toFixed()` Method:** Formatting numerical output for better readability.
* **Execution Order:** Ensuring methods are called to "initialize" calculated properties in memory.

---

## 🏗️ Implementation Details

### 1. Object Structure
We created two objects, `mark` and `john`, with the following schema:
* `fullName`: String
* `mass`: Number (kg)
* `height`: Number (m)
* `calcBMI`: A method that calculates the BMI and **stores** it as a new property `bmi` on the object.

---

## 🧠 Key Takeaways (Memory & Architecture)

State Management: By using this.bmi = ..., we mutate the object's state in the Heap, allowing us to access the result later without recalculating.
Encapsulation: The logic for calculating BMI is kept within the object that owns the data, making the code more modular.
Safe Execution: Using "use strict" helps catch errors early, especially when dealing with the this keyword.

---

### 2. The Logic Flow
The calculation is performed using the formula:
**BMI = mass / (height * height)**

> **Note:** We avoided the `**` operator as per the challenge constraints, using `(height * height)` instead.

---

## 💻 Code Snippet

```javascript
"use strict";

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// Calling methods within the condition to initialize 'bmi' properties
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})`
  );
}