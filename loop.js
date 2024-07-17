// 1. Print Numbers from 1 to 10
// Task: Write a for loop that prints the numbers from 1 to 10, inclusive. Each number should be printed on a new line.
for (i = 1; i <= 10; i++) {
  console.log(i);
}

let a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

// find sum of numbers between 1-100
let b = 1;
let sum = 0;

while (b < 100) {
  sum = sum + b;
  b++;
}
console.log("Sum of your number is " + sum);

//PRINT THE 1st 10 Multiples of 2
let c = 0;
while (c < 10) {
  c++;
  console.log(c + "*2=" + c * 2);
}

// Write a function printNumbers(start, end) that uses a for loop to print all numbers from start to end inclusive.
function PrintNumber(x, y) {
  while (x <= y) {
    console.log(x);
    x++;
  }
}
PrintNumber(1, 8);

// Write a function that finds factorial
function factorial(num) {
  let result = num;
  if (num == 0 || num == 1) console.log(1);
  while (num > 1) {
    num--;
    result *= num;
  }
  console.log("Factorial of your number is " + result);
}
factorial(5);

// Given a string change the every even letter to an uppercase.
// input: hello
// output: hElLo
function exercise1(word) {
  let newword = "";
  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 1) {
      newword = newword + word[i].toUpperCase();
    } else {
      newword = newword + word[i];
    }
  }

  console.log(newword);
}
exercise1("batka");

// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
function checkletter(checkword) {
  let result = "no";
  for (let i = 0; i < checkword.length; i++) {
    if (checkword[i] == "y") {
      result = "yes";
    }
  }
  console.log(result);
}
checkletter("Any");

// Print the characters of the string, separated by space, and in capital letters,
function addspace(addspace) {
  let newword1 = "";
  for (let i = 0; i < addspace.length; i++) {
    newword1 = newword1 + addspace[i].toUpperCase() + " ";
  }
  console.log(newword1);
}
addspace("batka");

// Write function that find longer word. It takes 2 arguments (word1, word2) and return the longer word
function findlonger(word1, word2) {
  if (word1.length > word2.length) {
    console.log("The word: " + word1 + " is longer.");
  } else if (word2.length > word1.length) {
    console.log("The word: " + word2 + " is longer.");
  } else {
    console.log("Both word have the same number of letters.");
  }
}
findlonger("Bold", "Meh");

// Create a while loop that runs from 1-100
// Every 10 loops, print out: Checkpoint! and the loop number
// On loop 50 print out ONLY: Half way there!
// On the final loop (100) print out ONLY: You made it!
// AFTER the loop is done, print out: All, done!
function printevery10(a, b) {
  let i = a;
  while (i < b) {
    if (i == b / 2) {
      console.log(i + "Halfway there!");
    } else if (i % 10 == 0) {
      console.log("Checkpoint! " + i);
    }
    i++;
  }
  console.log(i + "You made it! all done");
}
printevery10(10, 100);

// 1-100 хүртэлх сондгой тоонуудын нийлбэриш while loop ашиглан ол.
function sumofOddNumbers(a, b) {
  let i = a;
  let total = 0;
  while (i <= b) {
    if (i % 2 == 1) {
      total = total + i;
    }
    i++;
  }
  console.log(total);
}
sumofOddNumbers(1, 10);

// book filter by year
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

function filterBooksByYear(year) {
  const printbook = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].year >= year) {
      printbook.push(books[i]);
    }
  }

  console.log(printbook);
}
filterBooksByYear(1917);

const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 4, name: "Dave", department: "HR", salary: 60000 },
  { id: 5, name: "Eve", department: "Marketing", salary: 55000 },
];
function calculateAverageSalary(department) {
  const departmentArray = [];
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === department) {
      departmentArray.push(employees[i]);
    }
  }
  for (let i = 0; i < departmentArray.length; i++) {
    totalSalary += departmentArray[i].salary;
  }

  console.log(totalSalary / departmentArray.length);
}

calculateAverageSalary("HR");
