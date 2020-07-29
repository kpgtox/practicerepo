console.log("can be written js in both head and body sections.");
console.log("can be written js in separate js files linked to the html file.");

// numeric addition
var a = 10;
var b = 23342.12;
console.log(a+b);

// string addition or concatenation
var foo = "hello";
var boo = "human";
console.log(foo + " " + boo);

// Get data type of a variable
console.log(typeof boo)
console.log(typeof a);

// declaring but not initializing(defining) variable
var moo;
console.log(typeof moo); //results undefined.

//null object
var c = null;
console.log(typeof c);

// check if null is undefined
console.log( null == undefined )
// check if null is of the type undefined
console.log( null === undefined )

// Multiple variable declaration
var a =1, b=2, c=3;
console.log(a,b,c) //print multiple numbers at once
console.log(a+b+c)

// concatanate a number and a string.
//js converts the number to string automatically.
var num = 10;
console.log(num + "world")
var str = "sesy";
console.log(num + str)
var res = num + str;
console.log("res :" + res)
console.log(typeof res) //res is of string type.

var num1 = 99;
num1 += "caller";
console.log(num1)
console.log(typeof num1) //gets converted from number to string type

//javascript joke
// concatnates output of type of to a string, the result is a string.
var num2 = 8;
console.log(typeof num2 + "ball")

var crazy;
crazy = typeof num2 + "ball";
console.log(crazy)
console.log(typeof crazy) //crazy variable is os string data type.

console.log(typeof(num2+"ball")) //result is a string.
