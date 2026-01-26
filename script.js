//1.sum of two integer
// let a=10;
// let b=20;
// let sum=a+b;
// console.log(sum);

//2.Relation between integer and string

// console.log("1" + 1); //11
// 100 + true;  // 100 + 1, Result: 101
// 5 + false;   // 5 + 0, Result: 5
// console.log("1" - 1); //0
// console.log("1" * 1); //1
// console.log("1" / 1); //1
// console.log("1" % 1); //0
// console.log("1" **1); //1

//3. sum and message.
// (type coercion in js:-)
// let a=10;
// let b=20;
// console.log("sum of 10 and 20 is " +(a+b));

//4. Accept and print the answer

// let age = Number(prompt("enter your age"));
// console.log(age);

//5.Swap two variables by 3 methods :

//method 1

// let a=10;
// let b=20;
// let c;
// c=a;// c=10, a=10
// a=b;//a=20 ,b=20
// b=c;//b=10
// console.log(a,b);

// method2

// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);

// method3

// let a=10;
// let b=20;

// a=a+b; //10+20=30
// b=a-b; //30-20=10
// a=a-b; //30-10=20
// console.log(a,b);

// Operators and their questions.
// 1. Arithemetic : +,-,*,/,%,
// let a=12;
// let b=22;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// let a=12;
// let b=22;
// console.log(Math.floor(a/b));  //jidhar bhi devide kre yeh use kre Math.floor() jab division ho
// let a = 7;
// let b = 2;
// console.log(b % a);

// let a=4568;
//Agar last se digit hatani ho ek ek karke like 456....
// console.log(a%10);
// console.log(Math.floor(a/10));

//2. Relational : < > >= <= !== = == ===

//1. Guess the output:
// let a=5;
// a+= 3*2;
// console.log(a);

//2.find the value of x

// let x = 50;
// x /= 5 - 2;
// console.log(x);

//3.find the final value of y
// let y = 7;
// y += 2;
// y *= 3;
// y -= 4;
// y %= 5;
// console.log(y);


//4. What is the value of x after executing x += 2 * 3; if x was initially 4?

// let x=4;
// x += 2 * 3;
// console.log(x);


//5. If y = 45, what is the value of y /= 4?
let y = 45;
y /= 4
console.log(y);
