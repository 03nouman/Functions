// 1.
function myfun() {
  console.log();
}
//2.
function sum(a, b) {
  console.log(a + b);
}
sum(3, 4);

//3.

arrowFun = () => {
  console.log('hello world');
}
arrowFun()

//4.
// var x = 21
// var girl = function () {
//   console.log(x);
//   var x = 20;
//   // console.log(x);
// }
// girl();

//5.
// var x = 21;
// girl();
// console.log(x);
// function girl() {
//   console.log(x);
//   var x = 20;
// }

//6.
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

//7.factorial of n
function factorial(number) {
  var fact = 1
  var number = prompt('Enter the number')

  if (number === 0) {
    console.log(`The factorial of ${number} is 1`);
  }
  else if (number < 0) {
    console.log(`The factorial of -ve ${number} we won't get`);
  }
  else {
    for (let i = 1; i <= number; i++) {

      fact = fact * i

    }
    console.log(`The factorial of ${number} is ${fact}`);

  }

}
factorial();
