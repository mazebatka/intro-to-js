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
console.log(sum);

 //PRINT THE 1st 10 Multiples of 2
 let c=0;
while(c<10){
    
    c++;
    console.log(c+"*2="+c*2);
}
 
function PrintNumber(x,y){
    
    while(x<=y){
        console.log(x);
        x=x+1;
        
}
}
PrintNumber(1,5);
