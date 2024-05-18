//Question#01
console.log("Hello, World!");

//Question#02
let temperature = 15;
if (temperature < 20) {
  console.log("It's cold!");
}

//3
// Number of apples initially
let totalApples: number = 10;
let applesGivenAway: number = 3;
let applesLeft: number = totalApples - applesGivenAway;
console.log(`You have ${applesLeft} apples left.`);

//4
// Declare the firstName variable
let firstName: string = "John";

// Declare the lastName variable
let lastName: string = "Doe";

// Combine firstName and lastName to create fullName
let fullName: string = firstName + " " + lastName;

// Log the result
console.log(`Full Name: ${fullName}`);

//5
// Declare the numbers
let num1: number = 5;
let num2: number = 3;

// Use a comparison operator to check if num1 is greater than num2
if (num1 > num2) {
  console.log("Yes");
} else {
  console.log("No");
}

//06
function calculateArea(radius: number): number {
  const area: number = Math.PI * Math.pow(radius, 2);
  return area;
}
const radius: number = 5;
const area: number = calculateArea(radius);
console.log(
  `The area of the circle with radius ${radius} is ${area.toFixed(2)}`
);

//07
for (let i = 1; i <= 50; i++) {
  // Check if the number is a multiple of both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Check if the number is a multiple of 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Check if the number is a multiple of 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // If none of the above conditions are true, log the number
  else {
    console.log(i);
  }
}

//08
// Define an array with at least five different temperatures
let temperatures: number[] = [23, 15, 28, 34, 19];

// Initialize a variable to hold the highest temperature
let highestTemperature: number = temperatures[0];

// Loop through the array to find the highest temperature
for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > highestTemperature) {
    highestTemperature = temperatures[i];
  }
}

// Log the highest temperature
console.log(`The highest temperature is ${highestTemperature}°C`);

//09
// Function to prompt the user for their age and determine if they are a minor or an adult
function checkAge(): void {
  // Prompt the user to enter their age
  const ageInput: string | null = prompt("Please enter your age:");

  // Check if the user entered a value
  if (ageInput !== null) {
    // Convert the input to a number
    const age: number = parseInt(ageInput, 10);

    // Check if the conversion was successful and if the age is a valid number
    if (!isNaN(age)) {
      // Determine if the user is a minor or an adult
      if (age < 18) {
        console.log("You are a minor.");
      } else {
        console.log("You are an adult.");
      }
    } else {
      console.log("Please enter a valid number for your age.");
    }
  } else {
    console.log("Age input was cancelled.");
  }
}

// Call the function to execute the age check
checkAge();

//10
// Function to count positive numbers in an array
function countPositiveNumbers(numbers: number[]): number {
  // Initialize a variable to count positive numbers
  let count: number = 0;

  // Loop through the array to count positive numbers
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }

  // Return the count of positive numbers
  return count;
}

// Example usage:
const numbers: number[] = [-1, 2, 3, -4, 5, -6, 7];
const positiveCount: number = countPositiveNumbers(numbers);
console.log(`The array contains ${positiveCount} positive numbers.`);

//11
// Function to filter words starting with 'a' from an array
function wordsStartingWithA(words: string[]): string[] {
  // Use the filter method to create a new array containing only words starting with 'a'
  const wordsWithA: string[] = words.filter(
    (word) => word.startsWith("a") || word.startsWith("A")
  );

  // Return the new array
  return wordsWithA;
}
const words: string[] = ["apple", "banana", "apricot", "orange", "Avocado"];
const wordsStartingA: string[] = wordsStartingWithA(words);
console.log("Words starting with 'a':", wordsStartingA);

//12
// Define the array of fruits
const fruits: string[] = ["apple", "banana", "orange", "kiwi", "mango"];

// Check if the array has at least two elements
if (fruits.length >= 2) {
  // Get the second-to-last element using array indexing
  const secondToLast: string = fruits[fruits.length - 2];
  console.log("The second-to-last fruit is:", secondToLast);
} else {
  console.log(
    "The array doesn't have enough elements to determine the second-to-last fruit."
  );
}

//13
// Function to square each number in an array
function squareNumbers(numbers: number[]): number[] {
  // Map each number to its square using the map method
  const squaredNumbers: number[] = numbers.map((number) => number ** 2);

  // Return the new array with squared numbers
  return squaredNumbers;
}

// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5];
const squaredNumbers: number[] = squareNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Squared numbers:", squaredNumbers);

//14
// Function to reverse an array without using the .reverse() method
function reverseArray<T>(arr: T[]): T[] {
  const reversedArray: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);

//15
function countScores(scores: number[]): void {
  const maxScore: number = Math.max(...scores);
  const minScore: number = Math.min(...scores);

  let aboveMaxCount: number = 0;
  let belowMinCount: number = 0;

  scores.forEach((score) => {
    if (score > maxScore) {
      aboveMaxCount++;
    } else if (score < minScore) {
      belowMinCount++;
    }
  });

  console.log(`Number of times score exceeded maximum score: ${aboveMaxCount}`);
  console.log(
    `Number of times score fell below minimum score: ${belowMinCount}`
  );
}

const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countScores(scores);

//16
function removeFalseyValues(arr: any[]): any[] {
  return arr.filter((value) => !!value);
}

const arrayWithFalseyValues: any[] = [
  0,
  false,
  null,
  undefined,
  NaN,
  "",
  1,
  2,
  3,
];
const filteredArray: any[] = removeFalseyValues(arrayWithFalseyValues);
console.log("Array with falsey values removed:", filteredArray);

//17
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const concatenatedArray: number[] = [...array1, ...array2];
console.log("Concatenated array:", concatenatedArray);

