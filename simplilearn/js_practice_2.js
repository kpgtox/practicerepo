var name = "your name please.";

//Alert a message in the browser.
//window.alert(mssg);

//An Alert message but with an input from the user.
//var intake = prompt(name);

//take input from user and return a message.
//var greeting = "welcome" + " " + intake;
//window.alert(greeting);

//prints greeting on the web page.
//document.write(greeting);

//Empty js object
var person = {};

//adding properties/attributes to the object
person.firstname = "karthik";
person.lastname = "pabba";
person.age = 31;
person.occupation = "student";

//get the type of js objects
console.log(typeof person)

//retreive a value from a js object
console.log(person.firstname);
console.log(person.age);

//write something on the webpage
document.write("hello there " + person.firstname);

//declaring and defining/initializing a js object with some key valuepairs.
var bosses = {
  turtles: "shredder",
  residentevil: "wesker",
  yakuza: "ryuji goda",
  dmc: "vergil"
};

console.log("accessing and printing bosses object or data structure")
console.log(bosses);
console.log(bosses.dmc);
console.log(bosses["yakuza"]);

var girls = {
  name1: "chrissy",
  name2: "julia",
  name3: "elizabeth"
};

//concatanating strings with an object's key
//dynamic and flexible code format of a ds object to loop through or access an object.
var i = 1;
console.log(girls["name" + i]);
i++;
console.log(girls["name" + i]);

//nested js objects (dictionaries)
//dynamic format ds
var dbz = {
  e1: {
    name: "cooler",
    attack: "blast",
    enemies: {
      enemy1: "goku",
      enemy2: "trunks"
    }
  },
  e2: {
    name: "vegeta",
    attack: "raining chi",
    enemies: {
      enemy1: "majin boo",
      enemy2: "frieza"
    }
  }
};
//retreiving values from nested objects.
console.log(dbz);
console.log(dbz.e1.name);

//easy retreive from a dynamic format object
console.log("retreive dynamic format object")
var i = 1;
console.log(dbz["e" + i].attack);
i++;
console.log(dbz["e" + i].attack);

console.log(dbz.e2.enemies.enemy1);
console.log(dbz.e2.enemies.enemy2);

//arrays
var dbz_bosses = ["vegeta", "frieza", "cell"];
console.log(dbz_bosses);

//retreive from an arrays
console.log(dbz_bosses[0]);
console.log(dbz_bosses[2]);

//value at index 5 of the array doesnt exist but can be forced upon.
console.log(dbz_bosses[5]);
//force add a value beyond an array's legth
dbz_bosses[5] = "majin boo";
//print to see empty slots created in between the array
console.log(dbz_bosses);

//get an array's length
console.log(dbz_bosses.length);

//easy add a new item at the end of the array
dbz_bosses[dbz_bosses.length] = "cooler";
console.log(dbz_bosses);

//add a new item at the end of the array with a built in method
dbz_bosses.push("android 17");
console.log(dbz_bosses);

//remove last element of an array
dbz_bosses.pop();

//convert an array to a string
var dbz_bosses_str = dbz_bosses.toString();

//convert a string to an array by comma separated.
var foo = dbz_bosses_str.split(",");
console.log(foo);

//Convert an array to a string using join method.
console.log("foo: " + foo.join(","));
console.log("foo: " + foo.join("+"));
console.log("foo: " + foo.join("*"));
console.log("foo: " + foo.join("-"));

//Remove any item in the array
//Slot is not deleted, slot gets empty, only value is taken out from the index.
var goo = [1, 2, 3, 4, 5];
delete goo[4]; //index 4 becomes empty but not eliminated from the array.

//Delete only the first element along witht he index.
//Actual delete an item in the array along with the index/slot.
var goo = [1, 2, 3, 4, 5];
goo.shift();

//Add a new item in the beginning of the array.
goo.unshift(1);

//Splice an array
//Picks a scoop of the array.
//original array is also split.
//the resulting array will include the specified index's value.
var moo = [1, 2, 3, 4, 5, 6];
var nmoo = moo.splice(2);

//Splice an array by number of elements as an arg.
//Scoop one or more elements in sequence from an array.
//original array will have the missing index value that is spliced.
var koo = [1, 2, 3, 4, 5, 6];
console.log("spliced koo: " + koo.splice(2, 1)); //result will have the second index valuefrom koo, koo will have the same value missing in it.

