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

//nested js objects
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
var dbz_bosses = ["vegeta","frieza","cell"];
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
console.log( "foo: " + foo.join(",") );
console.log( "foo: " + foo.join("+") );
console.log( "foo: " + foo.join("*") );
console.log( "foo: " + foo.join("-") );

//Remove the first item in the array
dbz_bosses.shift();

//Add an item in the first slot in the array
dbz_bosses.unshift("vegeta");

//Delete any item in the array
delete dbz_bosses[5];

//Splice an array
//Picks a scoop of the array.
//original array is also split.
//the resulting array will include the specified index's value.
var moo=[1,2,3,4,5,6];
var nmoo = moo.splice(2);

//Splice an array by number of elements as an arg.
//Scoop one or more elements in sequence from an array.
//original array will have the missing index value that is spliced.
var koo = [1,2,3,4,5,6];
console.log("spliced koo: " + koo.splice(2,1)); //result will have the second index valuefrom koo, koo will have the same value missing in it.

//Splice an array by more than one element.
//First argument - splicing index, second arg - number of elements to include in the spliced array, starting from the index specified.
var zoo = [1,2,3,4,5,6];
console.log("spliced zoo: " + zoo.splice(2,2));

//Splice an array so that the resulting array contains the rest of all elements form the array - Slice operation.
var roo = [1,2,3,4,5,6,7,8];
var nroo = roo.splice(2,(roo.length-2));
console.log("nroo: " + nroo);

//Splice and Replace in the original
//Scoops out multiple elements from an array, a new single value is placed in place of the scooped out elements in the original array.
var zoo = [1,2,3,4,5,6];
var nzoo = zoo.splice(2,3,99);

//Slice operation
//Actual split operation, not scooping like splice.
var too = [1,2,3,4,5,6,7,8,9];
var ntoo = too.slice(3); //too will be sliced on the third index, ntoo will include the third index value and the rest following it.
console.log(too);
console.log(ntoo);
