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