//Splice an array by more than one element.
//First argument - splicing index, second arg - number of elements to include in the spliced array, starting from the index specified.
var zoo = [1, 2, 3, 4, 5, 6];
console.log("spliced zoo: " + zoo.splice(2, 2));

//Splice an array so that the resulting array contains the rest of all elements form the array - Slice operation.
var roo = [1, 2, 3, 4, 5, 6, 7, 8];
var nroo = roo.splice(2, (roo.length - 2));
console.log("nroo: " + nroo);

//Splice and Replace in the original
//Scoops out multiple elements from an array, a new single value is placed in place of the scooped out elements in the original array.
var zoo = [1, 2, 3, 4, 5, 6];
var nzoo = zoo.splice(2, 3, 99);

//Slice operation
//Actual split operation, not scooping like splice.
//Original array stays same.
var too = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ntoo = too.slice(3); //too will be sliced on the third index, ntoo will include the third index value and the rest following it.
console.log(too);
console.log(ntoo);

//Slice an array by start and end index
//Scoop out elements in sequence.
//Slicing ops leave original arrays as is.
//first arg - index to slice from, second arg - index to end slice.
var too = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ntoo = too.slice(2, 6); //ntoo contains elements from index 3 to index 6. (index 3 value included, index 6 value left out)

//Sort an array - ascending.
var soo = [33, 211.2, 22343, 2, 1, 2.3, 5664, 222];
var sort_soo = soo.sort();
console.log(sort_soo);

//Sort a string of arrays
var foo = ["a", "z", "t", "u", "rage"];
console.log(foo.sort());

//Array in JS having values of multiple data types.
var voo = [1, 2, 3, "t", "y"];
res = voo[0] + 1; // output : 2, res is a numeric data type.
res = voo[3] + 1; // output : "t1", res is a string data type.

//Sort an array indescending order.
var soo = [33, 211.2, 22343, 2, 1, 2.3, 5664, 222];
//First sort in ascending order then reverse the string.
soo.sort().reverse();

//Get index of a value from an array
var foo = ["a", "z", "t", "u", "rage"];
console.log(foo.indexOf("rage")); //outputs -1 if value sent is not present in the array.

//Check if an array exists by its name
Array.isArray(foo); //outputs true if the array exists by this name otherwise undefined.

//Nested arrays
var narr = [
  ["goku", "vegeta", "gohan", "krllin"],
  [1, 2, 3, 4, 5, 6, 7, 8]
];
console.log(narr[0]); //retreived the first array in narr
console.log(narr[0][0]); //retreives value at index 0, of the first array in narr.
console.log(narr[0][1]); //retreives value at index 1, of the first array in narr.
console.log(narr[1][2]); //retreives value at index 2, of the second array in narr.

//An array containing one object.
//This array's length is 1.
var bosses = [{
  turtles: "shredder",
  residentevil: "wesker",
  yakuza: "ryuji goda",
  dmc: "vergil"
}];
console.log(dbz[0]); //outputs the entire object because its placed in the first index.
console.log(bosses[0].dmc);

//An array containing an object in each slot.
//Array's length is 2. each index having a single object.
//Still a 1D array.
var bosses = [{
    turtles: "shredder",
    residentevil: "wesker"
  },
  {
    yakuza: "ryuji goda",
    dmc: "vergil"
  }
];
console.log(bosses[0].turtles); //first object and value of key "turtles".
console.log(bosses[1].yakuza); //second object and value of key "yakuza".

//An array containing a nested object in a single slot.
var bosses = [{
  b1: {
    turtles: "shredder",
    residentevil: "wesker"
  },
  b2: {
    yakuza: "ryuji goda",
    dmc: "vergil"
  }
}];
console.log(bosses[0].b1.turtles);
console.log(bosses[0].b2.yakuza);

//An object containing arrays
var qoo = {
  arr1: [1, 2, 3, 4],
  arr2: ["blaze", "alex", "adam"]
};
console.log(qoo.arr1[3]);
console.log(qoo.arr2[0]);

//Switch
var boo = 10;
switch (boo) {
  case 5:
    message = "wrong";
    break;
  case 11:
    message = "wrong";
    break;
  default:
    message = "whatever";
}
console.log(message);

