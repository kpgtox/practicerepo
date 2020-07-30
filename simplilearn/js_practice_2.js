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