//18\
function sumOfElements(arr: number[], isEven: boolean): number {
  return arr.reduce((acc, curr) => {
    if (isEven && curr % 2 === 0) {
      return acc + curr;
    } else if (!isEven && curr % 2 !== 0) {
      return acc + curr;
    } else {
      return acc;
    }
  }, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Sum of even numbers:", sumOfElements(numbers, true));
console.log("Sum of odd numbers:", sumOfElements(numbers, false));

//19
function findElementIndex(arr: any[], element: any): number {
  return arr.indexOf(element);
}

const elements: number[] = [1, 2, 3, 4, 5];
const elementToFind: number = 3;
const foundIndex: number = findElementIndex(elements, elementToFind);
console.log(`Index of element ${elementToFind}: ${foundIndex}`);

//20
function findSmallestNumber(arr: number[]): number {
  return Math.min(...arr);
}

const numbers: number[] = [5, 3, 7, 1, 9];
console.log("Smallest number:", findSmallestNumber(numbers));

//21
function calculateProduct(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Product of array elements:", calculateProduct(numbers));

//22
function filterByLength(strings: string[], n: number): string[] {
  return strings.filter((str) => str.length > n);
}

const strings: string[] = ["apple", "banana", "orange", "kiwi", "mango"];
const filteredStrings: string[] = filterByLength(strings, 5);
console.log("Strings longer than 5 characters:", filteredStrings);

//23
function findDuplicates(arr: any[]): void {
  const duplicateSet: Set<any> = new Set();
  const duplicates: any[] = [];

  arr.forEach((element) => {
    if (duplicateSet.has(element)) {
      duplicates.push(element);
    } else {
      duplicateSet.add(element);
    }
  });

  console.log("Duplicates in the array:", duplicates);
}

const array: number[] = [1, 2, 3, 4, 2, 5, 6, 3, 7];
findDuplicates(array);

//24
function incrementAll(arr: number[]): number[] {
  return arr.map((num) => num + 1);
}

const originalArray: number[] = [1, 2, 3, 4, 5];
const incrementedArray: number[] = incrementAll(originalArray);
console.log("Incremented array:", incrementedArray);

//25
function countOccurrences(arr: any[], element: any): number {
  return arr.reduce(
    (count, current) => count + (current === element ? 1 : 0),
    0
  );
}

const numbers: number[] = [1, 2, 2, 3, 4, 2, 5, 6, 2];
console.log("Number of occurrences of 2:", countOccurrences(numbers, 2));

//26
function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const sortedArray: number[] = [1, 2, 3, 4, 5];
const unsortedArray: number[] = [1, 3, 2, 4, 5];
console.log("Is sorted:", isSorted(sortedArray)); // true
console.log("Is sorted:", isSorted(unsortedArray)); // false

//27
function formatNames(names: string[]): string {
  if (names.length <= 2) {
    return names.join(" and ");
  } else {
    const lastTwoNames: string = names.splice(-2).join(" and ");
    return `${names.join(", ")}, ${lastTwoNames}`;
  }
}

const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Formatted names:", formatNames(names));

//28
function fahrenheitToCelsius(temperatures: number[]): number[] {
  return temperatures.map((temp) => (temp - 32) * (5 / 9));
}

const fahrenheitTemperatures: number[] = [32, 68, 86, 104];
console.log(
  "Celsius temperatures:",
  fahrenheitToCelsius(fahrenheitTemperatures)
);

//29
function minMaxAverage(numbers: number[]): {
  min: number;
  max: number;
  average: number;
} {
  const min: number = Math.min(...numbers);
  const max: number = Math.max(...numbers);
  const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
  const average: number = sum / numbers.length;
  return { min, max, average };
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Min, Max, Average:", minMaxAverage(numbers));

//30
function swapElements(arr: any[], index1: number, index2: number): void {
  if (
    index1 >= 0 &&
    index2 >= 0 &&
    index1 < arr.length &&
    index2 < arr.length
  ) {
    const temp: any = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  } else {
    console.log("Invalid indices. Elements not swapped.");
  }
}

const array: number[] = [1, 2, 3, 4, 5];
swapElements(array, 1, 3);
console.log("Array after swapping:", array);

//31
function countCharacterOccurrences(str: string, char: string): number {
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const inputString: string = "hello world";
const inputCharacter: string = "l";
console.log(
  `The character '${inputCharacter}' appears ${countCharacterOccurrences(
    inputString,
    inputCharacter
  )} times in '${inputString}'.`
);

//32
type ToDoItem = {
  task: string;
  completed: boolean;
};

const todoList: ToDoItem[] = [
  { task: "Complete assignment", completed: true },
  { task: "Prepare presentation", completed: false },
  { task: "Send email", completed: false },
];

function logIncompleteTasks(tasks: ToDoItem[]): void {
  tasks.forEach((task) => {
    if (!task.completed) {
      console.log(task.task);
    }
  });
}

logIncompleteTasks(todoList);

//33
function sortArray(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

const numbers: number[] = [3, 1, 5, 2, 4];
console.log("Sorted numbers:", sortArray(numbers));

//34
function logArrayInReverse(arr: any[]): void {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

const array: number[] = [1, 2, 3, 4, 5];
logArrayInReverse(array);

//35
function basicCalculator(
  operand1: number,
  operand2: number,
  operator: string
): number | string {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand2 !== 0 ? operand1 / operand2 : "Division by zero error";
    default:
      return "Invalid operator";
  }
}

const operand1: number = 10;
const operand2: number = 5;
const operator: string = "+";
console.log(`Result: ${basicCalculator(operand1, operand2, operator)}`);
