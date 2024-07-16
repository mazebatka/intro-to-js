// 1. Print Numbers from 1 to 10
// Task: Write a for loop that prints the numbers from 1 to 10, inclusive. Each number should be printed on a new line.
for (i=1; i<=10; i++){
    console.log(i)
}

let a=0;
while (a<10){
    a++;
    console.log(a)
}

// find sum of numbers between 1-100
let b=1;
let sum=0;

while(b<100){
sum=sum+b;
b++;
}
console.log("Sum of your number is "+sum);

//PRINT THE 1st 10 Multiples of 2
 let c=0;
while(c<10){
    
    c++;
    console.log(c+"*2="+c*2);
}
 
// Write a function printNumbers(start, end) that uses a for loop to print all numbers from start to end inclusive.
function PrintNumber(x,y){
    
    while(x<=y){
        console.log(x);
        x++;
}
}
PrintNumber(1,8);

// Write a function that finds factorial
function factorial(num) {
    let result=num;
    if (num == 0 || num == 1) 
      console.log(1); 
    while (num > 1) { 
      num--;
      result *= num;
    }
   console.log ("Factorial of your number is "+result);
  }
  factorial(5);