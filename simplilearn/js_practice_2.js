var name = "your name please.";

//Alert a message in the browser.
//window.alert(mssg);

//An Alert message but with an input from the user.
var intake = prompt(name);

//take input from user and return a message.
var greeting =  "welcome" + " " + intake;
window.alert(greeting);

//prints greeting on the web page.
document.write(greeting);

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
var bosses = { turtles:"shredder",
               residentevil:"wesker",
               yakuza:"ryuji goda",
               dmc:"vergil"};

console.log("accessing and printing bosses object or data structure")
console.log(bosses);
console.log(bosses.dmc);
console.log(bosses["yakuza"]);

var girls = {name1:"chrissy",
             name2:"julia",
             name3:"elizabeth"};

//concatanating strings with an object's key
//dynamic and flexible code format of a ds object to loop through or access an object.
var i=1;
console.log(girls["name"+i]);
i++;
console.log(girls["name"+i]);