//Loops
//Repeat a blick of code.

//using a dictionaty or js object for looping
var players = {
  p1: "alex",
  p2: "adam",
  p3: "blaze"
};

//While Loop
var i = 1;
while (i <= 3) {
  console.log(players["p" + i]);
  i++;
}

//do while Loop
console.log("do while loop");
i = 1;
do {
  console.log(players["p" + i]);
  i++;
}
while (i <= 3);

//for loop
console.log("for loop");
for(i=1;i<=3;i++){
  console.log(players["p" + i]);
}

console.log("easy for loop");
for(item in players){
  console.log(item);
  console.log(players[item]);
}

//loop within an array
var phones = ["iphone","mi",99];
for(i=0;i<phones.length;i++){
  console.log(phones[i]);
}

console.log("easy loop");
for(item in phones){
  console.log(item);
  console.log(typeof item);
  console.log(phones[item]);
}

//best for loop for an array
for(item of phones){
  console.log(item);
}

//Create a function
function myfun(){
  console.log("my function");
}
myfun(); //call the fucntion

//Take arguments and return output in a function.
function multiply(a,b){
  return a*b;
}
var product;
product = multiply(10,10);
console.log(product);

//a function to add items in an array.
//order of arguments is important.
function addarray(arr,b,arrname){
  arr.push(b);
  console.log("added new item in " + arrname);
}
var phones = ["iphone","mi","samsung"];
addarray(phones,"lg","phones");
addarray(phones,"vivo","phones");

//Global and Local variables
var greets = "hello";
function greeting(greets){
  console.log(greets+" world");
}
console.log("local variable:");
greeting(greets);
console.log("global variable: " + greets);

function ChangeGlobalVar(a)
{
  //accessing and modifying global variables within a functon.
  greets = a;
}
ChangeGlobalVar("nice day");
console.log(greets);

//Self invoking function, also known an annonymous functions.
//Useful at file startups.
(function(){
  console.log("i executed this code myself lol");
})();

//Best way to break out of a function is to return not break.
function breakout(a,b){
  if(a>b){
    console.log("first");
    return true;
  }
  else {
    {
      console.log("second or equal");
      return false;
    }
  }
}
var goo = breakout(2,1);

//String methods
var str = "game changer";

str.length;

str.indexOf("c"); //returns index number of the letter in the string, empty spaces in the string are also counted.

str.startsWith("game"); //true
str.startsWith("g"); //true
str.startsWith("G"); //false

var site = "google.com"
site.endsWith(".com"); //true
site.indexOf("."); //6

//same as indexof
site.search("g"); //0
site.search("google"); //0
site.search("c"); //7
site.indexOf("c"); //7

site.replace(".","+");
site.replace("google","facebook");
//ste = site.replace("google","myspace");

//String also acts like an array.
site.slice(7);

site.substr(0,4); //scoop a part of a string, here it pulls 4 letters starting from index 0/
site.substring(0,4); //same as above

site.toUpperCase();
site.toLowerCase();

//get last character from a string
site[site.length-1];

//Convert strings to arrays to have array functionality on it, then reconvet it back to a string.

//number to strings
var num = 99;
num.toString();

//String to a number
//strings must have only numbers in it to be able to convert it to a number type.
var aa = "99";
aa = parseInt(aa);

//Math methods
var a = 4.9;
console.log(Math.round(a)); //rounds to thenext number starting from .5 and above.
console.log(Math.floor(a)); //cuts off the decimal.
console.log(Math.ceil(a)); //rounds to the next number no matter what the decimal value is.

//Generate a random number between 0 and 1
Math.random();

//Modify it to get between 0 to 100
Math.floor(Math.random()*100);

//Modify it to get between 0 to 1000
Math.floor(Math.random()*1000);

//Date
Date(); //gives date and time.

var dd = new Date();//dd is now a Date object.

dd.getDate();
dd.getDay(); //which day of the week, day starts from monday.
dd.getFullYear();
dd.getHours();
dd.getMinutes();
dd.getTime(); //returns time stamp on the moment dd was created.
dd.getUTCMonth(); //month of the year, months begin at 0.
dd.getMonth();
dd.setMonth(); //allows you to set current month.
dd.toDateString();
dd.toJSON(); //date to json format.

//Subtracting a date object from another returns the difference in milli seconds.
