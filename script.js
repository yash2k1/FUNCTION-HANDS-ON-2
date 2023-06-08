//1 Create one function with zero parameter having a console statement;

function zeroPara(){
    console.log("This is a function with zero parameter");
  }
  zeroPara();

//2 Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    console.log(a+b);
}
sum(3,4);

//3 Create one arrow function
const arrowFunction =()=>{
    return "arrow function";
}
arrowFunction();

4// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// solution --->undefined

// 5) Print output
var x = 21;
girl ();
console.log(x)
function girl() {
console.log(x);
var x = 20;
};
// solution --->undefined 20

// 6) Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};
// solution ---> 20 40

// 7) Write a function that accepts parameter n and returns factorial of n
// let n =document.getElementById('ansInput').value;
let ans7 =document.getElementById('ans7');
let ans7Btn =document.getElementById('ans7Btn');
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++ ){
        fact*=i;
    }
    ans7.innerHTML=fact;
    return;
    }
ans7Btn.addEventListener('click',()=>{factorial(document.getElementById('ansInput').value)}); 


// day 2

//1) "Guess the Output

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

// 2)  Guess the output
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}
 
// 3)  Guess the output
var a = 10;
(function (){
console.log(a);
var a = 20;
})();
// 4) Guess the Output
const greet = function(name){
    return function(m){

    console.log(`Hi!! ${name}, ${m}`);
    }
    }

    const greet_message = greet('EA19');
    greet_message("Welcome To PrepBytes");
